var colors = ['#0072A5', '#3BBA7B', '#FFCD61', '#FA5446', '#7D58BD', '#29D8D5'];
var data = [
  {x: "Northeast", value: 50},
  {x: "Midatlantic", value: 80},
  {x: "Southeast", value: 50},
  {x: "Midwest", value: 30},
  {x: "West", value: 45},
  {x: "Great Lakes", value: 40},
];
var stage, pie1;
var width = 100 / 1;
var height = 100 / 1;

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

function label(pie) {
  var parentBounds = pie.center().getBounds();
  var label = anychart.standalones.label();
  label.text("Power");
  label
      .width('80%')
      .hAlign('center')
      .anchor('center')
      .position('center')
      .minFontSize(2)
      .maxFontSize(40)
      .adjustFontSize(true, false)

  return label;
}

function labelsFactory(pie) {
  var parentBounds = pie.center().getBounds();
  var position = {value: {x: parentBounds.left + parentBounds.width / 2, y: parentBounds.top + parentBounds.height / 2}};

  var lf = anychart.standalones.labelsFactory();
  var label1 = lf.add({value: 'label 1'}, position);
  label1.anchor('left-top');
  var label2 = lf.add({value: 'label 2'}, position);
  label2.anchor('right-bottom').hAlign('right');
  var label3 = lf.add({value: 'label 3'}, position);
  label3.anchor('left-bottom');
  var label4 = lf.add({value: 'label 4'}, position);
  label4.anchor('right-top').hAlign('right');

  lf
      .width('45%')
      .height(null)
      .minFontSize(2)
      .maxFontSize(40)
      .adjustFontSize(true, false)

  pie.listen('chartdraw', function() {
    var parentBounds = this.center().getBounds();
    var position = {value: {x: parentBounds.left + parentBounds.width / 2, y: parentBounds.top + parentBounds.height / 2}};

    for (var i = 0, len = lf.labelsCount(); i < len; i++) {
      lf.getLabel(i).positionProvider(position);
    }

    lf.draw();
  });

  return lf;
}

function markersFactory(pie) {
  var parentBounds = pie.center().getBounds();
  var position = {value: {x: parentBounds.left + parentBounds.width / 2, y: parentBounds.top + parentBounds.height / 2}};

  var mf = anychart.standalones.markersFactory();
  mf.size(parentBounds.width / 6);
  mf.position('center');

  var marker1 = mf.add(position);
  marker1
      .anchor('left-top')
      .type('star5')
      .fill('#f00');

  var marker2 = mf.add(position);
  marker2
      .anchor('right-bottom')
      .type('star7')
      .fill('#f00');

  var marker3 = mf.add(position);
  marker3
      .anchor('left-bottom')
      .type('star6');

  var marker4 = mf.add(position)
  marker4
      .anchor('right-top')
      .type('star4');

  pie.listen('chartdraw', function() {
    var parentBounds = this.center().getBounds();
    var position = {value: {x: parentBounds.left + parentBounds.width / 2, y: parentBounds.top + parentBounds.height / 2}};

    for (var i = 0, len = 4; i < len; i++) {
      mf.getMarker(i).positionProvider(position);
    }

    mf.size(parentBounds.width / 6)
    mf.draw();
  });

  return mf;
}

function background() {
  var bg = anychart.standalones.background();
  bg.fill("#9E9E9E");

  return bg;
}

function colorRange(pie) {
  var cr = anychart.standalones.colorRange();
  cr.length('80%')
  cr.padding().bottom('10%')

  var ranges = [
    {equal: "Northeast", color: colors[0]},
    {equal: "Midatlantic", color: colors[1]},
    {equal: "Southeast", color: colors[2]},
    {equal: "Midwest", color: colors[3]},
    {equal: "West", color: colors[4]},
    {equal: "Great Lakes", color: colors[5]}
  ];
  var colorScale = anychart.scales.ordinalColor(ranges);

  cr.labels().rotation(90);
  cr.scale(colorScale);

  return cr;
}

function legend(pie) {
  var legend = anychart.standalones.legend();
  legend.itemsLayout("vertical");
  legend.paginator().orientation('bottom')
  legend.itemsSource(pie)

  return legend;
}

