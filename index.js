var chart;
anychart.onDocumentLoad(function() {
  anychart.licenseKey('test-key-32db1f79-cc9312c4');

  var stage = anychart.graphics.create('container', 300, 300);
  stage.suspend();
  stage.credits(false);

  chart = anychart.column([3, 6, 1]);

  chart.container(stage).draw();
  stage.resume();
})