anychart.onDocumentReady(function() {
  stage = anychart.graphics.create("container");
  stage.suspend();

  var dataSet = [
    [1.1, 2.3, 1.7, 1.9],
    [1.2, 2.1, 2.7, 1.3],
    [1.0, 1.2, 0.7, 1.1],
    [1.3, 2.4, 1.7, 1.9]
  ];

  var pie = anychart.pie();
  pie.data(dataSet);
  pie.legend(null);

  var lineChart = anychart.line(dataSet[0]);
  lineChart.title(null);
  lineChart.xAxis(null);

  var areaChart = anychart.area(dataSet[1]);
  areaChart.title(null);
  areaChart.xAxis(null);

  var table = anychart.standalones.table();

  var cell = table.getCell(0, 0);
  cell.rowSpan(2);

  table.contents([
    [pie, lineChart],
    [null, areaChart]
  ]);
  table.container(stage);
  table.draw();

  // Gets content SVG with parameters.
  var SVGstring = table.toSvg(400, 300);
  // After that you can do something with this string.
});