function resourceList(pie) {
  var data = [
    {
      "name": "Colleen Melendez",
      "tags": [
        "communicability",
        "focus on results",
        "oratory"
      ],
      "type": "Team Leader",
      "image": "http://cdn.anychart.com/images/resource-chart/operator_3.png"
    },
    {
      "name": "Hayes Hewitt",
      "image": "http://cdn.anychart.com/images/resource-chart/operator_9.png",
      "tags": [
        "organization",
        "industry",
        "self-confidence"
      ],
      "type": "Senior Specialist",
      "activities": [
        {
          "name": "Putting operators assessments",
          "intervals": [
            {
              "start": "2016-10-03",
              "end": "2016-10-03",
              "minutesPerDay": 480
            }
          ],
          "fill": "#3ea290"
        },
        {
          "name": "Training Operators",
          "intervals": [
            {
              "start": "2016-10-04",
              "end": "2016-10-04",
              "minutesPerDay": 480
            }
          ],
          "fill": "#3f51b5"
        },
        {
          "name": "Training Operators",
          "intervals": [
            {
              "start": "2016-10-05",
              "end": "2016-10-05",
              "minutesPerDay": 240
            }
          ],
          "fill": "#3f51b5"
        },
        {
          "name": "Call Reception",
          "intervals": [
            {
              "start": "2016-10-05",
              "end": "2016-10-05",
              "minutesPerDay": 240
            }
          ],
          "fill": "#04724d"
        },
        {
          "name": "Audition Call Operators",
          "intervals": [
            {
              "start": "2016-10-06",
              "end": "2016-10-06",
              "minutesPerDay": 240
            }
          ],
          "fill": "#7d5ba6"
        },
        {
          "name": "Call Line claims",
          "intervals": [
            {
              "start": "2016-10-06",
              "end": "2016-10-06",
              "minutesPerDay": 240
            }
          ],
          "fill": "#3a606e"
        },
        {
          "name": "Audition Call Operators",
          "intervals": [
            {
              "start": "2016-10-07",
              "end": "2016-10-07",
              "minutesPerDay": 120
            }
          ],
          "fill": "#7d5ba6"
        },
        {
          "name": "Call Line claims",
          "intervals": [
            {
              "start": "2016-10-07",
              "end": "2016-10-07",
              "minutesPerDay": 240
            }
          ],
          "fill": "#3a606e"
        },
        {
          "name": "Call Reception",
          "intervals": [
            {
              "start": "2016-10-07",
              "end": "2016-10-07",
              "minutesPerDay": 120
            }
          ],
          "fill": "#04724d"
        },
        {
          "name": "Calls calibration",
          "intervals": [
            {
              "start": "2016-10-10",
              "end": "2016-10-10",
              "minutesPerDay": 60
            }
          ],
          "fill": "#de91ae"
        },
        {
          "name": "Audition Call Operators",
          "intervals": [
            {
              "start": "2016-10-10",
              "end": "2016-10-10",
              "minutesPerDay": 120
            }
          ],
          "fill": "#7d5ba6"
        },
        {
          "name": "Answers calls conflict subscribers",
          "intervals": [
            {
              "start": "2016-10-10",
              "end": "2016-10-10",
              "minutesPerDay": 240
            }
          ],
          "fill": "#816c61"
        },
        {
          "name": "Calls calibration",
          "intervals": [
            {
              "start": "2016-10-10",
              "end": "2016-10-10",
              "minutesPerDay": 60
            }
          ],
          "fill": "#de91ae"
        },
        {
          "name": "Help Operator",
          "intervals": [
            {
              "start": "2016-10-11",
              "end": "2016-10-11",
              "minutesPerDay": 240
            }
          ],
          "fill": "#aaae8e"
        },
        {
          "name": "Call Line claims",
          "intervals": [
            {
              "start": "2016-10-11",
              "end": "2016-10-11",
              "minutesPerDay": 240
            }
          ],
          "fill": "#3a606e"
        },
        {
          "name": "Call Line claims",
          "intervals": [
            {
              "start": "2016-10-12",
              "end": "2016-10-12",
              "minutesPerDay": 180
            }
          ],
          "fill": "#3a606e"
        },
        {
          "name": "Answers calls conflict subscribers",
          "intervals": [
            {
              "start": "2016-10-12",
              "end": "2016-10-12",
              "minutesPerDay": 120
            }
          ],
          "fill": "#816c61"
        },
        {
          "name": "Calls calibration",
          "intervals": [
            {
              "start": "2016-10-12",
              "end": "2016-10-12",
              "minutesPerDay": 180
            }
          ],
          "fill": "#de91ae"
        },
        {
          "name": "Listening to the call operator",
          "intervals": [
            {
              "start": "2016-10-13",
              "end": "2016-10-13",
              "minutesPerDay": 210
            }
          ],
          "fill": "#55c1d2"
        },
        {
          "name": "Call Line claims",
          "intervals": [
            {
              "start": "2016-10-13",
              "end": "2016-10-13",
              "minutesPerDay": 270
            }
          ],
          "fill": "#3a606e"
        },
        {
          "name": "Help Operator",
          "intervals": [
            {
              "start": "2016-10-14",
              "end": "2016-10-14",
              "minutesPerDay": 280
            }
          ],
          "fill": "#aaae8e"
        },
        {
          "name": "Call Line claims",
          "intervals": [
            {
              "start": "2016-10-14",
              "end": "2016-10-14",
              "minutesPerDay": 200
            }
          ],
          "fill": "#3a606e"
        }
      ]
    },
    {
      "name": "Willow Fry",
      "type": "Senior Specialist",
      "tags": [
        "activity",
        "creativity",
        "oratory"
      ],
      "image": "http://cdn.anychart.com/images/resource-chart/operator_10.png"
    },
    {
      "name": "Oren Dunlap",
      "type": "Senior Operator",
      "tags": [
        "initiative",
        "reliability",
        "attentiveness"
      ],
      "image": "http://cdn.anychart.com/images/resource-chart/operator_5.png"
    }
  ];

  var list = anychart.standalones.resourceList(data);

  return list;
}

