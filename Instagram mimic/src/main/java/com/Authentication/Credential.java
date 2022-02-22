package com.Authentication;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
public class Credential {

	@Id
	private String email;
	private String password;
	private String contactId;

	public Credential() {

	}

	public Credential(String email, String password, String contactId) {
		this.email = email;
		this.password = password;
		this.contactId = contactId;
	}

	public Credential(String email, String password) {
		this.email = email;
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getContactId() {
		return contactId;
	}

	public void setContactId(String contactId) {
		this.contactId = contactId;
	}

}
