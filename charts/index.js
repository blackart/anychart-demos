anychart.onDocumentReady(function (){
  var time1 = Date.now();

  chart = anychart.line([-10, 4, 0, -3, 7, 2, -8, -10, 4, 0, -3, 7, 2, -8, -10, 4, 0, -3, 7, 2, -8, -10, 4, 0, -3, 7, 2, -8, -10, 4, 0, -3, 7, 2, -8, 4, 0, -3, 7, 2, -8]);
  // chart.xAxis(false).yAxis(false);
  // chart.xAxis().overlapMode(true);
  // chart.yAxis().overlapMode(true);
  chart.container('container').draw();

  var time2 = Date.now();
  console.log(time2 - time1);
});