anychart.onDocumentReady(function () {
  stage = anychart.graphics.create('container');

  var dataSet = anychart.data.set([
    {name: 'Ca\npa\nci\ntà di pianif\nicazione ed organizzazione', applicant1: 5},
    // {name: 'Flessibilità/Adattabilità al cambiamento', applicant1: 5},
    // {name: 'Orientamento verso I risultati', applicant1: 7},
    // {name: 'Partecipazione impegno e senso del dovere', applicant1: 7},
    // {name: 'Efficacia comunicativa (adeguatezza e precisione)', applicant1: 10, company_high: 6, company_low: 8},
    // {name: 'Sviluppo delle opportunità di business', applicant1: 8},
    // {name: 'Single line', applicant1: 6, company_high: 4, company_low: 8},
    // {name: 'Apprendimento e innovazione', applicant1: 7},
    // {name: 'Single line', applicant1: 7},
    // {name: 'Multi-line string', applicant1: 6},
    // {name: 'Single line', applicant1: 5},
    // {name: 'Multi-line string', applicant1: 5, company_high: 7.5, company_low: 10},
    // {name: 'Single line', applicant1: 7, company_high: 7, company_low: 8},
    // {name: 'Multi-line string', applicant1: 6},
    // {name: 'Single line', applicant1: 5},
    // {name: 'Multi-line string', applicant1: 5},
    // {name: 'Single line', applicant1: 5},
    // {name: 'Multi-line string', applicant1: 5},
    {name: 'Single line', applicant1: 6},
    {name: 'Multi-line string', applicant1: 7}
  ]);

  var chart = anychart.polar();

  // setup chart scales settings
  chart.xScale('ordinal');
  chart.xScale().names('name');
  chart.sortPointsByX(true);

  chart.xAxis()
      .fill('rgb(237,236,239)');

  chart.yAxis(false);

  // create range column series
  var companySeries = chart.rangeColumn(dataSet.mapAs(undefined, { x: 'x', high: 'company_high', low: 'company_low' }));

  // set chart container id
  chart.container(stage);
  // initiate chart drawing
  chart.draw();
});
    