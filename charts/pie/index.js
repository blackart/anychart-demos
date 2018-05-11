anychart.onDocumentReady(function() {
  var data = anychart.data.set([
    ['January', 300],
    ['February', 500],
    {x: 'March', value: 600, marker: {type:'star5', fill:'gold', size: 12}, hoverMarker: {size: 22}},
    ['April', 500],
    ['May', 300]
  ]);

  chart = anychart.pie(data);
  // chart.labels().position('outside');
  chart.container('container').draw();
});