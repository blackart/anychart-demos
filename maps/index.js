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

anychart.onDocumentReady(function() {
  var dataSet = anychart.data.set([
    {id: "AU.CT", value: 15, title: "Australian Capital Territory"},
    {id: "AU.VI", value: 23, title: "Victoria"},
    {id: "AU.WA", value: 86, title: "Western Australia"},
    {id: "AU.QL", value: 16, title: "Queensland"},
    {id: "AU.NS", value: 32, title: "New South Wales"},
    {id: "AU.NT", value: 64, title: "Northern Territory"},
    {id: "AU.TS", value: 28, title: "Tasmania"},
    {id: "AU.SA", value: 45, title: "South Australian"}
  ]);

  var dataSetForSeries = dataSet.mapAs({id: "id"});

  chart = anychart.map();
  chart.geoData(anychart.maps.australia);
  var series = chart.choropleth(dataSetForSeries);
  series.geoIdField("code_hasc")
      .tooltip(null)
      .labels()
      .enabled(true)
      .fontColor('red')
      .anchor('left');
  series.selectLabels({fontSize: 25, fontColor: 'purple', background: {fill: 'yellow'}});
  chart.callout(0).items(["AU.CT","AU.WA","AU.NS"]);
  chart.bounds('50%',0,'50%', '50%');

  chart.container('container').draw();
});