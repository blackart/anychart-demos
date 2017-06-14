anychart.onDocumentReady(function () {
  stage = anychart.graphics.create('container');

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
      .padding(10)
      .fontSize(10)
      .hAlign('center')
      .vAlign('center')
      // .wordBreak('break-all')
      // .wordWrap('break-word')
      .position('byPath')
      // .position('normal')
      //.maxFontSize(13)
      //.minFontSize(8)
      //.adjustFontSize(true)
      .textOverflow('...');
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

  // workaround to make even/odd xAxis labels coloring
  // chart.listen('chartDraw', function () {
  //   stage.suspend();
  //   var count = chart.xAxis().labels().getLabelsCount();
  //   for (var i = 0; i < count; i++) {
  //     var color = i % 2 ? '#CD4A2D' : '#4C4C4C';
  //     var label = chart.xAxis().labels().getLabel(i);
  //     if (label) {
  //       label.fontColor(color);
  //       label.draw();
  //     }
  //   }
  //   stage.resume();
  // });

  // initiate chart drawing
  chart.draw();
});
