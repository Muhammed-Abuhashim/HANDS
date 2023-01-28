<?php
$firstName =$_POST["firstName"];
$lastName =$_POST["lastName"];
$email =$_POST["email"];
$password =$_POST["password"];
$age =$_POST["age"];
$userfacebook =$_POST["facebook"];
$semester =$_POST["semester"];
$collage =$_POST["collage"];
$mobile =$_POST["mobile"];
$position =$_POST["position"];

include"config.php";

$insertUser="INSERT INTO members(firstName,lastName,email,password,age,facebook,semester,collage,mobile,position)
values('$firstName','$lastName','$email','$password','$age','$userfacebook','$semester','$collage','$mobile','$position')";

$result = mysqli_query($con,$insertUser);
if($result)
{
	echo "<h1> User Created Successfully </h1>";
	echo "<a href='login.php'> Click here to login </a>";
}
else{
	echo "Error:".mysqli_error($con);
}

?>