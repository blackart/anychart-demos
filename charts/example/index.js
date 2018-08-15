anychart.onDocumentReady(function () {
  // The data used in this sample can be obtained from the CDN
  // https://cdn.anychart.com/samples/tree-map-charts/acme-products-by-revenue/data.json
  anychart.data.loadJsonFile('https://cdn.anychart.com/samples/tree-map-charts/acme-products-by-revenue/data.json', function (data) {
    // makes tree from the data for the sample
    var dataTree = anychart.data.tree(data, 'as-table');
    var chart = anychart.treeMap(dataTree);

    // sets title for chart and customizes it
    chart.title()
        .enabled(true)
        .useHtml(true)
        .padding([0, 0, 20, 0])
        .text(
            'Top ACME Products by Revenue<br/>' +
            '<span style="color:#212121; font-size: 13px;">(average sales during the year, in $)</span>'
        );

    // sets scale
    var scale = anychart.scales.ordinalColor([
      {less: 25000},
      {from: 25000, to: 30000},
      {from: 30000, to: 40000},
      {from: 40000, to: 50000},
      {from: 50000, to: 100000},
      {greater: 100000}
    ]);

    // sets colors for scale
    scale.colors(['#ffee58', '#fbc02d', '#f57f17', '#c0ca33', '#689f38', '#2e7d32']);

    // sets chart settings
    chart.padding([10, 10, 10, 20])
    // setting the number of levels shown
        .maxDepth(2)
        .selectionMode('none')
        .colorScale(scale)
        .hovered({fill: '#bdbdbd'});

    // sets padding for legend
    chart.legend()
        .enabled(true)
        .padding([0, 0, 0, 20])
        .position('right')
        .align('top')
        .itemsLayout('vertical');

    // sets settings for labels
    chart.labels()
        .useHtml(true)
        .fontColor('#212121')
        .fontSize(12)
        .format(function () {
          return this.getData('product');
        });

    // sets settings for headers
    chart.headers().format(function () {
      return this.getData('product');
    });

    // sets settings for tooltip
    chart.tooltip()
        .useHtml(true)
        .titleFormat(function () {
          return this.getData('product');
        })
        .format(function () {
          return '<span style="color: #bfbfbf">Revenue: </span>$' +
              anychart.format.number(this.value, {groupsSeparator: ' '});
        });

    // set container id for the chart
    chart.container('container');
    // initiate chart drawing
    chart.draw();
  });
});