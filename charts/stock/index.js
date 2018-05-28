anychart.onDocumentReady(function() {
  // The data used in context sample can be obtained from the CDN
  // https://cdn.anychart.com/csv-data/msft-daily-short.js

  // create data table on loaded data
  var dataTable = anychart.data.table(0);
  dataTable.addData(get_msft_daily_short_data());

  // map loaded data
  var mapping = dataTable.mapAs({
    open: 1,
    high: 2,
    low: 3,
    close: 4,
    value: {
      column: 5,
      type: 'sum'
    }
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

  var secondPlot = chart.plot(1);
  secondPlot.height('30%');
  secondPlot.xAxis().background().enabled(true);
  // secondPlot.xGrid().enabled(true);
  // secondPlot.yGrid().enabled(true);
  // secondPlot.xMinorGrid().enabled(true);
  // secondPlot.yMinorGrid().enabled(true);
  secondPlot.yAxis().labels().format('{%tickValue}{scale:(1)(1000)(1000)(1000)|( d)( th)( M)( B)}');

  secondPlot.priceIndicator(0)
      .label().format('{%value}{scale:(1)(1000)(1000)(1000)|( d)( th)( M)( B),decimalsCount:0}');
  secondPlot.priceIndicator(0)
      .value(1178550000000);

  // secondPlot.priceIndicator(1)
  //     .label().format('{%value}{scale:(1)(1000)(1000)(1000)|( d)( th)( M)( B),decimalsCount:0}');
  // secondPlot.priceIndicator(1)
  //     .value(1172678400000);

  secondPlot.crosshair().yLabel().format('{%value}{scale:(1)(1000)(1000)(1000)|( d)( th)( M)( B),decimalsCount:0}');

  var series = secondPlot.line(mapping).name('MSFT');

  // setupDrawer(series);
  // series.risingFill(candlestick.risingFill());
  // series.fallingFill(candlestick.fallingFill());
  // series.risingStroke(candlestick.risingStroke());
  // series.fallingStroke(candlestick.fallingStroke());
  // series.risingHatchFill(candlestick.risingHatchFill());
  // series.fallingHatchFill(candlestick.fallingHatchFill());

  var tLimit = 80000000;
  var lLimit = 60000000;
  var colorScale = anychart.scales.ordinalColor();
  colorScale.ranges([
    {
      less: lLimit,
      color: 'red'
    },
    {
      from: tLimit,
      to: lLimit,
      color: 'green'
    },
    {
      greater: tLimit,
      color: 'blue'
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
  chart.selectRange('2007-01-03', '2007-05-20');

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
