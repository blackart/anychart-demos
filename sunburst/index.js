function createChart(container, data, bouds, levels) {
  var dataTree = anychart.data.tree(data, 'as-table');

  var chart = anychart.sunburst(dataTree);
  chart.bounds(bouds)

  // chart.stroke('10 blue');
  // chart.selected().stroke('10 red');

  // chart.innerRadius('30%');
  chart.labels()
      .position('circular')
      .enabled(true)
  // .background('red')
  // .format('{%Value}')

  // chart.startAngle(-90);
  chart.radius('50%');
  chart.innerRadius('10%');

  chart.calculatingMode('parentDependent');
  // chart.calculatingMode('parentIndependent');
  // chart.calculatingMode('ordinal');

  chart.hovered().labels()
      .fontColor('red')
      .fontWeight('bold');


  // chart.fill(function() {
  //   return this.autoColor;
  // });
  chart.level(0).enabled(levels[0]);
  chart.level(1).enabled(levels[1]);
  chart.level(2).enabled(levels[2])
  chart.level(3).enabled(levels[3]);

  chart.container(container).draw();

  return chart;
}


anychart.onDocumentReady(function() {
  var data = [
    // {
    //   "id": "100",
    //   "name": "Root 2",
    //   "parent": null,
    //   "value": 500
    // },
    //
    // {
    //   "id": "200",
    //   "name": "Root 3",
    //   "parent": null,
    //   "value": 4
    // },

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
      "value": 300
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
      "id": "05",
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
      "parent": "05",
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
  var stage = anychart.graphics.create('container');
  // var chart1 = createChart(stage, data, anychart.math.rect(0, 0, '50%', '50%'), [true,true,true,true]);
  // var chart2 = createChart(stage, data, anychart.math.rect('50%', 0, '50%', '50%'), [false,true,true,true]);
  // var chart3 = createChart(stage, data, anychart.math.rect(0, '50%', '50%', '50%'), [false,false,true,true]);
  // var chart4 = createChart(stage, data, anychart.math.rect('50%', '50%', '50%', '50%'), [true,false,true,true]);
  var chart4 = createChart(stage, data, anychart.math.rect(0, 0, '100%', '100%'), [true,true,true,true]);


  $('#' + chart4.calculatingMode()).attr('checked', 'checked');
  $('input[name=calculationMode]').on('change', function() {
    // chart1.calculatingMode($(this).val());
    // chart2.calculatingMode($(this).val());
    // chart3.calculatingMode($(this).val());
    chart4.calculatingMode($(this).val());
  });

  var maxDepth = chart4.getStat('maxDepth');
  for (var i = 0; i <= maxDepth; i++) {
    var enabled = chart4.level(i).enabled();
    $('#levels').append('<input type="checkbox" name="levels" id="level ' + i + '" value="' + i + '" ' + (enabled ? 'checked' : '') + '>');
    $('#levels').append('<label for="' + i + '">Level ' + i + '</label><br>');
  }

  $('input[name=levels]').on('change', function() {
    chart4.level(+$(this).val()).enabled($(this).is(':checked'));
  });

});
