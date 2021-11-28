<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>User Login</title>
</head>
<body>
	<form action="LoginServlet" method="post">
		Enter UserName : <input type="text" name="username"><br>
		Enter Password : <input type="password" name="password"><br>
		<input type="submit" value="login">
	</form>
</body>
</html>
