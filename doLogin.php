<?php
session_start();
$name=$_POST['username'];
$pw=$_POST['password'];
//($name=="habitude")&&($pw=="panacea_0!")
if(true){
		$_SESSION['login'] = true;
		header("location:index.php");
	}else{
		echo"<script>alert('Invalid UserName or Password');window.location.href='login.php'</script>";
	}
