var priceIndicator, chart, plot;
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
  plot = chart.plot(0);
  plot.grid(0).enabled(true);
  plot.grid(1)
      .enabled(true)
      .layout('vertical');
  plot.minorGrid(0).enabled(true);
  plot.minorGrid(1)
      .enabled(true)
      .layout('vertical');

  priceIndicator = plot.priceIndicator(0);
  // priceIndicator.value(new Date('2007-03-12'));
  // priceIndicator.stroke('4 blue');
  // priceIndicator.label().enabled(false);
  // priceIndicator.value(1173657600000);
  priceIndicator.value('first-visible');
  // priceIndicator.value('series-start');
  // priceIndicator.value('series-end');
  priceIndicator.label().background('green');
  priceIndicator.stroke('green');


  priceIndicator = plot.priceIndicator(1);
  priceIndicator.value('last-visible');
  priceIndicator.label().background('red');
  priceIndicator.stroke('red');

  priceIndicator = plot.priceIndicator(2);
  priceIndicator.value('series-start');

  priceIndicator = plot.priceIndicator(3);
  priceIndicator.value('series-end');

  priceIndicator = plot.priceIndicator(4);
  priceIndicator.value(new Date('2007-03-12'));

  priceIndicator.label().background('blue');
  priceIndicator.stroke('blue');

  // create EMA indicators with period 50
  // plot.ema(dataTable.mapAs({'value': 4})).series().stroke('1.5 #455a64');

  var series = plot.candlestick(mapping);
  series.name('CSCO');
  series.legendItem().iconType('risingfalling');

  // create scroller series with mapped data
  chart.scroller().candlestick(mapping);

  // set chart selected date/time range
  chart.selectRange('1996-09-08', '1999-07-04');

  // set container id for the chart
  chart.container('container');
  // initiate chart drawing
  chart.draw();
});
    