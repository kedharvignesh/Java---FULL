package com.contact;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

@RestController
@SessionAttributes("contactID")
@RequestMapping(path = "api/v1/contact")
public class ContactController {

	private ContactService contactService;

	@Autowired
	public ContactController(ContactService contactService) {
		this.contactService = contactService;
	}

	@GetMapping(path = "/{contactId}")
	public Contact getContactDetails(@PathVariable("contactId") String id) {
		return contactService.getContactDetails(id);
	}

	@DeleteMapping(path = "/{contactId}")
	public void deleteContact(@PathVariable("contactId") String id) {
		contactService.deleteContact(id);
	}
	
	@PostMapping(path = "/{contactId}")
	public String editContactDetails(@RequestBody Contact contact) {
		 return contactService.editContact(contact);
	}
	
	
	
	@GetMapping(path = "/{contactId}/friends")
	public List<String> getFriendList(@PathVariable("contactId") String id) {
		return contactService.getFriends(id);
	}
	
	@GetMapping(path = "/{contactId}/mutual")
	public List<String> getMutualList(@PathVariable("contactId") String id , ModelMap model) {
		return contactService.getMutualFriends(id ,model);
	}

}
