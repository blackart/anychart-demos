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
  var stage = anychart.graphics.create('container', 500, 450);

  // chart1 = anychart.map();
  // chart1.geoData(anychart.maps.canada);
  // chart1.axes(true);
  // chart1.crosshair(true);
  // chart1.crosshair().xLabel().axisIndex(0);
  // chart1.crosshair().yLabel().axisIndex(1);
  // chart1.bounds(0,0,'50%', '50%');
  // chart1.container(stage).draw();
  //
  // chart2 = anychart.map();
  // chart2.geoData(anychart.maps.canada).crs('fahey');
  // chart2.crosshair().enabled(true)
  //     .xStroke('red')
  //     .yStroke('#B800F5');
  // chart2.bounds('50%',0,'50%', '50%');
  // chart2.container(stage).draw();
  //
  // chart3 = anychart.map();
  // chart3.geoData(anychart.maps.canada).crs('mercator');
  // chart3.crosshair().enabled(true)
  //     .xLabel()
  //     .fontSize(7)
  //     .padding(3)
  //     .anchor('rightBottom')
  //     .fontColor('#1A0099');
  // chart3.crosshair().yLabel()
  //     .padding(2)
  //     .offsetY(-1)
  //     .offsetX(5)
  //     .fontColor('#FF3366') // красный
  //     .fontSize(4);
  // chart3.bounds(0,'50%', '50%', '50%');
  // chart3.container(stage).draw();

  var dataSet4 = anychart.data.set([
    {'id': 'IE.5551', size: 2},
    {'id': 'IE.GY', size: 3},
    {'id': 'IE.DN', size: 5},
    {'id': 'IE.MH',  size: 10, fill: 'green'},
    {'id': 'IE.491', size: 2}
  ]);
  var dataSetForChart4 = dataSet4.mapAs({id: "id"});
  chart4 = anychart.map();
  chart4.geoData(anychart.maps.ireland);
  series4 = chart4.bubble(dataSetForChart4);
  // series4.geoIdField('id');
  // chart4.crosshair().enabled(true)
  //                .displayMode('sticky') // work
  //     .displayMode('float');
  // color4 = chart4.crosshair().yLabel()
  //     .fontColor();
  chart4.bounds('50%','50%','50%', '50%');
  chart4.container(stage).draw();
});