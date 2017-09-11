anychart.onDocumentReady(function () {
  var stage = anychart.graphics.create('container', 600, 500);

  var dataTable = anychart.data.table();
  dataTable.addData(get_orcl_daily_short_data());

  var dataTable1 = anychart.data.table();
  dataTable1.addData(get_msft_daily_short_data());

  var mapping1 = dataTable.mapAs({value:2});
  var mapping2 = dataTable1.mapAs({value:4});
  var mapping = dataTable.mapAs();
  mapping.addField('open', 1, 'open');
  mapping.addField('high', 2, 'high');
  mapping.addField('low', 3, 'low');
  mapping.addField('close', 4, 'close');
  mapping.addField('volume', 5, 'average');

  chart = anychart.stock();
  chart.padding(10,50,10,50);

  var Plot1 = chart.plot();
  var Plot2 = chart.plot(1);

  Plot1.stick().data(mapping1).stroke('green .7');
  series10 = Plot1.jumpLine().data(mapping2);
  series10.id('First');
  priceIndicator1 = Plot1.priceIndicator(0);
  priceIndicator1.series(series10);
  priceIndicator1.value(Date.UTC(2006, 5, 13));

  series20 = Plot2.candlestick(mapping);
  series20.id('Volume');
  Plot2.column(mapping2);
  Plot2.height(200);
  priceIndicator2 = Plot2.priceIndicator(0);
  priceIndicator2.series('Volume');
  priceIndicator2.value('first-visible').stroke('2 red');

  priceIndicator3 = Plot2.priceIndicator(1);
  priceIndicator3.series(1);
  priceIndicator3.value('series-end');

  chart.plot(1, {legend: true});
  chart.selectRange('2006-06-02','2006-06-18');


  chart.container(stage).draw();

  priceIndicator1.series(Plot1.getSeries(0));
  priceIndicator2.series(1);
  priceIndicator3.series('Volume');
  chart.selectRange('Max');

  chart.selectRange('2006-06-02','2006-06-18');
  priceIndicator1.series('First');
  debugger;
  priceIndicator2.series(Plot2.getSeries(0)); // blood in console
  priceIndicator3.series(1);
});