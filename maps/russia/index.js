var min = 1900;
var max = 2000;
var i, len, chart1, chart2, stage;

var geoData = {
  usa: [Highcharts.maps['countries/us/us-all'], 'anychart.maps.united_states_of_america'],
  france: [Highcharts.maps['countries/fr/fr-all'], 'anychart.maps.france'],
  world: [Highcharts.maps['custom/world-highres3'], 'anychart.maps.world'],
  russia: [Highcharts.maps['countries/ru/custom/ru-all-disputed'], 'anychart.maps.russia'],
  australia: [Highcharts.maps['countries/au/au-all'], '']
};

var randomExt = function(a, b) {
  return Math.round(Math.random() * (b - a + 1) + a);
};

var generateData = function(chart) {
  var data = [];
  features = chart.geoData()['features'];
  for (var i = 0, len = features.length; i < len; i++) {
    var feature = features[i];
    if (feature['properties']) {
      id = feature['properties'][chart.geoIdField()];
      data.push({'id': id, 'value': randomExt(min, max), size: randomExt(1, 100)});
    }
  }
  return data;
};

function drawChart(bounds, geodata, title) {
  var chart = anychart.map();
  chart.geoData(geodata);
  chart.title(title);
  chart.bounds(bounds);
  chart.interactivity().zoomOnMouseWheel(true);
  // chart.maxZoomLevel(3);

  // chart.crs('wsg84');

  chart.crosshair(true);

  chart.axes(true);
  chart.scale()
      .maximumX(180)
      .minimumX(-7)
  //     .maximumY(73)
  //     .minimumY(28);

  var series = chart.choropleth(generateData(chart));

  var scale = anychart.scales.ordinalColor([
    {less: 1907},
    {from: 1907, to: 1920},
    {from: 1920, to: 1940},
    {from: 1940, to: 1950},
    {from: 1950, to: 1960},
    {from: 1960, to: 1970},
    {from: 1970, to: 1980},
    {greater: 1980}
  ]);

  series.labels()
      .enabled(true)
      .format('{%id}');

  scale.colors(['#42a5f5', '#64b5f6', '#90caf9', '#ffa726', '#fb8c00', '#f57c00', '#ef6c00', '#e65100']);
  series.colorScale(scale);


  // var startConnectorCoords = [46.73, 2.49];
  // var dataSetConnector = anychart.data.set([]);
  // var dataSetMarker = anychart.data.set([]);
  //
  // chart.connector(dataSetConnector);
  // var markerSeries = chart.marker(dataSetMarker);
  // markerSeries.type('circle');
  // markerSeries.labels().format(function() {return 'Clicked at - lat: ' + this['lat'] + ' long: ' + this['long'];});
  // chart.listen("click", function(e) {
  //   var localCord = chart.globalToLocal(e.clientX, e.clientY);
  //
  //   // Trying to get coordinate at latitude/longitude values.
  //   var latLong = chart.inverseTransform(localCord.x, localCord.y);
  //
  //   dataSetConnector.data([{points: [startConnectorCoords[0], startConnectorCoords[1], latLong.lat, latLong.long]}]);
  //   dataSetMarker.data([{lat: latLong.lat.toFixed(2), long: latLong.long.toFixed(2)}]);
  // });


  chart.container(stage).draw();

  return chart;
}

function drawCharts(id) {
  stage.suspend();

  chart1.geoData(Convertor.convert(gg[id][0]));
  chart1.getSeries(0).data(generateData(chart1));

  // chart2.geoData(gg[id][1])
  // chart2.getSeries(0).data(generateData(chart2));
  stage.resume();
}

anychart.onDocumentReady(function() {
  anychart.licenseKey('test-key-32db1f79-cc9312c4');
  stage = anychart.graphics.create('container');
  stage.credits(false);
  stage.suspend();

  chart1 = drawChart(anychart.math.rect(0, 0, '100%', '100%'), Convertor.convert(geoData['russia'][0]), 'Highcharts geo data');
  chart1 = drawChart(anychart.math.rect(0, 0, '100%', '100%'), geoData['russia'][1], 'Anychart geo data');
  // chart2 = drawChart(anychart.math.rect('50%', 0, '50%', '100%'),  geoData['world'][1], 'Anychart geo data');
  // chart2 = drawChart(anychart.math.rect(0, 0, '100%', '100%'),  geoData['world'][1], 'Anychart geo data');

  stage.resume();

  // chart2.listen(anychart.enums.EventType.ZOOM_START, function(e) {
  //   console.log(e.type);
  // });
  // chart2.listen(anychart.enums.EventType.ZOOM_END, function(e) {
  //   console.log(e.type);
  // });
  // chart2.listen(anychart.enums.EventType.ZOOM, function(e) {
  //   console.log(e.type, e.from, e.to, e.current);
  // });


  $('#geo_data').on('change', function() {
    drawCharts($(this).val());
  })
});






