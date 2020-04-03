<?php 
  date_default_timezone_set('prc');
require_once "conn.php";
if ($_GET['no'] == 1) {
  $nutritionList = $pdo->prepare('select long_name,badFat,carbs,goodFat,protein,salt,sugar,serving_size from nutrition.products_iter2_sample where ndb_no = "'.$_GET['firId'].'" limit 1;');
}else if($_GET['no'] == 2){
  $nutritionList = $pdo->prepare('select long_name,badFat,carbs,goodFat,protein,salt,sugar,serving_size from nutrition.products_iter2_sample where ndb_no in ("'.$_GET['firId'].'","'.$_GET['secId'].'") limit 2;');
}
$nutritionList->execute();
$nutritions = $nutritionList->fetchAll();
echo json_encode($nutritions);


/*
foreach($nutritions as $nutrition)
  {
    echo "var sugar = ".$nutrition['sugar'].",
        protein = ".$nutrition['protein'].",
        badFat = ".$nutrition['badFat'].",
        goodFat = ".$nutrition['goodFat'].",
        carbs = ".$nutrition['carbs'].",
        salt = ".($nutrition['salt']/1000).",
        servingSize = ".$nutrition['serving_size'].",
        foodName = \"".$nutrition['long_name']."\";";
  }
  if ($_GET["no"]==2) {

$nutritionList2 = $pdo->prepare('select long_name,badFat,carbs,goodFat,protein,salt,sugar,serving_size from nutrition.products_iter2_sample where ndb_no = "'.$_GET['secID'].'" limit 1;');
$nutritionList2->execute();
$nutritions2 = $nutritionList2->fetchAll();
foreach($nutritions2 as $nutrition2)
  {
    echo "var sugar2 = ".$nutrition2['sugar'].",
        protein2 = ".$nutrition2['protein'].",
        badFat2 = ".$nutrition2['badFat'].",
        goodFat2 = ".$nutrition2['goodFat'].",
        carbs2 = ".$nutrition2['carbs'].",
        salt2 = ".($nutrition2['salt']/1000).",
        servingSize2 = ".$nutrition2['serving_size'].",
        foodName2 = \"".$nutrition2['long_name']."\";";
          
  }
  }
  echo 'var numberFoods = '.$_GET["no"].';';
  echo 'var demo = '.$_GET['ageId'].";";
  echo "</script>";
  */
  ?>
 