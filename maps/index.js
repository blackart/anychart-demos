var choroplethData = [
  {'id': 'DE', value: 10},
  {'id': 'IT', value: 15},
  {'id': 'ES', value: 20},
  {'id': 'CN', value: 30},
  {'id': 'AU', value: 40},
  {'id': 'BR', value: 11},
  {'id': 'CH', value: 37},
  {'id': 'AT', value: 11},
];

var connectorData = [
  {points: [73.9685374010375, -42.82239429736773, 59.23289776233006, 74.83196842523009], label: {enabled: true, anchor: 'top'}}
];

var connectorData2 = [
  {points: [33.901682468113314, -33.76298326545277, 50.63459159718123, 46.31327384679112], label: {enabled: true, anchor: 'top'}}
];

var connectorData1 = [
  {
    points: [53.80909182931279, -24.023273297126586, 80.43043269877023, 66.78369963621455],
    label: {enabled: true, anchor: 'top', position: .4},
    marker: {position: .4}
  }
];


var bubbleData = [
  // {name: "Brasil", long: -51.1, lat: -13.2, size: 2},
  {name: "Alaska", long: -152.6, lat: 65.6, size: 5},
  {name: "USA", long: -100, lat: 40, size: 2}
];

var markerData = [
  {name: "USA", long: 46.64964433121245, lat: -19.16849591321863},
];

var chart;

anychart.onDocumentReady(function() {
  chart = anychart.map();
  chart.maxBubbleSize(30);
  chart.minBubbleSize(15);

  var s = chart.choropleth(choroplethData);
  s.selectFill('red');
  s.hatchFill('confetti');
  s.colorScale(anychart.scales.linearColor(['red', 'blue']));
  s.markers(true);
  s.labels()
      .fontColor('green')
      .fontWeight('bold')
      .enabled(true)

  // s.colorScale(anychart.scales.ordinalColor([
  //   {from: 0, to: 15},
  //   {from: 15, to: 20},
  //   {from: 20, to: 40},
  // ]));

  s = chart.connector(connectorData2);
  s
      .fill('black')
      .curvature(0)
      .startSize(20)
      .endSize(0)
      .labels(   {'fontColor': 'red', enabled: false})

  s = chart.connector(connectorData);
  s
      .startSize(15)
      .endSize(25)
      .hatchFill('confetti')

  s = chart.connector(connectorData1);
  s
      .startSize(20)
      .endSize(0)
      .hatchFill('confetti')

  s = chart.bubble(bubbleData);
  s.markers(true);
  s.selectFill('blue');
  s.hatchFill(true);
  s.labels(true);

  s = chart.marker(markerData);
  s.markers(true);
  s.size(20);
  s.selectFill('green');
  s.hatchFill(true);

  // chart.geoData(Convertor.convert(Highcharts.maps['custom/world-palestine-highres']));
  chart.geoData('anychart.maps.world');
  chart.colorRange(true);

  // chart.callout(0)
  //     .items(['AU', 'CN'])
  //     .orientation('right')
  //     .enabled(true);


  chart.interactivity().zoomOnMouseWheel(true);

  // chart.listen('pointClick', function(e) {
  //   chart.zoomToFeature(e.point.get("id"));
  // });

  chart.listen('click', function(e) {
    var coords = chart.globalToLocal(e.clientX, e.clientY);
    var latlon = chart.scale().inverseTransform(coords.x, coords.y);

    console.log(latlon);
  });

  chart.container('container').draw();
});