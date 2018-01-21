var chart;
anychart.onDocumentReady(function() {
  var data = [
    // {
    //   "id": "100",
    //   "product": "Root 2",
    //   "parent": null,
    //   "value": 500
    // },
    //
    // {
    //   "id": "200",
    //   "product": "Root 3",
    //   "parent": null,
    //   "value": 4
    // },

    {
      "id": "00",
      "product": "Products by Revenue",
      "parent": null,
      "value": 1000
    },


    {
      "parent": "00",
      "id": "01",
      "product": "Fruits",
      "value": 200
    }, {
      "parent": "00",
      "id": "02",
      "product": "Vegetables",
      "value": 300
    }, {
      "parent": "00",
      "id": "03",
      "product": "Dairy",
      "value": 100
    }, {
      "parent": "00",
      "id": "04",
      "product": "Meat",
      "value": 100
    }, {
      "parent": "00",
      "id": "05",
      "product": "Meat",
      "value": 150
    },


    {
      "parent": "05",
      "id": "50",
      "value": 100
    },


    {
      "parent": "50",
      "id": "500",
      "value": 50
    },



    {
      "parent": "01",
      "id": "11",
      "product": "Apples",
      "value": 10
    }, {
      "parent": "01",
      "id": "12",
      "product": "Oranges",
      "value": 10
    }, {
      "parent": "01",
      "id": "13",
      "product": "Bananas",
      "value": 10
    }, {
      "parent": "01",
      "id": "14",
      "product": "Melons",
      "value": 10
    }, {
      "parent": "01",
      "id": "15",
      "product": "Apricots",
      "value": 10
    }, {
      "parent": "01",
      "id": "16",
      "product": "Plums",
      "value": 10
    }, {
      "parent": "01",
      "id": "17",
      "product": "Pineapples",
      "value": 10
    }, {
      "parent": "01",
      "id": "18",
      "product": "Cherries",
      "value": 10
    }, {
      "parent": "01",
      "id": "19",
      "product": "Tangerines",
      "value": 10
    }, {
      "parent": "02",
      "id": "21",
      "product": "Potato",
      "value": 10
    }, {
      "parent": "02",
      "id": "22",
      "product": "Eggplants",
      "value": 10
    }, {
      "parent": "02",
      "id": "23",
      "product": "Tomatoes",
      "value": 10
    }, {
      "parent": "02",
      "id": "24",
      "product": "Cucumbers",
      "value": 10
    }, {
      "parent": "02",
      "id": "25",
      "product": "Cabbage",
      "value": 10
    }, {
      "parent": "02",
      "id": "26",
      "product": "Carrot",
      "value": 10
    }, {
      "parent": "02",
      "id": "27",
      "product": "Squash",
      "value": 10
    }, {
      "parent": "02",
      "id": "28",
      "product": "Capsicums",
      "value": 10
    }, {
      "parent": "03",
      "id": "31",
      "product": "Milk",
      "value": 10
    }, {
      "parent": "03",
      "id": "32",
      "product": "Curd",
      "value": 10
    }, {
      "parent": "03",
      "id": "33",
      "product": "Cheese",
      "value": 10
    }, {
      "parent": "03",
      "id": "34",
      "product": "Yogurt",
      "value": 10
    }, {
      "parent": "03",
      "id": "35",
      "product": "Kefir",
      "value": 10
    }, {
      "parent": "04",
      "id": "41",
      "product": "Mutton",
      "value": 10
    }, {
      "parent": "04",
      "id": "42",
      "product": "Beef",
      "value": 10
    }, {
      "parent": "04",
      "id": "43",
      "product": "Pork",
      "value": 10
    }, {
      "parent": "04",
      "id": "44",
      "product": "Veal",
      "value": 10
    }
  ];
  var dataTree = anychart.data.tree(data, 'as-table');
  chart = anychart.sunburst(dataTree);

  // chart.innerRadius('30%');
  chart.labels()
      .position('circular')
      .enabled(true)
      // .background('red')
      .format('{%Value}')

  chart.startAngle(45);

  // chart.calculatingMode('parentDependent');
  chart.calculatingMode('parentIndependent');
  // chart.calculatingMode('ordinal');

  chart.hovered().labels()
      .fontColor('red')
      .fontWeight('bold');

  chart.container('container').draw();


  $('#' + chart.calculatingMode()).attr('checked', 'checked');
  $('input[name=calculationMode]').on('change', function() {
    chart.calculatingMode($(this).val());
  })
});
