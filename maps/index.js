var chart;


anychart.onDocumentReady(function () {
//   var data = anychart.data.set([
//     ['January', 1],
//     ['February', 2],
//     ['March', 3],
//     ['April', 4],
//     ['May', 5]
//   ]);
//   chart = anychart.line();
//   chart.line(data);
//   chart.yScale().minimum(0).maximum(10).ticks().interval(1);
//   chart.yAxis()
//       // .drawFirstLabel(false)
//       // .drawLastLabel(false)
//       .labels()
//           .useHtml(true);
//   // chart.xAxis(false);
//
//   lastLabelChecker = '';
//   firstLabelChecker = '';
//   var i = 0;
//   chart.yAxis().labels().format(function() {
//     if (this.value === 0) {
//       firstLabelChecker += 'TextFormatter for first label called!<br>';
//     }
//     if (this.value === 10) {
//       lastLabelChecker += 'TextFormatter for last label called! <br>';
//     }
//     i = i + 1;
//     return  '<strong>' + this.value + '</strong>';
//   });
//
//   chart.container('container').draw();
//
//   console.log(i);

  var stage = anychart.graphics.create('container', 500, 400);

  chart = anychart.line();
  line = chart.line([1, 2, 2]);
  line.markers()
      .enabled(true)
      .fill('red')
      .size(8);
  line.legendItem().iconType('marker');

  line1 = chart.line([3, 4, 7]);
  line1.markers()
      .enabled(true)
      .size(8)
      .type('CROSS')
      .stroke('blue');
  line1.legendItem().iconType('marker');

  line2 = chart.spline([2, 6, 8]);
  line2.markers()
      .enabled(true)
      .fill('blue .5')
      .size(8)
      .type('STAR4');
  line2.legendItem().iconType('marker');

  line3 = chart.spline([4, 1, 4]);
  line3.markers()
      .enabled(true)
      .fill('green')
      .size(5)
      .type('star7');
  line3.legendItem().iconType('marker');

  chart.legend().enabled(true);
  chart.container(stage).draw();
});
