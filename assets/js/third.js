var nodeName = ["Sugar", "Protein", "Unhealthy Fats", "Healthy Fats", "Carbohydrates", "Salt"];
var nodeText = ["A sweet-tasting, high-calorie carbohydrate. <br><br>Sugar is often added to foods to make them more palatable and contributes to the onset of obesity, diabetes, and cardiovascular diseases.",
        "One of the 'building blocks' of muscle and a great fuel source. <br><br>Protein is extremely important for your health, as it contains essential amino acids.",
        "Unhealthy fats include saturated and trans fatty acids. <br><br>Both can raise cholesterol levels, clog arteries, and increase the risk for heart disease.",
        "Healthy fats include polyunsaturated fatty acids and monounsaturated fats. <br><br>When eaten in moderation (and especially when replacing saturated or trans fats), they can help lower cholesterol levels and reduce the risk of heart disease.",
        "Carbohydrates are the most important macronutrient -- they're where you get most of your energy. <br><br>Carbohydrates provide fuel for the central nervous system and muscles. They also prevent protein from being used as an energy source and enable fat metabolism.",
        "Salt is an essential nutrient <i>in relatively small</i> amounts. <br><br>It is needed for muscle contraction, nerve transmission, pH balance, and hydration."
      ];
      var nodeImages = new Array();
      // sugar
      nodeImages[0] = new Array(
        /*"https://www.svgrepo.com/show/455/sugar.svg",
                    "https://www.svgrepo.com/show/222301/candy-sugar.svg",*/
        "https://www.svgrepo.com/show/222846/candy-sugar.svg"
        /*,
                    "https://www.svgrepo.com/show/227291/doughnut-sugar.svg",
                    "https://www.svgrepo.com/show/287589/jelly-beans-sugar.svg",
                    "https://www.svgrepo.com/show/1876/candy-cane.svg",
                    "https://www.svgrepo.com/show/1879/candy.svg",
                    "https://www.svgrepo.com/show/1353/candy.svg",
                    "https://www.svgrepo.com/show/10286/candy.svg"*/
      );

      // protein
      nodeImages[1] = new Array("https://www.svgrepo.com/show/230494/beef.svg"
        /*,
                    "https://www.svgrepo.com/show/40549/chicken-leg.svg",
                    "https://www.svgrepo.com/show/25818/fish.svg",
                    "https://www.svgrepo.com/show/184884/peanuts-peanut.svg",
                    "https://www.svgrepo.com/show/196387/hazelnuts-almond.svg",
                    "https://www.svgrepo.com/show/1877/fried-egg.svg"*/
      );

      // unhealthy fats
      nodeImages[2] = new Array(
        /*"https://www.svgrepo.com/show/32938/pork.svg",
                    "https://www.svgrepo.com/show/276219/ribs-pork.svg",
                    "https://www.svgrepo.com/show/90746/sausage.svg",
                    "https://www.svgrepo.com/show/91975/sausage.svg",
                    "https://www.svgrepo.com/show/747/cheese.svg",
                    "https://www.svgrepo.com/show/276537/butter-butter.svg",
                    "https://www.svgrepo.com/show/746/pie.svg",*/
        "https://www.svgrepo.com/show/43115/burger.svg");

      // healthy fats
      nodeImages[3] = new Array("https://www.svgrepo.com/show/25818/fish.svg"
        /*,
                    "https://www.svgrepo.com/show/747/cheese.svg",
                    "https://www.svgrepo.com/show/48219/avocado.svg",
                    "https://www.svgrepo.com/show/26720/yogurt.svg",
                    "https://www.svgrepo.com/show/184884/peanuts-peanut.svg",
                    "https://www.svgrepo.com/show/196387/hazelnuts-almond.svg",
                    "https://www.svgrepo.com/show/68006/coconut.svg"*/
      );

      // carbohydrates
      nodeImages[4] = new Array("https://www.svgrepo.com/show/105766/bread.svg"
        /*,
                    "https://www.svgrepo.com/show/227276/potato.svg",
                    "https://www.svgrepo.com/show/9730/corn.svg",
                    "https://www.svgrepo.com/show/267175/pasta.svg",
                    "https://www.svgrepo.com/show/15501/beer.svg",
                    "https://www.svgrepo.com/show/83095/beans.svg"*/
      );

      // sodium
      nodeImages[5] = new Array("https://www.svgrepo.com/show/59313/salt.svg"
        /*,
                    "https://www.svgrepo.com/show/287593/pretzel.svg",
                    "https://www.svgrepo.com/show/269887/products-chips.svg",
                    "https://www.svgrepo.com/show/21921/french-fries.svg"*/
      );

      /*
      ======================================================================
      ======================================================================
      ======================================================================
      ======================================================================
      ======================================================================
      */

      var colorScale = ['orange', 'lightblue', '#B19CD9'];
      
      var nutColours = ["#FFC90E","#96bf18","#5160a4","#C8BFE7","#804040","#400040"];
      
      var imgBaseSize = Math.floor(d3.select("#foodSvg").style("width").slice(0, -2) / 100);
      if (imgBaseSize > 10) {
        imgBaseSize = 10;
      };
      var xSpread = d3.select("#foodSvg").style("width").slice(0, -2) / 6 / 1.5;
      var xSplit = [d3.select("#foodSvg").style("width").slice(0, -2) * 0.4,
        d3.select("#foodSvg").style("width").slice(0, -2) * 0.6
      ];

      var xSpreadCentre = [xSpread * 2];
      for (i = 0; i < 5; i++) {
        xSpreadCentre = xSpreadCentre.concat(xSpreadCentre[i] + xSpread);// * 1.5);
      };
      var xSplitCentre = [xSplit[0], xSplit[1], xSplit[0], xSplit[1], xSplit[0], xSplit[0]];

      var numNodes = 200;//numberFoods === 1 ? 200 : 100;
      var nodes = [];
      var nPerCategory;

      function setNodes(){
        nodes = [];
        nPerCategory = [Math.floor(firstNuts[0] / totalGrams * numNodes / 2),
          Math.ceil(firstNuts[1] / totalGrams * numNodes / 2),
          Math.ceil(firstNuts[2] / totalGrams * numNodes / 2),
          Math.ceil(firstNuts[3] / totalGrams * numNodes / 2),
          Math.ceil(firstNuts[4] / totalGrams * numNodes / 2),
          Math.ceil(firstNuts[5] / saltDI * 25)
        ]; 
        //alert(nPerCategory+' ,'+totalGrams);
        if (numberFoods === 2) {
          nodeImages = nodeImages.concat(nodeImages);
          nodeName = nodeName.concat(nodeName);
          nodeText = nodeText.concat(nodeText);
          xSpreadCentre = xSpreadCentre.concat(xSpreadCentre);
          xSplitCentre = xSplitCentre.concat(xSplitCentre);
          nPerCategory = nPerCategory.concat([Math.floor(secondNuts[0] / totalGrams2 * numNodes / 2),
            Math.ceil(secondNuts[1] / totalGrams2 * numNodes / 2),
            Math.ceil(secondNuts[2] / totalGrams2 * numNodes / 2),
            Math.ceil(secondNuts[3] / totalGrams2 * numNodes / 2),
            Math.ceil(secondNuts[4] / totalGrams2 * numNodes / 2),
            Math.ceil(secondNuts[5] / saltDI * 25)
          ]);
            
            //document.write(secondNuts);
        };
        
          //document.write(nPerCategory);
        
          for (var i = 0; i < (6*numberFoods); i++) {
        nodes = nodes.concat(d3.range(nPerCategory[i]).map(function() {
          return {
            radius: ((document.documentElement.clientWidth / 100) > 5 ? 5 : document.documentElement.clientWidth / 100), //5, //Math.random() * imgBaseSize / 2 + imgBaseSize,
            category: i
          };
        }));
      };

    };
    
      
      var nodeSlide;
      var simulation = d3.select('svg #myG').html(null);
      function setSimulation(){
        nodeSlide = 1;
        setFoodText();
        setNodes();
        simulation = d3.forceSimulation(nodes)
        .force('charge', d3.forceManyBody().strength(2.5))
        .force('x', d3.forceX().x(function(d) {
          if (numberFoods === 1) {
            return d3.select("#foodSvg").style("width").slice(0, -2) / 2;
          } else {
            return d.category < 6 ? (d3.select("#foodSvg").style("width").slice(0, -2) * 0.2) : (d3.select("#foodSvg").style("width").slice(0, -2) * 0.8);
          };
        }))
        .force('y', d3.forceY().strength(0.4).y(function(d) {
          return height * (numberFoods === 1 ? 0.3 : 0.3); //Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
        }))
        .force('collide', d3.forceCollide(function(d) {
          return d.radius
        }).iterations(16))
        .on('tick', ticked);

      simulation.force('x', d3.forceX().strength(0.4).x(function(d) {
        if (numberFoods === 1) {
          return d3.select("#foodSvg").style("width").slice(0, -2) / 2;
        } else {
          return d.category < 6 ? (d3.select("#foodSvg").style("width").slice(0, -2) * 0.2) : (d3.select("#foodSvg").style("width").slice(0, -2) * 0.8);
        };
      }))
      slideBack();
    };

      /*if (numberFoods === 2) {
        d3.select("#foodSvg").append("text").text(foodName).attr("class", "squeezeHead").attr("x", xSplit[0]).attr("y", "25").style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");

        d3.select("#foodSvg").append("text").text(foodName2).attr("class", "squeezeHead").attr("x", xSplit[1]).attr("y", "25").style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
      }*/

      function refreshAlpha(a) {
        simulation.alpha(a).restart();
      }

      function ticked() {
        //refreshAlpha(1);
        
        var u = d3.select('#myG')
          .selectAll('circle')
          .data(nodes);

        u.enter()
          .append('circle')
          .attr('r', function(d) {
            return d.radius;
          })
          .attr('class', function(d) {
            return ([1, 3, 7, 9].includes(d.category) ? "good" : "bad");
          })
          .attr("id", function(d) {
            return ("circle" + d.category);
          })
          .style('fill', 'orange')
          .style("stroke", "none")
          .merge(u)
          .attr('cx', function(d) {
            return d.x;
          })
          .attr('cy', function(d) {
            return d.y;
          });

        var images = d3.select('#myG').selectAll("image").data(nodes);

        images.enter().append("image")
          .attr("class", function(d) {
            return 'food' + d.category;
          })
          .attr("xlink:href", function(d) {
            return //nodeImages[d.category][Math.floor(Math.random() * nodeImages[d.category].length)]
          }) /*"https://upload.wikimedia.org/wikipedia/commons/0/0f/Twemoji2_1f610.svg")*/
          .merge(images)
          .attr("x", function(d) {
            return d.x - d.radius
          })
          .attr("y", function(d) {
            return d.y - d.radius
          })
          .attr("width", function(d) {
            return d.radius
          })
          .attr("height", function(d) {
            return d.radius
          })/*.on("mouseover", function(d) {
            div.transition()
              .duration(200)
              .style("opacity", .9);
            div.html("<h1>" + nodeName[d.category] + "</h1><p>" + nodeText[d.category] + "</p>")
              .style("left", (mouseX + 10) + "px")
              .style("top", (mouseY + 28) + "px");
          })
          .on("mouseout", function(d) {
            div.transition()
              .duration(500)
              .style("opacity", 0);
          })*/;

        u.exit().remove();
        images.exit().remove();
      }

      nodeSlide = 0;

      var narrativeColours = ["orange", "blue", "#FFC90E", "#96bf18", "#5160a4", "#C8BFE7", "#804040", "#400040"];

      d3.select("#narrativeText").style("background", narrativeColours[0]);

      /*d3.select("#fillgauge1_1").style("display", "block");
      d3.select("#fillgauge1_2").style("display", "block");*/

      var foodText;

      function setFoodText(){
      if (numberFoods == 1) {
        foodText = [("The 'gauges' that you see above indicate the amount of different nutritional metrics in each serving of this food, relative to recommended daily intake. The outer colour of each gauge indicates whether each amount is something to embrace (green), avoid (red), or be wary of (orange). <br><br> Below them are " 
          + (numberFoods == 1 ? 100 : 200) + " circles. Each represents 1% of the composition of the food" 
          + (numberFoods == 1 ? "" : "s") + " that you selected." 
          + (numberFoods == 1 ? " That's about " + (calories).toFixed(2) + " calories per circle!" : "")),
          ("It's made up of lots of different nutrients. Here are the most important ones, colour coded to their gauge."),
          ("A sweet-tasting, high-calorie carbohydrate. Sugar is often added to foods to make them more palatable and contributes to the onset of obesity, diabetes, and cardiovascular diseases. <br><br> This food is " 
            + (firstNuts[0] / totalGrams * 100).toFixed(2) + "% sugar (" + (firstNuts[0]).toFixed(2) + " grams)."),
          ("One of the 'building blocks' of muscle and a great fuel source. Protein is extremely important for your health, as it contains essential amino acids. <br><br> Protein makes up about " 
            + (firstNuts[1] / totalGrams * 100).toFixed(2) + "% (" + (firstNuts[1]).toFixed(2) + " grams) of this food."),
          ("Unhealthy fats include saturated and trans fatty acids. Both can raise cholesterol levels, clog arteries, and increase the risk for heart disease. <br><br> Roughly " 
            + (firstNuts[2] / totalGrams * 100).toFixed(2) + "% (" + (firstNuts[2]).toFixed(2) + " grams) of this food is unhealthy fats."),
          ("Healthy fats include polyunsaturated fatty acids and monounsaturated fats. When eaten in moderation (and especially when replacing saturated or trans fats), they can help lower cholesterol levels and reduce the risk of heart disease. <br><br> Healthy fats make up " 
            + (firstNuts[3] / totalGrams * 100).toFixed(2) + "% (" + (firstNuts[3]).toFixed(2) + " grams) of this food."),
          ("Carbohydrates are the most important macronutrient -- they're where you get most of your energy. Carbohydrates provide fuel for the central nervous system and muscles. They also prevent protein from being used as an energy source and enable fat metabolism. Carbohydrates are a necessity, but given how common they are, you should try to limit your intake. <br><br> Carbohydrates are roughly " 
            + (firstNuts[4] / totalGrams * 100).toFixed(2) + "% (" + (firstNuts[4]).toFixed(2) + " grams) of this food."),
          ("Finally, sodium or salt is an essential nutrient <i>in relatively small</i> amounts. It is needed for muscle contraction, nerve transmission, pH balance, and hydration. <br><br>Salt makes up " 
            + ((firstNuts[5] / totalGrams * 100).toFixed(2) < 1 ? "less than " + 1 : (firstNuts[5] / totalGrams * 100).toFixed(2)) + "% of this food"),
          ("To end on a tidy note, here are the proportions of 'good' (green) and 'bad' (red) nutrients in this food."),
        ]
      } else {
        foodText = [("The 'gauges' that you see above indicate the amount of different nutritional metrics in each serving of this food, relative to recommended daily intake. The left side of each gauge represents the contents of " + foodName + " and the right side represents " + foodName2 + ". <br><br>Below them are 200 circles. The circles on the left represent 1% of the composition of " + foodName + " and the circles on the right represent the same for " + foodName2 + "."),
          ("Each food is made up of lots of different nutrients. Here are the most important ones, colour coded to their gauge (" + foodName2 + " is on the bottom)."),
          ("Sugar, which is " + (firstNuts[0] / totalGrams * 100).toFixed(2) + "% (" + (firstNuts[0]).toFixed(2) + " grams) of " + foodName + " and " + (secondNuts[0] / totalGrams2 * 100).toFixed(2) + "% (" + (secondNuts[0]).toFixed(2) + " grams) of " + foodName2 + "."),
          ("Protein, which is " + (firstNuts[1] / totalGrams * 100).toFixed(2) + "% (" + (firstNuts[1]).toFixed(2) + " grams) of " + foodName + " and " + (secondNuts[1] / totalGrams2 * 100).toFixed(2) + "% (" + (secondNuts[1]).toFixed(2) + " grams) of " + foodName2 + "."),
          ("Unhealthy fats, which are " + (firstNuts[2] / totalGrams * 100).toFixed(2) + "% (" + (firstNuts[2]).toFixed(2) + " grams) of " + foodName + " and " + (secondNuts[2] / totalGrams2 * 100).toFixed(2) + "% (" + (secondNuts[2]).toFixed(2) + " grams) of " + foodName2 + "."),
          ("Healthy fats, which are " + (firstNuts[3] / totalGrams * 100).toFixed(2) + "% (" + (firstNuts[3]).toFixed(2) + " grams) of " + foodName + " and " + (secondNuts[3] / totalGrams2 * 100).toFixed(2) + "% (" + (secondNuts[3]).toFixed(2) + " grams) of " + foodName2 + "."),
          ("Carbohydrates, which are " + (firstNuts[4] / totalGrams * 100).toFixed(2) + "% (" + (firstNuts[4]).toFixed(2) + " grams) of " + foodName + " and " + (secondNuts[4] / totalGrams2 * 100).toFixed(2) + "% (" + (secondNuts[4]).toFixed(2) + " grams) of " + foodName2 + "."),
          ("And sodium, which is " + (firstNuts[5] / totalGrams * 100).toFixed(2) + "% (" + (firstNuts[5]).toFixed(2) + " grams) of " + foodName + " and " + (secondNuts[5] / totalGrams2 * 100).toFixed(2) + "% (" + (secondNuts[5]).toFixed(2) + " grams) of " + foodName2 + "."),
          ("To end on a tidy note, here are the proportions of 'good' (green) and 'bad' (red) nutrients in these foods (remember, " + foodName2 + " is on the bottom)."),
        ]
      }
      document.getElementById('bigPictureText').innerHTML = foodText[0];
      }

      /*
       */

      

      function slideBack() {
        //d3.select("#bigPictureGauges").style("display", "none");

        if (nodeSlide === 1) {
          nodeSlide = 0;

          d3.select(".back-button").style("display", "none");

          refreshAlpha(1);

          document.getElementById('bigPictureText').innerHTML = foodText[nodeSlide];
          d3.select("#narrativeText").style("background", narrativeColours[nodeSlide]);

          d3.select('#myG')
            .selectAll('circle').style("fill", "orange");

          for (i = 0; i < 1; i++) {
            simulation // = d3.forceSimulation(nodes)
              //.force('charge', d3.forceManyBody().strength(10))
              .force('x', d3.forceX().strength(0.15).x(function(d) {
                if (numberFoods === 1) {
                  return d3.select("#foodSvg").style("width").slice(0, -2) / 2;
                } else {
                  return d.category < 6 ? (d3.select("#foodSvg").style("width").slice(0, -2) * 0.2) : (d3.select("#foodSvg").style("width").slice(0, -2) * 0.8);
                };
              }))
              .force('y', d3.forceY().strength(0.125).y(function(d) {
                return height * (numberFoods === 1 ? 0.3 : 0.3); //Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
              }))

            d3.selectAll(".spreadHead").remove();
            d3.selectAll(".splitHead").remove();

            /*if (numberFoods === 2) {
              d3.select("#foodSvg").append("text").text(foodName).attr("class", "squeezeHead").attr("x", xSplit[0]).attr("y", "25").style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");

              d3.select("#foodSvg").append("text").text(foodName2).attr("class", "squeezeHead").attr("x", xSplit[1]).attr("y", "25").style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
            }*/

            return;
            /*.force('y', d3.forceY().y(function(d) {
    return Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
  }))
  .force('collide', d3.forceCollide(function(d){
                                return d.radius}).iterations(16))
  .on('tick', ticked);*/
          }
        } else if (nodeSlide === 2) {
          nodeSlide = 1;

          refreshAlpha(1);

          //colorScale[0] = "none";

          //for (i = 0; i < 1; i++) {
          simulation // = d3.forceSimulation(nodes)
            .force('x', d3.forceX().strength(0.85).x(function(d) {
              return xSpreadCentre[d.category];
            }))
            .force('y', d3.forceY().strength(0.125).y(function(d) {
              if (numberFoods === 1) {
                return height * (numberFoods === 1 ? 0.3 : 0.5)
              } else {
                return d.category < 6 ? height * 0.3 : height * 0.8; //Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
              }
            }))

          d3.selectAll(".squeezeHead").remove();
          d3.selectAll(".splitHead").remove();

          document.getElementById('bigPictureText').innerHTML = foodText[nodeSlide];
          d3.select("#narrativeText").style("background", narrativeColours[nodeSlide]);

          d3.select("#myG").selectAll("#circle0").style("fill", nutColours[0]);
          d3.select("#myG").selectAll("#circle1").style("fill", nutColours[1]);
          d3.select("#myG").selectAll("#circle2").style("fill", nutColours[2]);
          d3.select("#myG").selectAll("#circle3").style("fill", nutColours[3]);
          d3.select("#myG").selectAll("#circle4").style("fill", nutColours[4]);
          d3.select("#myG").selectAll("#circle5").style("fill", nutColours[5]);

          //node.attr("colour", 0);

          //simulation.nodes(nodes).restart();

          /*if (numberFoods === 2) {
            d3.select("#foodSvg").append("text").text(foodName).attr("class", "spreadHead").attr("x", width * 0.5).attr("y", height * 0.1).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
            d3.select("#foodSvg").append("text").text(foodName2).attr("class", "spreadHead").attr("x", width * 0.5).attr("y", height * 0.6).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
          }*/

          d3.select("#foodSvg").append("text").text("Sugar").attr("class", "spreadHead").attr("x", xSpreadCentre[0]).attr("y", "25").style("text-anchor", "middle").style("fill", nutColours[0]).style("font", "normal 'Bitter', serif");

          d3.select("#foodSvg").append("text").text("Protein").attr("class", "spreadHead").attr("x", xSpreadCentre[1]).attr("y", "25").style("text-anchor", "middle").style("fill", nutColours[1]).style("font", "normal 'Bitter', serif");

          d3.select("#foodSvg").append("text").text("Unhealthy Fats").attr("class", "spreadHead").attr("x", xSpreadCentre[2]).attr("y", "25").style("text-anchor", "middle").style("fill", nutColours[2]).style("font", "normal 'Bitter', serif");

          d3.select("#foodSvg").append("text").text("Healthy Fats").attr("class", "spreadHead").attr("x", xSpreadCentre[3]).attr("y", "25").style("text-anchor", "middle").style("fill", nutColours[3]).style("font", "normal 'Bitter', serif");

          d3.select("#foodSvg").append("text").text("Carbohydrates").attr("class", "spreadHead").attr("x", xSpreadCentre[4]).attr("y", "25").style("text-anchor", "middle").style("fill", nutColours[4]).style("font", "normal 'Bitter', serif");

          d3.select("#foodSvg").append("text").text("Salt").attr("class", "spreadHead").attr("x", xSpreadCentre[5]).attr("y", "25").style("text-anchor", "middle").style("fill", nutColours[5]).style("font", "normal 'Bitter', serif");

          return;
        } else if (nodeSlide == 3) {
          nodeSlide = 2;

          refreshAlpha(1);

          //for (i = 0; i < 1; i++) {
          simulation // = d3.forceSimulation(nodes)
            //.force('charge', d3.forceManyBody().strength(10))
            .force('x', d3.forceX().strength(0.25).x(function(d) {
              return ([0, 6].includes(d.category) ? (width / 2) : xSpread * 2);
            }))
            .force('y', d3.forceY().strength(0.25).y(function(d) {
              if (numberFoods === 1) {
                return height * (numberFoods === 1 ? 0.3 : 0.5)
              } else {
                return d.category < 6 ? height * 0.3 : height * 0.8; //Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
              }
            }))

          d3.selectAll(".squeezeHead").remove();
          d3.selectAll(".spreadHead").remove();

          d3.select("#narrativeText").style("background", "purple");

          document.getElementById('bigPictureText').innerHTML = foodText[nodeSlide];
          d3.select("#narrativeText").style("background", narrativeColours[nodeSlide]);

          /*d3.selectAll(".food1").attr("xlink:href", function(d) {
            return nodeImages[d.category]
          })*/

          /*if (numberFoods === 2) {
            d3.select("#foodSvg").append("text").text(foodName).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.1).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
            d3.select("#foodSvg").append("text").text(foodName2).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.6).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
          }*/

          return;
        } else if (nodeSlide == 4) {
          nodeSlide = 3;

          refreshAlpha(1);

          //for (i = 0; i < 1; i++) {
          simulation // = d3.forceSimulation(nodes)
            //.force('charge', d3.forceManyBody().strength(10))
            .force('x', d3.forceX().strength(0.25).x(function(d) {
              return ([1, 7].includes(d.category) ? (width / 2) : xSpread * 2);
            }))
            .force('y', d3.forceY().strength(0.25).y(function(d) {
              if (numberFoods === 1) {
                return height * (numberFoods === 1 ? 0.3 : 0.5)
              } else {
                return d.category < 6 ? height * 0.3 : height * 0.8; //Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
              }
            }))

          d3.selectAll(".squeezeHead").remove();
          d3.selectAll(".spreadHead").remove();

          d3.select("#narrativeText").style("background", "purple");

          document.getElementById('bigPictureText').innerHTML = foodText[nodeSlide];
          d3.select("#narrativeText").style("background", narrativeColours[nodeSlide]);

          /*d3.selectAll(".food1").attr("xlink:href", function(d) {
            return nodeImages[d.category]
          })*/

          /*if (numberFoods === 2) {
            d3.select("#foodSvg").append("text").text(foodName).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.1).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
            d3.select("#foodSvg").append("text").text(foodName2).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.6).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
          }*/

          return;
        } else if (nodeSlide == 5) {
          nodeSlide = 4;

          refreshAlpha(1);

          //for (i = 0; i < 1; i++) {
          simulation // = d3.forceSimulation(nodes)
            //.force('charge', d3.forceManyBody().strength(10))
            .force('x', d3.forceX().strength(0.25).x(function(d) {
              return ([2, 8].includes(d.category) ? (width / 2) : xSpread * 2);
            }))
            .force('y', d3.forceY().strength(0.25).y(function(d) {
              if (numberFoods === 1) {
                return height * (numberFoods === 1 ? 0.3 : 0.5)
              } else {
                return d.category < 6 ? height * 0.3 : height * 0.8; //Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
              }
            }))

          d3.selectAll(".squeezeHead").remove();
          d3.selectAll(".spreadHead").remove();

          d3.select("#narrativeText").style("background", "purple");

          document.getElementById('bigPictureText').innerHTML = foodText[nodeSlide];
          d3.select("#narrativeText").style("background", narrativeColours[nodeSlide]);

          /*d3.selectAll(".food1").attr("xlink:href", function(d) {
            return nodeImages[d.category]
          })*/

          /*if (numberFoods === 2) {
            d3.select("#foodSvg").append("text").text(foodName).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.1).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
            d3.select("#foodSvg").append("text").text(foodName2).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.6).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
          }*/

          return;
        } else if (nodeSlide == 6) {
          nodeSlide = 5;

          refreshAlpha(1);

          //for (i = 0; i < 1; i++) {
          simulation // = d3.forceSimulation(nodes)
            //.force('charge', d3.forceManyBody().strength(10))
            .force('x', d3.forceX().strength(0.25).x(function(d) {
              return ([3, 9].includes(d.category) ? (width / 2) : xSpread * 2);
            }))
            .force('y', d3.forceY().strength(0.25).y(function(d) {
              if (numberFoods === 1) {
                return height * (numberFoods === 1 ? 0.3 : 0.5)
              } else {
                return d.category < 6 ? height * 0.3 : height * 0.8; //Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
              }
            }))

          d3.selectAll(".squeezeHead").remove();
          d3.selectAll(".spreadHead").remove();

          d3.select("#narrativeText").style("background", "purple");

          document.getElementById('bigPictureText').innerHTML = foodText[nodeSlide];
          d3.select("#narrativeText").style("background", narrativeColours[nodeSlide]);

          /*d3.selectAll(".food1").attr("xlink:href", function(d) {
            return nodeImages[d.category]
          })*/

          /*if (numberFoods === 2) {
            d3.select("#foodSvg").append("text").text(foodName).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.1).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
            d3.select("#foodSvg").append("text").text(foodName2).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.6).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
          }*/

          return;
        } else if (nodeSlide == 7) {
          nodeSlide = 6;

          refreshAlpha(1);

          //for (i = 0; i < 1; i++) {
          simulation // = d3.forceSimulation(nodes)
            //.force('charge', d3.forceManyBody().strength(10))
            .force('x', d3.forceX().strength(0.25).x(function(d) {
              return ([4, 10].includes(d.category) ? (width / 2) : xSpread * 2);
            }))
            .force('y', d3.forceY().strength(0.25).y(function(d) {
              if (numberFoods === 1) {
                return height * (numberFoods === 1 ? 0.3 : 0.5)
              } else {
                return d.category < 6 ? height * 0.3 : height * 0.8; //Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
              }
            }))

          d3.selectAll(".squeezeHead").remove();
          d3.selectAll(".spreadHead").remove();

          d3.select("#narrativeText").style("background", "purple");

          document.getElementById('bigPictureText').innerHTML = foodText[nodeSlide];
          d3.select("#narrativeText").style("background", narrativeColours[nodeSlide]);

          /*d3.selectAll(".food1").attr("xlink:href", function(d) {
            return nodeImages[d.category]
          })*/

          /*if (numberFoods === 2) {
            d3.select("#foodSvg").append("text").text(foodName).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.1).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
            d3.select("#foodSvg").append("text").text(foodName2).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.6).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
          }*/

          return;
        } else if (nodeSlide == 8) {
          nodeSlide = 7;

          refreshAlpha(1);
          
          d3.select(".next-button").style("display", "block");
          
          d3.select("#myG").selectAll("#circle0").style("fill", nutColours[0]);
          d3.select("#myG").selectAll("#circle1").style("fill", nutColours[1]);
          d3.select("#myG").selectAll("#circle2").style("fill", nutColours[2]);
          d3.select("#myG").selectAll("#circle3").style("fill", nutColours[3]);
          d3.select("#myG").selectAll("#circle4").style("fill", nutColours[4]);
          d3.select("#myG").selectAll("#circle5").style("fill", nutColours[5]);
          d3.select("#myG").selectAll("#circle6").style("fill", nutColours[0]);
          d3.select("#myG").selectAll("#circle7").style("fill", nutColours[1]);
          d3.select("#myG").selectAll("#circle8").style("fill", nutColours[2]);
          d3.select("#myG").selectAll("#circle9").style("fill", nutColours[3]);
          d3.select("#myG").selectAll("#circle10").style("fill", nutColours[4]);
          d3.select("#myG").selectAll("#circle11").style("fill", nutColours[5]);

          //for (i = 0; i < 1; i++) {
          simulation // = d3.forceSimulation(nodes)
            //.force('charge', d3.forceManyBody().strength(10))
            .force('x', d3.forceX().strength(0.25).x(function(d) {
              return ([5, 11].includes(d.category) ? (width / 2) : xSpread * 2);
            }))
            .force('y', d3.forceY().strength(0.25).y(function(d) {
              if (numberFoods === 1) {
                return height * (numberFoods === 1 ? 0.3 : 0.5)
              } else {
                return d.category < 6 ? height * 0.3 : height * 0.8; //Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
              }
            }))

          d3.selectAll(".squeezeHead").remove();
          d3.selectAll(".spreadHead").remove();

          d3.select("#narrativeText").style("background", "purple");

          document.getElementById('bigPictureText').innerHTML = foodText[nodeSlide];
          d3.select("#narrativeText").style("background", narrativeColours[nodeSlide]);

          /*d3.selectAll(".food1").attr("xlink:href", function(d) {
            return nodeImages[d.category]
          })*/

          /*if (numberFoods === 2) {
            d3.select("#foodSvg").append("text").text(foodName).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.1).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
            d3.select("#foodSvg").append("text").text(foodName2).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.6).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
          }*/

          return;
        }
        /*nodeSlide = 1;

          refreshAlpha(1);

          //for (i = 0; i < 1; i++) {
          simulation // = d3.forceSimulation(nodes)
            //.force('charge', d3.forceManyBody().strength(10))
            .force('x', d3.forceX().strength(0.25).x(function(d) {
              return xSplitCentre[d.category];
            }))
            .force('y', d3.forceY().strength(0.25).y(function(d) {
              if (numberFoods === 1) {
                return height * (numberFoods === 1 ? 0.3 : 0.5)
              } else {
                return d.category < 6 ? height * 0.3 : height * 0.8; //Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
              }
            }))

          d3.selectAll(".squeezeHead").remove();
          d3.selectAll(".spreadHead").remove();

          d3.select('#myG')
            .selectAll('circle.good').style("fill", "#28b463");
          d3.select('#myG')
            .selectAll('circle.bad').style("fill", "#c01d1d");

          if (numberFoods === 2) {
            d3.select("#foodSvg").append("text").text(foodName).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.1).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
            d3.select("#foodSvg").append("text").text(foodName2).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.6).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
          }

          d3.select("#foodSvg").append("text").text("Bad Stuff").attr("class", "splitHead").attr("x", xSplit[0]).attr("y", "25").style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");

          d3.select("#foodSvg").append("text").text("Good Stuff").attr("class", "splitHead").attr("x", xSplit[1]).attr("y", "25").style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");

          return;
        }*/
      };

      /*
      ======================================================================
      ======================================================================
      ======================================================================
      ======================================================================
      ======================================================================
      */
      function slideNext() {
        if (nodeSlide == 7) {
          nodeSlide = 8;

          refreshAlpha(1);

          simulation // = d3.forceSimulation(nodes)
            //.force('charge', d3.forceManyBody().strength(10))
            .force('x', d3.forceX().strength(0.25).x(function(d) {
              return xSplitCentre[d.category];
            }))
            .force('y', d3.forceY().strength(0.25).y(function(d) {
              if (numberFoods === 1) {
                return height * (numberFoods === 1 ? 0.3 : 0.5)
              } else {
                return d.category < 6 ? height * 0.3 : height * 0.8; //Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
              }
            }))

          d3.selectAll(".squeezeHead").remove();
          d3.selectAll(".spreadHead").remove();

          d3.select("#narrativeText").style("background", "purple");
          
          d3.select(".next-button").style("display", "none");

          document.getElementById('bigPictureText').innerHTML = foodText[nodeSlide];
          //d3.select("#narrativeText").style("background", narrativeColours[nodeSlide]);

          d3.select('#myG')
            .selectAll('circle.good').style("fill", "#28b463");
          d3.select('#myG')
            .selectAll('circle.bad').style("fill", "#c01d1d");

          /*if (numberFoods === 2) {
            d3.select("#foodSvg").append("text").text(foodName).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.1).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
            d3.select("#foodSvg").append("text").text(foodName2).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.6).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
          }*/

          return
        }
        if (nodeSlide == 6) {
          nodeSlide = 7;

          refreshAlpha(1);

          simulation // = d3.forceSimulation(nodes)
            //.force('charge', d3.forceManyBody().strength(10))
            .force('x', d3.forceX().strength(0.25).x(function(d) {
              return ([5, 11].includes(d.category) ? width / 2 : xSpread * 2);
            }))
            .force('y', d3.forceY().strength(0.25).y(function(d) {
              if (numberFoods === 1) {
                return height * (numberFoods === 1 ? 0.3 : 0.5)
              } else {
                return d.category < 6 ? height * 0.3 : height * 0.8; //Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
              }
            }))

          d3.selectAll(".squeezeHead").remove();
          d3.selectAll(".spreadHead").remove();

          document.getElementById('bigPictureText').innerHTML = foodText[nodeSlide];
          d3.select("#narrativeText").style("background", narrativeColours[nodeSlide]);

          /*if (numberFoods === 2) {
            d3.select("#foodSvg").append("text").text(foodName).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.1).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
            d3.select("#foodSvg").append("text").text(foodName2).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.6).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
          }*/

          return
        } else if (nodeSlide == 5) {
          nodeSlide = 6;

          refreshAlpha(1);

          simulation // = d3.forceSimulation(nodes)
            //.force('charge', d3.forceManyBody().strength(10))
            .force('x', d3.forceX().strength(0.25).x(function(d) {
              return ([4, 10].includes(d.category) ? width / 2 : xSpread * 2);
            }))
            .force('y', d3.forceY().strength(0.25).y(function(d) {
              if (numberFoods === 1) {
                return height * (numberFoods === 1 ? 0.3 : 0.5)
              } else {
                return d.category < 6 ? height * 0.3 : height * 0.8; //Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
              }
            }))

          d3.selectAll(".squeezeHead").remove();
          d3.selectAll(".spreadHead").remove();

          document.getElementById('bigPictureText').innerHTML = foodText[nodeSlide];
          d3.select("#narrativeText").style("background", narrativeColours[nodeSlide]);

          /*if (numberFoods === 2) {
            d3.select("#foodSvg").append("text").text(foodName).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.1).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
            d3.select("#foodSvg").append("text").text(foodName2).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.6).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
          }*/

          return
        } else if (nodeSlide == 4) {
          nodeSlide = 5;

          refreshAlpha(1);

          simulation // = d3.forceSimulation(nodes)
            //.force('charge', d3.forceManyBody().strength(10))
            .force('x', d3.forceX().strength(0.25).x(function(d) {
              return ([3, 9].includes(d.category) ? width / 2 : xSpread * 2);
            }))
            .force('y', d3.forceY().strength(0.25).y(function(d) {
              if (numberFoods === 1) {
                return height * (numberFoods === 1 ? 0.3 : 0.5)
              } else {
                return d.category < 6 ? height * 0.3 : height * 0.8; //Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
              }
            }))

          d3.selectAll(".squeezeHead").remove();
          d3.selectAll(".spreadHead").remove();

          document.getElementById('bigPictureText').innerHTML = foodText[nodeSlide];
          d3.select("#narrativeText").style("background", narrativeColours[nodeSlide]);

          /*if (numberFoods === 2) {
            d3.select("#foodSvg").append("text").text(foodName).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.1).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
            d3.select("#foodSvg").append("text").text(foodName2).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.6).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
          }*/

          return
        } else if (nodeSlide == 3) {
          nodeSlide = 4;

          refreshAlpha(1);

          simulation // = d3.forceSimulation(nodes)
            //.force('charge', d3.forceManyBody().strength(10))
            .force('x', d3.forceX().strength(0.25).x(function(d) {
              return ([2, 8].includes(d.category) ? width / 2 : xSpread * 2);
            }))
            .force('y', d3.forceY().strength(0.25).y(function(d) {
              if (numberFoods === 1) {
                return height * (numberFoods === 1 ? 0.3 : 0.5)
              } else {
                return d.category < 6 ? height * 0.3 : height * 0.8; //Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
              }
            }))

          d3.selectAll(".squeezeHead").remove();
          d3.selectAll(".spreadHead").remove();

          document.getElementById('bigPictureText').innerHTML = foodText[nodeSlide];
          d3.select("#narrativeText").style("background", narrativeColours[nodeSlide]);

          /*if (numberFoods === 2) {
            d3.select("#foodSvg").append("text").text(foodName).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.1).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
            d3.select("#foodSvg").append("text").text(foodName2).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.6).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
          }*/

          return
        } else if (nodeSlide == 2) {
          nodeSlide = 3;

          refreshAlpha(1);

          simulation // = d3.forceSimulation(nodes)
            //.force('charge', d3.forceManyBody().strength(10))
            .force('x', d3.forceX().strength(0.25).x(function(d) {
              return ([1, 7].includes(d.category) ? width / 2 : xSpread * 2);
            }))
            .force('y', d3.forceY().strength(0.25).y(function(d) {
              if (numberFoods === 1) {
                return height * (numberFoods === 1 ? 0.3 : 0.5)
              } else {
                return d.category < 6 ? height * 0.3 : height * 0.8; //Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
              }
            }))

          d3.selectAll(".squeezeHead").remove();
          d3.selectAll(".spreadHead").remove();

          document.getElementById('bigPictureText').innerHTML = foodText[nodeSlide];
          d3.select("#narrativeText").style("background", narrativeColours[nodeSlide]);

          /*if (numberFoods === 2) {
            d3.select("#foodSvg").append("text").text(foodName).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.1).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
            d3.select("#foodSvg").append("text").text(foodName2).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.6).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
          }*/
          return
        } else if (nodeSlide === 1) {
          nodeSlide = 2;

          refreshAlpha(1);

          //for (i = 0; i < 1; i++) {
          simulation // = d3.forceSimulation(nodes)
            //.force('charge', d3.forceManyBody().strength(10))
            .force('x', d3.forceX().strength(0.25).x(function(d) {
              return ([0, 6].includes(d.category) ? (width / 2) : xSpread * 2);
            }))
            .force('y', d3.forceY().strength(0.25).y(function(d) {
              if (numberFoods === 1) {
                return height * (numberFoods === 1 ? 0.3 : 0.5)
              } else {
                return d.category < 6 ? height * 0.3 : height * 0.8; //Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
              }
            }))

          d3.selectAll(".squeezeHead").remove();
          d3.selectAll(".spreadHead").remove();

          document.getElementById('bigPictureText').innerHTML = foodText[nodeSlide];
          d3.select("#narrativeText").style("background", narrativeColours[nodeSlide]);

          /*d3.selectAll(".food1").attr("xlink:href", function(d) {
            return nodeImages[d.category]
          })*/

          /*if (numberFoods === 2) {
            d3.select("#foodSvg").append("text").text(foodName).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.1).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
            d3.select("#foodSvg").append("text").text(foodName2).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.6).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
          }*/

          return;
        } else if (nodeSlide === 0) {
          nodeSlide = 1;

          /*d3.select("#fillgauge1_1").style("display", "none");
          d3.select("#fillgauge1_2").style("display", "none");
          d3.select("#fillgauge2_1").style("display", "block");
          d3.select("#fillgauge2_2").style("display", "block");
          d3.select("#fillgauge3_1").style("display", "block");
          d3.select("#fillgauge3_2").style("display", "block");
          d3.select("#fillgauge4_1").style("display", "block");
          d3.select("#fillgauge4_2").style("display", "block");
          d3.select("#fillgauge5_1").style("display", "block");
          d3.select("#fillgauge5_2").style("display", "block");
          d3.select("#fillgauge6_1").style("display", "block");
          d3.select("#fillgauge6_2").style("display", "block");
          d3.select("#fillgauge7_1").style("display", "block");
          d3.select("#fillgauge7_2").style("display", "block");*/

          document.getElementById('bigPictureText').innerHTML = foodText[nodeSlide];
          d3.select("#narrativeText").style("background", narrativeColours[nodeSlide]);

          d3.select(".back-button").style("display", "block");

          d3.select("#narrativeText").style("background", "blue");

          refreshAlpha(1);

          //colorScale[0] = "none";

          //for (i = 0; i < 1; i++) {
          simulation // = d3.forceSimulation(nodes)
            //.force('charge', d3.forceManyBody().strength(-5))
            .force('x', d3.forceX().strength(0.85).x(function(d) {
              return xSpreadCentre[d.category];
            }))
            .force('y', d3.forceY().strength(0.125).y(function(d) {
              if (numberFoods === 1) {
                return height * (numberFoods === 1 ? 0.3 : 0.5)
              } else {
                return d.category < 6 ? height * 0.3 : height * 0.8; //Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
              }
            }))

          d3.selectAll(".squeezeHead").remove();
          d3.selectAll(".splitHead").remove();

          d3.select("#myG").selectAll("#circle0").style("fill", nutColours[0]);
          d3.select("#myG").selectAll("#circle1").style("fill", nutColours[1]);
          d3.select("#myG").selectAll("#circle2").style("fill", nutColours[2]);
          d3.select("#myG").selectAll("#circle3").style("fill", nutColours[3]);
          d3.select("#myG").selectAll("#circle4").style("fill", nutColours[4]);
          d3.select("#myG").selectAll("#circle5").style("fill", nutColours[5]);
          d3.select("#myG").selectAll("#circle6").style("fill", nutColours[0]);
          d3.select("#myG").selectAll("#circle7").style("fill", nutColours[1]);
          d3.select("#myG").selectAll("#circle8").style("fill", nutColours[2]);
          d3.select("#myG").selectAll("#circle9").style("fill", nutColours[3]);
          d3.select("#myG").selectAll("#circle10").style("fill", nutColours[4]);
          d3.select("#myG").selectAll("#circle11").style("fill", nutColours[5]);

          //node.attr("colour", 0);

          //simulation.nodes(nodes).restart();

          /*if (numberFoods === 2) {
            d3.select("#foodSvg").append("text").text(foodName).attr("class", "spreadHead").attr("x", width * 0.5).attr("y", height * 0.1).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
            d3.select("#foodSvg").append("text").text(foodName2).attr("class", "spreadHead").attr("x", width * 0.5).attr("y", height * 0.6).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
          }*/

          d3.select("#foodSvg").append("text").text("Sugar").attr("class", "spreadHead").attr("x", xSpreadCentre[0]).attr("y", "25").style("text-anchor", "middle").style("fill", nutColours[0]).style("font", "normal 'Bitter', serif");

          d3.select("#foodSvg").append("text").text("Protein").attr("class", "spreadHead").attr("x", xSpreadCentre[1]).attr("y", "25").style("text-anchor", "middle").style("fill", nutColours[1]).style("font", "normal 'Bitter', serif");

          d3.select("#foodSvg").append("text").text("Unhealthy Fats").attr("class", "spreadHead").attr("x", xSpreadCentre[2]).attr("y", "25").style("text-anchor", "middle").style("fill", nutColours[2]).style("font", "normal 'Bitter', serif");

          d3.select("#foodSvg").append("text").text("Healthy Fats").attr("class", "spreadHead").attr("x", xSpreadCentre[3]).attr("y", "25").style("text-anchor", "middle").style("fill", nutColours[3]).style("font", "normal 'Bitter', serif");

          d3.select("#foodSvg").append("text").text("Carbohydrates").attr("class", "spreadHead").attr("x", xSpreadCentre[4]).attr("y", "25").style("text-anchor", "middle").style("fill", nutColours[4]).style("font", "normal 'Bitter', serif");

          d3.select("#foodSvg").append("text").text("Salt").attr("class", "spreadHead").attr("x", xSpreadCentre[5]).attr("y", "25").style("text-anchor", "middle").style("fill", nutColours[5]).style("font", "normal 'Bitter', serif");

          return;
        }
      };

