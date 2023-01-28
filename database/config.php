<?php

&con =mysqli_connect("localhost","root","") or die("Error:Can't Connect to server");
$db =mysqli_select_db($con,"hands_db") or die ("Error :Can't Connect to Database");

?>