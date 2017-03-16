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
    {x: 0, value: 20, label: {fontFamily: 'Comic Sans', enabled: true}},
    {x: 1, value: 30, hoverLabel: {fontColor: 'red', enabled: true}},
    {x: 2, value: 40, selectLabel: {fontSize: 60}},
    {x: 3, value: 50},
    {x: 4, value: 60},
    {x: 5, value: 70}
  ]);

  chart = anychart.column(dataSet);
  chart.xAxis(0, false);
  chart.yAxis(0, false);

  var series = chart.getSeries(0);
  series.labels()
      .adjustFontSize(true)
      .fontWeight('bold')
      .fontSize(25)
      .enabled(false);
  series.hoverLabels()
      .fontColor('green')
      .fontStyle('italic');
  series.selectLabels()
      .rotation(45);


  chart.container('container').draw();

  series.select([2, 5]);
  series.hover([1, 4]);
});