function bender(pie) {
  var stage = acgraph.layer();
  var layer, path;

  layer = stage.layer();
  path = layer.path();
  path.moveTo(52.86228, 343.66705);
  path.lineTo(75.96952, 331.54522000000003);
  path.lineTo(79.25252, 352.50591000000003);
  path.lineTo(62.01679, 357.17785000000003);
  path.curveTo(62.01679, 357.17785000000003, 53.93557, 358.94561000000004, 52.86228, 343.66705);
  path.close();
  path.fill('#c7d5e2');
  path.stroke('#000');

  layer = stage.layer();
  path = layer.path();
  path.moveTo(182.53253, 333.53796);
  path.lineTo(177.35396, 341.39513999999997);
  path.curveTo(177.35396, 341.39513999999997, 175.29141, 344.37402, 177.97896, 345.50226);
  path.curveTo(181.62462, 347.03265999999996, 183.69325, 347.46655, 186.10396, 344.25226);
  path.curveTo(188.51468, 341.03797, 190.38968, 337.55584999999996, 190.3004, 336.75226);
  path.curveTo(190.21108999999998, 335.94867, 182.53253, 333.53797, 182.53253, 333.53797);
  path.close();
  path.fill('#c7d5e2');
  path.stroke('#000');


  path = layer.path();
  path.moveTo(195.12181, 334.25226);
  path.lineTo(191.37181, 344.52013999999997);
  path.curveTo(191.37181, 344.52013999999997, 189.49681, 347.46655, 192.17538000000002, 349.34155);
  path.curveTo(195.40126, 351.59967, 197.80038000000002, 350.14513999999997, 198.96109, 347.02013999999997);
  path.curveTo(200.12181, 343.89513999999997, 202.97896, 335.32367, 202.44324, 334.07367);
  path.curveTo(201.90753, 332.82367, 195.12181, 334.25226, 195.12181, 334.25226);
  path.close();
  path.fill('#c7d5e2');
  path.stroke('#000');


  path = layer.path();
  path.moveTo(204.22896, 334.60938);
  path.curveTo(204.22896, 334.60938, 205.38968, 346.12726, 205.65753, 347.02009);
  path.curveTo(205.92538000000002, 347.91297, 207.71109, 348.35938, 208.87181, 348.09155999999996);
  path.curveTo(210.03253, 347.82367999999997, 215.38968, 347.64509, 214.40753, 343.09155999999996);
  path.curveTo(213.42538000000002, 338.53797, 209.13968, 331.12726999999995, 209.13968, 331.12726999999995);
  path.lineTo(204.22896, 334.60938999999996);
  path.close();
  path.fill('#c7d5e2');
  path.stroke('#000');


  path = layer.path();
  path.moveTo(45.60181, 334.1969);
  path.curveTo(45.60181, 334.1969, 53.43048, 352.25336000000004, 54.31436, 352.25336000000004);
  path.curveTo(55.07198, 351.62207000000006, 76.53773, 335.58588000000003, 80.57833, 335.4596);
  path.curveTo(79.94699, 333.81812, 74.13861, 329.27241000000004, 59.238859999999995, 322.58014000000003);
  path.curveTo(55.50930999999999, 322.71082, 46.93185999999999, 332.22058000000004, 45.60180999999999, 334.1969);
  path.close();
  path.fill('#c7d5e2');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(66.02583, 344.42468);
  path.curveTo(66.02583, 344.42468, 73.44413, 355.66266, 67.8883, 358.25116);
  path.curveTo(62.33245, 360.83966000000004, 53.36735, 360.5871, 52.988550000000004, 358.12488);
  path.curveTo(53.17795, 356.04144, 54.12496, 352.25336000000004, 54.12496, 352.25336000000004);
  path.lineTo(58.98633, 356.92530000000005);
  path.fill('#c7d5e2');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(74.8331, 338.36377);
  path.curveTo(74.8331, 338.36377, 80.01013, 344.10901, 78.99999, 352.37964);
  path.curveTo(78.24237, 353.64234, 71.61323999999999, 359.26129, 69.02472, 357.68291999999997);
  path.curveTo(69.21412000000001, 354.96813999999995, 67.88831, 345.49798, 66.49934, 343.8565);
  path.curveTo(67.19381, 339.50018, 74.8331, 338.36375999999996, 74.8331, 338.36375999999996);
  path.close();
  path.fill('#c7d5e2');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(80.01013, 334.76514);
  path.curveTo(80.01013, 334.76514, 88.40701, 345.62426999999997, 84.68208, 348.59162);
  path.curveTo(80.95715, 351.55890999999997, 79.18938, 351.62208, 79.18938, 351.62208);
  path.curveTo(79.18938, 351.62208, 75.54843, 339.04841, 74.07548, 337.35364999999996);
  path.curveTo(73.57148, 336.77374999999995, 80.01013, 334.76514999999995, 80.01013, 334.76514999999995);
  path.close();
  path.fill('#c7d5e2');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(58.98633, 208.30664);
  path.curveTo(58.98633, 208.30664, 42.28478, 213.83935, 46.4857, 230.53002999999998);
  path.curveTo(48.273270000000004, 237.63219999999998, 45.60181, 243.15691999999999, 63.40575, 244.5459);
  path.curveTo(61.050979999999996, 218.73169, 59.935939999999995, 211.18121, 58.986329999999995, 208.30664);
  path.close();
  path.fill('#c7d5e2');
  path.stroke('#000');

  layer = stage.layer();
  path = layer.path();
  path.moveTo(44.33912, 455.16272);
  path.curveTo(44.33912, 455.16272, 83.18358, 475.45763999999997, 117.57517999999999, 455.66772);
  path.curveTo(115.55487, 448.59673999999995, 107.97872999999998, 442.03069999999997, 98.88736999999999, 434.45459);
  path.curveTo(56.27089999999999, 419.89374, 46.43473999999999, 446.88184, 44.33911999999999, 455.16272);
  path.close();
  path.fill('#c7d5e0');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(154.85396, 418.27008);
  path.lineTo(145.12181, 422.28790000000004);
  path.curveTo(145.12181, 422.28790000000004, 121.81824, 433.71649, 121.28252, 448.53796000000006);
  path.curveTo(124.67537, 450.68078, 160.03252, 461.03796000000006, 190.03252, 446.39508000000006);
  path.curveTo(190.74681, 442.82367000000005, 183.60395, 423.7164900000001, 168.96109, 423.53790000000004);
  path.curveTo(154.31824, 423.35937, 170.30037000000002, 402.28790000000004, 154.85396, 418.27008);
  path.close();
  path.fill('#c7d5e0');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(187.97896, 315.85938);
  path.lineTo(182.35396, 329.60938);
  path.curveTo(182.35396, 329.60938, 180.83609, 332.73438, 183.24681, 334.16297);
  path.curveTo(185.65753, 335.59155999999996, 194.49681, 337.46655999999996, 199.58609, 336.75226);
  path.curveTo(204.67538000000002, 336.03797, 210.38968, 335.85938, 211.72894000000002, 333.71655);
  path.curveTo(213.06823000000003, 331.57367, 205.47896000000003, 314.96655, 205.47896000000003, 314.96655);
  path.lineTo(205.74681000000004, 278.98437);
  path.curveTo(205.74681000000004, 278.98437, 202.17544000000004, 231.41387, 181.46733000000003, 217.27172000000002);
  path.curveTo(160.75920000000002, 203.12957, 172.35396000000003, 234.25225, 172.35396000000003, 234.25225);
  path.curveTo(172.35396000000003, 234.25225, 185.83611000000002, 261.93078, 186.28253000000004, 270.50225);
  path.curveTo(186.91472000000005, 282.64043, 188.47934000000004, 297.15203, 187.97896000000003, 315.85937);
  path.close();
  path.fill('#c7d5e2');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(44.46538, 334.95453);
  path.curveTo(44.46538, 334.95453, 54.693180000000005, 322.20135999999997, 58.860060000000004, 322.70642);
  path.curveTo(57.84991, 321.31744, 40.417750000000005, 301.03046, 40.55104, 285.96216);
  path.curveTo(40.61603, 278.61469, 36.76297, 268.03191999999996, 62.64813, 235.83330999999998);
  path.curveTo(88.53328, 203.63469999999998, 64.16336, 221.18608999999998, 64.16336, 221.18608999999998);
  path.curveTo(64.16336, 221.18608999999998, 58.73379, 218.40819999999997, 54.56690999999999, 220.55473999999998);
  path.curveTo(50.400029999999994, 222.70135, 26.535179999999993, 244.04082, 21.48440999999999, 270.43102);
  path.curveTo(16.43364999999999, 296.82128, 31.83847999999999, 324.47416999999996, 44.46537999999999, 334.95452);
  path.close();
  path.fill('#c7d5e2');
  path.stroke('#000');

  layer = stage.layer();
  path = layer.path();
  path.moveTo(34.15407, 322.5838);
  path.curveTo(34.15407, 322.5838, 41.31053, 313.13837, 51.131969999999995, 312.60266);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(24.21813, 302.39795);
  path.curveTo(24.21813, 302.39795, 29.67539, 297.02008, 42.35396, 297.55579);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(20.56639, 280.02423);
  path.curveTo(20.56639, 280.02423, 33.5481, 271.98627, 40.4231, 279.75408999999996);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(25.82342, 257.00928);
  path.curveTo(25.82342, 257.00928, 40.294979999999995, 255.20191, 44.669979999999995, 262.8805);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(38.19003, 236.9624);
  path.curveTo(38.19003, 236.9624, 52.622749999999996, 238.06634, 54.22989, 247.08417);
  path.fill('none');
  path.stroke('#000');

  layer = stage.layer();
  path = layer.path();
  path.moveTo(71.46111, 429.60938);
  path.curveTo(71.46111, 429.60938, 76.81826000000001, 443.18079, 97.17539000000001, 434.25226);
  path.curveTo(101.63969, 429.25226, 122.54440000000001, 398.71380999999997, 124.87563, 377.91895);
  path.curveTo(126.5971, 362.56329999999997, 122.35396, 341.75226, 114.13969, 332.82367);
  path.curveTo(105.92539000000001, 323.89508, 90.21109, 304.25226, 90.21109, 304.25226);
  path.lineTo(86.19324, 324.25226);
  path.curveTo(86.19324, 324.25226, 100.50068, 354.08405, 99.43182, 368.03101);
  path.curveTo(98.34526, 382.20905, 94.85396, 403.53797, 71.4611, 429.60938);
  path.close();
  path.fill('#a9b9d0');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(145.38968, 422.64508);
  path.curveTo(145.38968, 422.64508, 154.49681, 435.32367, 167.88968, 424.60937);
  path.curveTo(168.96111, 422.64508, 182.71109, 390.85937, 180.03253, 372.28790000000004);
  path.curveTo(177.35396, 353.71649, 159.31825, 324.96649, 158.06825, 324.07367000000005);
  path.curveTo(156.81825, 323.18079000000006, 142.88968, 318.89508000000006, 142.88968, 318.89508000000006);
  path.lineTo(133.42539, 329.60937000000007);
  path.curveTo(133.42539, 329.60937000000007, 158.78253999999998, 361.39508000000006, 157.88968, 376.03796000000006);
  path.curveTo(157.73433, 401.7435300000001, 146.56694, 418.91314000000006, 145.38968, 422.64508000000006);
  path.close();
  path.fill('#a9b9d0');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(170.98698, 240.12646);
  path.curveTo(170.98698, 240.12646, 179.57327999999998, 234.82318, 179.95208, 224.59533000000002);
  path.curveTo(180.33088999999998, 214.36755000000002, 177.55297, 205.78124000000003, 172.12341, 203.50842000000003);
  path.curveTo(166.69384, 201.23559000000003, 166.4413, 232.17151000000004, 166.4413, 232.17151000000004);
  path.lineTo(170.98698000000002, 240.12647000000004);
  path.close();
  path.fill('#c7d5e2');
  path.stroke('#000');

  layer = stage.layer();
  path = layer.path();
  path.moveTo(60.03253, 199.78796);
  path.lineTo(59.49682, 207.64514);
  path.lineTo(64.31825, 245.14514);
  path.lineTo(76.55039000000001, 313.15851);
  path.curveTo(76.55039000000001, 313.15851, 77.80860000000001, 325.05133, 85.74682000000001, 326.93084999999996);
  path.curveTo(95.39836000000001, 329.21594999999996, 135.21110000000002, 331.57367, 145.74682, 328.00226);
  path.curveTo(156.28254, 324.43084999999996, 164.85397, 320.68084999999996, 165.21110000000002, 318.00226);
  path.curveTo(165.56825, 315.32367, 170.92539000000002, 260.85938, 170.56825, 241.03796999999997);
  path.curveTo(170.21110000000002, 221.21655999999996, 170.9254, 199.07367999999997, 170.9254, 199.07367999999997);
  path.curveTo(170.9254, 199.07367999999997, 154.49683, 213.35938999999996, 115.9254, 213.18085999999997);
  path.curveTo(107.69525, 212.41602999999998, 77.51022999999999, 210.83747999999997, 60.03254, 199.78797999999998);
  path.close();
  path.fill('#c7d5e2');
  path.stroke('#000');

  layer = stage.layer();
  path = layer.path();
  path.moveTo(82.35396, 415.85938);
  path.curveTo(82.35396, 415.85938, 90.21111, 425.14509, 104.13969, 423.89509);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(90.74681, 400.50226);
  path.curveTo(90.74681, 400.50226, 104.85396, 409.07367, 115.38967, 404.60938);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(97.53253, 384.43079);
  path.curveTo(97.53253, 384.43079, 110.21112, 391.2165, 124.13968, 383.7165);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(99.85397, 367.46649);
  path.curveTo(99.85397, 367.46649, 118.78254000000001, 371.03790000000004, 124.49682, 362.10937);
  path.fill('none');
  path.stroke('#000');


  path = layer.path();
  path.moveTo(94.13967, 345.50226);
  path.curveTo(94.13967, 345.50226, 112.88965999999999, 346.21655, 119.13967, 340.32367);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(145.03253, 345.85938);
  path.curveTo(145.03253, 345.85938, 161.99681, 345.68079, 165.74681, 336.57367);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(155.38966, 364.25226);
  path.curveTo(155.38966, 364.25226, 165.92538, 366.39513999999997, 174.31823, 354.78797);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(157.53253, 379.25226);
  path.curveTo(157.53253, 379.25226, 170.9254, 384.96655, 180.03253, 377.64513999999997);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(155.38968, 397.46655);
  path.curveTo(155.38968, 397.46655, 170.03253, 404.43084, 176.99681, 398.35936999999996);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(150.21109, 412.64508);
  path.curveTo(150.21109, 412.64508, 163.06824, 421.21649, 171.28253, 415.32367);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(99.22896, 309.07367);
  path.curveTo(98.84863, 307.80762, 90.97475, 265.80853, 89.31824, 243.89508);
  path.curveTo(88.98622, 239.50287, 89.20382000000001, 231.53894, 89.31824, 230.68079);
  path.curveTo(89.36325000000001, 230.34357, 88.51467000000001, 227.60047, 96.46109, 227.10938);
  path.curveTo(105.40114, 226.55688999999998, 126.78235, 228.07251, 132.35396, 227.28797);
  path.curveTo(141.75409, 225.9643, 156.81824, 222.64509, 156.81824, 222.64509);
  path.curveTo(156.81824, 222.64509, 161.77361, 221.35047, 161.99681, 230.85938000000002);
  path.curveTo(162.26504, 242.2862, 162.61598, 298.17542000000003, 160.03253, 304.78797000000003);
  path.curveTo(157.44906, 311.40046, 155.21109, 312.64509000000004, 148.78253, 314.07368);
  path.curveTo(142.35396, 315.50227, 117.35396, 316.75227, 114.85396, 316.21656);
  path.curveTo(99.41554, 314.61628, 99.60928, 310.33973000000003, 99.22895, 309.07368);
  path.close();
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(148.55931, 267.02008);
  path.curveTo(148.62561000000002, 265.89624000000003, 149.12924, 264.8045, 149.93838000000002, 264.02173);
  path.curveTo(150.74752000000004, 263.23895, 151.85375000000002, 262.77197, 152.97895000000003, 262.73438);
  path.curveTo(154.11301000000003, 262.69648, 155.25622, 263.09472999999997, 156.12119, 263.82917);
  path.curveTo(156.98615, 264.56354999999996, 157.5646, 265.62701999999996, 157.71108, 266.75219999999996);
  path.curveTo(157.84511, 268.02709999999996, 157.41727, 269.35094999999995, 156.56251, 270.30634);
  path.curveTo(155.70774, 271.26165999999995, 154.4394, 271.83349999999996, 153.15753, 271.8415);
  path.curveTo(151.91289, 271.8495, 150.67283, 271.3263, 149.81279, 270.42658);
  path.curveTo(148.95274, 269.52686, 148.48598, 268.26258, 148.55931, 267.02009);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(189.94061, 226.17767);
  path.curveTo(189.94061, 226.17767, 181.86288, 236.88617, 176.05930999999998, 235.10046);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(198.02414, 241.883);
  path.curveTo(198.02414, 241.883, 190.95958, 249.28382000000002, 179.70958, 249.73023);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(185.49428, 265.45441);
  path.curveTo(185.49428, 265.45441, 195.84244, 267.56659, 203.0746, 260.24518);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(187.09059, 281.76306);
  path.curveTo(187.09059, 281.76306, 200.82711999999998, 283.73816, 205.64856, 279.27392);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(188.06824, 298.35938);
  path.curveTo(188.06824, 298.35938, 197.78505, 302.79303, 205.55292, 297.70374);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(188.29912, 314.5769);
  path.curveTo(188.29912, 314.5769, 196.90752999999998, 320.05584000000005, 205.83608999999998, 314.43084000000005);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(84.49268, 178.00208);
  path.curveTo(84.49268, 178.00208, 60.50156, 195.42719, 60.249019999999994, 198.71021000000002);
  path.curveTo(59.99647999999999, 201.99317000000002, 83.6088, 212.09473000000003, 114.03962999999999, 212.97858000000002);
  path.curveTo(144.47048999999998, 213.86249, 164.92606999999998, 204.39228000000003, 170.10311, 199.46784000000002);
  path.curveTo(170.48191999999997, 196.81617000000003, 154.57200999999998, 179.01221000000004, 148.88991, 178.63343000000003);
  path.curveTo(143.2078, 178.25465000000003, 84.49268999999998, 178.00208000000003, 84.49268999999998, 178.00208000000003);
  path.close();
  path.fill('#c7d5e2');
  path.stroke('#000');

  layer = stage.layer();
  path = layer.path();
  path.moveTo(85.74681, 178.89508);
  path.curveTo(85.74681, 178.89508, 100.92537999999999, 187.82367, 117.17537999999999, 187.64508);
  path.curveTo(133.42538, 187.46649, 148.24680999999998, 182.64508, 148.24680999999998, 182.64508);
  path.lineTo(148.42538, 174.96655);
  path.curveTo(148.42538, 174.96655, 146.28252999999998, 170.50226, 144.13967, 170.32367000000002);
  path.curveTo(144.31823, 168.71655, 144.13967, 155.32367000000002, 144.13967, 155.32367000000002);
  path.lineTo(150.7468, 155.32367000000002);
  path.curveTo(150.7468, 155.32367000000002, 152.71108, 155.14514000000003, 153.06823, 152.28796000000003);
  path.curveTo(153.42538, 149.43084000000002, 153.06823, 143.00225000000003, 153.06823, 143.00225000000003);
  path.lineTo(164.13967, 142.46654000000004);
  path.curveTo(164.13967, 142.46654000000004, 176.46107999999998, 140.50225000000003, 176.81823, 128.71654000000004);
  path.curveTo(177.17538, 116.93077000000004, 167.17538, 111.03795000000004, 167.17538, 111.03795000000004);
  path.lineTo(152.53252999999998, 102.10936000000004);
  path.lineTo(150.38967999999997, 84.96654000000004);
  path.curveTo(150.38967999999997, 84.96654000000004, 143.78252999999998, 63.00225000000004, 127.53252999999997, 63.00225000000004);
  path.curveTo(111.28253999999997, 63.00225000000004, 104.49681999999996, 66.75225000000003, 104.49681999999996, 66.75225000000003);
  path.curveTo(104.49681999999996, 66.75225000000003, 86.81823999999996, 70.14513000000004, 84.85396999999996, 91.39513000000004);
  path.curveTo(84.02291999999996, 104.66607000000003, 83.18157999999997, 117.32964000000004, 85.74681999999996, 178.89513000000005);
  path.lineTo(85.74681999999996, 178.89507000000006);
  path.close();
  path.fill('#c7d5e2');
  path.stroke('#000');

  layer = stage.layer();
  path = layer.path();
  path.moveTo(104.22896, 66.93079);
  path.curveTo(104.22896, 66.93079, 119.58609, 71.48438, 126.37181, 64.52008000000001);
  path.curveTo(125.12182, 61.12720000000001, 120.38968, 58.18079000000001, 120.38968, 58.18079000000001);
  path.curveTo(120.38968, 58.18079000000001, 117.35396, 60.85938000000001, 116.10396, 60.85938000000001);
  path.curveTo(114.85397, 60.85938000000001, 109.85397, 58.89509000000001, 109.85397, 58.89509000000001);
  path.curveTo(107.86705, 60.74922000000001, 107.78670000000001, 61.56733000000001, 104.22896, 66.9308);
  path.close();
  path.fill('#dae4ed');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(110.47896, 59.25226);
  path.curveTo(110.47896, 59.25226, 115.83609, 62.73438, 119.05039, 58.71655);
  path.curveTo(118.78253, 55.055839999999996, 116.63968, 30.85937, 116.63968, 30.85937);
  path.lineTo(111.81823, 30.85937);
  path.lineTo(110.47895, 59.252250000000004);
  path.close();
  path.fill('#a2b4c8');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(108.69324, 25.23438);
  path.curveTo(108.82431, 23.989140000000003, 109.40257, 22.793100000000003, 110.30828, 21.928530000000002);
  path.curveTo(111.21401, 21.06397, 112.44171999999999, 20.540770000000002, 113.69324, 20.502260000000003);
  path.curveTo(115.21149, 20.455450000000003, 116.73593, 21.138430000000003, 117.71171, 22.302550000000004);
  path.curveTo(118.68749, 23.466610000000003, 119.09371, 25.086910000000003, 118.78251, 26.573670000000003);
  path.curveTo(118.66794, 27.707090000000004, 118.15131, 28.795720000000003, 117.34581, 29.601260000000003);
  path.curveTo(116.54028, 30.406740000000003, 115.45163, 30.923340000000003, 114.31823, 31.037970000000005);
  path.curveTo(112.7841, 31.193060000000006, 111.19688, 30.592780000000005, 110.13004, 29.479500000000005);
  path.curveTo(109.06318999999999, 28.366220000000006, 108.53182, 26.767830000000004, 108.69323, 25.234380000000005);
  path.fill('#dee8f1');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(108.16813, 105.96558);
  path.curveTo(108.16813, 105.96558, 99.07675, 110.89008, 98.69794, 117.8349);
  path.curveTo(98.31914, 124.77966, 98.63485, 130.58801, 98.63485, 130.58801);
  path.curveTo(98.63485, 130.58801, 104.44322, 141.13153, 109.11518, 141.32092);
  path.curveTo(113.78714, 141.51031, 159.62279999999998, 141.51031, 159.62279999999998, 141.51031);
  path.curveTo(159.62279999999998, 141.51031, 174.58568, 143.90942, 175.72209999999998, 128.31518);
  path.curveTo(176.85852999999997, 112.72094, 163.60027, 108.74346, 151.85725, 102.49316);
  path.curveTo(150.59455, 102.68255, 145.79634, 105.52362000000001, 140.87184, 105.58679000000001);
  path.curveTo(135.66141, 105.72424000000001, 111.30572, 105.92102000000001, 108.16812999999999, 105.96557000000001);
  path.close();
  path.fill('#dee8f1');
  path.stroke('#000');

  layer = stage.layer();
  path = layer.path();
  path.moveTo(120.66877, 113.79425);
  path.lineTo(162.90576, 113.54175000000001);
  path.curveTo(162.90576, 113.54175000000001, 172.24967999999998, 117.07727000000001, 172.31282, 125.53729000000001);
  path.curveTo(172.37591999999998, 133.99731000000003, 169.91370999999998, 137.28027, 158.54948, 137.72223000000002);
  path.curveTo(147.18527, 138.16419000000002, 121.23696999999999, 137.78534000000002, 121.23696999999999, 137.78534000000002);
  path.curveTo(121.23696999999999, 137.78534000000002, 110.37782999999999, 136.14386000000002, 110.18841999999998, 126.61054000000001);
  path.curveTo(109.99901999999997, 117.07721000000001, 118.45904999999998, 113.73108000000002, 120.66875999999998, 113.79419000000001);
  path.lineTo(120.66875999999998, 113.79425000000002);
  path.close();
  path.fill('#000');
  path.stroke('#000');

  layer = stage.layer();
  path = layer.path();
  path.moveTo(120.7319, 114.29932);
  path.lineTo(141.44001, 123.20129999999999);
  path.lineTo(154.50887, 114.74127999999999);
  path.curveTo(154.50887, 114.74127999999999, 163.72651, 117.83484999999999, 163.28457, 125.22162999999999);
  path.curveTo(162.84263, 132.60835, 157.47619, 137.40657, 157.47619, 137.40657);
  path.lineTo(121.9946, 137.72224);
  path.curveTo(121.9946, 137.72224, 112.33501000000001, 138.29042, 111.95621, 125.66352);
  path.curveTo(111.5774, 113.03663, 120.7319, 114.29932000000001, 120.7319, 114.29932000000001);
  path.close();
  path.fill('#fcf8d5');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(141.31375, 123.0119);
  path.curveTo(141.31375, 123.0119, 141.81883, 133.87103, 139.7354, 137.46972);
  path.fill('none');
  path.stroke('#000');

  eye1 = layer.path();
  eye1.moveTo(118.45906, 125.6004);
  eye1.lineTo(118.2697, 130.39862);
  eye1.lineTo(123.0048, 130.46173);
  eye1.lineTo(123.13107000000001, 125.60033999999999);
  eye1.lineTo(118.45907000000001, 125.6004);
  eye1.close();
  eye1.fill('red');
  eye1.stroke('#000');

  eye2 = layer.path();
  eye2.moveTo(146.71173, 126.07391);
  eye2.lineTo(146.52237, 130.87213);
  eye2.lineTo(151.25745999999998, 130.93524);
  eye2.lineTo(151.38372999999999, 126.07385);
  eye2.lineTo(146.71173, 126.07391);
  eye2.close();
  eye2.fill('red');
  eye2.stroke('#000');

  layer = stage.layer();
  path = layer.path();
  path.moveTo(143.71288, 155.14734);
  path.curveTo(143.71288, 155.14734, 116.19539000000002, 153.09375, 108.86261000000002, 153.88464000000002);
  path.curveTo(104.59956000000003, 154.34448000000003, 98.25601000000002, 156.28375000000003, 97.87720000000002, 160.57690000000002);
  path.curveTo(97.49840000000002, 164.87005000000002, 96.36197000000001, 173.58264000000003, 108.35754000000001, 175.98175000000003);
  path.curveTo(120.35309000000001, 178.38086000000004, 139.41973000000002, 176.99188000000004, 143.46033, 174.21399000000002);
  path.curveTo(143.33406, 170.4259, 143.71288, 155.14734, 143.71288, 155.14734);
  path.close();
  path.fill('#fdf9d4');
  path.stroke('#000');

  layer = stage.layer();
  path = layer.path();
  path.moveTo(99.51871, 157.79901);
  path.curveTo(99.51871, 157.79901, 105.20081, 161.08203, 109.99903, 161.08203);
  path.curveTo(114.79726000000001, 161.08203, 141.5663, 160.95575, 143.20779, 160.5769);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(98.63482, 168.40564);
  path.curveTo(98.63482, 168.40564, 106.84230000000001, 170.29968, 111.13545, 170.80475);
  path.curveTo(115.42859, 171.30982, 143.46032, 170.67847, 143.46032, 170.67847);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(108.61007, 154.26349);
  path.lineTo(108.61007, 175.60297);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(120.85817, 176.86566);
  path.lineTo(120.60565, 153.75842);
  path.fill('none');
  path.stroke('#000');

  path = layer.path();
  path.moveTo(133.23253, 154.51599);
  path.lineTo(133.23253, 176.10802999999999);
  path.fill('none');
  path.stroke('#000');

  return stage;
}

