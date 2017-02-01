var min = 1900;
var max = 2000;
var i, len, chart1, chart2;

var gg = [
    [Highcharts.maps['countries/us/us-all'], 'anychart.maps.united_states_of_america'],
    [Highcharts.maps['countries/fr/fr-all'], 'anychart.maps.france'],
    [Highcharts.maps['custom/world-highres2'], 'anychart.maps.world'],
];

var row = 0

function drawChart(container, geodata) {
  anychart.licenseKey('test-key-32db1f79-cc9312c4');

  var stage = anychart.graphics.create(container);
  stage.credits(false);

  var chart = anychart.map();
  // chart.crs(anychart.enums.MapProjections.BONNE);
  // chart.geoData('anychart.maps.world_source');
  // chart.geoIdField('iso-a2');
  chart.geoData(geodata);
  // chart.geoData('anychart.maps.united_states_of_america');
  // chart.geoData('anychart.maps.france');
  // chart.geoData('anychart.maps.australia');

  // var series = chart.choropleth(generateData(chart));
  //
  // var scale = anychart.scales.ordinalColor([
  //   {less: 1907},
  //   {from: 1907, to: 1920},
  //   {from: 1920, to: 1940},
  //   {from: 1940, to: 1950},
  //   {from: 1950, to: 1960},
  //   {from: 1960, to: 1970},
  //   {from: 1970, to: 1980},
  //   {greater: 1980}
  // ]);
  //
  // series.labels()
  //     .enabled(true)
  //     .textFormatter('{%id}');
  //
  // scale.colors(['#42a5f5', '#64b5f6', '#90caf9', '#ffa726', '#fb8c00', '#f57c00', '#ef6c00', '#e65100']);
  // series.colorScale(scale);



  var series = chart.marker(anychart.data.set(airportsData));



  // series.labels(true);

  // chart.grids().enabled(true);
  chart.interactivity().zoomOnMouseWheel(true);

  // chart.crosshair().enabled(true).displayMode('sticky');


  // var data = [
  //   {'id': 'AU.NS', 'size': 25},
  //   {'id': 'AU.NT', 'size': 15},
  //   {'id': 'AU.WA', 'size': 83},
  //   {'id': 'AU.SA', 'size': 21},
  //   {'id': 'AU.VI', 'size': 5},
  //   {'id': 'AU.QL', 'size': 2},
  //   {'id': 'AU.TS', 'size': 90}
  // ]
  // var series1 = chart.bubble([
  //   {lat: 67, long: 180, size: 5},
  //   {lat: 67, long: -180, size: 5}
  // ]);

  // chart.maxBubbleSize(20);
  // chart.minBubbleSize(5);





  // var destinationsData = [
  //   {points: [51.471655, -0.453467, 40.641189, -73.778257], passengers: 2972729, to: "New York JFK"},
  //   {points: [51.471655, -0.453467, 25.255256, 55.359109], passengers: 2765889, to: "Dubai"},
  //   {points: [51.471655, -0.453467, 53.347198, -6.285535], passengers: 1650675, to: "Dublin"},
  //   {points: [51.471655, -0.453467, 22.273587, 114.203379], passengers: 1563714, to: "Hong Kong", label: {enabled: true, anchor: 'top'}},
  //   {points: [51.471655, -0.453467, 50.096467, 8.681190], passengers: 1506705, to: "Frankfurt"},
  //   {points: [51.471655, -0.453467, 52.383331, 4.891055], passengers: 1486995, to: "Amsterdam"},
  //   {points: [51.471655, -0.453467, 34.027009, -118.242850], passengers: 1428718, to: "Los Angeles", label: {enabled: true, anchor: 'right'}},
  //   {points: [51.471655, -0.453467, 40.404937, -3.701517], passengers: 1274707, to: "Madrid"},
  //   {points: [51.471655, -0.453467, 49.009564, 2.548128], passengers: 1247665, to: "Paris Charles de Gaulle"},
  //   {points: [51.471655, -0.453467, 48.124125, 11.578222], passengers: 1178614, to: "Munich"},
  //   {points: [51.471655, -0.453467, 40.730539, -74.173517], passengers: 1168357, to: "Newark"},
  //   {points: [51.471655, -0.453467, 41.974521, -87.907010], passengers: 1160217, to: "Chicago O'Hare"},
  //   {points: [51.471655, -0.453467, 1.320207, 103.852473], passengers: 1125125, to: "Singapore", label: {enabled: true, anchor: 'top'}},
  //   {points: [51.471655, -0.453467, 28.582462, 77.186854], passengers: 1078896, to: "New Delhi", label: {enabled: true, anchor: 'top'}},
  //   {points: [51.471655, -0.453467, 19.062080, 72.872955], passengers: 1066958, to: "Bombay", label: {enabled: true, anchor: 'left'}},
  //   {points: [51.471655, -0.453467, 47.371389, 8.539460], passengers: 1053897, to: "Zürich"},
  //   {points: [51.471655, -0.453467, 43.677593, -79.624852], passengers: 1042608, to: "Toronto Pearson"},
  //   {points: [51.471655, -0.453467, 46.201103, 6.143916], passengers: 1034524, to: "Geneva"},
  //   {points: [51.471655, -0.453467, 25.753244, -80.200183], passengers: 1018275, to: "Miami", label: {enabled: true, anchor: 'right'}},
  //   {points: [51.471655, -0.453467, 25.289708, 51.541816], passengers: 998475, to: "Doha"},
  //   {points: [51.471655, -0.453467, 55.681701, 12.580750], passengers: 960736, to: "Copenhagen"},
  //   {points: [51.471655, -0.453467, 41.799703, 12.246163], passengers: 952786, to: "Rome Fiumicino"},
  //   {points: [51.471655, -0.453467, 37.782376, -122.425586], passengers: 937643, to: "San Francisco", label: {enabled: true, anchor: 'right'}},
  //   {points: [51.471655, -0.453467, 59.649643, 17.923738], passengers: 935913, to: "Stockholm Arlanda"},
  //   {points: [51.471655, -0.453467, -26.136894, 28.241114], passengers: 928876, to: "Johannesburg Tambo", label: {enabled: true, anchor: 'top'}},
  //   {points: [51.471655, -0.453467, 40.982819, 28.810421], passengers: 924475, to: "Istanbul Atatürk"},
  //   {points: [51.471655, -0.453467, 24.287440, 54.743893], passengers: 895786, to: "Abu Dhabi", label: {enabled: true, anchor: 'top'}},
  //   {points: [51.471655, -0.453467, 42.345268, -71.070897], passengers: 884649, to: "Boston"},
  //   {points: [51.471655, -0.453467, 38.952858, -77.456614], passengers: 868975, to: "Washington Dulles"},
  //   {points: [51.471655, -0.453467, 48.208703, 16.391727], passengers: 786945, to: "Vienna"},
  //   {points: [51.471655, -0.453467, 38.718430, -9.125187], passengers: 749677, to: "Lisbon", label: {enabled: true, anchor: 'right'}},
  //   {points: [51.471655, -0.453467, 32.899287, -97.040389], passengers: 738684, to: "Dallas Fort Worth"},
  //   {points: [51.471655, -0.453467, 60.197438, 11.100287], passengers: 695981, to: "Oslo Gardermoen", label: {enabled: true, anchor: 'bottomRight', offsetY:0}},
  //   {points: [51.471655, -0.453467, 45.452025, 9.276244], passengers: 692364, to: "Milan Linate"},
  //   {points: [51.471655, -0.453467, 37.980549, 23.727353], passengers: 658449, to: "Athens", label: {enabled: true, anchor: 'topLeft', offsetY:0}},
  //   {points: [51.471655, -0.453467, 52.558650, 13.288513], passengers: 642725, to: "Berlin Tegel"},
  //   {points: [51.471655, -0.453467, 60.167065, 24.937900], passengers: 638495, to: "Helsinki", label: {enabled: true, anchor: 'bottomLeft', offsetY:0}},
  //   {points: [51.471655, -0.453467, 51.215150, 6.775206], passengers: 623942, to: "Düsseldorf"},
  //   {points: [51.471655, -0.453467, 41.377768, 2.172799], passengers: 610463, to: "Barcelona", label: {enabled: true, anchor: 'top'}},
  //   {points: [51.471655, -0.453467, 29.989811, -95.336836], passengers: 594417, to: "Houston Intercontinental", label: {enabled: true, anchor: 'right'}},
  //   {points: [51.471655, -0.453467, 55.949056, -3.189596], passengers: 1472812, to: "Edinburgh", curvature: 0},
  //   {points: [51.471655, -0.453467, 53.478805, -2.243742], passengers: 876597, to: "Manchester", curvature: 0},
  //   {points: [51.471655, -0.453467, 55.868966, -4.435128], passengers: 870988, to: "Glasgow International", curvature: 0},
  //   {points: [51.471655, -0.453467, 57.149315, -2.093963], passengers: 776880, to: "Aberdeen", curvature: 0, label: {enabled: true, anchor: 'rightBottom', offsetY:0}},
  //   {points: [51.471655, -0.453467, 54.597209, -5.930095], passengers: 674889, to: "Belfast City", curvature: 0},
  //   {points: [51.471655, -0.453467, 54.972206, -1.617285], passengers: 478806, to: "Newcastle upon Tyne", curvature: 0},
  //   {points: [51.471655, -0.453467, 53.867956, -1.661885], passengers: 132325, to: "Leeds/Bradford", curvature: 0}
  // ];
  //
  //
  // var connectorSeries = chart.connector(destinationsData)
  //     .startSize(0)
  //     .endSize(0)
  //     .stroke('0.5 #1976d2')
  //     .hoverStroke('1.5 #455a64')
  //     .markers({position: '100%', size: 4, fill: '#1976d2', stroke: '2 #E1E1E1', type: 'circle'})
  //     .hoverMarkers({position: '100%', size: 4, fill: '#455a64', stroke: '2 #455a64', type: 'circle'})
  //     .curvature(0.3);
  //
  // // Customizes labels for the destination series
  // connectorSeries.labels()
  //     .enabled(false)
  //     .fontSize(10)
  //     .offsetX(3)
  //     .offsetY(3)
  //     .position('100%')
  //     .textFormatter(function() {
  //       return this.getDataValue('to')
  //     });
  // // Customizes labels on hover for the destination series
  // connectorSeries.hoverLabels().fontColor('#455a64').fontSize(11);
  //
  // // Sets tooltip setting for the destination series
  // connectorSeries.tooltip({padding: [8, 13, 10, 13]});
  // connectorSeries.tooltip().titleFormatter(function() {
  //   return this.getDataValue('to')
  // });
  // connectorSeries.tooltip().useHtml(true).fontSize(13).textFormatter(function() {
  //   return '<span style="font-size: 12px; color: #cbcbcb">Passengers (2014): </span><br/>' +
  //       this.getDataValue('passengers').toLocaleString();
  // });













  // chart.listen('click', function(e) {
  //   var localCord = this.globalToLocal(e.clientX, e.clientY);
  //   var latLong = this.inverseTransform(localCord.x, localCord.y);
  //   this.zoomTo(2, localCord.x, localCord.y);
  // });












  var startConnectorCoords = [46.73, 2.49]
  var dataSetConnector = anychart.data.set([]);
  var dataSetMarker = anychart.data.set([]);

  chart.connector(dataSetConnector);
  var markerSeries = chart.marker(dataSetMarker);
  markerSeries.type('circle');
  markerSeries.labels().textFormatter(function() {return 'Clicked at - lat: ' + this['lat'] + ' long: ' + this['long'];});


  chart.listen("click", function(e) {
    var localCord = chart.globalToLocal(e.clientX, e.clientY);

    // Trying to get coordinate at latitude/longitude values.
    var latLong = chart.inverseTransform(localCord.x, localCord.y);

    dataSetConnector.data([{points: [startConnectorCoords[0], startConnectorCoords[1], latLong.lat, latLong.long]}]);
    dataSetMarker.data([{lat: latLong.lat.toFixed(2), long: latLong.long.toFixed(2)}]);

    chart.title("long: " + latLong.long + "\n lat: " + latLong.lat)
  });





  var series = chart.marker([{lat: 65.856756, lon: -150.732422}]);




  chart.container(stage).draw();


  // chart.height('50%');
  // chartFromXML = null;
  // chart.listen(anychart.enums.EventType.CHART_DRAW, function(e) {
  //   if (chartFromXML) chartFromXML.dispose();
  //   var xml = chart.toXml();
  //   console.log(xml);
  //   chartFromXML = anychart.fromXml(xml);
  //   chartFromXML.bounds(0, '50%', '100%', '50%');
  //   chartFromXML.container(stage).draw();
  // });

  return chart;
}

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


anychart.onDocumentReady(function() {
  chart1 = drawChart('container1', Convertor.convert(gg[row][0]));
  chart2 = drawChart('container2',  gg[row][1]);
});



