anychart.onDocumentReady(function() {
  chart = anychart.radar();
  chart.line(['4', 10, -1, 8, 4]);
  chart.xGrid()
      .stroke('.9 green')
      .palette(['none', 'red']);
  chart.container('container').draw();
});