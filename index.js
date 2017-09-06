anychart.onDocumentReady(function () {
  chart = anychart.line();
  chart.line([5, 6, 20, 45, 3]);
  chart.xGrid()
      .enabled(true)
      .palette(['orange', 'green', 'blue'])
  chart.container('container').draw();
});