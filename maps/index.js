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
  {
    points: [73.9685374010375, -42.82239429736773, 59.23289776233006, 74.83196842523009],
    label: {enabled: true, anchor: 'top'}
  }
];

var connectorData2 = [
  {
    points: [33.901682468113314, -33.76298326545277, 50.63459159718123, 46.31327384679112],
    label: {enabled: true, anchor: 'top'}
  }
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
  // sefines settings for maps regions (regions bounds are not relevant for this data, so let's make it less contrast)
  var customTheme = {
    "map": {
      'unboundRegions': {'enabled': true, 'fill': '#E1E1E1', 'stroke': '#D2D2D2'}
    }
  };
  anychart.theme(customTheme);

  map = anychart.map();
  map.geoData(anychart.maps.world);
  map.padding(0);

  // var crashesDataSet = anychart.data.set(crashesData).mapAs();
  //
  // var createSeries = function(name, data, color) {
  //   var series = map.marker(data);
  //   series.name(name);
  //   series.fill(color);
  //
  //   series.stroke('2 #E1E1E1');
  //   series.hoverStroke('2 #fff');
  //   series.type('circle');
  //   series.size(4);
  //   series.labels(false);
  //   series.hoverSize(8);
  //   series.selectionMode("none");
  //
  //   series.legendItem({iconType: "circle", iconFill: color, iconStroke: '2 #E1E1E1'});
  // };




  // createSeries('10 - 50', crashesDataSet.filter('fatalities', filter_function(10, 50)), '#64b5f6');
  // createSeries('50 - 100', crashesDataSet.filter('fatalities', filter_function(50, 100)), '#1976d2');
  // createSeries('100 - 150', crashesDataSet.filter('fatalities', filter_function(100, 150)), '#355CB1');
  // createSeries('150 - 200', crashesDataSet.filter('fatalities', filter_function(150, 200)), '#5C3883');
  // createSeries('More then 200 fatalities', crashesDataSet.filter('fatalities', filter_function(200)), '#880e4f');




  map.marker(markerData);
  map.connector(connectorData)
      .startSize(0)
      .endSize(0)
      .curvature(0.3)
      .labels(true)
      .markers(true)
  map.connector([
    {points: [24.447150, 43.769531, -24.206890, 118.476563]}
  ])
      .startSize(10)
      .endSize(1)
      .curvature(0.3)
      .labels(true)
      .markers(true)
  map.choropleth([
    {id: 'BR'},
    {
      id: 'US',
      'middle-x': -80.1381,
      'middle-y': 33.0591,
      middleXYMode: 'absolute',
      label: {
        x: -60.3464,
        y: 20.2187,
        positionMode: 'absolute'
      }
    }
  ])
      .labels(true)
      .markers(true);

  map.legend().enabled(true);





  // var stationsData = getData();
  //
  // var base_link = 'http://en.wikipedia.org/wiki/';
  //
  // // create map chart
  // map = anychart.map();
  //
  // //settings for map chart
  // map.padding([10, 0, 10, 10]);
  // map.geoData(anychart.maps.united_states_of_america);
  // map.interactivity().selectionMode("none");
  // map.title().enabled(true).padding([10, 0, 10, 0]).useHtml(true).text('ACME Rental Station Locator<br/><span style="color:#929292; font-size: 12px;">(Number in a bubble - number of stations in a city)</span>');
  //
  // // create marker series for map chart
  // mapSeries = map.marker(anychart.data.set(stationsData));
  //
  // // setting for marker series for map chart
  // mapSeries.labels().enabled(true).fontColor('#263238').fontWeight("bold").textFormatter(function () {
  //   return this.getDataValue('number') + "\n\n" + this.getDataValue('name');
  // });
  // mapSeries.labels().position('centerTop').anchor('centerTop').offsetY(-12).hAlign("center");
  //
  // mapSeries.size(15);
  // mapSeries.hoverSize(20);
  // mapSeries.geoIdField('code_hasc');
  //
  // mapSeries.hoverStroke(mapSeries.stroke());
  // mapSeries.hoverFill(mapSeries.fill());
  //
  // // custom text in tooltips for marker series for map chart
  // mapSeries.tooltip().useHtml(true)
  //     .textFormatter(function () {
  //       return '<span style="color: #d9d9d9;"><span style="color: #fff;">' + this.getDataValue('number') +
  //           '</span> stations in ' + this.getDataValue('name') + '</span><br/>Click to see more';
  //     }).title(null).separator(null);
  //
  // // onclick function for points - redirecting client (based on base_link variable)
  // map.listen('pointClick', function (e) {
  //   window.open(base_link + stationsData[e.pointIndex].name, '_blank')
  // });








  map.container('container').draw();

  var zoomController = anychart.ui.zoom();
  zoomController.target(map);
  zoomController.render();
});


// data for the sample
function getData() {
  return [
    {name: "New York", lat: '40.6643', long: '-73.9385', number: 12},
    {name: "Seattle", lat: '47.6097', long: '-122.3331', number: 10},
    {name: "Chicago", lat: '41.8376', long: '-87.6818', number: 9},
    {name: "Houston", lat: '29.7805', long: '-95.3863', number: 8},
    {name: "San Diego", lat: '32.711555', long: '-117.158701', number: 4}
  ]
}


// helper function to bind data field to the local var.
function filter_function(val1, val2) {
  if (val2)
    return function(fieldVal) {
      return val1 <= fieldVal && fieldVal < val2;
    };
  else
    return function(fieldVal) {
      return val1 <= fieldVal;
    };
}