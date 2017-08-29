
anychart.onDocumentReady(function () {
  var data = [];

  // data for the sample
  anychart.maps['world_source'].features.filter(function (item) {
    data.push(
        {
          id: item.properties.id,
          name: item.properties.name
        }
    );
  });

  var min = 1900;
  var max = 2000;

  // create random data
  for (var i = 0; i < data.length; i++) {
    data[i]['value'] = randomExt(min, max);
  }

  var dataSet = anychart.data.set(data);

  // create map
  map = anychart.map();
  map.crs('august')
      .geoData('anychart.maps.world_source')
      .padding([0, 15]);
  map.unboundRegions().fill("#81d4fa");
  map.grids(true);
  map.grids().palette().items([{color: 'black'}, {color: '#ccc'}])

  // create map title
  map.title()
      .enabled(true)
      .padding({top: 35})
      .text("World Map with Crosshair and Grids");

  map.scale()
  // set xAxes ticks interval
      .xTicks({interval: 15})
      // set yAxes ticks interval
      .yTicks({interval: 10})
      // set precision scale
      .precision(2.5);

  // set crosshair settings
  map.crosshair()
      .enabled(true)
      .xStroke('1.3 #badb93')
      .yStroke('1.3 #badb93');

  // set axes settings
  map.axes()
  // enable axes
      .enabled(true)
      // hidden the first label in axes
      .drawFirstLabel(false)
      // hidden the last label in axes
      .drawLastLabel(false);

  var series_data = dataSet.mapAs({'value': 'value'});
  // create series with mapped data
  var series = map.choropleth(series_data);

  var scale_color = anychart.scales.ordinalColor([
    {less: 1907},
    {from: 1907, to: 1920},
    {from: 1920, to: 1940},
    {from: 1940, to: 1950},
    {from: 1950, to: 1960},
    {from: 1960, to: 1970},
    {from: 1970, to: 1980},
    {greater: 1980}
  ]);

  scale_color.colors(
      ['#81d4fa', '#4fc3f7', '#29b6f6', '#039be5', '#0288d1', '#0277bd', '#01579b', '#014377']
  );
  series.hoverFill('#b8b5d9')
      .colorScale(scale_color);

  // create zoom controls
  var zoomController = anychart.ui.zoom();
  zoomController.render(map);

  // set container id for the chart
  map.container('container');
  // initiate chart drawing
  map.draw();
});

function randomExt(a, b) {
  return Math.round(Math.random() * (b - a + 1) + a);
}
