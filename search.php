<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Search - Panacea</title>
    <link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic">
    <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/css/swiper.min.css">
    <link rel="stylesheet" href="assets/css/styles.min.css">
    <link rel="stylesheet" href="assets/css/vis.css">
    <script src="http://apps.bdimg.com/libs/jquery/1.9.1/jquery.min.js"></script>

</head>

<body>
    <?php 
    require_once 'conn.php';
    include 'navBar.php';
    ?>
    <header class="masthead searchPage">
        <div class="overlay"></div>
        <div class="container fixBottom">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto " data-on="primary" data-off="info">
                    <div class="site-heading">
                        <h1>Habitude</h1><span class="subheading">An interactive Database of Food and Nutrition</span>
                    </div>
                    
                </div>
            </div>
        </div>
    </header>
    
    <div class="container searchingContent">
        <div class="row">
            <div class="col">
                <div class="input-group">
                    <select id="genderId">
                     <option value="0">Female</option>
                     <option value="1">Male</option>
                   </select>
                    <select id="ageId">
                     <option value="4">Age</option>
                     <option value="0">1-3</option>
                     <option value="1">4-8</option>
                     <option value="2">9-13</option>
                     <option value="3">14-18</option>
                     <option value="4">19-30</option>
                     <option value="5">31-50</option>
                     <option value="6">51+</option>
                   </select>
                    <div class="input-group-prepend" border="0">
                        <span class="input-group-text" style="height:50px;background-color: rgba(233,236,239,0);border-right: 0;">
                            <i class="fa fa-search"></i>
                        </span>
                    </div>
                    
                    <input class="form-control" id="searchField" type="text" onkeyup="showFood(this.value)" style="height: 50px;border-left: 0;" placeholder="Start typing (e.g., 'corn flakes') to begin. You can compare products by selecting two of them.">
					<div class="mx-auto" style="text-align: center;margin-top: 20px;">
                        
                    </div>
                    <div class="input-group-append switch_tooltip">
                        <label class="switch switch_tooltip" for="nutCheck" onclick="setModel()">
                          <input type="checkbox" id="nutCheck" checked>
                          <span class="slider round switch_tooltip"></span>
                          <span class="absolute-no">Compare</span>
                          <span class="switch_tooltiptext">Switch To Compare</span>
                        </label>
                        
                        
                    </div>
                </div>
            </div>
        </div>

        <div class="row comparePanle">
            <div class="col col-9" style="float: left;">
                <div class="row compareList">
                    <div class="col-3"><h6 id="compaText">Selected Food:</h6></div>
                    <div class="col-9 comparePan"></div>
                </div>
                
            </div>
            <div class="col col-3" style="float: left;">
                <button id="cmprBtn" class="btn btn-default cmprBtn" disabled>Compare</button>
            </div>
            
        </div>
        <div class="row" id="searchChoices" style="width: 100%">
            
        </div>
    </div>
    <!-- comparision popup-->
    <!--<div id="id01" class="animate-zoom modal modPos">
        <div class="modal-title">
            <a onclick="document.getElementById('id01').style.display='none'" class="modal-closebtn">&times;</a>
        </div>
        <div class="row contentPop">
            
        </div>
    </div>-->
    <!--end of comparision popup-->
    <!-- new vis -->
    <div id="foodDiv" style="display: hide;">
        <div class="container">
            <div class="row" ><div class="col text-center"><h3 id="foodTitle" style="margin-top: 20px"></h3></div></div>
            <div class="row">
                <div class="col">
                  <div class="row mx-auto gauges" style="max-width: 850px;">
                    <div id="bigPictureGauges" style="width:20vw;max-width:200px;height:20vw;padding-top:4vw;padding-right:-4vw;"></div>
                    <div id="goodStuffGauges" class="col-7" style="width:80vw;max-width:1200px;height:20vw;"></div>
                    <!--<div id="badStuffGauges" style="float:left;width:50vw;height:50vw;"></div>-->
                  </div>
                </div>
          </div>
      </div>
      <!--<div class="form-style-10" style="width:50vw;position:relative;top:-10vw;">
        <label id="bigPictureText"></label>
      </div>-->
      
      <div class="food-buttons" id="food-buttons">
        <div id="nodesGoHere"></div>
        <button class="back-button" style="width:10%;font-size:1em;" onclick="slideBack()">Back</button>
        <div class="form-style-10" id="narrativeText">
          <label id="bigPictureText" style="color:#fff;font-weight:bold;"></label>
        </div>
        <button class="next-button"  onclick="slideNext()">Next</button>
      </div>
    </div>

    

