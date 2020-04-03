<!DOCTYPE html>
<html>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
  <head>
    <style>
      .form-style-challenge {
        width: 450px;
        padding: 30px;
        margin: 40px auto;
        background: #FFF;
        border-radius: 10px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
        -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
        -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
      }

      .form-style-challenge .inner-wrap {
        padding: 30px;
        background: #F8F8F8;
        border-radius: 6px;
        margin-bottom: 15px;
      }

      .form-style-challenge label h4 {
        color: #0E6B37;
      }

      .form-style-challenge h1 {
        background: #25A95F;
        padding: 20px 30px 15px 30px;
        margin: -30px -30px 30px -30px;
        border-radius: 10px 10px 0 0;
        -webkit-border-radius: 10px 10px 0 0;
        -moz-border-radius: 10px 10px 0 0;
        color: #fff;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12);
        font: normal 30px 'Bitter', serif;
        -moz-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);
        -webkit-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);
        box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);
        border: 1px solid #118946;
      }

      .form-style-challenge h1>span {
        display: block;
        margin-top: 2px;
        font: 13px Arial, Helvetica, sans-serif;
      }

      .form-style-challenge label {
        display: block;
        font: 13px Arial, Helvetica, sans-serif;
        color: #888;
        margin-bottom: 15px;
      }

      .form-style-challenge input[type="text"],
      .form-style-challenge input[type="date"],
      .form-style-challenge input[type="datetime"],
      .form-style-challenge input[type="email"],
      .form-style-challenge input[type="number"],
      .form-style-challenge input[type="search"],
      .form-style-challenge input[type="time"],
      .form-style-challenge input[type="url"],
      .form-style-challenge input[type="password"],
      .form-style-challenge textarea,
      .form-style-challenge select {
        display: block;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        width: 100%;
        padding: 8px;
        border-radius: 6px;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border: 2px solid #fff;
        box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);
        -moz-box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);
        -webkit-box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);
      }

      .form-style-challenge .section {
        font: normal 20px 'Bitter', serif;
        color: #0E6B37;
        margin-bottom: 5px;
      }

      .form-style-challenge .section span {
        background: #0E6B37;
        padding: 5px 10px 5px 10px;
        position: absolute;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border: 4px solid #fff;
        font-size: 14px;
        margin-left: -45px;
        color: #fff;
        margin-top: -3px;
      }

      .form-style-challenge input[type="button"],
      .form-style-challenge input[type="submit"] {
        background: #0E6B37;
        padding: 8px 20px 8px 20px;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        color: #fff;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12);
        font: normal 30px 'Bitter', serif;
        -moz-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);
        -webkit-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);
        box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);
        border: 1px solid #118946;
        font-size: 15px;
      }

      .form-style-challenge input[type="button"]:hover,
      .form-style-challenge input[type="submit"]:hover {
        background: #0E6B37;
        -moz-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.28);
        -webkit-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.28);
        box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.28);
      }

      .form-style-challenge .privacy-policy {
        float: right;
        width: 250px;
        font: 12px Arial, Helvetica, sans-serif;
        color: #4D4D4D;
        margin-top: 10px;
        text-align: right;
      }
      .pdfBox{
        width: 100%;
        overflow: hidden;
      }
      .pdfBtn{
        float: right;
        padding:10px 20px;
        color: white;
        background: rgba(40, 167, 69,.7);
        border: 0;
        border-radius: 5px;
      }
      .pdfBtn:hover{
        background: rgba(36, 148, 62,.7);
        color: grey;
      }

    </style>
  </head>

  <body>
  
   <?php  
    $recList = ["Waffle Chicken Fingers","Kid-Friendly Pasta Salad","Baked Tofu Tenders","Whole Grain Mini Berry Crisps","Oven-Baked Cheese Crisps","Sweet and Tangy Maple-Roasted Root Vegetables",
"Crunchy Hawaiian Chicken Wrap",
"Olive-Crusted Salmon",
"Tasty Tots",
"Fabulous French Toast",
"Chocolate Sweetheart Parfait",
"Frozen Yogurt Pops"];

