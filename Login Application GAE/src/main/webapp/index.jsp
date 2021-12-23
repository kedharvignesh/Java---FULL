<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>User Login</title>
</head>
<body>
	<form action="Home" method="post">
		Enter UserName : <input type="text" name="username" required/><br>
		Enter Password : <input type="password" name="password" required/><br>
		<input type="submit" value="login">
	</form>
	
	<br><br>
	
	New User ? <a href="signUp.jsp">Sign up</a>
</body>
</html>