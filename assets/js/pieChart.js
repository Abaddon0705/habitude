      var dataset = [{
          name: 'Insufficient Nutritional Intake',
          total: 94
        },
        {
          name: 'Sufficient',
          total: 6
        }
      ];

      var width = d3.select('#pieChart').style('width').slice(0, -2), // needs to scale to div
        //height = window.innerHeight, // needs to scale to div
        radius;
        //alert(width);
        if (width <= 400) {
          radius = width / 2;
        } else {
          radius = 200;
        }

      var height = radius * 3;

      var color = d3.scaleOrdinal()
        .range(["#005A63", "#97AA0f"]); //first bad, second good

      var arc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

      var pie = d3.pie()
        .sort(null)
        .startAngle(2 * Math.PI)
        .endAngle(4 * Math.PI)
        .value(function(d) {
          return d.total;
        });

      var svg = d3.select("#pieChart").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("id", "toolTip")
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      var g = svg.selectAll(".arc")
        .data(pie(dataset))
        .enter().append("g")
        .attr("class", "arc");

      function draw() {
        //svg.html(null);
        d3.select("#pieChart svg g").html(null);
        g = svg.selectAll(".arc")
        .data(pie(dataset))
        .enter().append("g")
        .attr("class", "arc");
        g.append("path")
          .style("fill", function(d) {
            return color(d.data.name);
          })
          .transition().delay(function(d, i) {
            return i * 1650;
          }).duration(2000)
          .attrTween('d', function(d) {
            var i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
            return function(t) {
              d.endAngle = i(t);
              return arc(d)
            }
          });
        g.append("text")
          .style("fill", "#000")
          .style("font-size", (width <= 400 ? "1em" : "1.5vw"))
          .style("font-family", "'Source Sans Pro'")
          .attr("transform", function(d) {
            return "translate(" + arc.centroid(d) + ")";
          })
          .attr("dx", function(d) {
            return (d.data.name == "Sufficient" ? "-2em" : "-1em")
          })
          .attr("dy", function(d){
            return (0.8 * radius * (d.data.name == "Sufficient" ? -1 : 1))
        })
          .transition()
          //.delay(1000)
          .text(function(d) {
            return d.data.name + (d.data.name == "Sufficient" ? " Nutritional Intake" : "") + " (" + d.data.total + "%)";
          });

        /*g.append("text")
          .style("fill", "#000")
          .style("font-size", "1.5vw")
          .style("font-family", "'Source Sans Pro'")
          .attr("transform", function(d) {
            return "translate(" + arc.centroid(d) + ")";
          })
          .attr("dx", function(d) {
            return (d.data.name == "Sufficient" ? "-2em" : "-1em")
          })
          .attr("dy", function(d){
            return (0.8 * radius * (d.data.name == "Sufficient" ? -1 : 1) + width * 0.05)
        })
          .transition()
          //.delay(1000)
          .text(function(d) {
            return ("(" + d.data.total + "%)");
          });*/

        function type(d) {
          d.total = +d.total;
          return d;
        }
      }
