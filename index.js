var chart1, chart2;
anychart.onDocumentLoad(function() {
  var stage = anychart.graphics.create('container');

  chart1 = anychart.gauges.linear();
  chart1.data("1|90 2|20|50 3|12 4|37|46", {rowsSeparator: " ", columnsSeparator: "|"});
  chart1.thermometer().dataIndex(0);
  chart1.rangeBar().dataIndex(1);
  chart1.tooltip()
      .anchor('righttop')
      .background()
      .fill({keys: ['red .1', 'orange'], mode: true, angle: 45});
  chart1.bounds(0, 0, '50%', '100%');
  chart1.container(stage);
  chart1.draw();


  chart2 = anychart.gauges.thermometer();
  dataSet1 = anychart.data.set([[97.6], [12], [7]]);
  chart2.data(dataSet1);
  chart2.addPointer(0, 2);
  chart2.tooltip({
    background:
        {
          fill: 'red'
        },
    fontSize: 10,
    lineHeight: 2,
    padding: 10,
    title: false,
    separator: {
      orientation: 'left'
    }});
  chart2.bounds('50%', 0, '50%', '100%');
  chart2.container(stage);
  chart2.draw();

});