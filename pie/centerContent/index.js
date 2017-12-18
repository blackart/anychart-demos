var pie, map;
anychart.onDocumentReady(function() {
  var colors = ['#0072A5', '#3BBA7B', '#FFCD61', '#FA5446', '#7D58BD', '#29D8D5'];

  var generateData = function(chart) {
    var data = [];
    features = chart.geoData()['features'];
    for (var i = 0, len = features.length; i < len; i++) {
      var feature = features[i];
      if (feature['properties']) {
        id = feature['properties'][chart.geoIdField()];

        switch (id) {
          case 'US.WA':
          case 'US.OR':
          case 'US.CA':
          case 'US.NV':
          case 'US.AZ':
          case 'US.AK':
          case 'US.HI':
            value = 'West'
            break;
          case 'US.ID':
          case 'US.MT':
          case 'US.ND':
          case 'US.SD':
          case 'US.NE':
          case 'US.KS':
          case 'US.OK':
          case 'US.TX':
          case 'US.NM':
          case 'US.CO':
          case 'US.UT':
          case 'US.WY':
            value = 'Midwest'
            break;
          case 'US.AR':
          case 'US.TN':
          case 'US.NC':
          case 'US.SC':
          case 'US.GA':
          case 'US.LA':
          case 'US.MS':
          case 'US.AL':
          case 'US.FL':
            value = 'Southeast'
            break;
          case 'US.MN':
          case 'US.WI':
          case 'US.MI':
          case 'US.IA':
          case 'US.MO':
          case 'US.IL':
          case 'US.IN':
          case 'US.KY':
          case 'US.OH':
            value = 'Great Lakes'
            break;
          case 'US.PA':
          case 'US.WV':
          case 'US.VA':
          case 'US.MD':
          case 'US.DE':
          case 'US.NJ':
            value = 'Midatlantic'
            break;
          default:
            value = 'Northeast'
        }

        data.push({'id': id, 'value': value});
      }
    }
    return data;
  };

  map = anychart.map();
  map.geoData('anychart.maps.united_states_of_america');
  map.padding(0).margin(0);

  map.background().fill(null);

  map.label()
      .enabled(true)
      .text('SALES')
      .adjustFontSize(true, false)
      .maxFontSize(40)
      .minFontSize(2)
      .width('40%')
      .fontColor('black')
      .position('center')
      .anchor('center')
      .hAlign('center')
      .offsetY('-40%')

  map.label(1)
      .enabled(true)
      .text('$212,600,000')
      .adjustFontSize(true, false)
      .maxFontSize(60)
      .minFontSize(2)
      .width('80%')
      .fontColor('black')
      .position('center')
      .anchor('center')
      .hAlign('center')
      .offsetY('40%')

  var choropleth = map.choropleth(generateData(map));
  choropleth.stroke('1.5 #fff')

  var ranges = [
    {equal: "Northeast", color: colors[0]},
    {equal: "Midatlantic", color: colors[1]},
    {equal: "Southeast", color: colors[2]},
    {equal: "Midwest", color: colors[3]},
    {equal: "West", color: colors[4]},
    {equal: "Great Lakes", color: colors[5]}
  ];

  var colorScale = anychart.scales.ordinalColor(ranges);
  choropleth.colorScale(colorScale);

  var data = [
    {x: "Northeast", value: 50},
    {x: "Midatlantic", value: 80},
    {x: "Southeast", value: 50},
    {x: "Midwest", value: 30},
    {x: "West", value: 45},
    {x: "Great Lakes", value: 40},
  ];

  var pie = anychart.pie(data);
  pie.palette().items(colors);
  pie.stroke('2 #fff')
  pie.labels(false);
  pie.legend()
      .position('right')
      .itemsLayout('vertical');
  pie.innerRadius('85%');
  pie.center().content(map);
  // pie.container('container').draw();


  var pie1 = anychart.pie(data);
  pie1.palette().items(colors);
  pie1.stroke('2 #fff')
  pie1.labels(false);
  pie1.legend()
      .position('right')
      .itemsLayout('vertical');
  pie1.innerRadius('85%');
  pie1.center().content(pie);
  pie1.container('container').draw();
});
