          var div = d3.select("body").append("div")    
          .attr("class", "tooltip")                
          .style("opacity", 0);

          var width = d3.select("#foodDiv").style("width").slice(0, -2), 
              height = 700;

          d3.select("#foodDiv")
            .append("svg")
            .attr("id", "foodSvg")
            .attr("width", width)
            .attr("height", height)
          //.style("border", "solid black 1px")
            .append("g")
            .attr("id", "myG");
          //.attr("transform", "translate(50, 200)");

          var nodeName = ["Sugar", "Protein", "Unhealthy Fats", "Healthy Fats", "Carbohydrates", "Salt"];
          var nodeText = ["A sweet-tasting, high-calorie carbohydrate. <br><br>Sugar is often added to foods to make them more palatable and contributes to the onset of obesity, diabetes, and cardiovascular diseases.", 
                          "One of the 'building blocks' of muscle and a great fuel source. <br><br>Protein is extremely important for your health, as it contains essential amino acids.", 
                          "Unhealthy fats include saturated and trans fatty acids. <br><br>Both can raise cholesterol levels, clog arteries, and increase the risk for heart disease.", 
                          "Healthy fats include polyunsaturated fatty acids and monounsaturated fats. <br><br>When eaten in moderation (and especially when replacing saturated or trans fats), they can help lower cholesterol levels and reduce the risk of heart disease.", 
                          "Carbohydrates are the most important macronutrient -- they're where you get most of your energy. <br><br>Carbohydrates provide fuel for the central nervous system and muscles. They also prevent protein from being used as an energy source and enable fat metabolism.", 
                          "Salt is an essential nutrient <i>in relatively small</i> amounts. <br><br>It is needed for muscle contraction, nerve transmission, pH balance, and hydration."];

          var nodeImages = new Array();
          // sugar
          nodeImages[0] = new Array(/*"https://www.svgrepo.com/show/455/sugar.svg",
            "https://www.svgrepo.com/show/222301/candy-sugar.svg",*/
            "https://www.svgrepo.com/show/222846/candy-sugar.svg"/*,
            "https://www.svgrepo.com/show/227291/doughnut-sugar.svg",
            "https://www.svgrepo.com/show/287589/jelly-beans-sugar.svg",
            "https://www.svgrepo.com/show/1876/candy-cane.svg",
            "https://www.svgrepo.com/show/1879/candy.svg",
            "https://www.svgrepo.com/show/1353/candy.svg",
            "https://www.svgrepo.com/show/10286/candy.svg"*/);

          // protein
          nodeImages[1] = new Array("https://www.svgrepo.com/show/230494/beef.svg"/*,
            "https://www.svgrepo.com/show/40549/chicken-leg.svg",
            "https://www.svgrepo.com/show/25818/fish.svg",
            "https://www.svgrepo.com/show/184884/peanuts-peanut.svg",
            "https://www.svgrepo.com/show/196387/hazelnuts-almond.svg",
            "https://www.svgrepo.com/show/1877/fried-egg.svg"*/);

          // unhealthy fats
          nodeImages[2] = new Array(/*"https://www.svgrepo.com/show/32938/pork.svg",
            "https://www.svgrepo.com/show/276219/ribs-pork.svg",
            "https://www.svgrepo.com/show/90746/sausage.svg",
            "https://www.svgrepo.com/show/91975/sausage.svg",
            "https://www.svgrepo.com/show/747/cheese.svg",
            "https://www.svgrepo.com/show/276537/butter-butter.svg",
            "https://www.svgrepo.com/show/746/pie.svg",*/
            "https://www.svgrepo.com/show/43115/burger.svg");

          // healthy fats
          nodeImages[3] = new Array("https://www.svgrepo.com/show/25818/fish.svg"/*,
            "https://www.svgrepo.com/show/747/cheese.svg",
            "https://www.svgrepo.com/show/48219/avocado.svg",
            "https://www.svgrepo.com/show/26720/yogurt.svg",
            "https://www.svgrepo.com/show/184884/peanuts-peanut.svg",
            "https://www.svgrepo.com/show/196387/hazelnuts-almond.svg",
            "https://www.svgrepo.com/show/68006/coconut.svg"*/);

          // carbohydrates
          nodeImages[4] = new Array("https://www.svgrepo.com/show/105766/bread.svg"/*,
            "https://www.svgrepo.com/show/227276/potato.svg",
            "https://www.svgrepo.com/show/9730/corn.svg",
            "https://www.svgrepo.com/show/267175/pasta.svg",
            "https://www.svgrepo.com/show/15501/beer.svg",
            "https://www.svgrepo.com/show/83095/beans.svg"*/);

          // sodium
          nodeImages[5] = new Array("https://www.svgrepo.com/show/59313/salt.svg"/*,
            "https://www.svgrepo.com/show/287593/pretzel.svg",
            "https://www.svgrepo.com/show/269887/products-chips.svg",
            "https://www.svgrepo.com/show/21921/french-fries.svg"*/);


          var colorScale = ['orange', 'lightblue', '#B19CD9'];
          var imgBaseSize = Math.floor(d3.select("#foodSvg").style("width").slice(0, -2) / 100);
          if (imgBaseSize > 10) {imgBaseSize = 10;};
          var xSpread = d3.select("#foodSvg").style("width").slice(0, -2) / 6 / 2;
          var xSplit = [d3.select("#foodSvg").style("width").slice(0, -2) * 0.2,
                        d3.select("#foodSvg").style("width").slice(0, -2) * 0.8];

          var xSpreadCentre = [xSpread];
          for (i = 0; i < 5; i++) {
            xSpreadCentre = xSpreadCentre.concat(xSpreadCentre[i] + xSpread * 2.1);
          };

          var xSplitCentre = [xSplit[0], xSplit[1], xSplit[0], xSplit[1], xSplit[0], xSplit[0]];

          var numNodes = numberFoods === 1 ? 200 : 100;

          var nPerCategory = [Math.floor(sugar / totalGrams * numNodes),
                              Math.floor(protein / totalGrams * numNodes),
                              Math.floor(badFat / totalGrams * numNodes),
                              Math.floor(goodFat / totalGrams * numNodes),
                              Math.floor(carbs / totalGrams * numNodes),
                              Math.floor(salt / saltDI * 25)]; // i.e., sugar, protein, etc.

          /*var numNodes = 100;
var nodes = d3.range(numNodes).map(function(d, i) {
  return {
    radius: Math.random() * 5 + 5,
    category: i % 6
  }
});*/

          var nodes = [];

          for (var i = 0; i < 6; i++) {
            nodes = nodes.concat(d3.range(nPerCategory[i]).map(function() {
              return {
                radius: Math.random() * imgBaseSize / 2 + imgBaseSize,
                category: i
              };
            }));
          };

          // duplicating the array within itself so multiple foods will work
          // for (i = 6; i < 12; i++) {nodeImages[i] = nodeImages[i - 6]};
          if (numberFoods === 2) {
            nodeImages = nodeImages.concat(nodeImages);
            nodeName = nodeName.concat(nodeName);
            nodeText = nodeText.concat(nodeText);
            xSpreadCentre = xSpreadCentre.concat(xSpreadCentre);
            xSplitCentre = xSplitCentre.concat(xSplitCentre);
            nPerCategory = nPerCategory.concat([Math.floor(sugar2 / totalGrams2 * numNodes),
                                                Math.floor(protein2 / totalGrams2 * numNodes),
                                                Math.floor(badFat2 / totalGrams2 * numNodes),
                                                Math.floor(goodFat2 / totalGrams2 * numNodes),
                                                Math.floor(carbs2 / totalGrams2 * numNodes),
                                                Math.floor(salt2 / saltDI * 25)]);

            for (var j = 6; j < 12; j++) {
              nodes = nodes.concat(d3.range(nPerCategory[j]).map(function() {
                return {
                  radius: Math.random() * imgBaseSize + imgBaseSize,
                  category: j
                };
              }));
            };
          };

          var simulation = d3.forceSimulation(nodes)
          .force('charge', d3.forceManyBody().strength(2.5))
          .force('x', d3.forceX().x(function(d) {
            if (numberFoods === 1) {
              return d3.select("#foodSvg").style("width").slice(0, -2) / 2;
            } else {
              return d.category < 6 ? (d3.select("#foodSvg").style("width").slice(0, -2) * 0.2) : (d3.select("#foodSvg").style("width").slice(0, -2) * 0.8);
            };
          }))
          .force('y', d3.forceY().strength(0.4).y(function(d) {
            return height * (numberFoods === 1 ? 0.3 : 0.3);//Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
          }))
          .force('collide', d3.forceCollide(function(d){
            return d.radius}).iterations(16))
          //.alphaDecay(0.25)
          .on('tick', ticked);

          simulation.force('x', d3.forceX().strength(0.4).x(function(d) {
            if (numberFoods === 1) {
              return d3.select("#foodSvg").style("width").slice(0, -2) / 2;
            } else {
              return d.category < 6 ? (d3.select("#foodSvg").style("width").slice(0, -2) * 0.2) : (d3.select("#foodSvg").style("width").slice(0, -2) * 0.8);
            };
          }))

          if (numberFoods === 2) {
            d3.select("#foodSvg").append("text").text(foodName).attr("class", "squeezeHead").attr("x", xSplit[0]).attr("y", "25").style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");

            d3.select("#foodSvg").append("text").text(foodName2).attr("class", "squeezeHead").attr("x", xSplit[1]).attr("y", "25").style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
          }

          function refreshAlpha(a) {simulation.alpha(a).restart();}

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
              .style('fill', function(d) {
              return "none";//colorScale[d.category];
            })
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
              .attr("xlink:href", function(d) {
              return nodeImages[d.category][Math.floor(Math.random() * nodeImages[d.category].length)]
            })/*"https://upload.wikimedia.org/wikipedia/commons/0/0f/Twemoji2_1f610.svg")*/
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
            }).on("mouseover", function(d) {        
              div.transition()        
                .duration(200)        
                .style("opacity", .9);        
              div    .html("<h1>" + nodeName[d.category] + "</h1><p>" + nodeText[d.category] + "</p>")    
                .style("left", (mouseX + 10) + "px")        
                .style("top", (mouseY + 28) + "px");    
            })                    
              .on("mouseout", function(d) {        
              div.transition()        
                .duration(500)        
                .style("opacity", 0);    
            });

            u.exit().remove();
            images.exit().remove();
          }

          var squeezed = true,
              spreaded = false,
              splitted = false;

          function squeeze() {
            if (squeezed) {return} else {squeezed = true; spreaded = false; splitted = false};

            refreshAlpha(1);

            for (i = 0; i < 1; i++) {
              simulation// = d3.forceSimulation(nodes)
              //.force('charge', d3.forceManyBody().strength(10))
                .force('x', d3.forceX().strength(0.15).x(function(d) {
                if (numberFoods === 1) {
                  return d3.select("#foodSvg").style("width").slice(0, -2) / 2;
                } else {
                  return d.category < 6 ? (d3.select("#foodSvg").style("width").slice(0, -2) * 0.2) : (d3.select("#foodSvg").style("width").slice(0, -2) * 0.8);
                };
              }))
                .force('y', d3.forceY().strength(0.125).y(function(d) {
                return height * (numberFoods === 1 ? 0.3 : 0.3);//Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
              }))

              d3.selectAll(".spreadHead").remove();
              d3.selectAll(".splitHead").remove();

              if (numberFoods === 2) {
                d3.select("#foodSvg").append("text").text(foodName).attr("class", "squeezeHead").attr("x", xSplit[0]).attr("y", "25").style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");

                d3.select("#foodSvg").append("text").text(foodName2).attr("class", "squeezeHead").attr("x", xSplit[1]).attr("y", "25").style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
              }
              /*.force('y', d3.forceY().y(function(d) {
    return Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
  }))
  .force('collide', d3.forceCollide(function(d){
                                return d.radius}).iterations(16))
  .on('tick', ticked);*/
            }
          };

          function spread() {
            if (spreaded) {return} else {spreaded = true; splitted = false; squeezed = false};

            refreshAlpha(1);

            //for (i = 0; i < 1; i++) {
            simulation// = d3.forceSimulation(nodes)
            //.force('charge', d3.forceManyBody().strength(-5))
              .force('x', d3.forceX().strength(0.85).x(function(d) {
              return xSpreadCentre[d.category];
            }))
              .force('y', d3.forceY().strength(0.125).y(function(d) {
              if (numberFoods === 1) {
                return height * (numberFoods === 1 ? 0.3 : 0.5)
              } else {
                return d.category < 6 ? height * 0.3 : height * 0.8;//Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
              }
            }))

            d3.selectAll(".squeezeHead").remove();
            d3.selectAll(".splitHead").remove();

            if (numberFoods === 2) {
              d3.select("#foodSvg").append("text").text(foodName).attr("class", "spreadHead").attr("x", width * 0.5).attr("y", height * 0.1).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
              d3.select("#foodSvg").append("text").text(foodName2).attr("class", "spreadHead").attr("x", width * 0.5).attr("y", height * 0.6).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
            }

            d3.select("#foodSvg").append("text").text("Sugar").attr("class", "spreadHead").attr("x", xSpreadCentre[0]).attr("y", "25").style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 12px 'Bitter', serif");

            d3.select("#foodSvg").append("text").text("Protein").attr("class", "spreadHead").attr("x", xSpreadCentre[1]).attr("y", "25").style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 12px 'Bitter', serif");

            d3.select("#foodSvg").append("text").text("Unhealthy Fats").attr("class", "spreadHead").attr("x", xSpreadCentre[2]).attr("y", "25").style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 12px 'Bitter', serif");

            d3.select("#foodSvg").append("text").text("Healthy Fats").attr("class", "spreadHead").attr("x", xSpreadCentre[3]).attr("y", "25").style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 12px 'Bitter', serif");

            d3.select("#foodSvg").append("text").text("Carbohydrates").attr("class", "spreadHead").attr("x", xSpreadCentre[4]).attr("y", "25").style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 12px 'Bitter', serif");

            d3.select("#foodSvg").append("text").text("Salt").attr("class", "spreadHead").attr("x", xSpreadCentre[5]).attr("y", "25").style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 12px 'Bitter', serif");
            /*.force('collide', d3.forceCollide(function(d){
                                return d.radius}).iterations(50))
  .on('tick', ticked);*/
            //}
          };

          function split() {
            if (splitted) {return} else {splitted = true; squeezed = false; spreaded = false};

            refreshAlpha(1);

            //for (i = 0; i < 1; i++) {
            simulation// = d3.forceSimulation(nodes)
            //.force('charge', d3.forceManyBody().strength(10))
              .force('x', d3.forceX().strength(0.25).x(function(d) {
              return xSplitCentre[d.category];
            }))
              .force('y', d3.forceY().strength(0.25).y(function(d) {
              if (numberFoods === 1) {
                return height * (numberFoods === 1 ? 0.3 : 0.5)
              } else {
                return d.category < 6 ? height * 0.3 : height * 0.8;//Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
              }
            }))

            d3.selectAll(".squeezeHead").remove();
            d3.selectAll(".spreadHead").remove();

            if (numberFoods === 2) {
              d3.select("#foodSvg").append("text").text(foodName).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.1).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
              d3.select("#foodSvg").append("text").text(foodName2).attr("class", "splitHead").attr("x", width * 0.5).attr("y", height * 0.6).style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
            }

            d3.select("#foodSvg").append("text").text("Bad Stuff").attr("class", "splitHead").attr("x", xSplit[0]).attr("y", "25").style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");

            d3.select("#foodSvg").append("text").text("Good Stuff").attr("class", "splitHead").attr("x", xSplit[1]).attr("y", "25").style("text-anchor", "middle").style("fill", "#3e8e41").style("font", "normal 20px 'Bitter', serif");
            /*.force('y', d3.forceY().y(function(d) {
    return Math.random() * 25 * [-1, 1][Math.floor(Math.random()) * 2];
  }))
  .force('collide', d3.forceCollide(function(d){
                                return d.radius}).iterations(16))
  .on('tick', ticked);*/
            //}
          };