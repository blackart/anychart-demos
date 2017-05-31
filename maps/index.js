anychart.onDocumentReady(function () {
  // data from the CDN https://cdn.anychart.com/csv-data/united_states_of_america_area_state.js
  var usaStateArea = usa_state_area();
  var dataSet = anychart.data.set(usaStateArea);

  // create map
  map = anychart.map();
  // set geo data
  map.geoData('anychart.maps.united_states_of_america');
  map.padding([0, 150, 35, 150]);

  // create map title
  map.title()
      .enabled(true)
      .padding([35, 0, 55, 0])
      .text("Choropleth Map with Callout");

  var scale = anychart.scales.ordinalColor([
    {less: 50000},
    {from: 50000, to: 100000},
    {from: 100000, to: 200000},
    {from: 200000, to: 250000},
    {from: 200000, to: 300000},
    {greater: 300000}
  ]);
  scale.colors([
    '#99c9f7',
    '#76a7d6',
    '#608db7',
    '#659acc',
    '#5584B1',
    '#3a71a5'
  ]);

  var series = map.choropleth(dataSet);
  series.hoverStroke('#757575')
      .hoverFill('#9e9e9e')
      .selectStroke('#757575')
      .selectFill('#9e9e9e');
  series.labels()
      .enabled(true)
      .format('{%id}');
  // set color for choropleth series for map
  series.colorScale(scale);
  series.tooltip()
      .useHtml(true)
      .format(function () {
        return 'Id: ' + this.id + '<br>' + 'Area: ' +
            this.value + ' km' + '&#178;'
      });

  // create callout first
  var calloutFirst = map.callout(0);
  calloutFirst.items([
    'US.VT',
    'US.NH',
    'US.MA',
    'US.RI',
    'US.CT',
    'US.NJ',
    'US.DE',
    'US.MD',
    'US.HI'
  ])
      .align('center')
      .orientation('left');

  // set settings for calloutFirst title
  calloutFirst.title()
      .enabled(true)
      .orientation('right')
      .fontSize('13px')
      .fontColor('#7c868e')
      .text('States with an area < 50 000');

  // create callout second
  var calloutSecond = map.callout(1);
  calloutSecond.items(['US.IN', 'US.WV', 'US.ME', 'US.SC'])
      .align('right')
      .orientation('top')
      .length(300)
      .width(50);
  // connector for callout and state
  calloutSecond.labels()
      .enabled(true)
      .connectorStroke('#546269');

  // set settings for calloutFirst title
  calloutSecond.title()
      .enabled(true)
      .orientation('top')
      .fontSize('13px')
      .fontColor('#7c868e')
      .text('States with an area of 50 000 to 100 000');

  // create zoom controls
  var zoomController = anychart.ui.zoom();
  zoomController.render(map);

  // set container id for the chart
  map.container('container');
  // initiate chart drawing
  map.draw();
});