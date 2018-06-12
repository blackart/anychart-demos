anychart.onDocumentReady(function () {

  // create data
  var data = [
    ["January", 10000],
    ["February", 12000],
    ["March", 18000],
    ["April", 11000],
    ["May", 9000]
  ];

  // create a line chart
  var chart = anychart.line(data);
  chart.title("Side Position");

  // change the side position of labels on the y-axis
  chart.yAxis().labels().position("inside");
  chart.yAxis().minorLabels().enabled(true);

  // change the side position of labels on the x-axis
  chart.xAxis().labels().position("inside");

  // set the container id
  chart.container("container");

  // initiate drawing the chart
  chart.draw();
});