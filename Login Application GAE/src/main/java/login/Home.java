package login;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/Home")
public class Home extends HttpServlet {
	
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		

		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		User users =null;

		try {
			users= FileReadWrite.load(username);
			String email=users.getEmail();
			String firstName=users.getFirstName();
			String lastName=users.getLastName();
			String phone=users.getPhone();
			String location=users.getLocation();
			String role=users.getRole();
			
			
		if (users.getPassword().equals(password)) {
			
//			out.println("Welcome to FULL  " + firstName+"\n");
//			out.println("Profile details : \n\n"
//					+ "	First Name = "+firstName+"\n"
//					+ "	Last Name = "+lastName+"\n"
//					+ "	Email = "+email+"\n"
//					+ "	Phone = "+phone+" \n"
//					+ "	Location = "+location+"\n"
//					+ "	Role = "+role+"\n");
			
			
			
			
			HttpSession session = request.getSession();
			session.setAttribute("firstname", firstName);
			session.setAttribute("lastname", lastName);
			session.setAttribute("email", email);
			session.setAttribute("phone", phone);
			session.setAttribute("location", location);
			session.setAttribute("role", role);
			session.setAttribute("username", username);
			RequestDispatcher rd = request.getRequestDispatcher("welcome.jsp");
			rd.forward(request, response);
//			response.sendRedirect("welcome.jsp");
		}else {
			RequestDispatcher rd = request.getRequestDispatcher("invalid.jsp");
			rd.forward(request, response);
//			response.sendRedirect("invalid.jsp");
		}
		}catch(Exception e) {
//			out.println(e.getMessage());
//			e.printStackTrace(out);
			out.println("user not found \n");
			RequestDispatcher rd = request.getRequestDispatcher("invalid.jsp");
			rd.forward(request, response);
//			response.sendRedirect("invalid.jsp");
		}
		
		
	}

}