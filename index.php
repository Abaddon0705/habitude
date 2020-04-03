<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Home - Habitude</title>
    <link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic">
    <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/css/swiper.min.css">
    <link rel="stylesheet" href="assets/css/styles.min.css">
     

</head>

<body>
    <!--<nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
        <div class="container"><a class="navbar-brand" href="index.html">Panacea</a><button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div
                class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="Searching.html">Search</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="about.html">About us</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="contact.html">Contact us</a></li>
                </ul>
        </div>
        </div>
    </nav>!-->
    <?php 
        require_once 'conn.php';
        include 'navBar.php';
        include 'sliderBanner.php';
     ?>
    <!-- <header class="masthead homePage">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <div class="site-heading">
                        <h1>Habitude</h1><span class="subheading">A Blog Theme by Start Bootstrap</span><a class="btn btn-link startBtn" role="button" href="Searching.php">Learn More</a></div>
                </div>
            </div>
        </div>
    </header> -->
    <div class="container content" style="font-size:calc(8px + 1vw)">
        <div class="row item">
            <div class="col-4 counter"><h4 id="count1"></h4><h6 >Children Overweight or Obese</h6><p>1995</p></div>
            <div class="col-4 counter"><h4 id="count2"></h4><h6>Children Overweight or Obese</h6><p>2007</p></div>
            <div class="col-4 counter"><h4 id="count3"></h4><h6>Children Overweight or Obese</h6><p>2014</p></div>
        </div>
        <hr class="divider my-4">
        <div class="row item">
            <!--<div class="col-4"><img class="img-fluid" src="assets/img/1.png"></div>
            <div class="col align-items-center">
                <div class="text-center justify-content-center align-items-center item">
                    <br><br><br><h2 style="color:#4CAF50;font-weight: bold;">Most Victorians are Obese or Overweight</h2> <br><ul>
                  <li style="text-align:left">63% of adults</li>
                  <li style="text-align:left">37% of young people aged 15–24</li>
                  <li style="text-align:left">26% of children aged 5–14</li>
                </ul><p align="left">Higher weight increases the risk of chronic and potentially lethal diseases, including cardiovascular disease, and many cancers.<br><br>The primary causes of obesity and overweight are, obviously, poor diet and lack of exercise. The greatest predictor of these factors - more than socioeconomics, changes to our food supply (i.e., the availability of processed foods), or genetics - are eating and exercise habits during childhood.</p>
                </div>

            </div>-->
            
                <div class="mx-auto childrenImages block"  data-scroll-reveal="enter left">
                  <img id="preload" data-scroll-reveal="enter left after 0.5s" src="https://imgur.com/F2eNLaO.png"/>
                  <img id="preload" data-scroll-reveal="enter left after 0.6s" src="https://imgur.com/npMuV4b.png"/>
                  <img id="preload" data-scroll-reveal="enter left after 0.7s" src="https://imgur.com/v9lJV0g.png"/>
                  <img id="preload" class="fourthChild" data-scroll-reveal="enter left after 0.8s" src="https://imgur.com/sJV7kQA.png"  />
                  <img id="preload" data-scroll-reveal="enter left after 0.9s" src="https://imgur.com/xybWTv9.png"  />
                  <img id="preload" data-scroll-reveal="enter left after 1s" src="https://imgur.com/qafLVYp.png"  />
                  <img id="preload" data-scroll-reveal="enter left after 1.1s" src="https://imgur.com/u3Ie2lp.png"  />
                  <img id="preload" data-scroll-reveal="enter left after 1.2s" src="https://imgur.com/k8JXp6e.png"  />
                  <img id="preload" data-scroll-reveal="enter left after 1.4s" src="https://imgur.com/gvh7yCo.png" />
                  <img id="preload" data-scroll-reveal="enter left after 1.3s" src="https://imgur.com/OKTZegF.png"  />
                  
                </div>
                <div class="col-12 text-center" data-scroll-reveal="enter right">
                    <h2 class="searchFactTitle">As of 2019, approximately 36% of Victorian children and adolescents are overweight or obese, and therefore at risk of developing serious 'lifestyle' diseases</h2>
                </div>
        </div>
        <hr class="divider my-4">
        <div class="row item" data-scroll-reveal="enter left">
            <div class="col align-items-center">
                <!--
                <div class="text-center justify-content-center align-items-center item">
                    <br><br><br><h2 style="color:#4CAF50;font-size:3vw">More Than a Third of Our Food is 'Junk'</h2> <br><ul>
              <li style="text-align:left">35% of energy intake for adults</li>
              <li style="text-align:left">39% for children and young people aged 2–18</li>
            </ul><p align="right">‘Junk' foods are those which are typically high in saturated fats, sugars, and salt and include few beneficial nutrients.<br><br>Day-to-day, fewer than one twentieth of Victorians consume minimally-acceptable amounts of nutrients necessary for health and wellbeing.<br><br></p>
                </div>
            <div class="col-4"><img class="img-fluid" src="assets/img/3.png"></div>
            -->
                <div class="col-12 mx-auto pieChart" id="pieChart" style="width:100vw;">
                    
                </div>
                <div class="col-12 text-center" data-scroll-reveal="enter right">
                    <h2 class="searchFactTitle">Only about 1 in 20 children in Victoria get sufficient nutrition day-to-day</h2>
                    <h3 class="linkTitle"><a href="search.php">Click here to understand what your child is eating</a></h3>
                </div>
            </div>
            
        </div>
        <hr class="divider my-4">
        <div class="row item" >
            <div class="col-12 text-center">
                <img data-scroll-reveal="enter right move 0px over 2.5s" src="https://imgur.com/g1ST1Aa.png" style="width: 35vw;height: auto;" />
            </div>
            <div class="col-12 text-center" data-scroll-reveal="enter right">
                    <h2 class="searchFactTitle">Fewer than half get enough exercise</h2>
                    <h3 class="linkTitle"><a href="activities.php">Click here to get your child active</a></h3>
            </div>
        </div>
        <hr class="divider my-4">
        <div class="row item" data-scroll-reveal="enter top over 0.5s">
            <div class="col-12 text-center">
                <img data-scroll-reveal="enter right move 0px over 2.5s" src="https://imgur.com/vaFZFXl.png" style="width: 90vw;max-width: 1200px;height: auto;" />
            </div>
            <div class="col-12 text-center" data-scroll-reveal="enter right">
                    <h2 class="searchFactTitle">More than 35% of their energy comes from 'junk' food</h2>
                    <h3 class="linkTitle"><a href="challenge.php">Click here to assess your child's habits</a></h3>
            </div>
        </div>
        <!--
        
        <h2 style="color:#4CAF50;font-size:calc(8px + 1vw)"" align="middle">Healthy Recipes from Friends of Habitude</h2>
        <div class="row item recepis" data-scroll-reveal="enter bottom over 0.5s">
            <?php /*
                $recipeList = $pdo->prepare('select * from recipes limit 4');
                $recipeList->execute();
                $recipes = $recipeList->fetchAll();
                foreach($recipes as $recipe){
                     //remove second for loop after insert new records
                        echo '<div class="col col-xs-10 col-md-3">
                    <div class="recepisCard">';

                    echo '<a href="http://google.com.au/search?q='.$recipe["header"].' recipes" target=_blank"><img class="img-fluid recepis_img" src="'.$recipe["image_url"].'.jpg" />
                        <div class="recepisCard_info">
                            <h6 class="recepis_name">'.$recipe["header"].'</h6>
                            <p class="recepis_intro">'.$recipe["description"].'</p>';
                    echo '</div></div></a></div>';
                    
                }*/
             ?>
        </div>
    -->
    </div>
<?php 
    include 'footer.php';
 ?>
<script src="assets/js/scrollReveal.js"></script>  
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.2.2/d3.min.js"></script>
<script src="assets/js/pieChart.js"></script> 
<script type="text/javascript">

    (function(){
        window.scrollReveal = new scrollReveal({ reset: true, move: '50px'});
    })();
$(document).ready(function(){
    var a,b,c;
    a = $(window).height();    
    var chartAt = $("#pieChart");
    $(window).scroll(function(){
        b = $(this).scrollTop();  
        c = chartAt.offset().top; 
        if((a+b>c-25) && a+b<(c+45)){
            draw();
        };
    });
});

function animateValue(id, start, end, duration, postScript = "%") {
        var range = end - start,
          current = start,
          increment = end > start ? 1 : -1,
          stepTime = Math.abs(Math.floor(duration / range)),
          obj = document.getElementById(id);

        var timer = setInterval(function() {
          current += increment;
          obj.innerHTML = current + postScript;

          if ((current) === end) {
            clearInterval(timer);
          }
        }, stepTime);
      }

      animateValue("count1", 0, 21, 1000);
      animateValue("count2", 0, 25, 1000);
      animateValue("count3", 0, 27, 1000);
    
</script>
</body>

</html>