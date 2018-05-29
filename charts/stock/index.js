anychart.onDocumentReady(function() {
  // The data used in context sample can be obtained from the CDN
  // https://cdn.anychart.com/csv-data/msft-daily-short.js

  function get_msft_daily_short_data() {
    return [
      ['2004-01-02', 27.58, 27.77, 27.33, 27.45, 444],
      ['2004-01-05', 27.73, 28.18, 27.72, 28.14, -673],
      ['2004-01-06', 28.19, 28.28, 28.07, 28.24, -469],
      ['2004-01-07', 28.17, 28.31, 28.01, 28.21, -542],
      ['2004-01-08', 28.39, 28.48, 28, 28.16, 588],
      ['2004-01-09', 28.03, 28.06, 27.59, 27.66, 670],
      ['2004-01-12', 27.67, 27.73, 27.35, 27.57, 558],
      ['2004-01-13', 27.55, 27.64, 27.26, 27.43, -515],
      ['2004-01-14', 27.52, 27.73, 27.47, 27.7, -439],
      ['2004-01-15', 27.55, 27.72, 27.42, 27.54, -585],
      ['2004-01-16', 27.71, 27.88, 27.53, 27.81, -639],
      ['2004-01-20', 27.98, 28.2, 27.93, 28.1, 630],
      ['2004-01-21', 28.13, 28.3, 27.85, 28.3, 535],
      ['2004-01-22', 28.36, 28.44, 27.94, 28.01, 784],
      ['2004-01-23', 28.28, 28.76, 28.22, 28.48, -127],
      ['2004-01-26', 28.49, 28.83, 28.32, 28.8, -582],
      ['2004-01-27', 28.64, 28.72, 28.22, 28.25, -631],
      ['2004-01-28', 28.3, 28.44, 27.47, 27.71, -713],
      ['2004-01-29', 27.81, 27.95, 27.57, 27.91, -637],
      ['2004-01-30', 27.84, 27.9, 27.55, 27.65, 405],
      ['2004-02-02', 27.61, 27.8, 27.24, 27.4, 628],
      ['2004-02-03', 27.4, 27.55, 27.18, 27.29, -479],
      ['2004-02-04', 27.22, 27.43, 27.01, 27.01, -606],
      ['2004-02-05', 27.06, 27.17, 26.83, 26.96, 555],
      ['2004-02-06', 27.03, 27.19, 26.93, 27.08, 472]
    ];
  }

  // create data table on loaded data
  var dataTable = anychart.data.table(0);
  dataTable.addData(get_msft_daily_short_data());

  // map loaded data
  var mapping = dataTable.mapAs({
    open: 1,
    high: 2,
    low: 3,
    close: 4,
    value: 5
  });
  var scrollerMapping = dataTable.mapAs({
    value: 4
  });

  // create stock chart
  chart = anychart.stock();
  // chart.margin().left(100);

  // var firstPlot = chart.plot(0);
  // firstPlot.xAxis().background().enabled(true);
  // firstPlot.xGrid().enabled(true);
  // firstPlot.yGrid().enabled(true);
  // firstPlot.xMinorGrid().enabled(true);
  // firstPlot.yMinorGrid().enabled(true);

  // var candlestick = firstPlot.candlestick(mapping).name('MSFT');

  var secondPlot = chart.plot(0);
  // secondPlot.height('30%');
  // secondPlot.xAxis().background().enabled(true);
  // secondPlot.xGrid().enabled(true);
  // secondPlot.yGrid().enabled(true);
  // secondPlot.xMinorGrid().enabled(true);
  // secondPlot.yMinorGrid().enabled(true);
  // secondPlot.yAxis().labels().format('{%tickValue}{scale:(1)(1000)(1000)(1000)|( d)( th)( M)( B)}');


  // secondPlot.crosshair().yLabel().format('{%value}{scale:(1)(1000)(1000)(1000)|( d)( th)( M)( B),decimalsCount:0}');

  var series = secondPlot.line(mapping).name('MSFT');

  // setupDrawer(series);
  // series.risingFill(candlestick.risingFill());
  // series.fallingFill(candlestick.fallingFill());
  series.negativeStroke('3 orange');
  series.hovered().negativeStroke('5 red');
  // series.positiveStroke('green');
  // series.risingHatchFill(candlestick.risingHatchFill());
  // series.fallingHatchFill(candlestick.fallingHatchFill());

  var tLimit = 600;
  var lLimit = 500;
  var colorScale = anychart.scales.ordinalColor();
  colorScale.ranges([
    {
      less: lLimit,
      color: '2 red'
    },
    {
      from: tLimit,
      to: lLimit,
      color: '2 green'
    },
    {
      greater: tLimit,
      color: '2 blue'
    }
  ])

  series.colorScale(colorScale);

  // series.allowPointSettings(true);
  // series.fill(function(arg) {
  //   // console.log(this.x, this.value, this.index);
  //   // console.log(this.getData('open'), this.getData('close'));
  //   var rising = +this.getData('open') < +this.getData('close');
  //   return rising ? candlestick.risingFill() : candlestick.fallingFill();
  //   // return this.sourceColor;
  // });

  series.stroke('colorscale');
  //
  // series.hovered().fill(function(arg) {
  //   // console.log(this.x, this.value, this.index);
  //   // console.log(this.getData('open'), this.getData('close'));
  //   var rising = +this.getData('open') < +this.getData('close');
  //   return rising ? 'green' : 'red';
  //   // return this.sourceColor;
  // });


  // create scroller series with mapped data
  // chart.scroller().line(scrollerMapping);

  // set chart selected date/time range
  // chart.selectRange('2007-01-03', '2007-05-20');

  // set container id for the chart
  chart.container('container');

  // initiate chart drawing
  chart.draw();

  // // create range picker
  // rangePicker = anychart.ui.rangePicker();
  // // init range picker
  // rangePicker.render(chart);
  //
  // // create range selector
  // rangeSelector = anychart.ui.rangeSelector();
  // // init range selector
  // rangeSelector.render(chart);
});

