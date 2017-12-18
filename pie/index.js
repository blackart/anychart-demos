var chart;
anychart.onDocumentReady(function() {
  chart = anychart.pie([1, 5, 8, 3]);
  chart.interactivity().multiSelectOnClick(false);
  chart.container('container').draw();
});
