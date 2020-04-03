<?php 
	include "conn.php";
	$orderList = $pdo->prepare('select ndb_no,long_name from nutrition.products_iter2_sample where long_name like "%'.$_GET["q"].'%" limit 10');
	$orderList->execute();
	$orders = $orderList->fetchAll();
	$length = count($orders);
	if($length <= 0){
		echo '<div style="width:100%;padding-left:20px; text-align:center"><p>Unfortunately, there are currently no foods in our database that match that input.</p></div>';
	}
	else{
		echo '<div class="col col-sm-12 col-md-6 search-content">
                <ul id="searching-left">';
		for($i=0;$i<(count($orders)/2);$i++)
		{
			echo '<li class = "selectFood" id="'.$orders[$i]['ndb_no'].'1" data-id="'.$orders[$i]['ndb_no'].'"';
			echo ' data-name="'.$orders[$i]['long_name'].'"';
			echo '><span onclick="displayViz('.$orders[$i]['ndb_no'].')" style="display:inline-block;float:left">'.$orders[$i]['long_name'].'</span><a class="btn-floating light-grey addButtonCircular addToCompare">+</a></li>';

		}
		echo "</ul></div>";
		if ($length>1) 
		{
		
			echo '<div class="col col-sm-12 col-md-6 search-content">
	                <ul id="searching-right">';
	        for($i=(count($orders)/2);$i<count($orders);$i++)
	        {
	        	echo '<li class = "selectFood" data-id="'.$orders[$i]['ndb_no'].'"';
	        	echo ' data-name="'.$orders[$i]['long_name'].'"';
	        	echo '><span onclick="displayViz('.$orders[$i]['ndb_no'].')" style="display:inline-block;float:left">'.$orders[$i]['long_name'].'</span><a class="btn-floating light-grey addButtonCircular addToCompare">+</a></li>';
	        }
	        echo "</ul></div>";
	    }
	}
?>


