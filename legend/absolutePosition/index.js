anychart.onDocumentReady(function() {
  chart = anychart.line();
  chart.title('Customers Activity during the Week');
  chart.yAxis().title('Activity occurences');

  var dataSet = anychart.data.set([
    ['Monday', '1120', '4732', '15176'],
    ['Tuesday', '720', '3689', '18910'],
    ['Wednesday', '404', '3904', '19004'],
    ['Thursday', '190', '754', '22233'],
    ['Friday', '15', '187 ', '922'],
    ['Saturday', '10', '45', '534'],
    ['Sunday', '7', '61', '343']
  ]);

  var seriesData_1 = dataSet.mapAs({x: [0], value: [1]});
  var seriesData_2 = dataSet.mapAs({x: [0], value: [2]});
  var seriesData_3 = dataSet.mapAs({x: [0], value: [3]});

  var series;
  series = chart.line(seriesData_1);
  series.name('Review about the product');

  series = chart.line(seriesData_2);
  series.name('Comment blog posts');

  series = chart.line(seriesData_3);
  series.name('Email delivery support');










  chart.legend()
      .enabled(true)
      .fontSize(13)
      .padding([0,0,20,0])
      .itemsLayout('vertical')
      .position('bottom')
      .align('right');

  chart.legend().title()
      .enabled(true)











  chart.container('container').draw();
});