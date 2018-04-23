anychart.onDocumentReady(function () {
  var chart = anychart.polar([
    {x: 0, value: 14},
    {x: 1, value: 28},
    {x: 2, value: 20},
    {x: 3, value: 23},
    {x: 4, value: 36},
    {x: 5, value: 22},
    {x: 6, value: 13},
    {x: 7, value: 16},
    {x: 8, value: 8},
    {x: 9, value: 12}
  ]);


  chart.xGrid(false).yGrid(false);
  chart.xAxis(false);
  // chart.yAxis(false);

  // Get X-axis.
  var axis = chart.yAxis();
  axis.stroke("#2196F3");
  axis.labels().position('outside');
  axis.ticks().position('outside');

  chart.container("container");
  chart.draw();
});