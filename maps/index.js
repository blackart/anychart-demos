anychart.onDocumentReady(function () {
  var dataSetWomen = anychart.data.set(getWomenData());
  var heatMapWomenData = dataSetWomen.mapAs({y: [0], x: [1], value: [2], heat: [3]});

  chart = anychart.heatMap(heatMapWomenData);
  var colorScale = chart.colorScale();

  colorScale.ranges([
    {equal: 0, color: '#3085be', name: 'Lean'},
    {equal: 1, color: '#69bce8', name: 'Ideal'},
    {equal: 2, color: '#ffa000', name: 'Average'},
    {equal: 3, color: '#ff6d00', name: 'Above average'}
  ]);
  chart.colorScale(colorScale);
  chart.annotations([{
    type: "triangle",
    xAnchor: 0,
    valueAnchor: '21-25',
    secondXAnchor: 7,
    secondValueAnchor: '31-35',
    thirdXAnchor: 5,
    thirdValueAnchor: '46-50',
    fill: "#4CAF50 0.5",
    stroke: "3 #FF9800"
  }, {
    type: 'fibonacci-arc',
    xAnchor: 2,
    valueAnchor: '51-55',
    secondXAnchor: 1,
    secondValueAnchor: '56 & UP',
    thirdXAnchor: 4,
    thirdValueAnchor: '21-25',
    stroke: "2 yellow"
  }]);

  chart.container('container').draw();
});