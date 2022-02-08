package com.contact;

import static com.googlecode.objectify.ObjectifyService.ofy;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

import com.Authentication.Credential;
import com.feed.Comment;
import com.feed.Feed;

@Service
public class ContactService {

	public Contact getContactDetails(String id) {
		return ofy().load().type(Contact.class).id(id).now();
	}

	public void deleteContact(String id) {
		Contact contact = ofy().load().type(Contact.class).id(id).now();
		String email = contact.getEmail();
		List<Feed> feedList = ofy().load().type(Feed.class).filter("creatorId", contact.getId()).list();

		ofy().delete().type(Contact.class).id(id).now();
		ofy().delete().type(Credential.class).id(email).now();

		for (Feed feed : feedList) {
			for (String commentId : feed.getCommentId()) {
				ofy().delete().type(Comment.class).id(commentId).now();
			}
			ofy().delete().type(Feed.class).id(feed.getId()).now();
		}

	}

	public String editContact(Contact contact) {

		try {

			if (ofy().load().type(Credential.class).id(contact.getEmail()).now() == null) {
				String currentMail = ofy().load().type(Contact.class).id(contact.getId()).now().getEmail();
				String password = ofy().load().type(Credential.class).id(currentMail).now().getPassword();
				Contact currentContact = ofy().load().type(Contact.class).id(contact.getId()).now();
				ofy().delete().type(Credential.class).id(currentMail).now();
//				ofy().delete().type(Contact.class).id(contact.getId()).now();
				try {
					contact.setFriendsList(currentContact.getFriendsList());
				} catch (Exception e) {
				}

				ofy().save().entity(contact).now();
				Credential credential = new Credential(contact.getEmail(), password, contact.getId());
				ofy().save().entity(credential).now();

				return "changes in email stored";
			} else if (ofy().load().type(Credential.class).id(contact.getEmail()).now().getEmail() != null && contact
					.getId().equals(ofy().load().type(Credential.class).id(contact.getEmail()).now().getContactId())) {
//				ofy().delete().type(Contact.class).id(contact.getId()).now();
				Contact currentContact = ofy().load().type(Contact.class).id(contact.getId()).now();
				try {
					contact.setFriendsList(currentContact.getFriendsList());
				} catch (Exception e) {
				}
				ofy().save().entity(contact).now();
				return " saved changes ";
			} else {
				return "Existing Email";
			}

		} catch (Exception e) {
			return e.getMessage();
		}
	}

	public ArrayList<Contact> getFriends(String id) {
		ArrayList<Contact> contactList = new ArrayList<Contact>();
		try {
			List<String> idList = ofy().load().type(Contact.class).id(id).now().getFriendsList();

			for (String contactId : idList) {
				contactList.add(ofy().load().type(Contact.class).id(contactId).now());
			}
		} catch (Exception e) {
		}
		return contactList;
	}

	public List<Contact> getMutualFriends(String id, ModelMap model) {
		String contactId = (String) model.getAttribute("contactId");
		List<String> myList = ofy().load().type(Contact.class).id(contactId).now().getFriendsList();
		List<String> friendContacts = ofy().load().type(Contact.class).id(id).now().getFriendsList();
		myList.retainAll(friendContacts);
		List<Contact> contactList = new ArrayList<Contact>();
		for (String contact : myList) {
			contactList.add(ofy().load().type(Contact.class).id(contact).now());
		}
		return contactList;
	}

	public void addFriend(String id, HttpSession session) {
		String myId = (String) session.getAttribute("contactId");
		Contact myContact = ofy().load().type(Contact.class).id(myId).now();
		List<String> friendList = new ArrayList<String>();
		try {
			List<String> currentList = myContact.getFriendsList();
			friendList.addAll(currentList);
		} catch (Exception e) {
		}
		if (friendList.contains(id)) {
			friendList.remove(id);
		} else {
			friendList.add(id);
		}
		myContact.setFriendsList(friendList);
		ofy().save().entity(myContact).now();
	}

	public List<Contact> getAllContacts() {
		return ofy().load().type(Contact.class).list();
	}

}
