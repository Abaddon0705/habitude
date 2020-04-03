<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Challenge - Habitude</title>
    <link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic">
    <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/css/swiper.min.css">
    <link rel="stylesheet" href="assets/css/styles.min.css">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-select.min.css">

</head>
<style>
    .list-group-item{
        padding: .5rem 1.25rem;
    }
    .tinted{
        background-color: #fff6b2;


    }
    .tinted span{
        height: 30px;
        line-height: 30px;
        margin:0;
        padding: 0;
        display: inline-block;
        width: 80%;
        overflow:hidden;
        word-break:keep-all;
        white-space:nowrap;
        text-overflow:ellipsis;
        vertical-align: top;
    }

    #Activites-right,#recipes-right{
        padding: 5px 10px;
        min-height: 340px;
        border-radius: 5px;
    }
    .validationSpan{
        padding-left: 20px;
        font-size: 12px;
        color: red;
        display: none;
    }
    </style>
<body>
    <?php 
        require_once 'conn.php';
        include 'navBar.php';
     ?>
    <header class="masthead" style="background-image: url(&quot;assets/img/aboutusheader.jpg&quot;);">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <div class="site-heading">
                        <h1>Challenge Yourself</h1>
                       <span class="subheading">Find Habitude's quick and informative assessment below, and continue on to take our 7-day challenge, wherein we ask you to select one healthy activity and meal per day, for 7 days in a row.</span>

                </div>
            </div>
        </div>
    </header>
    <div class="container">
        <div class="row">
            <div class="col-12 assessmentForm">
                <form>
                    <div class="form-group">
                        <label for="ageInput" class="block"><span class="queTitle">Q1:</span>How old is your child?</label>
                        <div class="form-inline">
                        <input type="number" class="form-control" style="width: 300px" id="ageInput" min="2" max="15" placeholder="Enter the age" onblur="checkValid(this,2,15,'#ageInputSpan')">
                        <span  id="ageInputSpan" class="validationSpan">Please enter a valid age between 2-15 years.</span>

                        </div>
                    </div>
                    <div class="form-group ">
                        <p><span class="queTitle">Q2:</span>What is your child's gender?</p>
                        <select name="gender" id="gender" class="custom-select" style="width: 300px">
                            <option selected>Gender</option>
                            <option value="0">Female</option>
                            <option value="1">Male</option>
                        </select>
                    </div>
                    <div class="form-group ">
                        <p><span class="queTitle">Q3:</span>How many serves of fruit do they have in an average day?</p>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="fruitRadio0" name="fruitRadio" value="0">
                            <label class="custom-control-label" for="fruitRadio0">0</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="fruitRadio1" name="fruitRadio" value="1">
                            <label class="custom-control-label" for="fruitRadio1">1</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="fruitRadio2" name="fruitRadio" value="2">
                            <label class="custom-control-label" for="fruitRadio2">2</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="fruitRadio3" name="fruitRadio" value="3">
                            <label class="custom-control-label" for="fruitRadio3">3</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="fruitRadio4" name="fruitRadio" value="4">
                            <label class="custom-control-label" for="fruitRadio4">4 or more</label>
                        </div>
                    </div>
                    <div class="form-group ">
                        <p><span class="queTitle">Q4:</span>How many serves of vegetables do they have in an average day?</p>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="vegetableRadio0" name="vegetableRadio" value="0">
                            <label class="custom-control-label" for="vegetableRadio0">0</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="vegetableRadio1" name="vegetableRadio" value="1">
                            <label class="custom-control-label" for="vegetableRadio1">1</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="vegetableRadio2" name="vegetableRadio" value="2">
                            <label class="custom-control-label" for="vegetableRadio2">2</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="vegetableRadio3" name="vegetableRadio" value="3">
                            <label class="custom-control-label" for="vegetableRadio3">3</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="vegetableRadio4" name="vegetableRadio" value="4">
                            <label class="custom-control-label" for="vegetableRadio4">4</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="vegetableRadio5" name="vegetableRadio" value="5">
                            <label class="custom-control-label" for="vegetableRadio5">5</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="vegetableRadio6" name="vegetableRadio" value="6">
                            <label class="custom-control-label" for="vegetableRadio6">6 or more</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="activeInput"><span class="queTitle">Q5:</span>Roughly how many minutes does your child exercise per day?</label>
                        <div class="form-inline">    
                            <input type="number" class="form-control" style="width: 300px" id="activeInput" min="0" placeholder="Enter the minutes" onblur="checkValid(this,0,900,'#exerciseInputSpan')">
                            <span id="exerciseInputSpan" class="validationSpan">Please enter a valid value in minutes</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="sugarInput"><span class="queTitle">Q6:</span>How many teaspoons of sugar would you estimate your child has per day?</label>
                        <div class="form-inline">   
                        <input type="number" class="form-control" style="width: 300px" id="sugarInput" min="0" placeholder="Enter the number of tea spoons" onblur="checkValid(this,0,100,'#sugarInputSpan')">
                        <span id="sugarInputSpan" class="validationSpan">Please enter a valid value for daily sugar intake in teaspoons</span>
                        </div>
                    </div>
                    <div class="form-group ">
                        <p><span class="queTitle">Q7:</span>How many glasses of water does your child drink per day?</p>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="waterRadio0" name="waterRadio" value="0">
                            <label class="custom-control-label" for="waterRadio0">0</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="waterRadio1" name="waterRadio" value="1">
                            <label class="custom-control-label" for="waterRadio1">1</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="waterRadio2" name="waterRadio" value="2">
                            <label class="custom-control-label" for="waterRadio2">2</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="waterRadio3" name="waterRadio" value="3">
                            <label class="custom-control-label" for="waterRadio3">3</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="waterRadio4" name="waterRadio" value="4">
                            <label class="custom-control-label" for="waterRadio4">4</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="waterRadio5" name="waterRadio" value="5">
                            <label class="custom-control-label" for="waterRadio5">5</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="waterRadio6" name="waterRadio" value="6">
                            <label class="custom-control-label" for="waterRadio6">6</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="waterRadio7" name="waterRadio" value="7">
                            <label class="custom-control-label" for="waterRadio7">7</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="waterRadio8" name="waterRadio" value="8">
                            <label class="custom-control-label" for="waterRadio8">8</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="waterRadio9" name="waterRadio" value="9">
                            <label class="custom-control-label" for="waterRadio9">9</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="waterRadio10" name="waterRadio" value="10">
                            <label class="custom-control-label" for="waterRadio10">10 or more</label>
                        </div>
                    </div>
                      <button type="button" onclick="returnFeedback()" class="btn btn-primary pull-right">Submit</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="radioPop">
                    <label id="pieTitle" style="font-size:2vw;color:#25A95F;text-align:center;display:none;">The figure below shows what percent of recommended daily intake your child meets for these simple metrics</label>
                    <div class="radarChart"></div>
                </div>
            </div>
        </div>

        <div class="row">
            <h4 class="col-12 text-center challengeTitle">Please Move Your Selected Activities to the Right</h4>
            <div id="Activites-left" class="list-group col-5" style="padding-right: 0px;margin-right: 10px; border: 2px solid rgb(0,123,255); border-radius: 5px;">
                <div class="list-group-item actItem" data-id="0">Football</div>
                <div class="list-group-item actItem" data-id="1">Art</div>
                <div class="list-group-item actItem" data-id="2">Athletics</div>
                <div class="list-group-item actItem" data-id="3">Cooking</div>
                <div class="list-group-item actItem" data-id="4">Disability</div>
                <div class="list-group-item actItem" data-id="5">Garden</div>
                <div class="list-group-item actItem" data-id="6">Gymnatics</div>
                <div class="list-group-item actItem" data-id="7">Ice Skating</div>
                <div class="list-group-item actItem" data-id="8">Martial Art</div>
                <div class="list-group-item actItem" data-id="9">Relaxation</div>
                <div class="list-group-item actItem" data-id="10">Water Sport</div>
                <div class="list-group-item actItem" data-id="11">Neigbour House</div>
            </div>
            <div class="col-6">
                <div class="row" style="margin-left:10px;border-radius: 5px;background-color: rgba(0,123,255,.5);">
                    <div class="col-md-3 col-lg-3 text-center" style="margin: 5px 0;">
                        <span for="" class="dateSpan">Day 1:</span>
                        <span for="" class="dateSpan">Day 2:</span>
                        <span for="" class="dateSpan">Day 3:</span>
                        <span for="" class="dateSpan">Day 4:</span>
                        <span for="" class="dateSpan">Day 5:</span>
                        <span for="" class="dateSpan">Day 6:</span>
                        <span for="" class="dateSpan">Day 7:</span>

                    </div>
                    <div id="Activites-right" class="list-group col-md-9 col-lg-9 " style="">
                <!--
                <div class="list-group-item tinted">Item 1</div>
                <div class="list-group-item tinted">Item 2</div>
                <div class="list-group-item tinted">Item 3</div>
                <div class="list-group-item tinted">Item 4</div>
                <div class="list-group-item tinted">Item 5</div>
                <div class="list-group-item tinted">Item 6</div>
            -->
                    </div>
                </div>
            </div>

        </div>
        <div class="row">
            <h4 class="col-12 text-center challengeTitle">Please Move Your Selected Recipes to the Right</h4>
            <div id="recipes-left" class="list-group col-5" style="padding-right: 0px;margin-right: 10px; border: 2px solid rgb(40, 167, 69); border-radius: 5px;">
                <div class="list-group-item recipeItem" data-id="0"><span>Waffle Chicken Fingers</span></div>
                <div class="list-group-item recipeItem" data-id="1"><span>Kid-Friendly Pasta Salad</span></div>
                <div class="list-group-item recipeItem" data-id="2"><span>Baked Tofu Tenders</span></div>
                <div class="list-group-item recipeItem" data-id="3"><span>Whole Grain Mini Berry Crisps</span></div>
                <div class="list-group-item recipeItem" data-id="4"><span>Oven-Baked Cheese Crisps</span></div>
                <div class="list-group-item recipeItem" data-id="5"><span>Sweet and Tangy Maple-Roasted Root Vegetables</span></div>
                <div class="list-group-item recipeItem" data-id="6"><span>Crunchy Hawaiian Chicken Wrap</span></div>
                <div class="list-group-item recipeItem" data-id="7"><span>Olive-Crusted Salmon</span></div>
                <div class="list-group-item recipeItem" data-id="8"><span>Tasty Tots</span></div>
                <div class="list-group-item recipeItem" data-id="9"><span>Fabulous French Toast</span></div>
                <div class="list-group-item recipeItem" data-id="10"><span>Chocolate Sweetheart Parfait</span></div>
                <div class="list-group-item recipeItem" data-id="11"><span>Frozen Yogurt Pops</span></div>

            </div>
            <div class="col-6">
                <div class="row" style="margin-left:10px;background-color:rgba(40, 167, 69,.5); border-radius: 5px;">
                <div class="col-md-3 col-lg-3 text-center" style="margin: 5px 0;">
                    <div class="col"><span for="" class="dateSpan">Day 1:</span></div>
                    <span for="" class="dateSpan">Day 2:</span>
                    <span for="" class="dateSpan">Day 3:</span>
                    <span for="" class="dateSpan">Day 4:</span>
                    <span for="" class="dateSpan">Day 5:</span>
                    <span for="" class="dateSpan">Day 6:</span>
                    <span for="" class="dateSpan">Day 7:</span>

                </div>
                <div id="recipes-right" class="col-md-9 col-lg-9 list-group">
                <!--
                <div class="list-group-item tinted">Item 1</div>
                <div class="list-group-item tinted">Item 2</div>
                <div class="list-group-item tinted">Item 3</div>
                <div class="list-group-item tinted">Item 4</div>
                <div class="list-group-item tinted">Item 5</div>
                <div class="list-group-item tinted">Item 6</div>
            -->
            </div>
            </div>
            </div>
            <div class="col-12"><button class="btn btn-primary pull-right" onclick="sentData()">Submit</button></div>
            

        </div>
        <div id="popupDiv" style="width: 300px;height: auto;position: fixed;">
            <p>"A surprisingly healthy treat!", "An easy to know up family favourite", "Way tastier than they sound (but just as healthy)!", "A sweet treat that's hard to beat!", "Delicious, decadent, dead easy, and yet definitely healthy!", "Cooking like mama wasn't able to make!", "A fast and tasty lunch favourite!", "Bougie, yes, but equally satisfying!", "They're tater tots. Kids love 'em!", "The perfect breakfast? We think so!", "Sometime you just need to spoil yourself!", "Who said desert wasn't good for you?!"</p>
        </div>
        <br>
    </div>
    <hr>
    <?php 
        include 'footer.php'
     ?>
    <script src="assets/js/Sortable.min.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js"></script>   
    <script src="assets/js/radioChart.js"></script>
    <script>
        document.addEventListener('mousemove', onMouseUpdate, false);
        document.addEventListener('mouseenter', onMouseUpdate, false);
        var recipeText = ["A surprisingly healthy treat!", "An easy to know up family favourite", "Way tastier than they sound (but just as healthy)!", "A sweet treat that's hard to beat!", "Delicious, decadent, dead easy, and yet definitely healthy!", "Cooking like mama wasn't able to make!", "A fast and tasty lunch favourite!", "Bougie, yes, but equally satisfying!", "They're tater tots. Kids love 'em!", "The perfect breakfast? We think so!", "Sometime you just need to spoil yourself!", "Who said desert wasn't good for you?!"];
        (function(){
          var recipeItems = $('.recipeItem');
          var box = document.getElementById('popupDiv');
          var timer = null; 
          box.onmouseover = recipeItems.onmouseover = function(){
            if(timer) clearTimeout(timer)
              box.style.display = 'block';
                box.style.left = getMouseX();
                box.style.top = getMouseY();
          }
          box.onmouseout = recipeItems.onmouseout = function(){
            timer = setTimeout(function(){
              box.style.display = 'none';
            },400);
         
          }
        })();


        function onMouseUpdate(e) {
          mouseX = e.pageX;
          mouseY = e.pageY;
        }

        function getMouseX() {
          return mouseX;
        }

        function getMouseY() {
          return mouseY;
        }
        new Sortable(document.getElementById('Activites-left'), {
            group: {
                name: 'Activites',
                pull: 'clone',
                put: false // Do not allow items to be put into this list
            },
            animation: 150,
            sort: false // To disable sorting: set sort to false
            
        });

        new Sortable(document.getElementById('Activites-right'), {
            group: 'Activites',
            removeCloneOnHide: true,
            animation: 150,
            onAdd: function (/**Event*/evt) {
                var itemEl = evt.item;  // dragged HTMLElement
                if ($('#Activites-right div').length > 7 ) {
                    itemEl.remove();
                    alert("The number of activites cannot be more than 7.");
                }
                var aItem = document.createElement('a');
                aItem.innerHTML='&times';
                aItem.className += 'btn-floating light-grey addButtonCircular remove';
                //aItem.appendChild(textnode);
                itemEl.className += ' tinted';
                itemEl.appendChild(aItem);
                calProgress();
                //sentData();
            }

        });
        $("#Activites-right").on('click', '.remove', function () {
            $(this).parents(".tinted").remove();
            calProgress();
        });

        new Sortable(document.getElementById('recipes-left'), {
            group: {
                name: 'recipes',
                pull: 'clone',
                put: false // Do not allow items to be put into this list
            },
            animation: 150,
            sort: false
        });

        new Sortable(document.getElementById('recipes-right'), {
            group: 'recipes',
            removeCloneOnHide: false,
            animation: 150, // To disable sorting: set sort to false
            onAdd: function (/**Event*/evt) {
                var itemEl = evt.item;  // dragged HTMLElement
                if ($('#recipes-right div').length > 7 ) {
                    itemEl.remove();
                    alert("Unfortunately, at the number of selections cannot be more than 7.");
                }
                var aItem = document.createElement('a');
                aItem.innerHTML='&times';
                aItem.className += 'btn-floating light-grey addButtonCircular remove';
                //aItem.appendChild(textnode);
                itemEl.className += ' tinted';
                itemEl.appendChild(aItem);
                calProgress();

            }
        });
        $("#recipes-right").on('click', '.remove', function () {
            $(this).parents(".tinted").remove();
            calProgress();
        });

        function calProgress(){
            var progress = parseInt(($('#recipes-right div').length + $('#Activites-right div').length)/7*50);
            $("#progress-bar").css('width', progress + "%");
            $('#progress-bar').text(progress + "%");
        }

        function returnFeedback(){
            var fruitValue = $("input[name='fruitRadio']:checked"). val();
            var vegValue = $("input[name='vegetableRadio']:checked"). val();
            var waterValue = $("input[name='waterRadio']:checked"). val();
            var exerciesValue = $("#activeInput"). val();
            var sugarValue = $("#sugarInput"). val();
            var age = $("#ageInput"). val();
            var gender = $("#gender"). val();
            if (!fruitValue || !vegValue || !waterValue || !exerciesValue || !sugarValue || !age || !gender) {
                //alert(fruitValue+', '+ vegValue+', '+ waterValue+', '+ exerciesValue+', '+ sugarValue+', '+ age+', '+ gender);
                alert("Please complete all components of the questionnaire.");
                
            }else if(age < 2 || age > 15 || !checkInt(age)){
                alert("Please enter a valid age between 2-15 years");
                $("#ageInput").focus();
            }
            else if(exerciesValue < 0 || exerciesValue > 900 || !checkInt(exerciesValue)){
                alert("Please enter a valid value in minutes");
                $("#activeInput").focus();
            }else if(sugarValue < 0 || sugarValue > 100){
                alert("Please enter a valid value in minutes");
                $("#sugarInput").focus();
            }
            else{
                renderRadar([vegValue,fruitValue,waterValue,exerciesValue,sugarValue,gender,age]);
                document.getElementById("pieTitle").style.display="block";
                
            }            
        }
        function checkValid(evt,min,max,id){
            if (evt.value < min ||  evt.value > max || !checkInt(evt.value)) {
                evt.style.border="2px solid red";
                $(id).show();
            }else{
                evt.style.border = "";
                $(id).hide();
            }
        }
        function checkInt(obj){
            return obj%1 === 0
        }
        function sentData(){
            var activeList = $("#Activites-right").find(".list-group-item");
            var recList = $("#recipes-right").find(".list-group-item");
            if (activeList.length <6 || recList.length<6) {
                alert("Please drag 7 items for each Right Pannel.")
            }else{
            act1 = activeList[0].getAttribute("data-id");
            act2 = activeList[1].getAttribute("data-id");
            act3 = activeList[2].getAttribute("data-id");
            act4 = activeList[3].getAttribute("data-id");
            act5 = activeList[4].getAttribute("data-id");
            act6 = activeList[5].getAttribute("data-id");
            act7 = activeList[6].getAttribute("data-id");
            rec1 = recList[0].getAttribute("data-id");
            rec2 = recList[1].getAttribute("data-id");
            rec3 = recList[2].getAttribute("data-id");
            rec4 = recList[3].getAttribute("data-id");
            rec5 = recList[4].getAttribute("data-id");
            rec6 = recList[5].getAttribute("data-id");
            rec7 = recList[6].getAttribute("data-id");
            window.open('canvas.php?actOne='+act1+'&actTwo='+act2+'&actThi='+act3+'&actFour='+act4+'&actFiv='+act5+'&actSix='+act6+'&actSev='+act7+'&recOne='+rec1+'&recTwo='+rec2+'&recThi='+rec3+'&recFour='+rec4+'&recFiv='+rec5+'&recSix='+rec6+'&recSev='+rec7);
            }
        }
    </script>
    
</body>

</html>