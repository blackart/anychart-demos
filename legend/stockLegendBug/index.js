var data, chart, series;
anychart.onDocumentReady(function() {
  var stage = anychart.graphics.create('container');
  stage.width(600);

  var data2005 = anychart.data.set([
    ['John',  10000, 12000, 20000, 16000],
    ['Jake',  12000, 15000, 19000, 21000],
    ['Peter', 16000, 17000, 21000, 22000]
  ]);
  var data2006 = anychart.data.set([
    ['John',  13000, 10000, 18000, 21000],
    ['Jake',  11700, 12000, 21000, 20000],
    ['Peter', 18000, 11000, 12000, 22000]
  ]);

  var chart2005 = anychart.column();
  chart2005.column(data2005.mapAs({x: [0], value: [1]}));
  chart2005.column(data2005.mapAs({x: [0], value: [2]}));
  chart2005.column(data2005.mapAs({x: [0], value: [3]}));
  chart2005.column(data2005.mapAs({x: [0], value: [4]}));

  var chart2006 = anychart.column();
  chart2006.column(data2006.mapAs({x: [0], value: [1]}));
  chart2006.column(data2006.mapAs({x: [0], value: [2]}));
  chart2006.column(data2006.mapAs({x: [0], value: [3]}));
  chart2006.column(data2006.mapAs({x: [0], value: [4]}));

  var legend = anychart.ui.legend();
  legend
      .itemsSource([chart2005, chart2006])
      .title()
          .text('2005 - 2006 Sales')
          .hAlign('center');
  legend.container(stage).draw();

  chart2005.bounds(0, 0, '55%', '100%').background().enabled(false);
  chart2006.bounds('55%',0,'45%','100%').background().enabled(false);

  console.log(legend.getRemainingBounds(), stage.getBounds());

  chart2005.margin().top(legend.getRemainingBounds().top);
  chart2006.margin().top(legend.getRemainingBounds().top);

  chart2005.container(stage).draw();
  chart2006.container(stage).draw();
});