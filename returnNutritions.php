<?php 
	require_once "conn.php";
	
	$nutritionList = $pdo->prepare('select long_name,badFat,carbs,goodFat,protein,salt,sugar from nutrition.products_iter2_sample where ndb_no = "'.$_GET["id"].'" limit 1;');
	$nutritionList->execute();
	$nutritions = $nutritionList->fetchAll();
	echo '{';
	foreach($nutritions as $nutrition)
	{
		echo '"badFat":"'.$nutrition['badFat'].'",';
		echo '"carbs":"'.$nutrition['carbs'].'",';
		echo '"goodFat":"'.$nutrition['goodFat'].'",';
		echo '"protein":"'.$nutrition['protein'].'",';
		echo '"salt":"'.$nutrition['salt'].'",';
		echo '"sugar":"'.$nutrition['sugar'].'"';
	}
	echo '}';
	//echo json_encode($nutritions)
	/*
	$foodName = $pdo->prepare('select long_name from products where ndb_no = '.$_GET["id"]);
	$foodName->execute();
	$name = $foodName->fetch();
	*/
	//echo $_GET['id'];
	//echo '<div class="nutritions-content"';
	//var_dump($nutritions);
	/*
	foreach($nutritions as $nutrition)
	{
		echo ' data-'.$nutrition['nutrient_name'].'="'.$nutrition['output_value'].'"';
	}
	echo ">".$name['long_name']."</div>";
	*/	
?>


