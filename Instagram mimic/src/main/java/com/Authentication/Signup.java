package com.Authentication;

public class Signup {
	private String id;
	private String name;
	private String email;
	private String password;
	private long createdAt;
	private long editedAt;
	
	public Signup() {
	}

	public Signup(String id, String name, String email, String password, long createdAt, long editedAt) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.createdAt = createdAt;
		this.editedAt = editedAt;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public long getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(long createdAt) {
		this.createdAt = createdAt;
	}

	public long getEditedAt() {
		return editedAt;
	}

	public void setEditedAt(long editedAt) {
		this.editedAt = editedAt;
	}
	
	
	
}
