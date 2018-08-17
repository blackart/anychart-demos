var chart;
anychart.onDocumentLoad(function() {
  var time1 = Date.now();

  chart = anychart.pie();
  chart.data([10,7,7,20,14]);
  chart.legend(false);
  chart.container('container').draw();

  var time2 = Date.now();
  console.log(time2 - time1);
});