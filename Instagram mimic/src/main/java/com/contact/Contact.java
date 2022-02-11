package com.contact;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
public class Contact {
	@Id
	private String id;
	private String name;
	private String email;
	private long createdAt;
	private long editedAt;
	private List<String> friendsList;
	private String gender;
	private String location;

	public Contact() {
	}

	public Contact(String id, String name, String email, long createdAt, long editedAt, String gender,String location) {

		this.id = id;
		this.name = name;
		this.email = email;
		this.createdAt = createdAt;
		this.editedAt = editedAt;
		this.friendsList = new ArrayList<String>();
		this.gender=gender;
		this.location=location;
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

	public List<String> getFriendsList() {
		return friendsList;
	}

	public void setFriendsList(List<String> friendsList) {
		this.friendsList = friendsList;
	}

	
	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
	
	

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	@Override
	public String toString() {
		return "Contact [id=" + id + ", name=" + name + ", email=" + email + ", createdAt=" + createdAt + ", editedAt="
				+ editedAt + ", friendsList=" + friendsList + "]";
	}

}
