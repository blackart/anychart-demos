var chart1, chart2, chart3, chart4;
var colors = ['#0072A5', '#3BBA7B', '#FFCD61', '#FA5446', '#7D58BD', '#29D8D5'];
var data = [
  {x: "Northeast", value: 50},
  {x: "Midatlantic", value: 80},
  {x: "Southeast", value: 50},
  {x: "Midwest", value: 30},
  {x: "West", value: 45},
  {x: "Great Lakes", value: 40},
];

function createChart(container, data, bouds, levels, content) {
  var dataTree = anychart.data.tree(data, 'as-table');

  var chart = anychart.sunburst(dataTree);
  // noDataLabel = chart.noData().label();
  // noDataLabel.enabled(true);
  // noDataLabel.text("Error: could not connect to data server");
  // noDataLabel.background().enabled(true);
  // noDataLabel.background().fill("White 0.5");
  // noDataLabel.padding(40);


  chart.bounds(bouds);
  // chart.hatchFill(false);
  // if (content)
  //   chart.center().content(Object.prototype.toString.call(content) == '[object Function]' ? content(chart) : content);

  // chart.stroke('10 blue');
  // chart.selected().stroke('10 red');

  // chart.innerRadius('30%');
  // chart.labels()
      // .position('circular')
      // .enabled(true)
  // .background('red')
  // .format('{%Value}')

  // chart.startAngle(-90);
  // chart.radius('50%');
  // chart.innerRadius('50%');

  chart.calculationMode('parent-dependent');
  // chart.calculationMode('parent-independent');
  // chart.calculationMode('ordinal-from-root');

  // chart.hovered().labels()
  //     .fontColor('red')
  //     .fontWeight('bold');

  // chart.labels().format('{%Value}');
  // chart.tooltip().format('value: {%Value}\nid: {%Id}\ndepth: {%Depth}\nChild sum: {%childSumValue}\nFull sum: {%fullSumValue}');

  // chart.fill(function() {
  //   return this.autoColor;
  // });

  // for (var i = 0; i < levels.length; i++) {
  //   chart.level(i).enabled(levels[i]);
  // }



  // chart.leaves().enabled(false);
  // chart.level(1).thickness('10%')
  // chart.leaves().hovered().labels().fontColor('red');

  chart.container(container).draw();

  return chart;
}

