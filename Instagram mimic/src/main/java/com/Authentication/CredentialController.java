package com.Authentication;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

import com.contact.Contact;

@RestController
@SessionAttributes({ "contactId" })
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

	@ModelAttribute("contactId")
	public String contactId() {
		return null;
	}

	@PostMapping(path = "/login")
	public String processLogin(@RequestBody Login login, HttpSession session) {
		return credentialService.processLogin(login, session);
	}

	@GetMapping(path = "/logout")
	public String processLogout(HttpSession session) {
		return credentialService.processLogout(session);
//		ModelAndView modelAndView = new ModelAndView();
//		modelAndView.setViewName("index.html");
//		return modelAndView;	
	}

	@GetMapping(path = "/app")
	public ModelAndView app(HttpSession session) {
		try {
			ModelAndView modelAndView = new ModelAndView();
			modelAndView.setViewName("app.html");
			if (!session.getAttribute("contactId").equals(null))
				return modelAndView;
			else {
				modelAndView.setViewName("index.html");
				return modelAndView;
			}
		} catch (Exception e) {
			ModelAndView modelAndView = new ModelAndView();
			modelAndView.setViewName("index.html");
			return modelAndView;
		}
	}

	@GetMapping(path = "/getId")
	public String getId(HttpSession session) {
		return (String) session.getAttribute("contactId");
	}

	@GetMapping(path = "/getName")
	public String getName(HttpSession session) {
		return credentialService.getName(session);
	}

	@GetMapping(path = "/myContact")
	public Contact getMyContact(HttpSession session) {
		return credentialService.getMyContact(session);
	}

}
