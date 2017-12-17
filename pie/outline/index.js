var chart;
anychart.onDocumentReady(function() {
  chart = anychart.pie([1, 2, 5]);

  // chart.fill('aquastyle');
  chart.hovered().fill('red');

  chart.outline().fill(null);

  chart.container('container').draw();
});
