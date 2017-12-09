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
      var value;
      switch (id) {
        case 'US.WA':
        case 'US.OR':
        case 'US.CA':
        case 'US.NV':
        case 'US.AK':
        case 'US.HI':
          value = 'West';
          break;
        case 'US.MT':
        case 'US.ID':
        case 'US.WY':
        case 'US.ND':
        case 'US.SD':
        case 'US.NE':
        case 'US.KS':
        case 'US.OK':
        case 'US.CO':
        case 'US.NM':
        case 'US.AZ':
        case 'US.TX':
        case 'US.UT':
          value = 'Midwest';
          break;
        case 'US.MN':
        case 'US.WI':
        case 'US.IL':
        case 'US.IA':
        case 'US.MO':
        case 'US.IN':
        case 'US.MI':
        case 'US.KY':
        case 'US.OH':
          value = 'Great Lakes';
          break;
        case 'US.SC':
        case 'US.GA':
        case 'US.FL':
        case 'US.AL':
        case 'US.MS':
        case 'US.LA':
        case 'US.AR':
        case 'US.TN':
        case 'US.TN':
          value = 'Southeast';
          break;
        case 'US.PA':
        case 'US.WV':
        case 'US.VA':
        case 'US.NC':
        case 'US.NJ':
        case 'US.MD':
        case 'US.DE':
          value = 'Midatlantic';
          break;
        default:
          value = 'Northeast';
      }

      data.push({'id': id, 'value': value});
    }
  }
  return data;
};


anychart.onDocumentReady(function() {
  var colors = [
    '#1F70A8',
    '#5DB977',
    '#F9CF52',
    '#E95B3F',
    '#7857C1',
    '#61D6D6'
  ];

  var data = [
    {x: 'Northeast', value: 50},
    {x: 'Midatlantic', value: 90},
    {x: 'Southeast', value: 50},
    {x: 'Midwest', value: 30},
    {x: 'West', value: 45},
    {x: 'Great Lakes', value: 40},
  ]

  map = anychart.map();
  map.geoData(anychart.maps.united_states_of_america);

  var series = map.choropleth(generateData(map));
  series.stroke('1.5 white');
  // series.labels()
  //     .enabled(true)
  //     .format('{%id}');
  // series.overlapMode(true);
  map.title()
      .enabled(true)
      .text('SALES')
      .fontColor('#000')
      .fontSize(35)
      .padding(0)
      .margin(0);

  map.padding(0);
  // map.grids(true);
  map.background()
      // .stroke('green')
      .fill(null)
  map.label()
      .width('80%')
      .adjustFontSize(true, false)
      .enabled(true)
      .text('$212,600,000')
      .fontColor('#000')
      .position('center')
      .offsetY('45%')
      .anchor('center');

  var colorScale = anychart.scales.ordinalColor();
  colorScale.ranges([
    {equal: 'Northeast', color: '#1F70A8'},
    {equal: 'Midatlantic', color: '#5DB977'},
    {equal: 'Southeast', color: '#F9CF52'},
    {equal: 'Midwest', color: '#E95B3F'},
    {equal: 'West', color: '#7857C1'},
    {equal: 'Great Lakes', color: '#61D6D6'},
  ]);
  series.colorScale(colorScale);






  chart = anychart.pie(data);
  // chart.bounds(0, 0, '50%', '100%')
  chart.palette().items(colors);
  chart.stroke('2 #fff')
  chart.legend()
      .position('right')
      .itemsLayout('vertical');
  chart
      .labels(false)
      .innerRadius('85%')
      // .radius('45%')
      .centerContent(map)

  // map.draw();
  chart.container('container').draw();
});
