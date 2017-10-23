anychart.onDocumentReady(function () {
  stage = acgraph.create('container');

  // clip = acgraph.clip(100, 180, 20, 150);
  //
  // rect1 = stage.rect(50, 50, 200, 200).fill('red').clip(clip);
  // rect2 = stage.rect(50, 260, 200, 200).fill('yellow').clip(clip);

  chart = anychart.column([1,2,3]);
  chart.bounds(0, 0, '100%', '50%');
  chart.getSeriesAt(0).hatchFill('zig-zag');
  chart.container(stage).draw();

  chart1 = anychart.column([3,2,1]);
  chart1.bounds(0, '50%', '100%', '50%');
  chart1.getSeriesAt(0).hatchFill('zig-zag');
  chart1.container(stage).draw();
});
