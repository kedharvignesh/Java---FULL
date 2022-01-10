package login;

import java.io.IOException;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/SignUp")
public class SignUp extends HttpServlet {
	private static final long serialVersionUID = 1L;
	

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		String email = request.getParameter("email");
		String firstName = request.getParameter("firstname");
		String lastName = request.getParameter("lastname");
		String phone = request.getParameter("phone");
		String location = request.getParameter("location");
		String role = request.getParameter("role");
		
		User users = new User(username, password, email,firstName,lastName,phone,location,role);
//		try {
//		users=FileReadWrite.load();
//		}catch(Exception e) {
//			FileReadWrite.save(users);
//		}
		
		FileReadWrite.save(users);
		
		response.sendRedirect("index.jsp");
	}

}