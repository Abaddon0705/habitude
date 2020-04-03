<?php 
	require_once "conn.php";
	if ($_GET['act'] == '1') {
		$geoList = $pdo->prepare('select distinct suburb,postcode from '.$_GET["tabName"]);
	}else if ($_GET['act'] == '2'){
		$geoList = $pdo->prepare('select * from '.$_GET["tabName"].' where suburb = "'.$_GET["suburb"].'"');
	}
	$geoList->execute();
	$markets = $geoList->fetchAll();
	echo json_encode($markets);
?>