<?php 
include 'footer.php'
?>
<script src="assets/js/fist.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.2.2/d3.min.js"></script>
<script src="assets/js/sec.js"></script>


<script type="text/javascript">
    var div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

      var width = d3.select("#foodDiv").style("width").slice(0, -2),
        height = d3.select("#foodDiv").style("height").slice(0, -2);

      if (height < 500) {
        height = 500;
      }

      d3.select("#nodesGoHere")
        .append("svg")
        .attr("id", "foodSvg")
        .attr("width", width)
        .attr("height", height)
        .style("border", "0")
        .append("g")
        .attr("id", "myG");

    function displayViz(firId){
        var balance = (parseInt(document.getElementById('genderId').value) +1 ) * document.getElementById('ageId').value;
        $("#bigPictureGauges").find('.foodSvg').remove();
        $("#goodStuffGauges").find('.foodSvg').remove();
        $("#nodesGoHere").find('.foodSvg g circle').remove();
        $("#foodDiv").css("display","block");
        $(".food-buttons").css("display","block");
        var xmlhttp = null;
        if(window.XMLHttpRequest){
            xmlhttp = new XMLHttpRequest();
        }else if(window.ActiveXObject){
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //return JSON.parse(xmlhttp.responseText);
                var result = JSON.parse(xmlhttp.responseText);
                var foodOne = result[0],
                    numberFoods = 1;
                    foodName = foodOne['long_name'];
                setupNutrients(balance,[foodOne['sugar'],foodOne['protein'],foodOne['badFat'],foodOne['goodFat'],foodOne['carbs'],foodOne['salt'],foodOne['serving_size']]);
                renderConfigs();
                setSimulation();
                $("#foodTitle").text(foodOne['long_name']);
                location.href = "#foodDiv";
            }
        }
        xmlhttp.open("GET","getFoodNutData.php?firId="+ firId +"&no=1" , true);
        xmlhttp.send();
    }

    function compareViz(firId,secId){
        var balance = (parseInt(document.getElementById('genderId').value) +1 ) * document.getElementById('ageId').value;
        $("#bigPictureGauges").find('.foodSvg').remove();
        $("#goodStuffGauges").find('.foodSvg').remove();
        $("#nodesGoHere").find('.foodSvg g circle').remove();
        $("#foodDiv").css("display","block");
        $(".food-buttons").css("display","block");
        var xmlhttp = null;
        if(window.XMLHttpRequest){
            xmlhttp = new XMLHttpRequest();
        }else if(window.ActiveXObject){
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //return JSON.parse(xmlhttp.responseText);
                var result = JSON.parse(xmlhttp.responseText);
                var foodOne = result[0],
                    foodName = foodOne['long_name'];
                var foodTwo = result[1];
                    foodName2 = foodTwo['long_name']
                    numberFoods = 2;
                    setupNutrients(balance,[foodOne['sugar'],foodOne['protein'],foodOne['badFat'],foodOne['goodFat'],foodOne['carbs'],foodOne['salt'],foodOne['serving_size']],[foodTwo['sugar'],foodTwo['protein'],foodTwo['badFat'],foodTwo['goodFat'],foodTwo['carbs'],foodTwo['salt'],foodTwo['serving_size']]);
                    renderConfigs();
                    setSimulation();
                    $("#foodTitle").text(foodOne['long_name']+" V.S. " + foodTwo['long_name']);
                    location.href = "#foodDiv";
                }
                //alert("A");
                
            
        }
        xmlhttp.open("GET","getFoodNutData.php?firId="+ firId +"&no=2&secId=" + secId , true);
        xmlhttp.send();
    }

    function setModel(){
        if(document.getElementById('nutCheck').checked){
            $('.addToCompare').hide();
            $('.selectFood span').removeClass('disable');
            $(".selectFood").removeClass("selected");
            $(".rotateBtn").toggleClass("rotateBtn");
            $(".contentPop").empty();
            $(".comparePan").empty();
            $(".comparePanle").hide();
            $("#foodDiv").hide();
            list.length = 0;
            document.getElementById('food-buttons').style.height="100%";
            hideComparePanel();
            $(".switch_tooltiptext").text("Switch To Compare");
            
        }else{
            $("#foodDiv").hide();
            document.getElementById('food-buttons').style.height="650px";
            $('.addToCompare').show();
            $('.selectFood span').addClass("disable");
            $(".comparePanle").show();
            $('#cmprBtn').removeClass("active");
            $('#cmprBtn').attr('disabled', '');
            $(".switch_tooltiptext").text("Switch To Display");
        }

    }
