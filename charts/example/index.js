anychart.onDocumentReady(function () {
  // create data set on our data
  chartData = {
    title: 'Top 3 Products with Region Sales Data',
    header: ['#', 'Florida', 'Texas', 'Arizona', 'Nevada'],
    rows: [
      ['Nail polish', 6814, 3054, 4376, 4229],
      ['Eyebrow pencil', 7012, 5067, 8987, 3932],
      ['Lipstick', 8814, 9054, 4376, 9256],
      ['1', 8814, 9054, 4376, 9256],
      ['2', 8814, 9054, 4376, 9256],
      ['3', 8814, 9054, 4376, 9256],
      ['4', 8814, 9054, 4376, 9256],
      ['5', 8814, 9054, 4376, 9256],
      ['6', 8814, 9054, 4376, 9256]
    ]
  };

  // create column chart
  var chart = anychart.column();

  // set chart data
  chart.data(chartData);

  // turn on chart animation
  // chart.animation(true);

  chart.yAxis().labels().format('${%Value}{groupsSeparator: }');

  // set titles for Y-axis
  chart.yAxis().title('Revenue');

  chart.labels()
      .enabled(true)
      .position('center-top')
      .anchor('center-bottom')
      .format('${%Value}{groupsSeparator: }');
  chart.hovered().labels(false);

  // turn on legend and tune it
  chart.legend()
      .enabled(true)
      .fontSize(13)
      .padding([0, 0, 20, 0]);

  // interactivity settings and tooltip position
  chart.interactivity().hoverMode('single');

  chart.tooltip()
      .positionMode('point')
      .position('center-top')
      .anchor('center-bottom')
      .offsetX(0)
      .offsetY(5)
      .titleFormat('{%X}')
      .format('{%SeriesName} : ${%Value}{groupsSeparator: }');


  // chart.yAxis(false);
  // chart.xAxis(false);

  // set container id for the chart
  chart.container('container');

  // initiate chart drawing
  chart.draw();
});