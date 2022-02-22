package com.Authentication;

import static com.googlecode.objectify.ObjectifyService.ofy;

import java.util.UUID;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;
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
					signup.getEditedAt(), signup.getGender(),"not updated");
			ofy().save().entity(contact).now();
			return "success";

		} catch (Exception e) {
			return e.getMessage();
		}
	}

	public String processLogin(Login login, HttpSession session) {

		try {
			String contactId = "";
			Credential reqCredential = ofy().load().type(Credential.class).id(login.getEmail()).now();
			contactId = reqCredential.getContactId();
			String reqPassword = reqCredential.getPassword();
			if (reqPassword.equals(login.getPassword())) {
				loadSession(contactId, session);
				return "welcome";
			} else {
				return "Invalid Email or password";
			}

		} catch (Exception e) {
			return "mail not found";
		}
	}

	private void loadSession(String contactId, HttpSession session) {
		session.setAttribute("contactId", contactId);
//		model.put("contactId", contactId);
	}

	public String processLogout(HttpSession session) {
//		model.clear();
//		model.remove("contactId");
//		status.setComplete();
//		request.removeAttribute("contactId", WebRequest.SCOPE_SESSION);
//		if (model.isEmpty()) {
		session.invalidate();
		return "done";
//		}
//		return "notDone";
	}

	public String getName(HttpSession session) {
		String contactId = (String) session.getAttribute("contactId");
		return ofy().load().type(Contact.class).id(contactId).now().getName();

	}

	public Contact getMyContact(HttpSession session) {
		String contactId = (String) session.getAttribute("contactId");
		return ofy().load().type(Contact.class).id(contactId).now();
	}

}