<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Sign up</title>
</head>
<body>
<form action="SignUp" method="post">
		Please enter following details : <br><br>
		 UserName : <input type="text" name="username" required /><br>
		 First Name :<input type="text" name="firstname" required /><br>
		 Last Name : <input type="text" name="lastname"><br>
		 Password : <input type="password" name="password" required /><br>
		 E-Mail   : <input type="email" name="email" required /><br>
		 Phone    :  <input type="number" name="phone"><br>
		 Location : <input type="text" name="location"><br>
		 Role     : <input type="text" name="role"><br><br><br>
		<input type="submit" value="Sign up">
	</form>
</body>
</html>