anychart.onDocumentReady(function() {
  var data = anychart.data.set([
    ['January', 0],
    ['February', 500],
    {x: 'March', value: 10000, marker: {type:'star5', fill:'gold', size: 12}, hoverMarker: {size: 22}},
    ['April', 500],
    ['May', 0]
  ]);

  chart = anychart.pie(data);
  chart.container('container').draw();
});