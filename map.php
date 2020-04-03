<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Farmers Markets in Victoria - Habitude</title>
    <link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic">
    <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/css/swiper.min.css">
    <link rel="stylesheet" href="assets/css/styles.min.css">
    <link rel="stylesheet" href="assets/leaflet//leaflet.css"/>
    <script src="assets/leaflet/leaflet.js"></script>
    <link rel="stylesheet" href="assets/leaflet/MarkerCluster.css" />
    <link rel="stylesheet" href="assets/leaflet/MarkerCluster.Default.css" />
    <script src="assets/leaflet/leaflet.markercluster-src.js"></script>

</head>
<body>
	<?php 
    include 'conn.php'
    ?>
    <?php 
    include 'navBar.php';

    ?>
    <header class="masthead searchPage">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <div class="input-group mapGroup"> 
                        <label>Enter Suburb Or Postcode</label>              
                        <input class="form-control" id="searchField" type="text" style="height: 52px;opacity: 1;border-top-left-radius:10px;border-bottom-left-radius:10px;" placeholder="e.g. Clayton">
                        <div class="input-group-append">
                            <button class="btn btn-light searchBtn" onclick=searchMarkets() type="button">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="container mapContainer">
        <div class="row">
            <div class="col">
                
            </div>
        </div>
        <div class="row" id="mapRow">
            <!--<div class="col-4 mapItems">
                <div class="marketCard">
                    <h6>Market Name</h6>
                    <div class="marketInfo">
                        Market Street<br>
                        Market State<br>
                        PostCode<br>
                        Vic<br>
                    </div>
                    <button class="expBtn" onclick=addMarkers("c")>Explore Map</button>
                </div>
            </div>-->
        </div>
    </div>
	 <div id="mapid" class="mapid" style="width:90vw; margin-left: 5vw;"></div>
     <div id="introText" style="width:100%;text-align:center;display: none;"><br><h3 style="color:#4caf50;text-align:center;">Click on "Expore Map" above to see more options about the Farmers Market.</h3></div>
	 <?php 
		include 'footer.php'
	?>
</body>
<script type="text/javascript">
    var mymap = L.map('mapid').setView([-37.814, 144.96332], 13);
      //var markers = L.markerClusterGroup();
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiYWJhZGRvbmx4aiIsImEiOiJjanVxcmo0Z2UxMmlzM3lvNWgxaHo1a3pnIn0.lRoiAe5iJN5fOVGNdPfePQ'
    }).addTo(mymap);
    document.getElementById('mapid').style.display="none";

    function searchMarkets(){
        $('#mapRow').empty();
        var keyword = $('#searchField').val();
        var xhr = null;
        var geo = null;
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }else if(window.ActiveXObject){
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                //alert(xhr.responseText);
                geo = JSON.parse(xhr.responseText);
            }
            if (Object.keys(geo).length == 0) {
                 $("#introText").hide();
                if(confirm("Sorry, no matches in our database for this subrub. You will now be redirected to Google..")){
                    window.open('http://google.com/search?q=farmers market in '+keyword,'_blank');
                }
                
            }
            else{
                $("#introText").show();
                for (var market in geo) {
                    var street = geo[market].geo_address.split(',')[0];
                    $('#mapRow').append('<div class="col-4 mapItems"><div class="marketCard"><h6>'+geo[market].name+'</h6><div class="marketInfo">'+street+'<br>'+geo[market].suburb+'<br>'+geo[market].postcode+(geo[market].day_of_week > 0 ? ('<br>'+geo[market].day_of_week) : '')+'<br>Vic<br></div><button class="expBtn" onclick=linkGoogle("'+escape(geo[market].name)+'")>Explore Map</button></div></div>');
                 }
            }
        }
        xhr.open("GET", "./getMarketData.php?cond="+keyword, true);
        xhr.send();
    };

function linkGoogle(keyword){
        window.open('http://google.com/search?q=farmers market in '+keyword,'_blank');
    }
function addMarkers(keyword){
    document.getElementById('mapid').style.display="block";
    document.getElementById('introText').style.display="none";
    var xhr = null;
    var geo = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else if(window.ActiveXObject){
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            //alert(keyword);
            //alert(xhr.responseText);
            geo = JSON.parse(xhr.responseText);
        }
        for (var market in geo) {
          var marker = L.marker([Number(geo[market].lat),Number(geo[market].long)]).addTo(mymap);
        marker.bindPopup('<p><a href="http://google.com.au/search?q='+geo[market].geo_address+' farmers market" target="_blank">'+ geo[market].name +'</a></p>').openPopup();
        mymap.addLayer(marker);
         }
         //mymap.addLayer(markers);
         mymap.panTo([Number(geo[market].lat),Number(geo[market].long)]);
        location.href = "#mapid";
    }
    xhr.open("GET", "./getMarketData.php?name="+unescape(keyword), true);
    xhr.send();
};
</script>
</html>