function galaxy(pie) {
  var starsPath;
  var flag = 0;

  /**
   * Array of points.
   * @type {Array.<Point3D>}
   */
  var stars = [];


  /**
   * Focus length.
   * @type {number}
   */
  var FOCUS_LENGTH = 50;


  /**
   * FAV multiplier.
   * @type {number}
   */
  var FAV = 500;

  var xAxisLength = 0;
  var yAxisLength = 0;
  var zAxisLength = 0;

  var xAxisPath;
  var yAxisPath;
  var zAxisPath;

  var xAxis, yAxis, zAxis;

  var DEPTH = 2000;

  var STARS_STEP = 1;

  var axisOpacity = 0.8;

  var xRotation = 0.1;
  var yRotation = 0.2;

  var prevX = NaN;
  var prevY = NaN;


//--------------------------------------------------------------------------------------------------------------
//
//  Point class.
//
//--------------------------------------------------------------------------------------------------------------
  /**
   * Point class.
   * @param x
   * @param y
   * @param z
   * @constructor
   */
  var Point3D = function (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  };


  /**
   * Rotates point in 3D by X.
   * @param {number} angle - Degrees.
   */
  Point3D.prototype.rotateX3D = function (angle) {
    angle = degToRads(angle);
    var sin = Math.sin(angle);
    var cos = Math.cos(angle);
    var y = this.y;
    var z = this.z;
    this.y = y * cos - z * sin;
    this.z = z * cos + y * sin;
  };


  /**
   * Rotates point in 3D by Y.
   * @param {number} angle - Degrees.
   */
  Point3D.prototype.rotateY3D = function (angle) {
    angle = degToRads(angle);
    var sin = Math.sin(angle);
    var cos = Math.cos(angle);
    var x = this.x;
    var z = this.z;
    this.x = x * cos - z * sin;
    this.z = z * cos + x * sin;
  };


  /**
   * Rotates point in 3D by Z.
   * @param {number} angle - Degrees.
   */
  Point3D.prototype.rotateZ3D = function (angle) {
    angle = degToRads(angle);
    var sin = Math.sin(angle);
    var cos = Math.cos(angle);
    var x = this.x;
    var y = this.y;
    this.x = x * cos - y * sin;
    this.y = y * cos + x * sin;
  };


  /**
   * Turns point to screen coordinate.
   * @returns {anychart.graphics.math.Coordinate}
   */
  Point3D.prototype.get2DPoint = function () {
    var x = getScreenCoordinate(this.x, this.z);
    var y = getScreenCoordinate(this.y, this.z);
    return new acgraph.math.Coordinate(x, y);
  };


//--------------------------------------------------------------------------------------------------------------
//
//  Utils.
//
//--------------------------------------------------------------------------------------------------------------
  /**
   * Gets screen coordinate.
   * @param {number} coordinate - Dimension coordinate.
   * @param {number} z - Depth coordinate.
   * @return {number}
   */
  var getScreenCoordinate = function (coordinate, z) {
    return coordinate * FAV / (z + FOCUS_LENGTH + DEPTH);
  };


  /**
   * Turns degrees to radians.
   * @param degrees
   * @return {number}
   */
  var degToRads = function (degrees) {
    return degrees * (Math.PI / 180);
  };


  /**
   * Generates random number in range.
   * @param val
   * @return {number}
   */
  function plusMinusRandom(val) {
    return val - 2 * val * Math.random();
  }


  /**
   * Generates stars data.
   */
  function generateStars() {
    var w = 150;
    var h = 100;
    var d = w;

    var xDelta = 0.7 * w;
    var yDelta = 0.7 * h;
    var zDelta = 0.7 * d;

    var maxXRad = Math.PI * 2;

    var radStep = degToRads(STARS_STEP);
    var ang = 0.0001;

    var numberOfPointOnStep = 7;

    while (ang <= maxXRad) {
      var progress = Math.max(0.2, 1 - ang / maxXRad);

      var x1 = w * ang * Math.cos(ang);
      var y1 = h * ang * Math.sin(ang);
      var x2 = -x1;
      var y2 = -y1;

      var z1 = plusMinusRandom(d);
      var z2 = plusMinusRandom(d);

      for (var i = 0; i < numberOfPointOnStep; i++) {
        var x1Rand = x1 + plusMinusRandom(xDelta);
        var y1Rand = y1 + plusMinusRandom(yDelta);
        var z1Rand = z1 + plusMinusRandom(zDelta);

        var x2Rand = x2 + plusMinusRandom(xDelta);
        var y2Rand = y2 + plusMinusRandom(yDelta);
        var z2Rand = z2 + plusMinusRandom(zDelta);

        stars.push(new Point3D(x1Rand, y1Rand, z1Rand * progress));
        stars.push(new Point3D(x2Rand, y2Rand, z2Rand * progress));
      }

      ang += radStep;
      radStep *= 1.02;
    }
  }


  /**
   * Draws axes.
   */
  function drawAxes() {
    stage.suspend()
    var bounds = pie.center().getBounds();
    var centerX = Math.round(bounds.width / 2);
    var centerY = Math.round(bounds.height / 2);
    var addX = centerX;
    var addY = centerY;

    var xAxisFromCoord = xAxis.fromPoint.get2DPoint();
    var xAxisToCoord = xAxis.toPoint.get2DPoint();
    xAxisPath
        .clear()
        .moveTo(xAxisFromCoord.x + addX, xAxisFromCoord.y + addY)
        .lineTo(xAxisToCoord.x + addX, xAxisToCoord.y + addY);

    var yAxisFromCoord = yAxis.fromPoint.get2DPoint();
    var yAxisToCoord = yAxis.toPoint.get2DPoint();
    yAxisPath
        .clear()
        .moveTo(yAxisFromCoord.x + addX, yAxisFromCoord.y + addY)
        .lineTo(yAxisToCoord.x + addX, yAxisToCoord.y + addY);

    var zAxisFromCoord = zAxis.fromPoint.get2DPoint();
    var zAxisToCoord = zAxis.toPoint.get2DPoint();
    zAxisPath
        .clear()
        .moveTo(zAxisFromCoord.x + addX, zAxisFromCoord.y + addY)
        .lineTo(zAxisToCoord.x + addX, zAxisToCoord.y + addY);

    starsPath.clear();
    for (var i = 0; i < stars.length; i++) {
      var star = stars[i];
      var startScreenCoords = star.get2DPoint();
      starsPath
          .moveTo(startScreenCoords.x + addX, startScreenCoords.y + addY)
          .lineTo(startScreenCoords.x + addX + 1, startScreenCoords.y + addY + 1);
    }
    stage.resume()
  }


  /**
   * Calculates rotation of stars.
   * @param opt_xAngle
   * @param opt_yAngle
   * @param opt_zAngle
   */
  function rotateStars(opt_xAngle, opt_yAngle, opt_zAngle) {
    opt_xAngle = opt_xAngle || 0;
    opt_yAngle = opt_yAngle || 0;
    opt_zAngle = opt_zAngle || 0;

    for (var i = 0; i < stars.length; i++) {
      var star = stars[i];
      star.rotateX3D(opt_xAngle);
      star.rotateY3D(opt_yAngle);
      star.rotateZ3D(opt_zAngle);
    }
  }


  /**
   * Axis class.
   * @param fromX
   * @param toX
   * @param fromY
   * @param toY
   * @param fromZ
   * @param toZ
   * @constructor
   */
  Axis = function (fromX, toX, fromY, toY, fromZ, toZ) {
    this.fromPoint = new Point3D(fromX, fromY, fromZ);
    this.toPoint = new Point3D(toX, toY, toZ);
  };


  /**
   * Rotates axes in 3D by X.
   * @param angle
   */
  Axis.prototype.rotateX3D = function (angle) {
    this.fromPoint.rotateX3D(angle);
    this.toPoint.rotateX3D(angle);
  };


  /**
   * Rotates axes in 3D by Y.
   * @param angle
   */
  Axis.prototype.rotateY3D = function (angle) {
    this.fromPoint.rotateY3D(angle);
    this.toPoint.rotateY3D(angle);
  };

  /**
   * Rotates axes in 3D by Z.
   * @param angle
   */
  Axis.prototype.rotateZ3D = function (angle) {
    this.fromPoint.rotateZ3D(angle);
    this.toPoint.rotateZ3D(angle);
  };

  var cont = document.getElementById('container');
  // cont.style.backgroundColor = '#000';
  var layer = acgraph.layer();

  generateStars();

//x - green
  xAxisPath = layer.path().stroke([{color: '#afa', opacity: 0}, {
    color: '#afa',
    opacity: axisOpacity
  }, {color: '#afa', opacity: 0}]);
//y - red
  yAxisPath = layer.path().stroke([{color: '#faa', opacity: 0}, {
    color: '#faa',
    opacity: axisOpacity
  }, {color: '#faa', opacity: 0}]);
//z - blue
  zAxisPath = layer.path().stroke([{color: '#aaf', opacity: 0}, {
    color: '#aaf',
    opacity: axisOpacity
  }, {color: '#aaf', opacity: 0}]);

  starsPath = layer.path().stroke({color: '#fff', opacity: 0.7});

  var bounds = pie.center().getBounds();

  xAxisLength = Math.round(bounds.width);
  zAxisLength = xAxisLength;
  yAxisLength = Math.round(bounds.height);

  xAxis = new Axis();
  xAxis.fromPoint.x = Math.round(xAxisLength / 2);
  xAxis.toPoint.x = -xAxis.fromPoint.x;
  xAxis.fromPoint.y = 0;
  xAxis.toPoint.y = 0;
  xAxis.fromPoint.z = 0;
  xAxis.toPoint.z = 0;

  yAxis = new Axis();
  yAxis.fromPoint.x = 0;
  yAxis.toPoint.x = 0;
  yAxis.fromPoint.y = Math.round(yAxisLength / 2);
  yAxis.toPoint.y = -yAxis.fromPoint.y;
  yAxis.fromPoint.z = 0;
  yAxis.toPoint.z = 0;

  zAxis = new Axis();
  zAxis.fromPoint.x = 0;
  zAxis.toPoint.x = 0;
  zAxis.fromPoint.y = 0;
  zAxis.toPoint.y = 0;
  zAxis.fromPoint.z = Math.round(zAxisLength / 2);
  zAxis.toPoint.z = -zAxis.fromPoint.z;

  window.requestAnimationFrame = window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        setTimeout(callback, 1000 / 60);
      };

  // cont.addEventListener('mousedown', function () {
  //   flag = 1;
  // });
  // cont.addEventListener('mousemove', function () {
  //   if (flag === 1) {
  //     cont.addEventListener('mousemove', galaxyMove);
  //   }
  // });
  // cont.addEventListener('mouseup', function () {
  //   flag = 0;
  //   cont.removeEventListener('mousemove', galaxyMove);
  // });

  function galaxyMove(e) {
    prevX = isNaN(prevX) ? e.clientX : prevX;
    prevY = isNaN(prevY) ? e.clientY : prevY;

    yRotation = e.clientX - prevX;
    xRotation = e.clientY - prevY;

    prevX = e.clientX;
    prevY = e.clientY;
  }

  drawAxes();
  draw();

  /**
   * Draws.
   */
  function draw() {
    window.requestAnimationFrame(draw);

    xAxis.rotateX3D(xRotation);
    xAxis.rotateY3D(yRotation);

    yAxis.rotateX3D(xRotation);
    yAxis.rotateY3D(yRotation);

    zAxis.rotateX3D(xRotation);
    zAxis.rotateY3D(yRotation);

    rotateStars(xRotation, yRotation, 0);

    drawAxes();

    pie.invalidate(anychart.ConsistencyState.BOUNDS)
    pie.draw();
  }

  pie.center().fill('#000');

  return layer;
}

