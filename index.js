anychart.onDocumentReady(function () {
  var data = [];

  for (var i = 0, len = 100; i < len; i++) {
    data.push(i);
  }

  var chart = anychart.line(data);
  chart.xAxis(false).yAxis(false);
  chart.container("container").draw();
});