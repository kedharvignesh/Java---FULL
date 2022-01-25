package com.Authentication;

import static com.googlecode.objectify.ObjectifyService.ofy;

import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

import com.contact.Contact;

@Service
public class CredentialService {

	public String addNewContact(Signup signup) {

		try {
			if (ofy().load().type(Credential.class).id(signup.getEmail()).now() == null) {
				String id = UUID.randomUUID().toString();
				Credential credential = new Credential(signup.getEmail(), signup.getPassword(), id);
				ofy().save().entity(credential).now();
				addContact(signup, id);
				return "success";
			} else {
				
				return "existing Email";
			}

		} catch (Exception e) {
			return e.getMessage();
		}

	}

	public String addContact(Signup signup, String id) {
		try {

			Contact contact = new Contact(id, signup.getName(), signup.getEmail(), signup.getCreatedAt(),
					signup.getEditedAt(),signup.getGender());
			ofy().save().entity(contact).now();
			return "success";

		} catch (Exception e) {
			return e.getMessage();
		}
	}

	public String processLogin(Credential credential, ModelMap model) {
		String contactId = "";
		try {
			Credential reqCredential = ofy().load().type(Credential.class).id(credential.getEmail()).now();
			contactId = reqCredential.getContactId();
			String reqPassword = reqCredential.getPassword();
			if (contactId != null && reqPassword == credential.getPassword()) {
				loadSession(contactId, model);
				return "login success";
			} else {
				return "password does not match";
			}

		} catch (Exception e) {
			return e.getMessage();
		}
	}

	private void loadSession(String contactId, ModelMap model) {
		model.addAttribute("contactId", contactId);
	}

	public void processLogout(ModelMap model) {
		model.remove("contactId");
	}

}