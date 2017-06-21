anychart.onDocumentLoad(function() {
  stage = anychart.graphics.create("container");

  var dataSet = anychart.data.set([[20,20], [5,17], [17,21], [3,41] ]);
  chart = anychart.column();
  chart.column(dataSet.mapAs({'value': 0}));
  chart.column(dataSet.mapAs({'value': 1}));
  chart.bounds(0, 0, "50%");
  chart.legend().enabled(true).position('bottom');
  chart.title().enabled(true).text('Chart one');
  chart.id("chart1");

  chart2 = anychart.area();
  chart2.area(dataSet.mapAs({'value': 0}));
  chart2.area(dataSet.mapAs({'value': 1}));
  chart2.bounds("50%", 0, "50%", "50%");
  chart2.title().enabled(true).text('Chart two');
  chart2.background("#ffffd2");
  chart2.yScale().stackMode('percent');
  chart2.id("chart2");

  chart3 = anychart.area();
  chart3.splineArea([
    [new Date("28-Jun-16"), 511],
    [new Date("29-Jun-16"), 507],
    [new Date("30-Jun-16"), 512],
    [new Date("31-Jun-16"), 513],
    [new Date("01-Jul-16"), 515],
    [new Date("02-Jul-16"), 503],
    [new Date("03-Jul-16"), 516]
  ]);

  var dateTimeScale = anychart.scales.dateTime();
  dateTimeScale.minimum(new Date("27-Jun-16"));
  dateTimeScale.maximum(new Date("05-Jul-16"));
  chart3.xScale(dateTimeScale);
  chart3.bounds("50%", "50%", "50%", "50%");
  chart3.background("#ffd2d2");
  chart3.title().enabled(true).text('Chart three');
  chart3.id("chart3");

  chart.container(stage).draw();
  chart2.container(stage).draw();
  chart3.container(stage).draw();

  anychart.ui.binding.init();
});
