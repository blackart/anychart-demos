var data, chart, series;
anychart.onDocumentReady(function() {
  data = [
    {x:"John", value: 10000},
    {x:"Jake", value: 12000},
    {x:"Peter", value: 18000},
    {x:"James", value: 11000},
    {x:"Mary", value: 9000}
  ];
  chart = anychart.column();
  series = chart.column(data);

  var legend = chart.legend();
  legend.enabled(true);

  // legend.listen("legendItemMouseOver", function(){
  //   console.log("mouse over");
  // });
  // legend.listen("legendItemMouseOut", function() {
  //   console.log("mouse out")
  // });

  legend.listen("legendItemClick", function() {
    console.log("click")
  });
  legend.listen("legendItemMouseDown",function(){
    console.log("mouse down")
  });
  legend.listen("legendItemMouseUp",function(){
    console.log("mouse up")
  });

  chart.container("container");
  chart.draw();
});