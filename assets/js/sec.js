
      function liquidFillGaugeDefaultSettings() {
        return {
          minValue: 0, // The gauge minimum value.
          maxValue: 100, // The gauge maximum value.
          circleThickness: 0.025, // The outer circle thickness as a percentage of it's radius.
          circleFillGap: 0.05, // The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius.
          circleColor: "#178BCA", // The color of the outer circle.
          waveHeight: 0, // The wave height as a percentage of the radius of the wave circle.
          waveCount: 3, // The number of full waves per width of the wave circle.
          waveRiseTime: 1000, // The amount of time in milliseconds for the wave to rise from 0 to it's final height.
          waveAnimateTime: 2500, // The amount of time in milliseconds for a full wave to enter the wave circle.
          waveRise: true, // Control if the wave should rise from 0 to it's full height, or start at it's full height.
          waveHeightScaling: true, // Controls wave size scaling at low and high fill percentages. When true, wave height rones it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill.
          waveAnimate: true, // Controls if the wave scrolls or is static.
          waveColor: "#178BCA", // The color of the fill wave.
          waveOffset: 0.25, // The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave.
          textVertPosition: 0.5, // The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top.
          textSize: 0.6, // The relative height of the text to display in the wave circle. 1 = 50%
          valueCountUp: true, // If true, the displayed value counts up from 0 to it's final value upon loading. If false, the final value is displayed.
          displayPercent: true, // If true, a % symbol is displayed after the value.
          textColor: "#045681", // The color of the value text when the wave does not overlap it.
          waveTextColor: "#A4DBf8" // The color of the value text when the wave overlaps it.
        };
      }

      function loadLiquidFillGauge(elementId, label, value, config, type) { // type should be 'only', 'first', or 'second'
        //alert(elementId);
        if (config == null) config = liquidFillGaugeDefaultSettings();
        //alert(label);  
        var gauge = d3.select("#" + elementId);
        var radius = type === "only" ? Math.min(parseInt(gauge.style("width")), parseInt(gauge.style("height"))) / 2 : Math.min(parseInt(gauge.style("width")) * 2, parseInt(gauge.style("height"))) / 2;
        var locationX;
        var locationY = parseInt(gauge.style("height")) / 2 - radius;
        var fillPercent = Math.max(config.minValue, Math.min(config.maxValue, value)) / config.maxValue;

        if (type === "only") {
          locationX = parseInt(gauge.style("width")) / 2 - radius
        } else if (type === "first") {
          locationX = parseInt(gauge.style("width")) - radius
        } else {
          locationX = 0 - radius
        }

        var waveHeightScale;
        if (config.waveHeightScaling) {
          waveHeightScale = d3.scaleLinear()
            .range([0, config.waveHeight, 0])
            .domain([0, 50, 100]);
        } else {
          waveHeightScale = d3.scaleLinear()
            .range([config.waveHeight, config.waveHeight])
            .domain([0, 100]);
        }

        var textPixels = (config.textSize * radius / 2);
        var textLabelPixels = (config.textSize * radius / 2);
        var textPercentPixels = (config.textSize * radius / 3);
        var textFinalValue = parseFloat(value).toFixed(2);
        var textStartValue = config.valueCountUp ? config.minValue : textFinalValue;
        var percentText = config.displayPercent ? "%" : "";
        var circleThickness = config.circleThickness * radius;
        var circleFillGap = config.circleFillGap * radius;
        var fillCircleMargin = circleThickness + circleFillGap;
        var fillCircleRadius = radius - fillCircleMargin;
        var waveHeight = fillCircleRadius * waveHeightScale(fillPercent * 100);

        var waveLength = fillCircleRadius * 2 / config.waveCount;
        var waveClipCount = 1 + config.waveCount;
        var waveClipWidth = waveLength * waveClipCount;

        // Rounding functions so that the correct number of decimal places is always displayed as the value counts up.
        var textRounder = function(value) {
          return Math.round(value);
        };
        if (parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))) {
          textRounder = function(value) {
            return parseFloat(value).toFixed(1);
          };
        }
        if (parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue)) && type === "only") {
          textRounder = function(value) {
            return parseFloat(value).toFixed(2);
          };
        }

        // Data for building the clip wave area.
        var data = [];
        for (var i = 0; i <= 40 * waveClipCount; i++) {
          data.push({
            x: i / (40 * waveClipCount),
            y: (i / (40))
          });
        }

        // Scales for drawing the outer circle.
        var gaugeCircleX = d3.scaleLinear().range([0, 2 * Math.PI]).domain([0, 1]);
        var gaugeCircleY = d3.scaleLinear().range([0, radius]).domain([0, radius]);

        // Scales for controlling the size of the clipping path.
        var waveScaleX = d3.scaleLinear().range([0, waveClipWidth]).domain([0, 1]);
        var waveScaleY = d3.scaleLinear().range([0, waveHeight]).domain([0, 1]);

        // Scales for controlling the position of the clipping path.
        var waveRiseScale = d3.scaleLinear()
          .range([(fillCircleMargin + fillCircleRadius * 2 + waveHeight), (fillCircleMargin - waveHeight)])
          .domain([0, 1]);
        var waveAnimateScale = d3.scaleLinear()
          .range([0, waveClipWidth - fillCircleRadius * 2]) // Push the clip area one full wave then snap back.
          .domain([0, 1]);

        // Scale for controlling the position of the text within the gauge.
        var textRiseScaleY = d3.scaleLinear()
          .range([fillCircleMargin + fillCircleRadius * 2, (fillCircleMargin + textPixels * 0.7)])
          .domain([0, 1]);


        var gaugeCircleArc = d3.arc()
          .startAngle(gaugeCircleX(0))
          .endAngle(gaugeCircleX(1))
          .outerRadius(gaugeCircleY(radius))
          .innerRadius(gaugeCircleY(radius - circleThickness));
        // Center the gauge within the parent SVG.

        var gaugeGroup = gauge.append("g")
          .attr('transform', 'translate(' + locationX + ',' + locationY + ')');

        // Draw the outer circle.
        gaugeGroup.append("path")
          .attr("d", gaugeCircleArc)
          .style("fill", config.circleColor)
          .style("opacity", "0.75")
          .attr('transform', 'translate(' + radius + ',' + radius + ')');

        // Text where the wave does not overlap.
        var label1 = gaugeGroup.append("text")
          .text(label)
          .attr("class", "liquidFillGaugeText")
          .attr("text-anchor", "middle")
          .attr("font-size", textLabelPixels + "px")
          .style("fill", config.textColor)
          .attr('transform', 'translate(' + radius + ',' + textRiseScaleY(0.95 - config.textVertPosition /*1 - config.textVertPosition*/ ) + ')');

        var percent1 = gaugeGroup.append("text")
          .text(textRounder(textFinalValue) + percentText)
          .attr("class", "liquidFillGaugeText")
          .attr("text-anchor", "middle")
          .attr("font-size", (type === "only" ? textPixels : textPercentPixels) + "px")
          .style("fill", config.textColor)
          .attr('transform', 'translate(' + (type === "only" ? radius : type === "first" ? radius / 1.6 : radius * 1.4) + ',' + textRiseScaleY(0.4) + ')');
          //alert(textRounder(textFinalValue) + percentText);
        // The clipping wave area.
        var clipArea = d3.area()
          .x(function(d) {
            return waveScaleX(d.x);
          })
          .y0(function(d) {
            return waveScaleY(Math.sin(Math.PI * 2 * config.waveOffset * -1 + Math.PI * 2 * (1 - config.waveCount) + d.y * 2 * Math.PI));
          })
          .y1(function(d) {
            return (fillCircleRadius * 2 + waveHeight);
          });
        var waveGroup = gaugeGroup.append("defs")
          .append("clipPath")
          .attr("id", "clipWave" + elementId);
        var wave = waveGroup.append("path")
          .datum(data)
          .attr("d", clipArea);

        // The inner circle with the clipping wave attached.
        var fillCircleGroup = gaugeGroup.append("g")
          .attr("clip-path", "url(#clipWave" + elementId + ")");

        fillCircleGroup.append("circle")
          .attr("cx", radius)
          .attr("cy", radius)
          .attr("r", fillCircleRadius)
          .style("fill", config.waveColor);

        // Text where the wave does overlap.
        var label2 = fillCircleGroup.append("text")
          .text(label)
          .attr("class", "liquidFillGaugeText")
          .attr("text-anchor", "middle")
          .attr("font-size", textLabelPixels + "px")
          .style("fill", config.waveTextColor)
          .attr('transform', 'translate(' + radius + ',' + textRiseScaleY(0.95 - config.textVertPosition /*1 - config.textVertPosition*/ ) + ')');

          
        var percent2 = fillCircleGroup.append("text")
          .text(textRounder(textFinalValue) + percentText)
          .attr("class", "liquidFillGaugeText")
          .attr("text-anchor", "middle")
          .attr("font-size", (type === "only" ? textPixels : textPercentPixels) + "px")
          .style("fill", config.waveTextColor)
          .attr('transform', 'translate(' + (type === "only" ? radius : type === "first" ? radius / 1.6 : radius * 1.4) + ',' + textRiseScaleY(0.4) + ')');

        // Make the value count up.
        if (config.valueCountUp) {
          var percentTween = function() {
            var i = d3.interpolate(this.textContent, textFinalValue);
            return function(t) {
              this.textContent = textRounder(i(t)) + percentText;
            }

          };
          //alert(percentTween);
          percent1.transition()
            .duration(config.waveRiseTime)
            .tween("text", percentTween);
          percent2.transition()
            .duration(config.waveRiseTime)
            .tween("text", percentTween);
        }

        // Make the wave rise. wave and waveGroup are separate so that horizontal and vertical movement can be controlled independently.
        var waveGroupXPosition = fillCircleMargin + fillCircleRadius * 2 - waveClipWidth;
        if (config.waveRise) {
          waveGroup.attr('transform', 'translate(' + waveGroupXPosition + ',' + waveRiseScale(0) + ')')
            .transition()
            .duration(config.waveRiseTime)
            .attr('transform', 'translate(' + waveGroupXPosition + ',' + waveRiseScale(fillPercent) + ')')
            .on("start", function() {
              wave.attr('transform', 'translate(1,0)');
            }); // This transform is necessary to get the clip wave positioned correctly when waveRise=true and waveAnimate=false. The wave will not position correctly without this, but it's not clear why this is actually necessary.
        } else {
          waveGroup.attr('transform', 'translate(' + waveGroupXPosition + ',' + waveRiseScale(fillPercent) + ')');
        }

        if (config.waveAnimate) animateWave();

        function animateWave() {
          wave.transition()
            .duration(config.waveAnimateTime)
            .ease(d3.easeLinear)
            .attr('transform', 'translate(' + waveAnimateScale(1) + ',0)')
            .on("end", function() {
              wave.attr('transform', 'translate(' + waveAnimateScale(0) + ',0)');
              animateWave(config.waveAnimateTime);
            });
        }
      }
      
      function gaugeTooltip(gauge) {
        d3.select(gauge).append("g").attr("class", "gaugeTooltip").append("rect").attr("x", mouseX).attr("y", mouseY).attr("width", 50).attr("height", 50).attr("fill", "red")
      };

      var lightWidth = [1, 6, 6]; //2,4];//numberFoods === 1 ? ["100%", "50%", "25%"] : ["50%", "25%", "12.5%"];
      var lightLocation = ["#bigPictureGauges", "#goodStuffGauges", "#goodStuffGauges"]; //"#badStuffGauges"];
      var tWidth;


        let trafficLights=[["#28b463", "#7fda76"],["#c70039", "#f39898"],["#f39c12", "#e3db55"]];
        var foodColours = ["#00e7e7", "#e70073"];

        var trafficLight1,trafficLigthList;
        var foodNuts;
        var prop;
          
      function setTraffic(/*foodNuts*/) {
        if (boolEat >= 1) {
          boolEat = true;
          trafficLight1 = trafficLights[0];
        } else if (boolEat <= -1) {
          boolEat = false;
          trafficLight1 = trafficLights[1];
        } else {
          boolEat = null;
          trafficLight1 = trafficLights[2];
        };
          trafficLigthList = [trafficLight1,
              boolNut(foodNuts[0], sugarDI, "bad", prop),
              boolNut(foodNuts[1], proteinDI, "good", prop),
              boolNut(foodNuts[2], badFatDI, "bad", prop),
              boolNut(foodNuts[3], goodFatDI, "good", prop),
              boolNut(foodNuts[4], carbsDI, "bad", prop),
              boolNut(foodNuts[5], saltDI, "bad", prop)];
        

      };
      function setConfig(col1,col2,index,i){
            var config = liquidFillGaugeDefaultSettings();
            config.circleColor = (numberFoods === 2 ? foodColours[i] : trafficLigthList[index][i]);
            config.textColor = col1;
            config.waveTextColor = "#fff" //trafficLight1[1];
            config.waveColor = col2;
            config.circleThickness = 0.1;
            config.textVertPosition = 0.2;
            config.waveAnimateTime = 1000;
            return config;
        };
        
      function renderConfigs(){

      for (j = 1; j < 8; j++) {
        for (i = 0; i < numberFoods; i++) {
          //alert(numberFoods + "<nfoods | j>" + j + " | i>" + i)
          if (j === 1) {
            d3.select(lightLocation[0]).append("svg") //, "#img")
            .attr("class", "foodSvg")
            .attr("id", "fillgauge" + j.toString() + "_" + (i + 1).toString())
            .attr("width", d3.select(lightLocation[0]).style("width").slice(0, -2) / 2 / lightWidth[0] * (numberFoods === 1 ? 2 : 1) - 10)
            .attr("height", "100%");
          } else if (j === 3 || j === 5) {
            d3.select(lightLocation[1]).append("svg") //, "#img")
            .attr("class", "foodSvg")
            .attr("id", "fillgauge" + j.toString() + "_" + (i + 1).toString())
            .attr("width", d3.select(lightLocation[1]).style("width").slice(0, -2) / 2 / lightWidth[1] * (numberFoods === 1 ? 2 : 1) - 10)
            .attr("height", "100%");
          } else {
            d3.select(lightLocation[2]).append("svg") //, "#img")
            .attr("class", "foodSvg")
            .attr("id", "fillgauge" + j.toString() + "_" + (i + 1).toString())
            .attr("width", d3.select(lightLocation[2]).style("width").slice(0, -2) / 2 / lightWidth[2] * (numberFoods === 1 ? 2 : 1) - 10)
            .attr("height", "100%");
          }
        }
      }

      for (i = 0; i < numberFoods; i++) {
       
        if (numberFoods === 1) {
          type = "only";
        } else if (numberFoods === 2 && i === 0) {
          type = "first";
        } else {
          type = "second";
        }

        if (i === 1) {
          prop = proportionCalories2;
          foodNuts = secondNuts;
        } else {
          prop = proportionCalories;
          foodNuts = firstNuts;

        }

        setTraffic();
        
        var config1= setConfig(trafficLight1[0],trafficLight1[0],0,i);
        loadLiquidFillGauge("fillgauge1_" + (i + 1).toString(), "Calories", prop * 100, config1, type);
        //alert("");

        var config2= setConfig("#ffc90e","#ffc90e",1,i);
        loadLiquidFillGauge("fillgauge2_" + (i + 1).toString(), "Sugar", foodNuts[0] / sugarDI * 100, config2, type);

        var config3= setConfig("#96bf18","#96bf18",2,i);
        loadLiquidFillGauge("fillgauge3_" + (i + 1).toString(), "Protein", foodNuts[1] / proteinDI * 100, config3, type);

        var config4= setConfig("#5160a4","#5160a4",3,i);
        loadLiquidFillGauge("fillgauge4_" + (i + 1).toString(), "Bad Fat", foodNuts[2] / badFatDI * 100, config4, type);

        var config5= setConfig("#C8BFE7","#C8BFE7",4,i);
        loadLiquidFillGauge("fillgauge5_" + (i + 1).toString(), "Good Fat", foodNuts[3] / goodFatDI * 100, config5, type);

        var config6= setConfig("#804040","#804040",5,i);
        loadLiquidFillGauge("fillgauge6_" + (i + 1).toString(), "Carbs", foodNuts[4] / carbsDI * 100, config6, type);

        var config7 = setConfig("#400040","#400040",6,i);
        loadLiquidFillGauge("fillgauge7_" + (i + 1).toString(), "Sodium", foodNuts[5] / saltDI * 100, config7, type);
      };
    };
    
    //renderConfigs();
      var badNutrientList = [];

      if (naySugar) {
        badNutrientList = badNutrientList.concat("sugar");
      };
      if (nayFat) {
        badNutrientList = badNutrientList.concat("unhealthy fats");
      };
      if (nayCarbs) {
        badNutrientList = badNutrientList.concat("carbohydrates");
      };
      if (naySalt) {
        badNutrientList = badNutrientList.concat("salt");
      };
