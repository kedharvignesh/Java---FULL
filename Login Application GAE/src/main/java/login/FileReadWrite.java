package login;

import static com.googlecode.objectify.ObjectifyService.ofy;

public class FileReadWrite {



	public static User load(String username) {

		 return ofy().load().type(User.class).id(username).now();

	}

	static public void save(User users) {


		ofy().save().entity(users).now();
	}
}