function drawPie(container, bounds, content, opt_chart) {
  var pie = opt_chart;

  if (!pie) {
    var pie = anychart.pie(data);
    pie.background()
        .stroke('#000')
    // .fill('#000');
    pie.palette().items(colors);
    pie.innerRadius('85%');
    pie.legend(false)
    pie.labels(false);

    // pie.labels().position('outside')
    pie.container(container);
  }

  pie.suspendSignalsDispatching()

  if (bounds)
    pie.bounds(bounds);

  if (content)
    pie.center().content(Object.prototype.toString.call(content) == '[object Function]' ? content(pie) : content);

  pie.resumeSignalsDispatching(false);
  pie.draw();

  return pie;
}

anychart.onDocumentReady(function() {
  stage = acgraph.create('container');
  stage.suspend();

  pie1 = drawPie(stage, [0 * width + '%', 0 * height + '%', width + '%', height + '%'], galaxy);



  // drawPie(stage, [1 * width + '%', 0 * height + '%', width + '%', height + '%'], label, pie1);
  // drawPie(stage, [2 * width + '%', 0 * height + '%', width + '%', height + '%'], labelsFactory, pie1);
  // drawPie(stage, [3 * width + '%', 0 * height + '%', width + '%', height + '%'], markersFactory, pie1);
  // drawPie(stage, [0 * width + '%', 1 * height + '%', width + '%', height + '%'], legend, pie1);
  // drawPie(stage, [1 * width + '%', 1 * height + '%', width + '%', height + '%'], background, pie1);
  // drawPie(stage, [2 * width + '%', 1 * height + '%', width + '%', height + '%'], colorRange, pie1);
  // drawPie(stage, [3 * width + '%', 1 * height + '%', width + '%', height + '%'], resourceList, pie1);
  // drawPie(stage, [0 * width + '%', 2 * height + '%', width + '%', height + '%'], bender, pie1);
  // drawPie(stage, [1 * width + '%', 2 * height + '%', width + '%', height + '%'], galaxy, pie1);
  // drawPie(stage, [2 * width + '%', 2 * height + '%', width + '%', height + '%'], legend, pie1);
  // drawPie(stage, [3 * width + '%', 2 * height + '%', width + '%', height + '%'], legend, pie1);

  stage.resume();
});
