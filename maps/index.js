var choroplethData = [
  {'id': 'DE', value: 10},
  {'id': 'IT', value: 15},
  {'id': 'ES', value: 20},
  {'id': 'CN', value: 30},
  {'id': 'AU', value: 40},
  {'id': 'BR', value: 11},
  {'id': 'CH', value: 37},
  {'id': 'AT', value: 11}
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

anychart.onDocumentReady(function(){
  var dataSet = anychart.data.set([
    {"id": "33063", "value": 192, fill: 'red'},
    {lat:42.15, long:9.18, fill: 'yellow'},
  ]);

  chart = anychart.markerMap();
  chart.geoData('anychart.maps.france');
  chart.marker(dataSet);
  chart.getSeries(0).geoIdField("insee_cl");
  chart.container('container').draw();

  chart.listen('chartdraw',function(){
    var xml = chart.toXml();
    var xmlL = chart.toXml(0,1);
    xmlS = chart.toXml(0,0);
    if (xmlL==xmlS) console.log('FAIL equal');
    else console.log('xmlL=',xmlL.length,'xmlS=', xmlS.length);
    chart.dispose();
    chart = anychart.fromXml(xmlL);
    chart.container('container').draw();
  });
});