var data, chart, series;
anychart.onDocumentReady(function() {
  chart = anychart.column();
  chart.column([16, 30, 45, 12, 5]);
  chart.column([1, 51, 23, 64, 12]);
  series = chart.column([18, 25, 10, 20, 35]);
  legend = chart.legend()
      .align('center')
      .enabled(true);


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