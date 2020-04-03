<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Active - Habitude</title>
    <link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic">
    <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/css/swiper.min.css">
    <link rel="stylesheet" href="assets/css/styles.min.css">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-select.min.css">
    

</head>

<body>
    <?php 
    require_once 'conn.php';
    include 'navBar.php';

    ?>
    <header class="masthead searchPage">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <div class="site-heading">
                        <h1>Activites</h1><span class="subheading">Let's get moving!</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
    <div class="container">
    	<div class="row">
            <!--
            <div class="col-10">
        		<form class="form">
                    <div class="question">
                        <h2>Checkboxes</h2>
                        <div class="inputGroup">
                            <input id="option1"  name="option1" type="checkbox"/>
                            <label for="option1" class="check">Option One</label>
                        </div>

                        <div class="inputGroup">
                            <input id="option2" name="option2" type="checkbox"/>
                            <label for="option2" class="check">Option Two</label>
                        </div>
                    </div>
                    <div class="question">
                        <h2>Radio Buttons</h2>
                        <div class="inputGroup">
                            <input id="radio1" name="radio" type="radio"/>
                            <label for="radio1">Yes</label>
                        </div>
                        <div class="inputGroup">
                            <input id="radio2" name="radio" type="radio"/>
                            <label for="radio2">No</label>
                        </div>
                    </div>
                </form>
            </div>
        -->
            <div class="col-sm-10 col-md-6 col-lg-3">
                <div class="actCard"   style="background-image: url(assets/img/activites/afl.jpg)" data-tabName="iter3_afl" onclick="openProfile(event, 'iter3_afl','Football')">
                    <div class="act_info" >
                        <h4 class="act_name">Football</h4>
                        <p class="act_intro">Get involved with Victoria's favourite sport!</p>
                        <div class="linkIcons"></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-10 col-md-6 col-lg-3">
                <div class="actCard" style="background-image: url(assets/img/activites/Arts.jpg)" data-tabName="iter3_art_spaces" onclick="openProfile(event, 'iter3_art_spaces','Art')">
                    <div class="act_info">
                        <h4 class="act_name">Art</h4>
                        <p class="act_intro">See all that the state's creatives have to offer!</p>
                        <div class="linkIcons"></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-10 col-md-6 col-lg-3">
                <div class="actCard" style="background-image: url(assets/img/activites/athletics.jpg)" data-tabName="iter3_athletics" onclick="openProfile(event, 'iter3_athletics','Athletics')">
                    <div class="act_info">
                        <h4 class="act_name">Athletics</h4>
                        <p class="act_intro">Get fit and have fun doing it!</p>
                        <div class="linkIcons"></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-10 col-md-6 col-lg-3">
                <div class="actCard" style="background-image: url(assets/img/activites/cooking.jpg)" data-tabName="iter3_cooking" onclick="openProfile(event, 'iter3_cooking','Cooking')">
                    <div class="act_info">
                        <h4 class="act_name">Cooking</h4>
                        <p class="act_intro">Learn how to make your own delicious meals!</p>
                        <div class="linkIcons"></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-10 col-md-6 col-lg-3">
                <div class="actCard" style="background-image: url(assets/img/activites/disabled.jpg)" data-tabName="iter3_disability" onclick="openProfile(event, 'iter3_disability','Disability')">
                    <div class="act_info">
                        <h4 class="act_name">Disability</h4>
                        <p class="act_intro">Everyone can get involved!</p>
                        <div class="linkIcons"></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-10 col-md-6 col-lg-3">
                <div class="actCard" style="background-image: url(assets/img/activites/garden.jpg)" data-tabName="iter3_gardens_reserves" onclick="openProfile(event, 'iter3_gardens_reserves','Garden')">
                    <div class="act_info">
                        <h4 class="act_name">Garden</h4>
                        <p class="act_intro">Relax in the great outdoors!</p>
                        <div class="linkIcons"></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-10 col-md-6 col-lg-3">
                <div class="actCard" style="background-image: url(assets/img/activites/gymnastic.jpg)" data-tabName="iter3_gymnastics" onclick="openProfile(event, 'iter3_gymnastics','Gymnastics')">
                    <div class="act_info">
                        <h4 class="act_name">Gymnastics</h4>
                        <p class="act_intro">Get flexible and majorly yoked!</p>
                        <div class="linkIcons"></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-10 col-md-6 col-lg-3">
                <div class="actCard" style="background-image: url(assets/img/activites/iceskating.jpg)" data-tabName="iter3_iceskating" onclick="openProfile(event, 'iter3_iceskating','Ice Skating')">
                    <div class="act_info">
                        <h4 class="act_name">Ice Skating</h4>
                        <p class="act_intro">Be careful!</p>
                        <div class="linkIcons"></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-10 col-md-6 col-lg-3">
                <div class="actCard" style="background-image: url(assets/img/activites/martialarts.jpg)" data-tabName="iter3_martial_arts" onclick="openProfile(event, 'iter3_martial_arts','Martial Art')">
                    <div class="act_info">
                        <h4 class="act_name">Martial Art</h4>
                        <p class="act_intro">Train your mind as well as your body!</p>
                        <div class="linkIcons"></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-10 col-md-6 col-lg-3">
                <div class="actCard" style="background-image: url(assets/img/activites/relaxation.jpg)" data-tabName="iter3_afl" onclick="openProfile(event, 'iter3_relaxation','Relaxation')">
                    <div class="act_info">
                        <h4 class="act_name">Relaxation</h4>
                        <p class="act_intro">Tai chi, yoga, whatever you like!</p>
                        <div class="linkIcons"></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-10 col-md-6 col-lg-3">
                <div class="actCard" style="background-image: url(assets/img/activites/swimming.jpg)" data-tabName="iter3_water_sports" onclick="openProfile(event, 'iter3_water_sports','Water Sport')">
                    <div class="act_info">
                        <h4 class="act_name">Water Sport</h4>
                        <p class="act_intro">We're an island nation!</p>
                        <div class="linkIcons"></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-10 col-md-6 col-lg-3">
                <div class="actCard" style="background-image: url(assets/img/activites/communitycentre.jpg)" data-tabName="iter3_neighbourhood_house" onclick="openProfile(event, 'iter3_neighbourhood_house','Community Centre')">
                    <div class="act_info">
                        <h4 class="act_name">Neigbourhood Houses</h4>
                        <p class="act_intro">Give back to the community and meet some fascinating new friends!</p>
                        <div class="linkIcons"></div>
                    </div>
                </div>
            </div>

            <div class="col-sm-10 col-md-6 col-lg-9">
                <div id="actContent" class="actContent">
                    <button onclick="hideCards()" class="button inline-block backBtn"><i class="fa fa-angle-double-left"></i><i class="fa fa-angle-double-left"></i></button>
                    <div class="form-group">
                        <select class="selectpicker form-control inline-block" id="suburbSelect" data-container="body" data-live-search="true" title="Select a suburb" data-hide-disabled="true" data-width="75%" data-style="selectStyle" onchange="searchActives()">
                        </select>
                    </div>
                    <div class="row activeList" id="activeList">
                        
                    </div>
                </div>
            </div>
    	</div>
    </div>
	<?php 
        include 'footer.php'
     ?>
     <script src="assets/bootstrap/js/bootstrap-select.js"></script>
    <script type="text/javascript">
        var active;
        var actName;
        //Update the suburb list base on activity selected
        function openProfile(evt, table_name,act_Name) {
          var i, personContent, personLink;
          personLink = document.getElementsByClassName("actCard");
          personContent = document.getElementById("actContent");
          for (i = 0; i < personLink.length; i++) {
            personLink[i].className = personLink[i].className.replace(" active", "");
            personLink[i].parentElement.style.display = "none";
          }
          //personContent.parentElement.style.display = "none";
        document.getElementById("actContent").style.display = "block";
        evt.currentTarget.className += " active";
        evt.currentTarget.parentElement.style.display = "block";
        active = evt.currentTarget.getAttribute('data-tabName');
        actName = act_Name;
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
            $('#suburbSelect').empty();
            for (var market in geo) {
                $('#suburbSelect').append('<option data-subtext="'+ geo[market].postcode +'">'+geo[market].suburb+'</option>');
             }
             $('.selectpicker').selectpicker('refresh');
        }
        xhr.open("GET", "./getActive.php?act=1&tabName="+table_name, true);
        xhr.send();
                /*
          if(document.getElementById("actContent").style.display == "block")
          {
                evt.currentTarget.className.replace(" active", "");
              document.getElementById("actContent").style.display = "none";
          }else{
            
                
          }*/
        };
    function hideCards(){
        var i, personContent, personLink;
        personLink = document.getElementsByClassName("actCard");
        personContent = document.getElementById("actContent");
        for (i = 0; i < personLink.length; i++) {
            personLink[i].className = personLink[i].className.replace(" active", "");
            personLink[i].parentElement.style.display = "block";
        }
        $('#activeList').find('div').remove();
        personContent.style.display = "none";
    };

    function searchActives(){   
        //$('#activeList').empty();
        var keyword = $('#suburbSelect').val();
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
            //alert(actName);
            if (actName == 'Art') {
                for (var market in geo) {
                $('#activeList').append('<div class="col-4 mapItems"><div class="clubCard"><h4>'+geo[market].name
                    +'</h4><div class="clubInfo">'
                    +geo[market].address +'<br>'
                    +geo[market].suburb +'<br>'
                    +geo[market].postcode +'<br>'
                    +'<a href="'+geo[market].website+'">View Website</a>' +'<br>'
                    +'</div><button class="expBtn" onclick=linkGoogle("'+ escape(actName + ' in '+ geo[market].suburb+' '+geo[market].postcode )+'")>Explore More</button></div></div>');
             }

            }else{
            for (var market in geo) {
                $('#activeList').append('<div class="col-4 mapItems"><div class="clubCard"><h4>'+geo[market].name
                    +'</h4><div class="clubInfo">'
                    +geo[market].address +'<br>'
                    +geo[market].suburb +'<br>'
                    +geo[market].postcode +'<br>'
                    +'</div><button class="expBtn" onclick=linkGoogle("'+ escape(actName + ' in '+geo[market].suburb+' '+geo[market].postcode) +'")>Explore More</button></div></div>');
             }
             }
        }
        xhr.open("GET", "./getActive.php?act=2&suburb="+keyword+"&tabName="+active, true);
        xhr.send();
    };
    function linkGoogle(keyword){
        window.open('http://google.com/search?q='+keyword,'_blank');
    }
    </script>
</body>
</html>