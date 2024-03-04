<?php
$servername="localhost";
$username="root";
$password="";
$database="signup";
$con=mysqli_connect($servername,$username,$password,$database,3307);
if(!$con){
	if (!$con) {
		die("error detected" . mysqli_connect_error());
	}
}
else{
	echo("Connected sucessfully");
}
?>