/*
      if (numberFoods === 1) {
        var badNutrientProse = "";
        for (i = 0; i < badNutrientList.length; i++) {
          badNutrientProse = badNutrientProse + badNutrientList[i];

          if (i + 2 < badNutrientList.length) {
            badNutrientProse = badNutrientProse + ", ";
          } else if (i + 1 < badNutrientList.length) {
            badNutrientProse = badNutrientProse + (badNutrientList.length === 2 ? " and " : ", and ");
          }
        };

        var bigPictureProse = "You";

        // yes or no or maybe
        if (boolEat) {
          bigPictureProse = bigPictureProse + " can <b>go ahead</b> and eat this.";
        } else if (boolEat === null) {
          bigPictureProse = bigPictureProse + " should <b>limit</b> how much of this you eat.";
        } else {
          bigPictureProse = bigPictureProse + " should probably <b>avoid</b> this.";
        }

        // calories
        if (proportionCalories >= 0.2) {
          bigPictureProse = bigPictureProse + "<br><br>There are a <b>lot</b> of calories in here - " + Math.floor(calories) + " or " + Math.floor(proportionCalories * 100) + "% of your daily intake" + " -, enough to replace" + (proportionCalories >= 0.5 ? " more than one meal." : " a whole meal.");
        } else if (proportionCalories >= 0.1) {
          bigPictureProse = bigPictureProse + "<br><br>There are enough calories in here - " + Math.floor(calories) + " or " + Math.floor(proportionCalories * 100) + "% of your daily intake" + " - to be a fairly hearty snack. Make sure you're not ruining your appetite!";
        } else {
          bigPictureProse = bigPictureProse + "<br><br>There are few enough calories in a serve - " + Math.floor(calories) + " or " + Math.floor(proportionCalories * 100) + "% of your daily intake" + " - to justify this as a light snack. Don't rely on this to keep you going!";
        }

        // protein and good fats
        if (yayProtein) {
          bigPictureProse = bigPictureProse + "<br>It has a good amount of protein" + (yayFat ? " and healthy fats" : "") + ", given its caloric content.";
        } else if (yayFat) {
          bigPictureProse = bigPictureProse + "<br>It has a good amount of healthy fats, given its caloric content."
        } else {
          bigPictureProse = bigPictureProse + "<br>There really aren't enough beneficial nutrients (such as protein or healthy fats) in here for the amount of calories."
        }

        // bad shit
        if (badNutrientList.length > 0) {
          bigPictureProse = bigPictureProse + "<br>" + ((yayProtein || yayFat) ? "However, t" : "T") + "here is a disproportionate amount of " + badNutrientProse + " given, again, the amount of calories that a serve of this comprises.";
        } else {
          bigPictureProse = bigPictureProse + "<br>" + ((yayProtein || yayFat) ? "However, t" : "T") + "here are" + ((yayProtein || yayFat) ? " at least" : "") + " relatively low proportions of less-healthy nutrients.";
        }

        var goodStuffProse = (firstNuts[1] === 0 ? "There is <b>no protein</b> in a serving of this product" : "There are <b>" + firstNuts[1].toFixed(2) + " grams of protein</b> in on serving of this product. As you can see, that's approximately " + Math.round(firstNuts[1] / proteinDI * 100) + "% of the recommended daily intake.") + (firstNuts[3] === 0 ? "<br><br>There are <b>no healthy fats</b> in here." : "<br><br>There's <b>" + firstNuts[3].toFixed(2) + " grams of healthy fats</b> per serving. Which is roughly " + Math.round(firstNuts[3] / goodFatDI * 100) + "% of the recommended daily intake.");

        var badStuffProse = (firstNuts[0] === 0 ? "There is <b>no sugar</b> in this product." : "There are <b>" + firstNuts[0].toFixed(2) + " grams of sugar</b> in on serving of this product, or about " + Math.round(firstNuts[0] / sugarDI * 100) + "% of the maximum amount that you should have in a day.") + (firstNuts[2] === 0 ? "<br><br>There are <b>no unhealthy fats</b> in here." : "<br><br>There's about <b>" + firstNuts[2].toFixed(2) + " grams of unhealthy fats</b> per serving -- " + Math.round(firstNuts[2] / badFatDI * 100) + "% of the recommended daily intake.") + (firstNuts[4] === 0 ? "<br><br>There are <b>no carbohydrates</b> in a serving of this product." : "<br><br>There are <b>" + firstNuts[4].toFixed(2) + " grams of carbohydrates</b> in a single serve of this (" + Math.round(firstNuts[4] / carbsDI * 100) + "% of the recommended daily intake).") + (firstNuts[5] === 0 ? "<br><br>This is <b>salt-free</b>." : "<br><br>on serving of this product contains <b>" + firstNuts[5].toFixed(2) + " grams of salt</b>. That's just about " + Math.round(firstNuts[5] / saltDI * 100) + "% of the recommended daily intake.");
      } else if (numberFoods === 2) {
        var badNutrientList2 = []

        if (naySugar2) {
          badNutrientList2 = badNutrientList2.concat("sugar");
        };
        if (nayFat2) {
          badNutrientList2 = badNutrientList2.concat("unhealthy fats");
        };
        if (nayCarbs2) {
          badNutrientList2 = badNutrientList2.concat("carbohydrates");
        };
        if (naySalt2) {
          badNutrientList2 = badNutrientList2.concat("salt");
        };

        var which = ((firstNuts[1] + firstNuts[0]) / totalGrams > (secondNuts[1] + secondNuts[2]) / totalGrams2 ? 1 : 2);

        var bigPictureProse = "If you're going to eat one of these, make it " + (which === 1 ? foodName : foodName2);

        if (which === 1) {
          // yes or no or maybe
          if (boolEat) {
            bigPictureProse = bigPictureProse + ", and you can <b>go ahead</b> and eat it without feeling guilty.";
          } else if (boolEat === null) {
            bigPictureProse = bigPictureProse + ", but you should <b>limit</b> how much of it you eat.";
          } else {
            bigPictureProse = bigPictureProse + ", but, really, you should probably <b>avoid</b> it.";
          }

          // calories
          if (proportionCalories >= 0.2) {
            bigPictureProse = bigPictureProse + "<br><br>There are a <b>lot</b> of calories in " + foodName + " - " + Math.floor(calories) + " or " + Math.floor(proportionCalories * 100) + "% of your daily intake" + " -, enough to replace" + (proportionCalories >= 0.5 ? " more than one meal." : " a whole meal.");
          } else if (proportionCalories >= 0.1) {
            bigPictureProse = bigPictureProse + "<br><br>There are enough calories in " + foodName + " - " + Math.floor(calories) + " or " + Math.floor(proportionCalories * 100) + "% of your daily intake" + " - to be a fairly hearty snack. Make sure you're not ruining your appetite!";
          } else {
            bigPictureProse = bigPictureProse + "<br><br>There are few enough calories in a serve of " + foodName + " - " + Math.floor(calories) + " or " + Math.floor(proportionCalories * 100) + "% of your daily intake" + " - to justify this as a light snack. Don't rely on this to keep you going!";
          }

          if (proportionCalories < proportionCalories2) {
            bigPictureProse = bigPictureProse + " The other product, " + foodName2 + ", is more energy-dense, with " + Math.floor(proportionCalories2 * 100) + "% of your daily intake"
          } else {
            bigPictureProse = bigPictureProse + " The other product, " + foodName2 + ", is less energy-dense, with " + Math.floor(proportionCalories2 * 100) + "% of your daily intake"
          }

          var goodStuffProse = (firstNuts[1] === 0 ? ("There is <b>no protein</b> in a serving of " 
            + foodName + ". " + foodName2 + " has <b>" 
            + secondNuts[1].toFixed(2) + " grams</b>.") : ("There are <b>" 
            + firstNuts[1].toFixed(2) + " grams of protein</b> in on serving of " + foodName + ". As you can see, that's approximately " 
            + Math.round(firstNuts[1] / proteinDI * 100) + "% of the recommended daily intake. " + foodName2 + " has about <b>" 
            + Math.round(firstNuts[1] / secondNuts[1]).toFixed(1) + " times as much</b>.")) 
            + (firstNuts[3] === 0 ? ("<br><br>There are <b>no healthy fats</b> in " + foodName + ". " + foodName2 + " has <b>" 
            + secondNuts[3].toFixed(2) + " grams</b>.") : ("<br><br>There's <b>" 
            + firstNuts[3].toFixed(2) + " grams of healthy fats</b> per serving of " + foodName + ". Which is roughly " 
            + Math.round(firstNuts[3] / goodFatDI * 100) + "% of the recommended daily intake. " + foodName2 + " has about <b>" 
            + Math.round(firstNuts[3] / secondNuts[3]).toFixed(1) + " times as much</b>."));

          var badStuffProse = (firstNuts[0] === 0 ? ("There is <b>no sugar</b> in " + foodName + ". " + foodName2 + " has <b>" 
            + secondNuts[0].toFixed(2) + " grams</b>.") : ("There are <b>" 
            + firstNuts[0].toFixed(2) + " grams of sugar</b> in on serving of " + foodName + ", or about " 
            + Math.round(firstNuts[0] / sugarDI * 100) + "% of the maximum amount that you should have in a day. " + foodName2 + " has about <b>" 
            + Math.round(firstNuts[0] / secondNuts[0]).toFixed(1) + " times as much</b>.")) 
            + (firstNuts[2] === 0 ? ("<br><br>There are <b>no unhealthy fats</b> in " + foodName + ". " + foodName2 + " has <b>" 
            + secondNuts[2].toFixed(2) + " grams</b>.") : ("<br><br>There's about <b>" 
            + firstNuts[2].toFixed(2) + " grams of unhealthy fats</b> per serving of " + foodName + " -- " 
            + Math.round(firstNuts[2] / badFatDI * 100) + "% of the recommended daily intake. " + foodName2 + " has about <b>" 
            + Math.round(firstNuts[2] / secondNuts[2]).toFixed(1) + " times as much</b>.")) 
            + (firstNuts[4] === 0 ? ("<br><br>There are <b>no carbohydrates</b> in a serving of " + foodName + ". " + foodName2 + " has <b>" 
            + secondNuts[4].toFixed(2) + " grams</b>.") : "<br><br>There are <b>" 
            + firstNuts[4].toFixed(2) + " grams of carbohydrates</b> in a single serve of " + foodName + " (" 
            + Math.round(firstNuts[4] / carbsDI * 100) + "% of the recommended daily intake). " + foodName2 + " has about <b>" 
            + Math.round(firstNuts[4] / secondNuts[4]).toFixed(1) + " times as much</b>.") 
            + (firstNuts[5] === 0 ? "<br><br>" + foodName + " is <b>salt-free</b>. " + foodName2 + " has <b>" 
            + secondNuts[5].toFixed(2) + " grams</b>." : "<br><br>on serving of " + foodName + " product contains <b>" 
            + firstNuts[5].toFixed(2) + " grams of salt</b>. That's just about " 
            + Math.round(firstNuts[5] / saltDI * 100) + "% of the recommended daily intake. " + foodName2 + " has about <b>" 
            + Math.round(firstNuts[5] / secondNuts[5]).toFixed(1) + " times as much</b>.");
        } else {
          // yes or no or maybe
          if (boolEat2) {
            bigPictureProse = bigPictureProse + ", and you can <b>go ahead</b> and eat it without feeling guilty.";
          } else if (boolEat2 === null) {
            bigPictureProse = bigPictureProse + ", but you should <b>limit</b> how much of it you eat.";
          } else {
            bigPictureProse = bigPictureProse + ", but, really, you should probably <b>avoid</b> it.";
          }

          // calories
          if (proportionCalories2 >= 0.2) {
            bigPictureProse = bigPictureProse + "<br><br>There are a <b>lot</b> of calories in " + foodName2 + " - " + Math.floor(calories2) + " or " + Math.floor(proportionCalories2 * 100) + "% of your daily intake" + " -, enough to replace" + (proportionCalories2 >= 0.5 ? " more than one meal." : " a whole meal.");
          } else if (proportionCalories2 >= 0.1) {
            bigPictureProse = bigPictureProse + "<br><br>There are enough calories in " + foodName2 + " - " + Math.floor(calories2) + " or " + Math.floor(proportionCalories2 * 100) + "% of your daily intake" + " - to be a fairly hearty snack. Make sure you're not ruining your appetite!";
          } else {
            bigPictureProse = bigPictureProse + "<br><br>There are few enough calories in a serve of " + foodName2 + " - " + Math.floor(calories2) + " or " + Math.floor(proportionCalories2 * 100) + "% of your daily intake" + " - to justify this as a light snack. Don't rely on this to keep you going!";
          }

          if (proportionCalories > proportionCalories2) {
            bigPictureProse = bigPictureProse + " The other product, " + foodName + ", is more energy-dense, with " + Math.floor(proportionCalories * 100) + "% of your daily intake"
          } else {
            bigPictureProse = bigPictureProse + " The other product, " + foodName + ", is less energy-dense, with " + Math.floor(proportionCalories * 100) + "% of your daily intake"
          }

          var goodStuffProse = (secondNuts[1] === 0 ? ("There is <b>no protein</b> in a serving of " + foodName2 + ". " + foodName + " has <b>" 
            + firstNuts[1].toFixed(2) + " grams</b>.") : ("There are <b>" 
            + secondNuts[1].toFixed(2) + " grams of protein</b> in on serving of " + foodName2 + ". As you can see, that's approximately " 
            + Math.round(secondNuts[1] / proteinDI * 100) + "% of the recommended daily intake. " + foodName + " has about <b>" 
            + Math.round(secondNuts[1] / firstNuts[1]).toFixed(1) + " times as much</b>.")) 
            + (secondNuts[3] === 0 ? ("<br><br>There are <b>no healthy fats</b> in " + foodName2 + ". " + foodName + " has <b>" 
            + goodFat.toFixed(2) + " grams</b>.") : ("<br><br>There's <b>" 
            + secondNuts[3].toFixed(2) + " grams of healthy fats</b> per serving of " + foodName2 + ". Which is roughly " 
            + Math.round(secondNuts[3] / goodFatDI * 100) + "% of the recommended daily intake. " + foodName + " has about <b>" 
            + Math.round(secondNuts[3] / firstNuts[3]).toFixed(1) + " times as much</b>."));

          var badStuffProse = (secondNuts[0] === 0 ? ("There is <b>no sugar</b> in " + foodName2 + ". " + foodName + " has <b>" 
            + firstNuts[0].toFixed(2) + " grams</b>.") : ("There are <b>" 
            + secondNuts[0].toFixed(2) + " grams of sugar</b> in on serving of " + foodName2 + ", or about " 
            + Math.round(secondNuts[0] / sugarDI * 100) + "% of the maximum amount that you should have in a day. " + foodName + " has about <b>" 
            + Math.round(secondNuts[0] / firstNuts[0]).toFixed(1) + " times as much</b>.")) 
            + (secondNuts[2] === 0 ? ("<br><br>There are <b>no unhealthy fats</b> in " + foodName2 + ". " + foodName + " has <b>" 
            + firstNuts[2].toFixed(2) + " grams</b>.") : ("<br><br>There's about <b>" 
            + secondNuts[2].toFixed(2) + " grams of unhealthy fats</b> per serving of " + foodName2 + " -- " 
            + Math.round(secondNuts[2] / badFatDI * 100) + "% of the recommended daily intake. " + foodName + " has about <b>" 
            + Math.round(secondNuts[2] / firstNuts[2]).toFixed(1) + " times as much</b>.")) 
            + (secondNuts[4] === 0 ? ("<br><br>There are <b>no carbohydrates</b> in a serving of " + foodName2 + ". " + foodName + " has <b>" 
            + firstNuts[4].toFixed(2) + " grams</b>.") : "<br><br>There are <b>" 
            + secondNuts[4].toFixed(2) + " grams of carbohydrates</b> in a single serve of " + foodName2 + " (" 
            + Math.round(secondNuts[4] / carbsDI * 100) + "% of the recommended daily intake). " + foodName + " has about <b>" 
            + Math.round(secondNuts[4] / firstNuts[4]).toFixed(1) + " times as much</b>.") 
            + (secondNuts[5] === 0 ? "<br><br>" + foodName2 + " is <b>salt-free</b>. " + foodName + " has <b>" 
            + firstNuts[5].toFixed(2) + " grams</b>." : "<br><br>on serving of " + foodName2 + " product contains <b>" 
            + secondNuts[5].toFixed(2) + " grams of salt</b>. That's just about " 
            + Math.round(secondNuts[5] / saltDI * 100) + "% of the recommended daily intake. " + foodName + " has about <b>" 
            + Math.round(secondNuts[5] / firstNuts[5]).toFixed(1) + " times as much</b>.");
        }
      }*/

      /*document.getElementById('bigPictureText').innerHTML = bigPictureProse;
      document.getElementById('goodStuffText').innerHTML = goodStuffProse;
      document.getElementById('badStuffText').innerHTML = badStuffProse;*/