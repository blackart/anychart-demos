var chart, plot;

anychart.onDocumentReady(function () {
  function get_ixic_daily_short_data() {
    return [
      ['1489395600000', 2042.83, 2044.6801, 2013.92, 2014.14, 2267579904], //day 1
      ['1489396076000', 2024.48, 2031.39, 2012.79, 2019.5601, 1956029952],
      ['1489401903000', 2025.96, 2064.01, 2025.91, 2064.01, 1855510016],
      ['1489407116000', 2069.29, 2074.27, 2060.4399, 2060.5701, 1745350016],
      ['1489409760000', 2061.1001, 2075.3301, 2060.4399, 2075.3301, 1656760064],
      ['1489411080000', 2072.8999, 2089.6599, 2064.77, 2089.6599, 2185700096],
      ['1489418280000', 2084.02, 2091.22, 2072.0601, 2073.6101, 1937689984],
      ['1489418760000', 2080.1699, 2085.71, 2049.76, 2053.5601, 1818019968],
      ['1489482060000', 2068.4199, 2084.72, 2068.01, 2080.3501, 1618060032], //day 2
      ['1489483800000', 2084.23, 2088.51, 2072.1899, 2076.47, 1781240064],
      ['1489500780000', 2091.71, 2094.9199, 2045.96, 2045.96, 2065539968]
    ]
  }
  var ixicDataTable = anychart.data.table();
  ixicDataTable.addData(get_ixic_daily_short_data());

  chart = anychart.stock();
  plot = chart.plot(0);

  plot.yScale().comparisonMode('percent');

  //plot.yAxis().labels().format('{%Value}%');

  plot.yGrid(true)
      .xGrid(true)
      .yMinorGrid(true)
      .xMinorGrid(true);

  plot.line(ixicDataTable.mapAs({'value': 4})).name('IXIC');

  chart.selectRange('1489418760000', '1489483800000');
  // chart.plot().xAxis().labels().format('{%dataValue}{dateTimeFormat:d MMM HH:m}');
  // chart.plot().xAxis().minorLabels().format('{%dataValue}{dateTimeFormat: HH:m}');
  chart.crosshair()
      .xLabel({anchor: 'center-bottom', background: {fill: "#CFD8DC", stroke: "#455A64"}, fontColor: "yellow"});
  // set container id for the chart
  chart.container('container');
  // initiate chart drawing
  chart.draw();
});