anychart.onDocumentReady(function() {
  var data = [
    {
      "id": "0001",
      "name": "Root 2",
      "parent": null,
      "value": 500
    },

    {
      "id": "0002",
      "name": "Root 3",
      "parent": null,
      "value": 1000
    },

    {
      "id": "00021",
      "name": "Child",
      "parent": "0002",
      "value": 100
    },

    {
      "id": "00022",
      "name": "Child",
      "parent": "0002",
      "value": 300
    },

    {
      "id": "000221",
      "name": "Child",
      "parent": "00022",
      "value": 70
    },




    {
      "id": "00",
      "name": "Products by Revenue",
      "parent": null,
      "value": 1000
    },


    {
      "parent": "00",
      "id": "01",
      "name": "Fruits",
      "value": 200,
      // "fill": "green"
    }, {
      "parent": "00",
      "id": "02",
      "name": "Vegetables",
      "value": 300,
      "fill": 'blue'
    }, {
      "parent": "00",
      "id": "03",
      "name": "Dairy",
      "value": 100
    }, {
      "parent": "00",
      "id": "04",
      "name": "Meat",
      "value": 100
    }, {
      "parent": "00",
      "id": "5",
      "name": "Meat",
      "value": 150
    },
    {
      "parent": "00",
      "id": "06",
      "name": "Timpthy A. Loginov",
      "value": 30
    },


    {
      "parent": "5",
      "id": "50",
      "name": "Meat 1",
      "value": 100
    },


    {
      "parent": "50",
      "id": "500",
      "name": "Meat 2",
      "value": 50
    },


    {
      "parent": "500",
      "id": "5000",
      "name": "Meat 3",
      "value": 15
    },

    {
      "parent": "500",
      "id": "6000",
      "name": "Meat 4",
      "value": 15
    },


    {
      "parent": "02",
      "id": "200",
      "name": "Potato",
      "value": 100
    },

    {
      "parent": "200",
      "id": "210",
      "name": "Potato",
      "value": 10
    }, {
      "parent": "200",
      "id": "220",
      "name": "Eggplants",
      "value": 10
    }, {
      "parent": "200",
      "id": "230",
      "name": "Tomatoes",
      "value": 10
    }, {
      "parent": "200",
      "id": "240",
      "name": "Cucumbers",
      "value": 10
    }, {
      "parent": "200",
      "id": "250",
      "name": "Cabbage",
      "value": 10
    }, {
      "parent": "200",
      "id": "260",
      "name": "Carrot",
      "value": 10
    }, {
      "parent": "200",
      "id": "270",
      "name": "Squash",
      "value": 10
    }, {
      "parent": "200",
      "id": "280",
      "name": "Capsicums",
      "value": 10
    },





    {
      "parent": "01",
      "id": "11",
      "name": "Apples",
      "value": 30
    }, {
      "parent": "01",
      "id": "12",
      "name": "Oranges",
      "value": 10
    }, {
      "parent": "01",
      "id": "13",
      "name": "Bananas",
      "value": 10
    }, {
      "parent": "01",
      "id": "14",
      "name": "Melons",
      "value": 10
    }, {
      "parent": "01",
      "id": "15",
      "name": "Apricots",
      "value": 10
    }, {
      "parent": "01",
      "id": "16",
      "name": "Plums",
      "value": 10
    }, {
      "parent": "01",
      "id": "17",
      "name": "Pineapples",
      "value": 10
    }, {
      "parent": "01",
      "id": "18",
      "name": "Cherries",
      "value": 10
    }, {
      "parent": "01",
      "id": "19",
      "name": "Tangerines",
      "value": 10
    }, {
      "parent": "02",
      "id": "21",
      "name": "Potato",
      "value": 10
    }, {
      "parent": "02",
      "id": "22",
      "name": "Eggplants",
      "value": 10
    }, {
      "parent": "02",
      "id": "23",
      "name": "Tomatoes",
      "value": 10
    }, {
      "parent": "02",
      "id": "24",
      "name": "Cucumbers",
      "value": 10
    }, {
      "parent": "02",
      "id": "25",
      "name": "Cabbage",
      "value": 10
    }, {
      "parent": "02",
      "id": "26",
      "name": "Carrot",
      "value": 10
    }, {
      "parent": "02",
      "id": "27",
      "name": "Squash",
      "value": 10
    }, {
      "parent": "02",
      "id": "28",
      "name": "Capsicums",
      "value": 10
    }, {
      "parent": "03",
      "id": "31",
      "name": "Milk",
      "value": 10
    }, {
      "parent": "03",
      "id": "32",
      "name": "Curd",
      "value": 10
    }, {
      "parent": "03",
      "id": "33",
      "name": "Cheese",
      "value": 10
    }, {
      "parent": "03",
      "id": "34",
      "name": "Yogurt",
      "value": 10
    }, {
      "parent": "03",
      "id": "35",
      "name": "Kefir",
      "value": 10
    }, {
      "parent": "04",
      "id": "41",
      "name": "Mutton",
      "value": 10
    }, {
      "parent": "04",
      "id": "42",
      "name": "Beef",
      "value": 10
    }, {
      "parent": "04",
      "id": "43",
      "name": "Pork",
      "value": 10
    }, {
      "parent": "04",
      "id": "44",
      "name": "Veal",
      "value": 10
    }
  ];

  var data2 = [
    {
      "id": "0001",
      "name": "Root 2",
      "parent": null,
      "value": 500
    },

    {
      "id": "0002",
      "name": "Root 3",
      "parent": null,
      "value": 1000
    },

    {
      "id": "00021",
      "name": "Child",
      "parent": "0002",
      "value": 100
    },

    {
      "id": "00022",
      "name": "Child",
      "parent": "0002",
      "value": 300
    },

    {
      "id": "000221",
      "name": "Child",
      "parent": "00022",
      "value": 70
    },




    {
      "id": "00",
      "name": "Products by Revenue",
      "parent": null,
      "value": 1000
    },


     {
      "parent": "00",
      "id": "5",
      "name": "Meat",
      "value": 150
    },
    {
      "parent": "00",
      "id": "06",
      "name": "Timpthy A. Loginov",
      "value": 30
    },


    {
      "parent": "5",
      "id": "5000",
      "name": "Meat",
      "value": 50
    },
    {
      "parent": "5",
      "id": "6000",
      "name": "Timpthy A. Loginov",
      "value": 30
    },



  ];

  var data1 = [
    {
      "id": "0000",
      "name": "Root 1",
      "parent": null,
      "value": 1000
    },
    {
      "id": "0002",
      "name": "Root 3",
      "parent": null,
      "value": 1000
    },


    // {
    //   "id": "00022",
    //   "name": "Child 1 ",
    //   "parent": "0002",
    //   "value": 100
    // },
    {
      "id": "00020",
      "name": "Child 1 ",
      "parent": "0002",
      "value": 100
    },
    {
      "id": "000201",
      "name": "Child 1 ",
      "parent": "00020",
      "value": 100
    },
    {
      "id": "00021",
      "name": "Child 1 ",
      "parent": "0002",
      "value": 100
    },
    {
      "id": "000211",
      "name": "Child 2",
      "parent": "00021",
      "value": 300
    }
  ];


  var stage = anychart.graphics.create('container');
  // var chart1 = createChart(stage, data, anychart.math.rect(0, 0, '50%', '50%'), [true,true,true,true]);
  // var chart2 = createChart(stage, data, anychart.math.rect('50%', 0, '50%', '50%'), [false,true,true,true]);
  // var chart3 = createChart(stage, data, anychart.math.rect(0, '50%', '50%', '50%'), [false,false,true,true]);
  // var chart4 = createChart(stage, data, anychart.math.rect('50%', '50%', '50%', '50%'), [true,false,true,true]);

  chart4 = createChart(stage, data, anychart.math.rect(0, 0, '100%', '100%'), [true,true,true,true,true], map);

  // chart4.listen(anychart.enums.EventType.DRILL_CHANGE, function(e) {
  //   console.log(e);
  // });


  $('#' + chart4.calculationMode()).attr('checked', 'checked');
  $('input[name=calculationMode]').on('change', function() {
    // chart1.calculationMode($(this).val());
    // chart2.calculationMode($(this).val());
    // chart3.calculationMode($(this).val());
    chart4.calculationMode($(this).val());
  });

  var enabled = chart4.leaves().enabled();
  enabled = enabled == null || enabled == void 0 ? true : enabled;
  $('#levels').append('<input type="checkbox" name="levels" id="leaves" value="leaves" ' + (enabled ? 'checked' : '') + '>');
  $('#levels').append('<label for="leaves">Leaves</label><br>');
  var maxDepth = chart4.getStat('treeMaxDepth');
  for (var i = 0; i <= maxDepth; i++) {
    var enabled = chart4.level(i).enabled();
    $('#levels').append('<input type="checkbox" name="levels" id="level ' + i + '" value="' + i + '" ' + (enabled ? 'checked' : '') + '>');
    $('#levels').append('<label for="' + i + '">Level ' + i + '</label><br>');
  }

  $('input[name=levels]').on('change', function() {
    var val = $(this).val();
    if (val == 'leaves') {
      chart4.leaves().enabled($(this).is(':checked'));
    } else {
      chart4.level(+val).enabled($(this).is(':checked'));
    }
  });
});


function map() {
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

  var chart = anychart.map();
  chart.geoData('anychart.maps.united_states_of_america');
  chart.padding(0).margin(0);

  chart.background().fill(null);

  chart.label()
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

  chart.label(1)
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

  var choropleth = chart.choropleth(generateData(chart));
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

  return chart;
}