$actList = ["Football","Art","Athletics","Cooking","Disability","Garden", "Gymnastics","Ice Skating","Martial Art","Relaxation","Water Sport","Neighbour House"];

     $recks = ["•        Make the dipping sauce: Whisk the maple syrup and hot sauce in a bowl.•        Make the chicken fingers: Whisk the egg, buttermilk, mustard and 1/2 teaspoon each salt and pepper in a large bowl. Add the chicken and toss to coat.•        Pulse the waffles in a food processor to make fine crumbs. Transfer the crumbs to a baking sheet.•        Heat 1/2 inch of vegetable oil in a large skillet or heavy-bottomed pot until hot but not smoking. Remove the chicken from the egg mixture, shaking off any excess, and coat with the waffle crumbs, pressing firmly to adhere. Fry the chicken in batches, adjusting the heat if necessary, until golden brown and cooked through, about 2 minutes per side. Transfer to a rack set over a baking sheet to drain. Serve with the dipping sauce.", "•        Cook the pasta according to the packet instructions. Then drain and rinse in cold water until cool. Set aside. •        Cut the bacon into 1/2-inch pieces and throw into a large skillet. Saute until slightly crisp, and then remove to a paper-towel-lined-plate. •        For the dressing, mix the mayonnaise, milk, vinegar, salt, and sugar if using in a small bowl. •        Stir together the pasta, dressing, tomatoes, bacon, Cheddar and green onions in a large mixing bowl. Taste for seasonings, adding more salt and pepper if needed. •        Stir in the basil at the end.", "•        Preheat the oven to 425 degrees F. Generously coat a rimmed baking sheet with cooking spray or vegetable oil.•        Remove the tofu from the packaging, and drain the excess water. Halve 1 of the blocks crosswise, halve each piece crosswise, then halve each piece again, for a total of 8 pieces 3 1/2 inches long by 1 3/4 inches wide by 1/2 inch thick. Repeat with the other block of tofu. Lay the pieces on 2 paper towels, and blot dry with 2 more, gently squeezing out as much moisture as possible. Sprinkle the tofu evenly with 1 teaspoon salt, and let stand.•        Put the cornstarch on a plate. Crack the eggs in a shallow bowl, add 1 teaspoon salt and a few grinds of pepper and whisk until combined. Put the panko, 1 teaspoon salt and a few grinds of pepper in another shallow bowl. Line up the tofu, cornstarch, eggs, panko and the prepared baking sheet.•        Working with 1 to 2 pieces of tofu at a time, coat them in the cornstarch, shaking off any excess, dip in the egg to coat, dredge in the panko, pressing the panko gently into the surface of the tofu, then transfer the breaded tofu to the baking sheet. Generously coat the tops of the tofu with cooking spray. Bake until browned and crisp, 30 to 35 minutes, turning the baking sheet halfway through.•        Meanwhile, heat the vegetable oil in a small nonstick skillet over medium heat. Add the ginger and garlic, and cook, stirring constantly, until fragrant and light brown, about 1 minute. Reduce the heat to low, stir in the preserves, sesame oil, vinegar and chili sauce until combined and cook until heated through, about 1 minute. Season the dipping sauce with 1/2 teaspoon salt, transfer to a serving bowl and serve alongside the tofu.", "•        Heat oven to 350F. Spray ramekins with oil.•        Chop strawberries into 1/2-inch pieces. Mix berries in a small bowl. Divide berries between ramekins.•        In a bowl, mix together oats, flour, brown sugar, walnuts, cinnamon, and nutmeg. Pour butter over the mixture and mix to combine. Sprinkle evenly over the berries.•        Place ramekins on a baking sheet and bake 25 minutes, or until berries are bubbly and tops are golden. Remove from oven and let cool for at least 5 minutes before serving.", "•        Preheat oven to 350 F.•        Pile 2 tablespoons of cheese (depending on the size you want) on a baking sheet covered with a silicone mat, or parchment paper oiled on both sides. Flatten the tops so they are in more or less an even pile. There should be at least two inches between smaller mounds, 4 inches between larger ones.•        Bake 5 to 6 minutes until they are a light golden brown (they will be a little darker at the edges). It happens fast, so watch carefully.•        If you want to mold the crisps into a shape, the thing to do is to drape them while still warm. You can make cups by draping over an upturned glass, or taco shell shapes by draping over any cylindrical object such as a rolling pin or the side of a straight-sided glass.", "•        Preheat oven to 425F. Spray 2 large baking sheets with baking spray or coat with oil.•        Cut each vegetable into 1 ½ x ½ inch thick pieces. Cutting vegetables into uniformly-sized pieces ensures they will cook at the same rate.•        Place vegetables in piles in the center of each baking sheet. Drizzle with garlic-infused oil and toss to coat. Sprinkle with thyme, salt, and pepper and toss again. Spread vegetables in a single layer on baking sheets. Place in the middle of the oven and roast until vegetables are a deep golden brown on the bottom, 20 to 25 minutes.•        While vegetables are roasting, combine maple syrup and balsamic vinegar in a small bowl.•        Remove pan from oven and drizzle maple vinegar mixture evenly over vegetables, then turn pieces over to coat. Turn vegetable pieces so that an un-browned side is face down on the pan.•        Return the pan to the oven and roast until the mixture is bubbling and mostly reduced, 5 minutes. Stir vegetable pieces to coat with the syrup mixture. Remove any pieces that appear in danger of burning and return the rest to the oven to roast until mixture is dry, 3 to 4 additional minutes.•        Remove vegetables from the pan while still quite warm, as they can stick somewhat when cool. Serve warm or at room temperature.", "•        Prepare dressing by whisking mayonnaise, vinegar, sugar, poppy seeds, garlic powder, onion powder, and chili powder together. Set aside in refrigerator.•        Mix broccoli slaw, drained pineapple, and spinach.•        Put ½ cup of the broccoli/pineapple/spinach mixture on a wheat wrap.•        Top with chicken.•        Add 1 tablespoon dressing to each tortilla.•        Wrap tortillas, burrito style. Cut on diagonal. Serve immediately or refrigerate.", "•        Put oven on broiler setting.•        Line a rimmed baking sheet or roasting pan with foil and spray with cooking spray.•        Place oven rack 6 inches from broiler flame. (Get a grownup's help with this.)•        Place olives, bread, and lemon zest into a food processor and process until it reaches a paste texture. (Again, get an adult's help.)•        Pat salmon dry and spread a heaping tablespoon of olive mixture over each piece.•        Broil fish about 15 minutes, checking halfway through to ensure it's not burning.", "•        Preheat oven to 400°F.•        Steam or boil sweet potatoes until barely tender, approximately 15 minutes. Let cool.•        Peel cooled potatoes. Shred them using a grater or food processor.•        Puree chickpeas, including liquid, until smooth.•        Combine shredded sweet potatoes and chickpeas in a large bowl.•        Add oil, salt, pepper, onion powder, and cinnamon. Mix well.•        Spray sheet pans with cooking spray.•        Scoop heaping tablespoons of the mixture and place 1 inch apart on prepared sheet pans.•        Bake in oven for approximately 10-12 minutes, until starting to brown.", "•        Crack the egg into a medium-size bowl and beat well. Then mix in the milk and vanilla extract.•        Put the margarine in a frying pan. Heat the pan on the stovetop on medium heat. It's hot enough when the margarine starts to bubble.•        Dunk each piece of bread in the egg mixture. Make sure the bread is totally covered.•        Cook the bread in the frying pan on low heat until the underside is light brown (about 5 minutes).•        Use a spatula to flip the bread over, and cook again for another 5 minutes.•        Use the spatula to transfer the French toast to a plate.", "•        In medium bowl, whisk together cocoa powder and vanilla.•        Add honey and yogurt and stir until they're well combined with cocoa mixture. It will turn light brown.•        Spoon 2 tablespoons of yogurt mixture into the bottom of four clear glasses.•        Top with some raspberries and repeat until all of the yogurt and raspberries are used up.•        Sprinkle each parfait with chocolate shavings.•        Serve or refrigerate until ready to serve.", "•        Pour yogurt into paper cups. Fill them almost to the top.•        Stretch a small piece of plastic wrap across the top of each cup.•        Using the popsicle stick, poke a hole in the plastic wrap. Stand the stick straight up in the center of the cup.•        Put the cups in the freezer until the yogurt is frozen solid.•        Remove the plastic wrap, peel away the paper cup, and eat your pop!"];

  
   ?>
    <div class="form-style-challenge" id="content">
      <h1>Congratulations!<span>This is an admirable investment in your child's quality of life!</span></h1>
      <form>
        <div class="section"><span>1</span>Your First Day</div>
        <div class="inner-wrap">
          <label>Activity<h4 id="formAct1"><?php echo $actList[$_GET['actOne']] ?></h4></label>
          <label>Recipe<h4 id="formRec11"><?php echo $recList[$_GET['recOne']] ?></h4><h4 id="formRec12"><?php echo $recks[$_GET['recOne']] ?></h4></label>
        </div>

        <div class="section"><span>2</span>Your Second Day</div>
        <div class="inner-wrap">
          <label>Activity<h4 id="formAct2"><?php echo $actList[$_GET['actTwo'] ]?></h4></label>
          <label>Recipe<h4 id="formRec21"><?php echo $recList[$_GET['recTwo'] ]?></h4><h4 id="formRec22"><?php echo $recks[$_GET['recTwo']] ?></h4></label>
        </div>

        <div class="section"><span>3</span>Your Third Day</div>
        <div class="inner-wrap">
          <label>Activity<h4 id="formAct3"><?php echo $actList[$_GET['actThi'] ]?></h4></label>
          <label>Recipe<h4 id="formRec31"><?php echo $recList[$_GET['recThi'] ]?></h4><h4 id="formRec32"><?php echo $recks[$_GET['recThi']] ?></h4></label>
        </div>

        <div class="section"><span>4</span>Your Fourth Day</div>
        <div class="inner-wrap">
          <label>Activity<h4 id="formAct4"><?php echo $actList[$_GET['actFour']] ?></h4></label>
          <label>Recipe<h4 id="formRec41"><?php echo $recList[$_GET['recFour']] ?></h4><h4 id="formRec42"><?php echo $recks[$_GET['recFour']] ?></h4></label>
        </div>

        <div class="section"><span>5</span>Your Fifth Day</div>
        <div class="inner-wrap">
          <label>Activity<h4 id="formAct5"><?php echo $actList[$_GET['actFiv'] ]?></h4></label>
          <label>Recipe<h4 id="formRec51"><?php echo $recList[$_GET['recFiv'] ]?></h4><h4 id="formRec52"><?php echo $recks[$_GET['recFiv']] ?></h4></label>
        </div>

        <div class="section"><span>6</span>Your Sixth Day</div>
        <div class="inner-wrap">
          <label>Activity<h4 id="formAct6"><?php echo $actList[$_GET['actSix'] ]?></h4></label>
          <label>Recipe<h4 id="formRec61"><?php echo $recList[$_GET['recSix'] ]?></h4><h4 id="formRec62"><?php echo $recks[$_GET['recSix']] ?></h4></label>
        </div>

        <div class="section"><span>7</span>Your Seventh Day</div>
        <div class="inner-wrap">
          <label>Activity<h4 id="formAct7"><?php echo $actList[$_GET['actSev'] ]?></h4></label>
          <label>Recipe<h4 id="formRec71"><?php echo $recList[$_GET['recSev'] ]?></h4><h4 id="formRec72"><?php echo $recks[$_GET['recSev']] ?></h4></label>
        </div>

        
      </form>
      <div class = "pdfBox"><button class = "pdfBtn"  onclick="window.print();" type="button">PDF</button></div>
    </div>
  <script type='text/javascript'>
  function screenshot(){
    html2canvas(document.body).then(function(canvas) {
    document.body.appendChild(canvas);
   });
  }


  </script>
  </body>

</html>
