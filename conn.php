<?php 
header("Content-type: text/html; charset=utf-8");
date_default_timezone_set('prc');
session_start();
try{
    //$pdo = new PDO('mysql:host=35.244.115.82;dbname=nutrition', 'root', 'THWg9uELtSqgH7UTnJeVoTys6XazVwg7NRfX9gusbqLYTajLxf');
}catch(PDOEXCEPTION $e){
    echo 'connect to database Bad ' . $e->getMessage();
};
if(!isset($_SESSION['login']))
{
	echo "<script>alert('Please log in.');</script>";
	echo "<script>window.location='login.php';</script>";
};
