  var chart, newPie, seriesData;
var ranger, input;

function startAngle(value) {
  chart.startAngle(value);
  input.value = chart.startAngle();
}


function startAngleInp(value) {
  chart.startAngle(value);
  ranger.value = chart.startAngle();
}

function createMap() {
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

  return map;
}

anychart.onDocumentLoad(function() {
  var pointData2 = [100, 50, 3];

  var seriesData1 = [
    {x: 'All other outlets 0 ', y: pointData2[0]},
    {x: 'All other outlets 1 ', y: pointData2[0]},
    {x: 'All other outlets 2 ', y: pointData2[0]},
    {x: 'All other outlets 3 ', y: pointData2[0]}
  ];

  var seriesData2 = [
//    {x: 'All other outlets', y: 1000},

    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},

    {x: 'Department Stores', hoverLabel: {enabled: true}, y: pointData2[1], fill: {keys: ['0 red 1', '0.5 green 1', '1 blue 1']}, stroke: 'none', 'hoverFill': 'black', selected: {explode: '1%'}, hoverLabel: {'fontColor': 'red'}},


    //{x: 'Department Stores', y: pointData2[0]},
    {x: 'Department Stores', label: {enabled: true}, y: pointData2[0], fill: {keys: ['0 red 1', '0.5 green 1', '1 blue 1']}, stroke: 'none'},

    {x: 'All \nother \noutlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},

    {x: 'Discount Stores', y: pointData2[1]},

    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},


    {x: 'Discount Stores', y: pointData2[1]},
    {x: 'Discount Stores', y: pointData2[1]},
    {x: 'Discount Stores', y: pointData2[1]},

    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},

    {x: 'Men\'s/Women\'s Stores', y: pointData2[1]},

    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},

    {x: 'Juvenile Specialty Stores', y: pointData2[1]}
  ];


  var seriesData3 = [];
  for (var i = 0; i < 450; i++) {
    seriesData3.push({x: 'All other outlets', y: pointData2[2]});
  }

  chart = anychart.pie(seriesData2)
      .container('container')
      .innerRadius('80%')
      .connectorLength('20%')
      //.outsideLabelsCriticalAngle(180)
      .connectorStroke('black .3', 1.5, '4 2')
      // .radius('50%')
      // .startAngle(284)
      .startAngle(179)
      // .margin(0)
      // .padding(0)
      // .explode(0);
  chart.labels().position('outside');

  chart.hovered()
      .labels().fontWeight('bold');

  chart.selected().labels().fontWeight('bold');
  // chart.selected().explode(0);

  chart.title()
      .text('ACME Corp. apparel sales through different retail channels');

  chart.labels()
      .offsetY(0)
      //.offsetX(15)
      .enabled(true)
      .format(function() {return this.x + ' ' + this.index});

  chart.tooltip().titleFormat('{%Value}')

  chart.credits(false);
  chart.legend()
      .itemsLayout('vertical-expandable')
      .position('right')
      // .itemsFormat('{%index}')


  chart.centerContent(createMap() );

  chart.draw();



  ranger = document.getElementById('startAngle');
  input = document.getElementById('startAngleInp');

  ranger.value = chart.startAngle();
  input.value = chart.startAngle();

  //var angle = 0;
  //setInterval(function() {
  //  chart.startAngle(angle);
  //  ranger.value = chart.startAngle();
  //  input.value = chart.startAngle();
  //  angle += 1;
  //}, 500);
});