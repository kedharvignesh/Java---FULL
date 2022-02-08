package com.feed;

import static com.googlecode.objectify.ObjectifyService.ofy;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;
import com.contact.Contact;

@Service
public class FeedService {

	public List<Feed> getMyFeeds(HttpSession session) {
		String contactId = (String) session.getAttribute("contactId");
//		String contactId = "zzzzzzzzzfllvm";
		return ofy().load().type(Feed.class).filter("creatorId", contactId).list();

	}

	public void addFeed(Feed feed) {
		ofy().save().entity(feed).now();

	}

	public void editFeed(String id, Feed feed) {
		Feed currentFeed = ofy().load().type(Feed.class).id(id).now();
		currentFeed.setContent(feed.getContent());
		currentFeed.setEditedAt(feed.getEditedAt());
		ofy().save().entity(currentFeed).now();

	}

	public String deleteFeed(String id) {
		try {
			List<String> comments = ofy().load().type(Feed.class).id(id).now().getCommentId();
			for (String commentId : comments) {
				ofy().delete().type(Comment.class).id(commentId).now();
			}
		} catch (Exception e) {
		}
		ofy().delete().type(Feed.class).id(id).now();

		return "deleted feed";

	}

	public List<Feed> getallFeed(HttpSession session) {
		String contactId = (String) session.getAttribute("contactId");
		List<String> friendList;
		try {
			friendList = ofy().load().type(Contact.class).id(contactId).now().getFriendsList();
		} catch (Exception e) {
			friendList = new ArrayList<String>();
		}
		List<Feed> feedList = ofy().load().type(Feed.class).filter("creatorId", contactId).list();

		for (String friendId : friendList) {
			feedList.addAll(ofy().load().type(Feed.class).filter("creatorId", friendId).list());
		}
		return feedList;
	}

	public List<Feed> getUsersFeed(String id) {
		return ofy().load().type(Feed.class).filter("creatorId", id).list();
	}

	public List<Comment> getAllComments(String id) {
		List<Comment> feedComments = new ArrayList<Comment>();
		try {
			List<String> commentList = ofy().load().type(Feed.class).id(id).now().getCommentId();
			for (String comment : commentList) {
				feedComments.add(ofy().load().type(Comment.class).id(comment).now());
			}
		} catch (Exception e) {

		}
		return feedComments;
	}

	public String postNewComment(Comment comment) {
//		try {
		ofy().save().entity(comment).now();
		Feed feed = ofy().load().type(Feed.class).id(comment.getFeedId()).now();

		List<String> commentList = new ArrayList<String>();
		try {
			commentList.addAll(feed.getCommentId());
		} catch (Exception e) {
		}
		commentList.add(comment.getId());
		feed.setCommentId(commentList);

		ofy().save().entity(feed).now();

//		} catch (Exception e) {
//			e.printStackTrace();
//			return e.getMessage();
//		}
		return "Posted comment";
	}

	public String editComment(Comment comment) {
//		try {
		Comment currentComment = ofy().load().type(Comment.class).id(comment.getId()).now();
		currentComment.setContent(comment.getContent());
		currentComment.setEditedAt(comment.getEditedAt());
		ofy().save().entity(currentComment).now();
//		} catch (Exception e) {
//			return e.getMessage();
//		}
		return "edited the comment";
	}

	public void deleteComment(String id) {
		Comment comment = ofy().load().type(Comment.class).id(id).now();
		String feedId = comment.getFeedId();

		Feed feed = ofy().load().type(Feed.class).id(feedId).now();

		List<String> commentList = feed.getCommentId();
		commentList.remove(id);
		feed.setCommentId(commentList);
		ofy().save().entity(feed).now();

		ofy().delete().type(Comment.class).id(id).now();

	}

	public String addCheer(String id) {
		Feed feed = ofy().load().type(Feed.class).id(id).now();
		Set<String> cheerList = new HashSet<String>();
		try {
			cheerList.addAll(feed.getCheersContactId());
		} catch (Exception e) {
		}
		if (!cheerList.contains(feed.getCreatorId())) {
			cheerList.add(feed.getCreatorId());
		} else {
			cheerList.remove(feed.getCreatorId());
		}
		feed.setCheersContactId(cheerList);
		ofy().save().entity(feed).now();
		return "added like";
	}

	public Set<String> getCheers(String id) {
		return ofy().load().type(Feed.class).id(id).now().getCheersContactId();
	}

	public void removeCheer(String id) {
		Feed feed = ofy().load().type(Feed.class).id(id).now();
		Set<String> cheers = feed.getCheersContactId();
		cheers.remove(feed.getCreatorId());
		ofy().save().entity(feed).now();
	}

}
