var chart;
anychart.onDocumentLoad(function() {
  anychart.licenseKey('test-key-32db1f79-cc9312c4');

  var stage = anychart.graphics.create('container');

  var rect5 = stage.rect(40, 420, 300, 180).stroke('black');

  var ordinalScale = anychart.scales.ordinal();
  ordinalScale.values([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]);

  axis6 = anychart.standalones.axes.linear();
  axis6.parentBounds(rect5.getBounds())
      .scale(ordinalScale)
      .title('staggerLines(4)')
      .staggerMode(true)
      .staggerLines(4);
  axis6.labels().rotation(-10);
  axis6.container(stage).draw();
});