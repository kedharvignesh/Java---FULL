<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Welcome</title>
</head>
<body>
	<%
	response.setHeader("Cache-Control", "no-code, no-store, must-revalidate");// for HTTP 1.1

	response.setHeader("pragma", "no-cache"); // for HTTP 1.0

	response.setHeader("Expires", "0"); // Proxy server remover .

	if (session.getAttribute("username") == null) {
		response.sendRedirect("index.jsp");
	}
	%>

	Welcome to FULL ${username}
	<br>
	<br> To see your account details 
	<a href="activities.jsp">Click here</a>
	<br>
	<br>

	<form action="Logout">
		<input type="submit" value="Logout">
	</form>



</body>
</html>