  var chart, chartConfig, chartData;

function hasData(data) {
  return data && data.series && data.series.length
}

function addDeviceDiscoveryProfile() {
  var mychart = {
    'addSeries': function(d) {
      var json = anychart.utils.xml2json(d);

      var dataSet = anychart.data.set(json.point);
      var data = dataSet.mapAs(void 0, {"x": "name", "value": "y"});

      var series = chart.column(data);
      series.tooltip().allowLeaveChart(true).allowLeaveStage(true)
      series
          .name(json.name);
    }
  };
  eval(chartData.chartData);
}

  anychart.onDocumentReady(function () {
// create pie chart with passed data
    data = anychart.data.set([
      ['> USD 1 million', 69.2, 24.2],
      ['USD 100,000 to 1 million', 85, 334],
      ['USD 10,000 to 100,000', 32.1, 1045],
      ['< 10,000 USD', 8.2, 3038]
    ]);

    var wealth = data.mapAs({'x': 0, 'value': 1});

    var chart = anychart.pie(wealth);
    chart.labels()
        .hAlign('center')
        .position('outside')
        .format('{%Value} trn.n({%PercentOfCategory}%)');

// set chart title text settings
    chart.title('The global wealth pie');

// set legend title text settings
    chart.legend()

    // set legend position and items layout
        .position('center-bottom')
        .itemsLayout('horizontal')
        .align('center');

// set container id for the chart
    chart.container('container');
// initiate chart drawing
    chart.draw();
  });