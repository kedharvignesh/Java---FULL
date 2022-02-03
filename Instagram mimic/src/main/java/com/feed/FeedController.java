package com.feed;

import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

@RestController
@SessionAttributes({"contactId"})
@RequestMapping(path = "api/v1/feeds")
public class FeedController {

	private FeedService feedService;

	@Autowired
	public FeedController(FeedService feedService) {
		this.feedService = feedService;
	}

	@GetMapping(path = "/my")
	public List<Feed> getMyfeeds(HttpSession session) {
		return feedService.getMyFeeds(session);
	}

	@PostMapping(path = "/my")
	public void addNewFeed(@RequestBody Feed feed) {
		feedService.addFeed(feed);
	}

	@PutMapping(path = "/{feedId}")
	public void editFeed(@PathVariable("feedId") String id, @RequestBody Feed feed) {
		feedService.editFeed(id, feed);
	}

	@DeleteMapping(path = "/{feedId}/delete")
	public String deleteFeed(@PathVariable("feedId") String id) {
		return feedService.deleteFeed(id);
	}

	@GetMapping(path = "/home")
	public List<Feed> getAllfeed(HttpSession session) {
		return feedService.getallFeed(session);
	}

	@GetMapping(path = "/{feedId}")
	public List<Feed> getUsersFeed(@PathVariable("feedId") String id) {
		return feedService.getUsersFeed(id);
	}

	@GetMapping(path = "/{feedId}/comments")
	public List<Comment> getComments(@PathVariable("feedId") String id) {
		return feedService.getAllComments(id);
	}

	@PostMapping(path = "/comments")
	public String postComment( @RequestBody Comment comment) {
		return feedService.postNewComment( comment);
	}

	@PutMapping(path = "/{commentId}")
	public String editComment(@RequestBody Comment comment) {
		return feedService.editComment( comment);
	}

	@DeleteMapping(path = "/{commentId}")
	public void deleteComment(@PathVariable("commentId") String id) {
		feedService.deleteComment(id);
	}

	@GetMapping(path = "/{feedId}/cheer")
	public String addCheer(@PathVariable("feedId") String id) {
		return feedService.addCheer(id);
	}

	@GetMapping(path = "/{feedId}/cheers")
	public Set<String> getCheers(@PathVariable("feedId") String id) {
		return feedService.getCheers(id);
	}

	@DeleteMapping(path = "/{feedId}/unCheer")
	public void unCheer(@PathVariable("feedId") String id) {
		feedService.removeCheer(id);
	}

}
