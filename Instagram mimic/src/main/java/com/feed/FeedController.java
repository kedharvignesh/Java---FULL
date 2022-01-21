package com.feed;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

@RestController
@SessionAttributes("contactID")
@RequestMapping(path = "api/v1/feeds")
public class FeedController {

	private FeedService feedService;

	@Autowired
	public FeedController(FeedService feedService) {
		this.feedService = feedService;
	}
	
	@GetMapping(path="/my")
	public List<Feed> getMyfeeds(ModelMap model) {
		return feedService.getMyFeeds(model);
	}
	@PostMapping(path = "/my")
	public void addNewFeed(@RequestBody Feed feed) {
		 feedService.addFeed(feed);
	}
	

}
