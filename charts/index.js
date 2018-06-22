anychart.onDocumentReady(function (){
  chart = anychart.line();
  series = chart.splineArea([-10, 4, 0, -3, 7, 2, -8]);

  series
      // .negativeFill('orange')
      // .negativeStroke('orange')
      .risingFill('orange')
      .fallingFill('yellow');


  series.hovered().risingFill('green')
      .fallingFill('blue');
  series.selected().risingFill('pink')
      .fallingFill('red');

  series.markers(true);

  chart.baseline(-1);
  chart.legend(true);
  chart.container('container').draw();
});