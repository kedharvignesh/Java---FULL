package com.Authentication;

import static com.googlecode.objectify.ObjectifyService.ofy;

import org.springframework.stereotype.Service;
 import org.springframework.ui.ModelMap;

import com.contact.Contact;

@Service
public class CredentialService {

	public String addNewContact(Signup signup) {
		
		try {
			if (ofy().load().type(Credential.class).id(signup.getEmail()).now() == null) {
				Credential credential = new Credential(signup.getEmail(), signup.getPassword(), signup.getId());
				ofy().save().entity(credential).now();
				addContact(signup);
				return "success";
			} else {
				return "existing user";
			}

		} catch (Exception e) {
			return e.getMessage();
		}


	}

	public String addContact(Signup signup) {
		try {
			if (ofy().load().type(Contact.class).id(signup.getId()).now() == null) {
				Contact contact = new Contact(signup.getId(), signup.getName(), signup.getEmail(), signup.getCreatedAt(), signup.getEditedAt());
				ofy().save().entity(contact).now();
				return "success";
			}

		} catch (Exception e) {
			return e.getMessage();
		}
		return "invalid sign up ";
	}	

	public String processLogin(Credential credential, ModelMap model) {
		String contactId = "";
		try {
			Credential reqCredential = ofy().load().type(Credential.class).id(credential.getEmail()).now();
			contactId = reqCredential.getContactId();
			String reqPassword = reqCredential.getPassword();
			if (contactId != null && reqPassword == credential.getPassword()) {
				loadSession(contactId, model);
				return contactId;
			}

		} catch (Exception e) {
			return e.getMessage();
		}
		return contactId;
	}


	private void loadSession(String contactId, ModelMap model) {
		model.addAttribute("contactId", contactId);
	}

	public void processLogout(ModelMap model) {
		model.remove("contactId");
	}



}