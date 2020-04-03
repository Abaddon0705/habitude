<?php 
	require_once "conn.php";
	if (isset($_GET['act'])) {
		$geoList = $pdo->prepare('select suburb,postcode from geocoded_iter3');
	}
	else if (isset($_GET['cond'])) {
		$geoList = $pdo->prepare('select * from geocoded_iter3 where lower(suburb) = "'.strtolower($_GET['cond']).'" or postcode = '.(int)$_GET['cond']);
	}elseif (isset($_GET['name'])) {
		$geoList = $pdo->prepare('select * from geocoded_iter3 where name = "'.$_GET['name'].'"' );
	}
	$geoList->execute();
	$markets = $geoList->fetchAll();
	echo json_encode($markets);
?>
 