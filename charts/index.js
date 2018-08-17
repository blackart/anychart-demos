var randomExt = function(a, b) {
  return Math.round(Math.random() * (b - a + 1) + a);
};

function getData() {
  var data = [];
  for (var i = 0, len = 5; i < len; i++) {
    data.push(randomExt(0, 1));
  }
  return data;
}

anychart.onDocumentReady(function (){
  var time1 = Date.now();

  chart = anychart.line(getData());
  var series = chart.getSeries(0);
  series.labels(true);
  // chart.yAxis(false);
  // chart.xAxis(false);
  // chart = anychart.line([-10, 4, 0, -3]);
  // chart.xAxis(false).yAxis(false);
  // chart.xAxis().overlapMode(true);
  // chart.yAxis().overlapMode(true);
  chart.background('#242424');
  chart.container('container').draw();

  var time2 = Date.now();
  console.log(time2 - time1);
});