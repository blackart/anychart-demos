anychart.onDocumentReady(function () {
// The data used in this sample can be obtained from the CDN
// https://cdn.anychart.com/samples/sunburst-charts/coffee-flavour-wheel/data.json
  anychart.data.loadJsonFile('https://cdn.anychart.com/samples/sunburst-charts/coffee-flavour-wheel/data.json', function (data) {
    // makes tree from the data for the sample
    var dataTree = anychart.data.tree(data, 'as-table');

    // create sunburst chart
    var chart = anychart.sunburst(dataTree);

    // set calculating mode
    chart.calculationMode('ordinal-from-root');

    // set chart title
    chart.title('Coffee Flavour Wheel');

    // format chart labels
    chart.labels().format('{%Name}');

    // the fill specified in the data has priority
    // set point fill
    chart.fill(function () {
      return anychart.color.darken(this.parentColor, 0.15)
    });

    // set tooltip settings
    chart.tooltip().format('Depth: {%Depth}');

    //chart.startAngle(90)

    // set container id for the chart
    chart.container('container');
    // initiate chart drawing
    chart.draw();
  });
});