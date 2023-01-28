<html>
<head>
	<title>Registration</title>
	<link rel="shortcut icon" href="images/favicon.ico" />
	<meta charset="UTF-8" />
	<link rel="stylesheet" type="text/css" href="style.php">
	<script src="script.js"></script>
</head>

<body>
<div align="center">
	<fieldset 	style= "width:350px">
		<legend>Registration of HANDS ACT.</legend>
			<div id="myDiv">


			<form onsubmit="return validation()" method="post" name="regForm" action="database.php">
			<label>First Name: *</label>
			<input type="text" name="firstName" placeholder="Your First Name" size="25" />
			<label>Last Name: *</label>
			<input type="text" name="lastName" placeholder="Your Last Name" size="25" />
			<label>E-mail*:</label>
			<input type="text" name="email" placeholder="Enter your E-mail" size="25"/>

			<label>Password*:</label>
			<input type="password" name="password" placeholder="Enter your password" />

			<label>Age:</label>
			<input type="number" name="age" size="25" placeholder="Your Age" />


			<label>Facebook link:</label>
			<input type="url" name="facebook" placeholder="Enter Facebook Link" value="http://"/>
			<label>Semester:</label>
			<input type="number" name="semester" placeholder="Enter your Semester"/>
			<br><br>
			<label>Collage:</label>

					<select name="collage">
								<option	value="Engineering" class="style1">Engineering </option>
								<option	value="Computer Scince">Computer Scince</option>
								<option	value="Logistics">Logistics</option>
								<option	value="CLC">CLC</option>
								<option	value="Bussiness">Bussiness</option>
								<option	value="Pharamcy">Pharamcy</option>
					</select>
					<br><br>
			<label>Mobile Number:</label>
			<input type="text" name="mobile" placeholder="Enter Mobile Number"/>

			<br><br>
			<label>Your Position:</label>
					<select name="position">
						<option	value="Advisory Board">Advisory Board </option>
						<option	value="Presdient">Presdient</option>
						<option	value="Vice Presdient">Vice Presdient</option>
						<option	value="Head of Marketing">Head of Marketing</option>
						<option	value="Head of OC">Head of OC</option>
						<option	value="Head of PR">Head of PR</option>
						<option	value="Head of Human Development">Head of Human Development</option>
						<option	value="Head of Finance">Head of Finance</option>
						<option	value="Head of Technical">Head of Technical</option>
						<option	value="Leader of Online Marketing">Leader of Online Marketing</option>
						<option	value="Leader of Design">Leader of Design</option>
						<option	value="Leader of Video Editing">Leader of Video Editing</option>
						<option	value="Leader of Photography">Leader of Photography</option>
						<option	value="Leader of Publicity">Leader of Publicity</option>
						<option	value="Member of Marketing">Member of Marketing</option>
						<option	value="Member of OC">Member of OC</option>
						<option	value="Member of PR">Member of PR</option>
						<option	value="Member of Finance">Member of Finance</option>
						<option	value="Member of Technical">Member of Technical</option>
						<option	value="Member of Human Development">Member of Human Development</option>
						<option	value="Guest">Guest</option>
					</select>
						<br><br>
				<label>Did you have experiance of civil work before?</label><br>
				<input type="radio" name="rate" value="yes"><label>Yes</label>
				<input type="radio" name="rate" value="no"><label>No</label>
				<br><br>
				<label>Do you have any Comment or feedback?</label>
				<br>
				<textarea></textarea>
				<br><br>

			<div align="center">
			<input type="submit" value="Register" />
			<input type="reset" value="Clear" onclick="clear2();" />

			</div>
	  </form>
	  </fieldset>
	</div>

</body>


</html>
