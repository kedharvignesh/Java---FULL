package com.contact;

import static com.googlecode.objectify.ObjectifyService.ofy;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

import com.Authentication.Credential;

@Service
public class ContactService {

	public Contact getContactDetails(String id) {
		return ofy().load().type(Contact.class).id(id).now();
	}

	public void deleteContact(String id) {
		String email = ofy().load().type(Contact.class).id(id).now().getEmail();
		ofy().delete().type(Contact.class).id(id).now();
		ofy().delete().type(Credential.class).id(email).now();

	}

	public String editContact(Contact contact) {

		try {

			if (ofy().load().type(Credential.class).id(contact.getEmail()).now() == null) {
				String currentMail = ofy().load().type(Contact.class).id(contact.getId()).now().getEmail();
				String password = ofy().load().type(Credential.class).id(currentMail).now().getPassword();

				ofy().delete().type(Credential.class).id(currentMail).now();
				ofy().delete().type(Contact.class).id(contact.getId()).now();

				ofy().save().entity(contact).now();
				Credential credential = new Credential(contact.getEmail(), password, contact.getId());
				ofy().save().entity(credential).now();

				return "changes in email stored";
			} else if (ofy().load().type(Credential.class).id(contact.getEmail()).now().getEmail() != null && contact
					.getId().equals(ofy().load().type(Credential.class).id(contact.getEmail()).now().getContactId())) {
				ofy().delete().type(Contact.class).id(contact.getId()).now();
				ofy().save().entity(contact).now();
				return " saved changes ";
			} else {
				return "Existing Email ";
			}

		} catch (Exception e) {
			return e.getMessage();
		}
	}

	public List<String> getFriends(String id) {
		return ofy().load().type(Contact.class).id(id).now().getFriendsList();
	}

	public List<String> getMutualFriends(String id , ModelMap model) {
		String contactId = (String) model.getAttribute("contactId");
		List<String> myList = ofy().load().type(Contact.class).id(contactId).now().getFriendsList();
		List<String> friendContacts = ofy().load().type(Contact.class).id(id).now().getFriendsList();
		myList.retainAll(friendContacts);
		return myList;
	}
	
	
	

}
