var choroplethData = [
  {'id': 'DE'},
  {'id': 'IT'},
  {'id': 'ES'},
  {'id': 'CN'},
  {'id': 'AU'}
];

var connectorData = [
    {points: [51.471655, -0.453467, -26.136894, 28.241114], label: {enabled: true, anchor: 'top'}}
];

var bubbleData = [
  {name: "Brasil", long: -51.1, lat: -13.2, size: 2},
  {name: "Alaska", long: -152.6, lat: 65.6, size: 5}
];

var markerData = [
  {name: "USA", long: -100, lat: 40},
];

var chart;

anychart.onDocumentReady(function() {
  chart = anychart.map();

  // chart.choropleth(choroplethData);
  chart.connector(connectorData);
  // chart.bubble(bubbleData);
  // chart.marker(markerData);

  // chart.geoData(Convertor.convert(Highcharts.maps['custom/world-palestine-highres']));
  chart.geoData('anychart.maps.world');

  chart.listen('pointClick', function(e) {
    chart.zoomToFeature(e.point.get("id"));
  });

  chart.listen('click', function(e) {
    var coords = chart.globalToLocal(e.clientX, e.clientY);
    var latlon = chart.scale().inverseTransform(coords.x, coords.y);

    console.log(latlon);
  });

  chart.container('container').draw();
});