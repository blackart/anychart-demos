anychart.onDocumentReady(function() {
  dataSet = [10.11, 0, -6, -45.9];
  chart = anychart.cartesian();
  series = chart.area(dataSet);

  atext = function() {
    return this.getData('x')
  };
  atext2 = function() {
    return this.getData('value')
  };

  series.labels()
      .enabled(true)
      .format(atext);
  chart.legend(true);

  chart.container('container').draw();
});