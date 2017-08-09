
anychart.onDocumentReady(function () {
  // create data table on loaded data
  var dataTable = anychart.data.table();
  // The data used in this sample can be obtained from the CDN
  // https://cdn.anychart.com/csv-data/csco-daily.js
  dataTable.addData(get_csco_daily_data());

  // map loaded data for the ohlc series
  var mapping = dataTable.mapAs({'open': 1, 'high': 2, 'low': 3, 'close': 4});

  // map loaded data for the scroller
  var scrollerMapping = dataTable.mapAs();
  scrollerMapping.addField('value', 5);

  // create stock chart
  chart = anychart.stock();

  // create first plot on the chart
  var plot = chart.plot(0);
  plot.grid(0).enabled(true);
  plot.grid(1)
      .enabled(true)
      .layout('vertical');
  plot.minorGrid(0).enabled(true);
  plot.minorGrid(1)
      .enabled(true)
      .layout('vertical');
  priceIndicator = plot.priceIndicator();
  priceIndicator.value(1173657600000);

  // create EMA indicators with period 50
  // plot.ema(dataTable.mapAs({'value': 4})).series().stroke('1.5 #455a64');

  var series = plot.candlestick(mapping);
  series.name('CSCO');
  series.legendItem().iconType('risingfalling');

  // create scroller series with mapped data
  chart.scroller().candlestick(mapping);

  // set chart selected date/time range
  chart.selectRange('2007-01-03', '2007-05-20');

  // set container id for the chart
  chart.container('container');
  // initiate chart drawing
  chart.draw();
});
    