anychart.onDocumentReady(function() {
  var dataTable = anychart.data.table();
  dataTable.addData(get_dji_daily_short_data());

  var mapping = dataTable.mapAs();
  mapping.addField('open', 1, 'open');
  mapping.addField('high', 2, 'high');
  mapping.addField('low', 3, 'low');
  mapping.addField('close', 4, 'close');
  mapping.addField('volume', 5, 'average');

  chart = anychart.stock();
  chart.padding(10,50,10,80);

  var Plot1 = chart.plot();
  Plot1.candlestick().data(mapping).stroke('green .7').markers(true);
  // Plot1.yAxis(false);
  // Plot1.xAxis(false);
  // chart.scroller(false)


  priceIndicator1 = Plot1.priceIndicator(0); // label индикатора внутри стал белый и стало не видно цифр
  priceIndicator1.value('last-visible')
      .stroke('3 orange');

  chart.container('container').draw();
});
