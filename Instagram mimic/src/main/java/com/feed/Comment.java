package com.feed;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
public class Comment {
	@Id private String id;
	private String feedId;
	private String creatorId;
	private String content;
	private long createdAt;
	private long editedAt;

	public Comment() {
	}

	public Comment(String id, String feedId, String creatorId, String content, long createdAt, long editedAt) {
		this.id = id;
		this.feedId = feedId;
		this.creatorId = creatorId;
		this.content = content;
		this.createdAt = createdAt;
		this.editedAt = editedAt;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFeedId() {
		return feedId;
	}

	public void setFeedId(String feedId) {
		this.feedId = feedId;
	}

	public String getCreatorId() {
		return creatorId;
	}

	public void setCreatorId(String creatorId) {
		this.creatorId = creatorId;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
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
