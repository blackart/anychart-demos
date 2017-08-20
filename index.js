
anychart.onDocumentReady(function () {
  // create data set on our data
  var dataSet = anychart.data.set(getData());

  // map data for the first series, take x from the zero column and value from the first column of data set
  var seriesData = dataSet.mapAs({x: [0], value: [1]});

  // create line chart
  chart = anychart.area();

  // adding dollar symbols to yAxis labels
  chart.yAxis().labels().format("${%Value}");

  // turn on chart animation
  chart.animation(true);

  // axes settings
  chart.yAxis().title('Price');

  var xAxis =  chart.xAxis();
  xAxis.title('Date')
      .overlapMode("allowOverlap");
  xAxis.labels()
      .padding([5, 5, 0, 5])
      .rotation(90);

  // set chart title text settings
  chart.title('ACME Share Price<br/>' +
      '<span style="color:#212121; font-size: 13px;">September 2015</span>');
  chart.title()
      .useHtml(true)
      .padding([0, 0, 20, 0]);

  // create a series with mapped data
  var series = chart.area(seriesData);
  series.name("ACME Share Price");
  series.hoverMarkers()
      .enabled(true)
      .type('circle')
      .size(4);

  // set chart tooltip and interactivity settings
  chart.tooltip()
      .position('top')
      .anchor('centerBottom')
      .positionMode('point');

  chart.interactivity().hoverMode('byX');

  // chart padding
  chart.right(20);

  // set container id for the chart
  chart.container('container');
  // initiate chart drawing
  chart.draw();
});

function getData() {
  return [
    ['2015/9/01', 10],
    ['2015/9/02', 12],
    ['2015/9/03', 11],
    ['2015/9/04', 15],
    ['2015/9/05', 20],
    ['2015/9/06', 22],
    ['2015/9/07', 21],
    ['2015/9/08', 25],
    ['2015/9/09', 31],
    ['2015/9/10', 32],
    ['2015/9/11', 28],
    ['2015/9/12', 29],
    ['2015/9/13', 40],
    ['2015/9/14', 41],
    ['2015/9/15', 45],
    ['2015/9/16', 50],
    ['2015/9/17', 65],
    ['2015/9/18', 45],
    ['2015/9/19', 50],
    ['2015/9/20', 51],
    ['2015/9/21', 65],
    ['2015/9/22', 60],
    ['2015/9/23', 62],
    ['2015/9/24', 65],
    ['2015/9/25', 45],
    ['2015/9/26', 55],
    ['2015/9/27', 59],
    ['2015/9/28', 52],
    ['2015/9/29', 53],
    ['2015/9/30', 40]
  ]
}