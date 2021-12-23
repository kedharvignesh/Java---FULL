<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>User Details</title>
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
	Profile details : <br><br>
	First Name = ${firstname}
	<br> Last Name = ${lastname}
	<br> Email = ${email}<br>
	Phone = ${phone} <br>
	Location = ${location}<br>
	Role =${role }<br><br><br>
	
	<form action="Logout">
		<input type="submit" value="Logout">
	</form>
</body>
</html>