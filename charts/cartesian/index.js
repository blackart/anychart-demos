anychart.onDocumentReady(function() {
  var data = anychart.data.set([
    ['January', 0],
    ['February', 500],
    {x: 'March', value: 10000, marker: {type:'star5', fill:'gold', size: 12}, hoverMarker: {size: 22}},
    ['April', 500],
    ['May', 0]
  ]);

  chart = anychart.line();
  chart.padding(50);

  chart.yScale().maximum(10000);

  var series = chart.spline(data);
  chart.labels()
      .anchor('center-bottom')
      .clip(false)
      .enabled(true);
  chart.markers()
      .enabled(true)
      .clip(false);

  var axisZIndex = series.zIndex() - 1;
  chart.xAxis().zIndex(axisZIndex);
  chart.yAxis().zIndex(axisZIndex);

  chart.container('container').draw();
});