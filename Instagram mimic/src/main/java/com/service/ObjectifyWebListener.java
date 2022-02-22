package com.service;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import com.Authentication.Credential;
import com.contact.Contact;
import com.feed.Comment;
import com.feed.Feed;
import com.googlecode.objectify.Objectify;
import com.googlecode.objectify.ObjectifyService;



@WebListener
public class ObjectifyWebListener implements ServletContextListener {

	 public static Objectify ofy() {
	        return ObjectifyService.ofy();
	    }


  @Override
  public void contextInitialized(ServletContextEvent event) {
    ObjectifyService.init();
    // This is a good place to register your POJO entity classes.
    // ObjectifyService.register(YourEntity.class);

    ObjectifyService.register(Contact.class);
    ObjectifyService.register(Credential.class);
    ObjectifyService.register(Feed.class);
    ObjectifyService.register(Comment.class);
  }

  @Override
  public void contextDestroyed(ServletContextEvent event) {
  }
}