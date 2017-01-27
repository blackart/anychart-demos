var data, chart, series;
anychart.onDocumentReady(function() {
  dataTable = anychart.data.table();
  dataTable.addData(get_csco_daily_data());
  mapping = dataTable.mapAs();
  mapping.addField('value', 4, 'close');
  chart = anychart.stock();
  // chart.bounds(0, 0, 300, '100%');
  chart.plot().macd(mapping, 12, 26, 9);
  chart.container('container').draw();
});