function setupDrawer(series) {
  var shapesConfig = [{
    name: 'rising',
    shapeType: 'path',
    fillName: 'risingFill',
    strokeName: 'risingStroke',
    canBeHoveredSelected: false,
    isHatchFill: false,
    zIndex: 0
  }, {
    name: 'risingHatchFill',
    shapeType: 'path',
    fillName: 'risingHatchFill',
    strokeName: null,
    canBeHoveredSelected: false,
    isHatchFill: true,
    zIndex: 1
  }, {
    name: 'falling',
    shapeType: 'path',
    fillName: 'fallingFill',
    strokeName: 'fallingStroke',
    canBeHoveredSelected: false,
    isHatchFill: false,
    zIndex: 0
  }, {
    name: 'fallingHatchFill',
    shapeType: 'path',
    fillName: 'fallingHatchFill',
    canBeHoveredSelected: false,
    strokeName: null,
    isHatchFill: true,
    zIndex: 1
  }];

  series.rendering()
      .shapes(shapesConfig)
      .point(function(point) {
        if (!point.missing) {
          var rising = +point.getDataValue('open') < +point.getDataValue('close');
          var shapeNames = rising ? ['rising', 'risingHatchFill'] : ['falling', 'fallingHatchFill'];
          var shapes = point.getShapesGroup(point.seriesState, 0, shapeNames);
          var path = shapes[shapeNames[0]];
          var hatch = shapes[shapeNames[1]];

          var leftX = point.x - point.pointWidth / 2;
          var rightX = leftX + point.pointWidth;

          var thickness = getThickness(path.stroke());
          if ((point.categoryWidth - point.pointWidth) > 2.5 && point.pointWidth > 10) {
            leftX = applyShift(leftX, thickness);
            rightX = applyShift(rightX, thickness);
          }
          var y = applyShift(point.value, thickness);
          var zero = applyShift(point.zero, thickness);

          path.moveTo(leftX, y);
          path.lineTo(rightX, y, rightX, zero, leftX, zero);
          path.close();
          hatch.moveTo(leftX, y);
          hatch.lineTo(rightX, y, rightX, zero, leftX, zero);
          hatch.close();
        }
      });

  function applyShift(value, thickness) {
    var shift = (thickness & 1) / 2;
    if (value % 1 >= 0.5)
      return Math.ceil(value) - shift;
    else
      return Math.floor(value) + shift;
  }

  function getThickness(stroke) {
    var res;
    return (stroke && stroke != 'none') ?
        (isNaN(res = stroke['thickness']) || res === null ? 1 : res) :
        0;
  }
}
