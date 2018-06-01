var series;

var changeBaseLine = function(value) {
  secondPlot.baseLine(value);
}

anychart.onDocumentReady(function() {
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

  chart = anychart.stock();

  secondPlot = chart.plot(0);
  series = secondPlot.area(mapping).name('MSFT');
  // secondPlot.baseLine(0);
  // secondPlot.baseLine(-300);
  //
  // series.risingStroke('3 green');
  // series.fallingStroke('3 red');
  // series.stroke('3 yellow');

  series.negativeStroke('3 grey');
  series.stroke('3 yellow');

  series.hovered()
      .negativeStroke('15 red')
      .risingStroke('13 green')
      .fallingStroke('13 red')
      .stroke(function() {
          return anychart.color.setThickness(this.sourceColor, 20)
      });

  // series.risingHatchFill(candlestick.risingHatchFill());
  // series.fallingHatchFill(candlestick.fallingHatchFill());

  var tLimit = 600;
  var lLimit = -550;
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

  chart.container('container');
  chart.draw();
});

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
    ['2004-01-24', 28.28, 28.76, 28.22, 28.48, -127],
    ['2004-01-25', 28.28, 28.76, 28.22, 28.48, -127],
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