var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();
    function createXhr(){
        var xhr = null;
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }else if(window.ActiveXObject){
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        return xhr;
    };
    function showFood(str) {
    delay(function(){
      var xmlhttp = createXhr();
        if (str == "") {
            document.getElementById("searchChoices").innerHTML = "";
            return;
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("searchChoices").innerHTML = xmlhttp.responseText;
                if(document.getElementById('nutCheck').checked){
                    $('.addToCompare').hide();
                }else{
                    $('.selectFood span').addClass("disable");
                }
            }
        }
        xmlhttp.open("GET", "./searchFoods.php?q=" + str, true);
        xmlhttp.send();
    }, 300);
    };
    
</script>

<script src="assets/js/third.js"></script>

<script>
        var list = [];
        $("#searchChoices").on('click', '.addToCompare', function () {
        $(".comparePanle").show();
        $(this).toggleClass("rotateBtn");
        $(this).parents(".selectFood").toggleClass("selected");
        var productID = $(this).parents('.selectFood').attr('data-id');
        var inArray = $.inArray(productID, list);
        if (inArray < 0) {
            if (list.length > 1) {

                alert('Sorry the maximum products that be compared for now is 2. ');
                $(this).toggleClass("rotateBtn");
                $(this).parents(".selectFood").toggleClass("selected");
                return;
            }

            if (list.length < 2) {
                list.push(productID);

                var displayTitle = $(this).parents('.selectFood').attr('data-name');
                $(".comparePan").append('<div id="'+ productID +'" data-id="' + productID + '" class="list-center"><span data-id="' + productID + '" class="ptitle">' + displayTitle + '</span><a class="selectedItemCloseBtn closebtn">&times</a></div>');
            }
        } else {
            list.splice($.inArray(productID, list), 1);
            var prod = productID.replace(" ", "");
            $('#' + prod).remove();
            if (list.length < 2) {
                document.getElementById('compaText').innerHTML = "Selected Food";
                document.getElementById('cmprBtn').innerHTML="Display Nutrients";
            }
            hideComparePanel();
        }
        if (list.length > 1) {
            $(".cmprBtn").addClass("active");
            $(".cmprBtn").removeAttr('disabled');
        } else {
            $(".cmprBtn").removeClass("active");
            $(".cmprBtn").attr('disabled', '');
        }
    });

    $(document).on('click', '.cmprBtn', function () {
        if ($(".cmprBtn").hasClass("active")) {
            //alert(list[0]+","+list[1])
            compareViz(list[0],list[1]);
            /*for (var i = 0; i < list.length; i++) {
                /* this is to add the items to popup which are selected for comparision 
                product = $('.selectFood[id="' + list[i] + '"]');
                var title = $(product).data('name');
            }*/

            /*
            $(".contentPop").append('<div style="width:100vw,height:100vh"><iframe src="latest_visualisation.php?firID='+ list[0] +'&secID='+ list[1] +'&no='+list.length+'&ageId='+document.getElementById('ageId').value +'" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0"></iframe></div>');  
            */

        }
       // $(".modPos").show();
    });

    /*
    $(document).on('click', '.modal-closebtn', function () {
        
        
        $(".modPos").hide();
        $(".selectFood").removeClass("selected");
        list.length = 0;
        $(".rotateBtn").toggleClass("rotateBtn");
    });*/


    $(".comparePan").on('click', '.selectedItemCloseBtn', function () {
        var test = $(this).siblings("span").attr('data-id');
        $('[id=' + test + '1]').find(".addToCompare").click();
        hideComparePanel();
    });

    function hideComparePanel() {
        if (!list.length) {
            $(".comparePan").empty();
            $(".comparePanle").hide();
        }
    };
        $(function() {
        $('#searchField').click(function() {
            $('#searchChoices').slideDown(500);
            return false;
        });
    });

    $(document).click(function() {
        if (document.getElementById('searchField').value == null) {
            $("#searchChoices").slideUp(500);
        };
    });

    $("#searchChoices").click(function(e) {
        e.stopPropagation();
    });


</script>
</body>

</html>