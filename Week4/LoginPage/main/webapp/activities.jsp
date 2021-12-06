<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
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
	Working Hours this week = 63hrs 43mins
	<br> Typing Hours = 7.3 hrs
	<br> Learning hours = 3.3 hrs
</body>
</html>