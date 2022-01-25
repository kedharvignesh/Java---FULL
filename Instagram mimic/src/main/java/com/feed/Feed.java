package com.feed;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class Feed {
	@Id private String id;
	@Index private String creatorId;
	private String content;
	private long createdAt;
	private long editedAt;
	private Set<String> cheersContactId;
	private List<String> commentId;

	public Feed() {
	}

	public Feed( String id , String creatorId, String content, long createdAt, long editedAt) {
		this.id = id;
		this.creatorId = creatorId;
		this.content = content;
		this.createdAt = createdAt;
		this.editedAt = editedAt;
		this.cheersContactId = new HashSet<String>();
		this.commentId = new ArrayList<String>();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
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

	public Set<String> getCheersContactId() {
		return cheersContactId;
	}

	public void setCheersContactId(Set<String> cheersContactId) {
		this.cheersContactId = cheersContactId;
	}

	public List<String> getCommentId() {
		return commentId;
	}

	public void setCommentId(List<String> commentId) {
		this.commentId = commentId;
	}

	@Override
	public String toString() {
		return "Feed [id=" + id + ", creatorId=" + creatorId + ", content=" + content + ", createdAt=" + createdAt
				+ ", editedAt=" + editedAt + ", cheersContactId=" + cheersContactId + ", commentId=" + commentId + "]";
	}

}
