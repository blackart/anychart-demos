  var chart, chartConfig, chartData;

function hasData(data) {
  return data && data.series && data.series.length
}

function addDeviceDiscoveryProfile() {
  var mychart = {
    'addSeries': function(d) {
      var json = anychart.utils.xml2json(d);

      var dataSet = anychart.data.set(json.point);
      var data = dataSet.mapAs({"x": "name", "value": "y"});

      var series = chart.column(data);
      series.tooltip().allowLeaveChart(true).allowLeaveStage(true)
      series
          .name(json.name);
    }
  };
  eval(chartData.chartData);
}

anychart.onDocumentLoad(function() {
  anychart.data.loadJsonFile('./data.json', function(data) {
    chartConfig = data.data.resultObject.data[0];
    chartData = data.data.resultObject.data[1];

    chart = anychart.column();

    var seriesData = chartConfig.charts.chart.data;


    if (hasData(seriesData)) {
      for(var i = 0, len = seriesData.series.length; i < len; i++) {
        var settings = seriesData.series[i];
        var dataSet = anychart.data.set(settings.point);
        var mappedData = dataSet.mapAs({"x": [0], "value": [1]}, {"x": "name", "value": "y"});
        var series = chart.column(mappedData);
        series
            .name(settings.name);
      }
    } else {
      var label = chart.label();
      label.text('Click here to Discover Devices');
      label.position('center');
      label.anchor('center');
      label.fontDecoration('underline');
      label.fontColor('blue');

      label.listen('click', function() {
        label.enabled(false);
        var actionArguments = chartConfig.settings.no_data.label.actions.action.arg;
        window[actionArguments[0]].call();
      })
    }

    chart.labels(true);

    chart.padding()
        .top(30)
        .left(30)
        .right(30);

    chart.grid(0)
        .oddFill('#F9F9F9')
        .evenFill('#FFF');
    chart.grid(1)
        .layout("vertical");

    chart.xAxis()
        .title('Device Synchronizaton State')
        .labels().rotation(-45);

    chart.yAxis()
        .title('Number of Devices')
        .labels().format('{%Value}{numDecimals:0}');

    chart.yScale()
        .minimum(0)
        .ticks()
          .interval(50);

    chart.background()
        .enabled(true)
        .fill('#f8f8f8')
        .stroke('3px #4578b8')
        .corners(15);

    chart.container("container").draw();
  });


  // chart = anychart.column();
  // var series = chart.column([
  //   ['Rouge', '80540'],
  //   ['Foundation', '94190'],
  //   ['Mascara', '102610'],
  //   ['Lip gloss', '110430'],
  //   ['Pomade', '128000'],
  //   ['Nail polish', '143760'],
  //   ['Eyebrow pencil', '170670'],
  //   ['Eyeliner', '213210'],
  //   ['Eyeshadows', '249980']
  // ]);
  //
  // chart.container('container').draw();
});