package login;

import java.io.IOException;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		HashMap<String, User> users = new HashMap<String, User>();
		users= FileReadWrite.load();

		String username = request.getParameter("username");
		String password = request.getParameter("password");
		

		try {
			String email=users.get(username).getEmail();
		if (users.containsKey(username) && password.equals(users.get(username).getPassword())) {
			HttpSession session = request.getSession();
			session.setAttribute("username", username);
			session.setAttribute("password", password);
			session.setAttribute("email", email);
			response.sendRedirect("welcome.jsp");
		} }catch(Exception e) {
			response.sendRedirect("index.jsp");
		}finally {
			FileReadWrite.save(users);
		}
		
		
	}

}
