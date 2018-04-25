anychart.onDocumentReady(function () {
  // The data used in this sample can be obtained from the CDN
  // https://cdn.anychart.com/csv-data/msft-daily-short.js
  // https://cdn.anychart.com/csv-data/orcl-daily-short.js
  // https://cdn.anychart.com/csv-data/csco-daily-short.js
  // https://cdn.anychart.com/csv-data/ibm-daily-short.js

  // create data tables on loaded data
  var msftDataTable = anychart.data.table();
  msftDataTable.addData(get_msft_daily_short_data());

  var orclDataTable = anychart.data.table();
  orclDataTable.addData(get_orcl_daily_short_data());

  var cscoDataTable = anychart.data.table();
  cscoDataTable.addData(get_csco_daily_short_data());

  var ibmDataTable = anychart.data.table();
  ibmDataTable.addData(get_ibm_daily_short_data());

  // create stock chart
  chart = anychart.stock();
  chart.padding(0);
  chart.tooltip(false);

  // create first plot on the chart with column series
  var firstPlot = chart.plot(0);
  var yScale = firstPlot.yScale();
  yScale.ticks().count(10);
  var yAxis = firstPlot.yAxis();
  yAxis.labels().position('inside');
  yAxis.labels().padding().left(20)
  yAxis.ticks().enabled(false).position('inside');
  yAxis.drawFirstLabel(false);
  yAxis.stroke(null);

  firstPlot.legend().margin().bottom(20);

  firstPlot.xAxis().ticks().enabled(true);

  firstPlot.crosshair().xLabel().enabled(false);
  firstPlot.crosshair().xLabel().anchor('center-bottom');
  firstPlot.crosshair().xLabel().padding(4, 15, 4, 20);
  firstPlot.crosshair().xLabel().fontColor('#7c868e');
  firstPlot.crosshair().xLabel().fontSize(11);
  firstPlot.crosshair().xLabel().background()
      .fill(anychart.color.lighten('orange'))
      .stroke('orange');


  firstPlot.crosshair().yStroke(null);
  firstPlot.crosshair().yLabel().anchor('left-center');
  firstPlot.crosshair().yLabel().padding(4, 15, 4, 20);
  firstPlot.crosshair().yLabel().format('{%Value}{decimalsCount:1,zeroFillDecimals:true}');
  firstPlot.crosshair().yLabel().fontColor('#7c868e');
  firstPlot.crosshair().yLabel().fontSize(11);
  firstPlot.crosshair().yLabel().background()
      .corners(0, 10, 10, 0)
      .cornerType('cut')
      .fill(anychart.color.lighten('orange'))
      .stroke('orange');


  indicator = firstPlot.priceIndicator();
  indicator.value('last-visible');
  indicator.label().anchor('left-center');
  indicator.label().padding(4, 15, 4, 20);
  indicator.label().format('{%Value}{decimalsCount:1,zeroFillDecimals:true}');
  indicator.label().fontColor('#7c868e');
  indicator.label().background()
      .corners(0, 10, 10, 0)
      .cornerType('cut')
      .fill((anychart.color.lighten('orange', .9)))
      .stroke('orange');
  indicator.stroke(null);

  // create area series on the first plot
  var msftSeries = firstPlot.area(msftDataTable.mapAs({'value': 4}));
  msftSeries.name('MSFT');
  msftSeries.color('orange');
  msftSeries.fill(function() {
    return anychart.color.setOpacity(this['sourceColor'], 0.3, true);
  })
  msftSeries.hovered().markers().enabled(true);


  // create scroller series with mapped data
  chart.scroller();

  // set chart selected date/time range
  chart.selectRange('2005-01-03', '2005-11-20');
  // set container id for the chart
  chart.container('container');
  // initiate chart drawing
  chart.draw();
});