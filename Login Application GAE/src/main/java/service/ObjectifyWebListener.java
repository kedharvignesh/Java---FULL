package service;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import com.googlecode.objectify.Objectify;
import com.googlecode.objectify.ObjectifyService;

import login.User;

@WebListener
public class ObjectifyWebListener implements ServletContextListener {
  

   
  
    public static Objectify ofy() {
        return ObjectifyService.ofy();
    }

	@Override
	public void contextInitialized(ServletContextEvent sce) {
		// TODO Auto-generated method stub
		ObjectifyService.init();
        ObjectifyService.register(User.class);
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		// TODO Auto-generated method stub
		
	}
}
