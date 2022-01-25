package com.Authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

@RestController
@SessionAttributes("contactID")
public class CredentialController {

	private CredentialService credentialService;

	@Autowired
	public CredentialController(CredentialService credentialService) {
		this.credentialService = credentialService;
	}

	@PostMapping(path = "/signup")
	public String AddCredentials(@RequestBody Signup signup) {
		return credentialService.addNewContact(signup);
	}

	@PostMapping(path = "/login")
	public String processLogin(@RequestBody Credential credential, ModelMap model) {
		return credentialService.processLogin(credential, model);
	}

	@GetMapping(path = "/logout")
	public void processLogout(ModelMap model) {
		credentialService.processLogout(model);
	}
}
