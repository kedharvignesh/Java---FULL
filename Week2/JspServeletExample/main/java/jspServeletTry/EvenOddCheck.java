package jspServeletTry;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class EvenOddCheck
 */
@WebServlet("/EvenOddCheck")
public class EvenOddCheck extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = null;
		
		try {
			out= response.getWriter();
			int number= Integer.parseInt(request.getParameter("textInput"));
			out.println("<center>");
			if(number%2==0) {
				out.println(" <font color=green size=15> "+number+" is even number </font>");
			}else {
				out.println(" <font color=red size=15>"+number+" is odd number </font>");
			}
		}catch (Exception e) {
			out.println("Error : "+e.getMessage());
		}finally {
			out.println("<br><br>");
			out.println(" Return to main page <a href=index.html> CLICK HERE </a> ");
			out.println("</center>");
		}
		
	}

}
