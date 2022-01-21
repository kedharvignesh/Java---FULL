package com.feed;

import static com.googlecode.objectify.ObjectifyService.ofy;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

@Service
public class FeedService {

	public List<Feed> getMyFeeds(ModelMap model) {
//		String contactId = (String) model.getAttribute("contactID");
		String contactId = "zzzzzzzzzfllvm";
		return ofy().load().type(Feed.class).filter("creatorId", contactId).list();
		
	}

	public void addFeed(Feed feed) {
		ofy().save().entity(feed).now();
		
	}

}
