var chart1, chart2, chart3, chart4, chart5;
function startAngle(value) {
  chart4.startAngle(value);
}

anychart.onDocumentLoad(function() {
  anytest.setUp(1600, 600).description('Проверяем различные настройки на серии');

  chart1 = anychart.polar();
  chart1.title('fill, hatchFill, stroke');
  chart1.rangeColumn([
    [10, 6, 3],
    [15, 1, 7],
    [21, 2, 4],
    [30, 4, 8]
  ])
      .fill('red .6')
      .hatchFill('dashedvertical')
      .stroke('5 green');
  chart1.bounds(new acgraph.math.Rect(0, 0, 300, 200));
  // stage.rect().setBounds(chart1.bounds().toRect());
  anytest.drawInStage(chart1);

  chart2 = anychart.polar();
  chart2.title('Color, clip');
  chart2.rangeColumn([
    [10, 6, 3],
    [15, 1, 7],
    [21, 2, 4],
    [30, 4, 8]
  ])
      .color('green .6')
      .clip(new acgraph.math.Rect(300, 0, 200, 150));
  chart2.bounds(new acgraph.math.Rect(300, 0, 300, 200));
  // stage.rect().setBounds(chart2.bounds().toRect());
  anytest.drawInStage(chart2);

  chart3 = anychart.polar();
  chart3.title('Name');
  var series0 = chart3.rangeColumn([
    [10, 6, 3],
    [15, 1, 7],
    [21, 2, 4],
    [30, 4, 8]
  ]);
  series0.name('rangeColumn series name');
  chart3.legend().enabled(true);
  chart3.bounds(new acgraph.math.Rect(0, 200, 300, 200));
  // stage.rect().setBounds(chart3.bounds().toRect());
  anytest.drawInStage(chart3);

  var dataSet = anychart.data.set([
    ['1', 4, 6, 2, 5, 9, 2, 9, 13, 14],
    [2, 20, 3, 10, 6, 10, 11, 10, 12, 22],
    [3, 8, 15, 9, 7, 11, 19, 11, 14, 20],
    [4, 17, 9, 2, 8, 12, 13, 12, 11, 12]
  ]);
  var seriesData_1 = dataSet.mapAs({x: [4], value: [1], low: [2], high: [3]});
  var seriesData_2 = dataSet.mapAs({x: [1], value: [4], low: [5], high: [6]});
  var seriesData_3 = dataSet.mapAs({x: [2], value: [7], low: [8], high: [9]});

  chart5 = anychart.polar();
  chart5.title('zIndex, xPointPosition');
  chart5.rangeColumn(seriesData_1).zIndex(1);
  chart5.rangeColumn(seriesData_2).zIndex(0);
  chart5.rangeColumn(seriesData_3).zIndex(2);
  chart5.bounds(new acgraph.math.Rect(300, 200, 300, 200));
  anytest.drawInStage(chart5);

  var oScale = anychart.scales.ordinal();
  var lScale = anychart.scales.linear();
  chart4 = anychart.polar();
  chart4.title('xScale, yScale');
  chart4.rangeColumn([
    [10, 6, 3],
    [15, 1, 7],
    [21, 2, 4],
    [30, 4, 8]
  ]);
  chart4.xScale(oScale);
  chart4.yScale(lScale);
  // chart4.startAngle(280);
  // chart4.xAxis().ticks().length(20);
  chart4.bounds(new acgraph.math.Rect(0, 400, 600, 200));
  // stage.rect().setBounds(chart4.bounds().toRect());
  anytest.drawInStage(chart4);

  stage.resume();
  /*<< methods
   anychart.core.polar.series.RangeColumn.fill
   >>*/

  // setInterval(function() {
  //   chart4.startAngle(chart4.startAngle() + 10);
  // }, 100);



  var dataSet = anychart.data.set([
    {name: 'Capacità di pianificazione ed organizzazione', applicant1: 5},
    {name: 'Flessibilità/Adattabilità al cambiamento', applicant1: 5},
    {name: 'Orientamento verso I risultati', applicant1: 7},
    {name: 'Partecipazione impegno e senso del dovere', applicant1: 7},
    {name: 'Efficacia comunicativa (adeguatezza e precisione)', applicant1: 10, company_high: 6, company_low: 8},
    {name: 'Sviluppo delle opportunità di business', applicant1: 8},
    {name: 'Single line', applicant1: 6, company_high: 4, company_low: 8},
    {name: 'Apprendimento e innovazione', applicant1: 7},
    {name: 'Single line', applicant1: 7},
    {name: 'Multi-line string', applicant1: 6},
    {name: 'Single line', applicant1: 5},
    {name: 'Multi-line string', applicant1: 5, company_high: 7.5, company_low: 10},
    {name: 'Single line', applicant1: 7, company_high: 7, company_low: 8},
    {name: 'Multi-line string', applicant1: 6},
    {name: 'Single line', applicant1: 5},
    {name: 'Multi-line string', applicant1: 5},
    {name: 'Single line', applicant1: 5},
    {name: 'Multi-line string', applicant1: 5},
    {name: 'Single line', applicant1: 6},
    {name: 'Multi-line string', applicant1: 7}
  ]);

  chart = anychart.polar();
  chart.bounds(800, 0, 600, '100%');
  // setup chart appearence settings
  chart.startAngle(-27);
  chart.innerRadius('10%');
  chart.background('#FEFEFE');

  // setup chart scales settings
  chart.yScale().minimum(2).maximum(10);
  chart.xScale('ordinal');
  chart.xScale().names('name');
  chart.sortPointsByX(true);

  // setup chart interactivity and tooltip settings
  chart.interactivity().hoverMode('single');
  chart.tooltip().displayMode('union');
  chart.tooltip().titleFormat("{%name}");

  // setup chart axes and grid settings
  chart.yAxis(false);
  chart.grid().oddFill('#fefefe').evenFill('#fefefe');
  chart.xAxis().labels()
      .padding(7)
      .fontSize(10)
      .hAlign('center')
      .wordWrap('normal')
      .textOverflow('^_^');
  chart.xAxis().fill('rgb(237,236,239)')
      .stroke('none');
  chart.xAxis().ticks()
      .length('100%')
      .stroke('#FEFEFE');

  // setup chart legend settings
  var legend = chart.legend();
  legend.enabled(true);
  legend.positionMode('outside');
  legend.itemsLayout('vertical');
  legend.position('bottom');
  legend.align('left');
  legend.margin().top(-30);
  legend.itemsSpacing(5);

  // create ploygon series
  var polygonSeries = chart.polygon(dataSet.mapAs(undefined, {x: 'x', value: 'applicant1'}));
  polygonSeries.name('Applicant1');
  polygonSeries.color('#CD4A2D');
  polygonSeries.fill('rgba(180, 180, 180, 0.3)');
  polygonSeries.zIndex(31);
  polygonSeries.labels().enabled(true).fontColor('#CD4A2D').fontWeight('bold').fontSize(11);
  polygonSeries.legendItem().iconFill('#CD4A2D').iconType('line').iconStroke('6 #CD4A2D');

  // create range column series
  var companySeries = chart.rangeColumn(dataSet.mapAs(undefined, { x: 'x', high: 'company_high', low: 'company_low' }));
  companySeries.pointWidth('85%');
  companySeries.name('Company');
  companySeries.color('#E2DFE0');

  // set chart container id
  chart.container(stage);

  // initiate chart drawing
  chart.draw();

  // setInterval(function() {
  //   chart.startAngle(chart.startAngle() + 5);
  // }, 100);
});