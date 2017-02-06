var data = [
  {'id':'DE'},
  {'id':'IT'},
  {'id': 'ES'},
  {'id': 'CN'},
  {'id': 'AU'}
];
var chart;

anychart.onDocumentReady(function() {
  chart = anychart.map();

  chart.choropleth(data);

  chart.geoData(Convertor.convert(Highcharts.maps['custom/world-palestine-highres']));

  chart.listen('pointClick', function(event) {
    chart.zoomToFeature(event.point.get("id"));
  });

  chart.container('container').draw();