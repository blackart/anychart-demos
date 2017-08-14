
anychart.onDocumentReady(function () {
  var dataTable = anychart.data.table();
  dataTable.addData(get_csco_daily_data());

  var mapping = dataTable.mapAs({'value': 2});

  chart = anychart.stock();

  plot = chart.plot(0);

  plot.line()
      .data(mapping)
      .name('CSCO')
      .stroke('2px #64b5f6');

  var amaFirst = plot.ama(mapping, 10, 2, 30).series();
  amaFirst.stroke('1.5 #6E9C4E');

  var amaSecond = plot.ama(mapping, 20, 4, 50).series();
  amaSecond.stroke('1.5 #E96A26');

  plot.yAxis(1).orientation('right');
  chart.padding(10, 50, 20, 50);

  chart.scroller().line(mapping);

  chart.selectRange('1996-09-08', '1999-07-04');

  priceIndicator1 = plot.priceIndicator(1);
  priceIndicator1.value('last-visible');
  priceIndicator1.label().background('red');
  priceIndicator1.stroke('red');
  priceIndicator1.axis(plot.yAxis(1));
  priceIndicator1.series(1);

  chart.container('container').draw();

  rangePicker = anychart.ui.rangePicker();
  rangePicker.render(chart);

  rangeSelector = anychart.ui.rangeSelector();
  rangeSelector.render(chart);
});
    