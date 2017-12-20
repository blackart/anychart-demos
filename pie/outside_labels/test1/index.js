var chart, newPie, seriesData;
var ranger, input;

function startAngle(value) {
  chart.startAngle(value);
  input.value = chart.startAngle();
}


function startAngleInp(value) {
  chart.startAngle(value);
  ranger.value = chart.startAngle();
}

anychart.onDocumentReady(function() {
  chart = anychart.pie([
    ['p1', 1],
    ['p2', 2],
    ['p3', 3]
  ]);
  chart.labels(true).labels().position('outside');
  chart.hovered().labels().fontColor('red');
  chart.container('container').draw();
});