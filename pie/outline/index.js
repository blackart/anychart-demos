var chart;
anychart.onDocumentReady(function() {
  chart = anychart.pie([1, 2, 5]);

  // chart.fill('aquastyle');
  chart.hovered().fill('red');

  // chart.outline({width: 10, fill: 'yellow', offset: 2, stroke: 'black'});

  chart.outline().width(10).enabled(true);
  // chart.hovered().outline(false);

  chart.innerRadius('80%');

  chart.center().fill('red');

  chart.container('container').draw();
});
