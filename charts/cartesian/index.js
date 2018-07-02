var serie, coloringFunc, lineMarker, chart, plot, mapping;
var max = 1000;
var min = -1000;
var defaultSeriesType = 'column';
var defaultChartType = 'cartesian';
var coloringFuncName = 'colorScale';
// var coloringFuncName = 'negativeColoring';
var range;
// var range = ['2004-01-09 9:00', '2004-01-12 3:00'];

var changeBaseLine = function(value) {
  plot.baseline(value);
  if (lineMarker)
    lineMarker.value(value);
}

defaultColoring = function(series) {
  series.hovered().fill('red');
}

negativeColoring = function(series) {
  series.negativeFill('gray .3');
  series.negativeStroke('grey');
  series.stroke('yellow');
  series.fill('yellow .3');
}

risingFallingColoring = function(series) {
  series.risingStroke('lime');
  series.fallingStroke('orange');
  series.risingFill('lime .3');
  series.fallingFill('orange .3');
}

colorScale = function(series) {
  var tLimit = 600;
  var lLimit = -550;
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

  // series.stroke(function() {                                                                                                                        
  //   return anychart.color.setThickness(this.scaledColor, 1);
  // });
  // series.fill(function() {
  //   return anychart.color.setOpacity(this.scaledColor, .3);
  // });
}


coloringFunc = this[coloringFuncName];


function configureSeries(series) {
  coloringFunc(series);

  series.highStroke('red');
  series.lowStroke('blue');
  series.highFill('red .2');
  series.lowFill('blue .2');

  series.markers(true);

  // if (series.stepDirection) {
    // series.stepDirection(anychart.enums.StepDirection.FORWARD);
    // series.stepDirection(anychart.enums.StepDirection.BACKWARD);
  // }

  // series.hovered()
  //     .negativeStroke('15 red')
  //     .risingStroke('13 green')
  //     .fallingStroke('13 red')
  //     .stroke(function() {
  //       return anychart.color.setThickness(this.sourceColor, 20)
  //     });

  min = plot.yScale().minimum();
  max = plot.yScale().maximum()

  var mid = min + (max - min) / 2;

  $('#baseline')
      .attr('min', min)
      .attr('max', max)
      .attr('step', Math.max((max - min) / 2000, .1))
      .attr('value', mid)

  plot.baseline(mid)

  if (plot.lineMarker)
    lineMarker = plot.lineMarker().value(mid);
}


function constructChart(type) {
  var map = {
    x: 0,
    size: 1,
    open: 2,
    high: 3,
    low: 4,
    close: 5,
    value: 6,

  };
  chart = anychart[type](true);
  plot = chart;
  var data = get_msft_daily_short_data();

  switch (type) {
    case 'polar':
      map.x = 7;
      var dataSet = anychart.data.set(data);
      mapping = dataSet.mapAs(map);
      break;
    case 'radar':
      var dataSet = anychart.data.set(data);
      mapping = dataSet.mapAs(map);
      break;
    case 'cartesian':
      var dataSet = anychart.data.set(data);
      mapping = dataSet.mapAs(map);
      chart.xAxis(true).yAxis(true);
      chart.crosshair(true);
      break;
    case 'stock':
      var dataTable = anychart.data.table(0);
      dataTable.addData(data);
      mapping = dataTable.mapAs(map);
      plot = chart.plot(0);
      break;
  }

  plot.legend(true);
  // chart.interactivity().hoverMode('by-x');

  var seriesName = $(seriesList).val().replace(/-(.)/g, function(match, p1) {return p1.toUpperCase()});
  if (plot[seriesName]) {
    series = plot[seriesName](mapping).name('MSFT');
    configureSeries(series);
  }

  if (plot.lineMarker)
    lineMarker = plot.lineMarker().value(plot.baseline());

  if (chart.selectRange &&range)
    chart.selectRange(range[0], range[1]);

  chart.container('container');
  chart.draw();
}

anychart.onDocumentReady(function() {
  seriesList = $('<select></select>');
  var seriesTypes = ['area', 'bar', 'box', 'bubble', 'candlestick', 'column', 'jump-line', 'line', 'marker', 'ohlc', 'range-area', 'range-bar', 'range-column', 'range-spline-area', 'range-step-area', 'spline', 'spline-area', 'step-area', 'step-line', 'stick', 'hilo'];
  for (var i = 0, len = seriesTypes.length; i < len; i++) {
    var seriesListElement = seriesTypes[i];
    seriesList.append('<option value="' + seriesListElement + '">' + seriesListElement + '</option>')
  }
  $('#series').append(seriesList);

  $(seriesList).change(function(e) {
    var name = $(this).val().replace(/-(.)/g, function(match, p1) {return p1.toUpperCase()});
    plot.removeSeriesAt(0);
    if (plot[name]) {
      configureSeries(plot[name](mapping));
    }
  });
  $(seriesList).val(defaultSeriesType);


  chartsList = $('<select></select>');
  var chartsTypes = ['stock', 'cartesian', 'radar', 'polar'];
  for (var i = 0, len = chartsTypes.length; i < len; i++) {
    var chartsListElement = chartsTypes[i];
    chartsList.append('<option value="' + chartsListElement + '">' + chartsListElement + '</option>');
  }
  $('#charts').append(chartsList);

  $(chartsList).change(function(e) {
    chart.dispose();
    constructChart($(this).val());
  });
  $(chartsList).val(defaultChartType);


  constructChart($(chartsList).val());


  $('#baseline').val(plot.baseline());

  $('[name=color][value=' + coloringFuncName + ']').attr('checked', 'checked');
  $('[name=color]').click(function() {
    // chart.container().getStage().suspend();

    var seriesType = $(seriesList).val().replace(/-(.)/g, function(match, p1) {return p1.toUpperCase()});
    var series;

    coloringFunc = window[this.value];

    plot.removeSeriesAt(0);
    series = plot[seriesType](mapping);
    configureSeries(series);

    // chart.container().getStage().resume();
  });

  var multi = 1;
  var direction = 1;
  var interactBaseLineHandler = function() {
    value = plot.baseline();
    if (value < min)
      direction = 1;
    else if (value > max)
      direction = -1;
    value += multi * direction;

    plot.baseline(value);
    if (lineMarker)
      lineMarker.value(value);
    $('#baseline').val(value);
  }
  var interactBaseLineInterval;

  var active = false;
  $('#interactBaseLine').click(function() {
    if (!active) {
      interactBaseLineInterval = setInterval(interactBaseLineHandler, 4);
      $('#interactBaseLine').val('0');
    } else {
      clearInterval(interactBaseLineInterval);
      $('#interactBaseLine').val('1');
    }
    active = !active;
  });
  $('#interactBaseLineStep').on('input', function() {
    multi = this.value;
  });
});

function get_msft_daily_short_data() {
  return [
    // ['2004-01-01', 2, 27.58, 26.77, 27.33, 27.45, 444],
    ['2004-01-02', 1, 27.58, 26.77, 27.83, 27.45, 444, 1],
    ['2004-01-03', 3, 27.58, 27.77, 27.33, 27.45, -197, 2],
    ['2004-01-05', 5, 27.73, 28.18, 27.72, 28.14, -673, 3],
    ['2004-01-06', -6, 28.19, 28.28, 28.07, 28.24, -469, 4],
    ['2004-01-07', -4, 28.17, 28.31, 28.01, 28.21, -542, 5],
    ['2004-01-08', 5, 28.39, 28.48, 28, 28.16, 588, 6],
    ['2004-01-09', 3, 28.03, 27.06, 27.59, 27.66, 600, 7],
    ['2004-01-12', -2, 27.67, 26.73, 27.35, 27.57, 558, 8],
    ['2004-01-13', 3, 27.55, 26.64, 27.26, 27.43, -515, 9],
    ['2004-01-14', -7, 27.52, 27.73, 27.47, 27.7, -439, 10],
    ['2004-01-15', 5, 27.55, 27.72, 27.42, 27.54, -585, 11],
    ['2004-01-16', 1, 27.71, 26.88, 27.53, 27.81, -639, 12],
    ['2004-01-20', -3, 27.98, 27.2, 27.93, 28.1, 630, 13],
    ['2004-01-21', 5, 28.13, 27.3, 27.85, 28.3, 535, 14],
    ['2004-01-22', 4, 28.36, 28.44, 27.94, 28.01, 784, 15],
    ['2004-01-23', -3, 28.28, 28.76, 28.22, 28.48, -127, 16],
    ['2004-01-24', 1, 28.28, 28.76, 28.22, 28.48, -127, 17],
    ['2004-01-25', 1, 28.28, 28.76, 28.22, 28.48, -127, 18],
    ['2004-01-26', 3, 28.49, 28.83, 28.32, 28.8, -582, 19],
    ['2004-01-27', -2, 28.64, 27.72, 28.22, 28.25, -631, 20],
    ['2004-01-28', 5, 28.3, 28.44, 27.47, 27.71, -713, 21],
    ['2004-01-29', 3, 27.81, 27.95, 27.57, 27.91, -637, 22],
    ['2004-01-30', 5, 27.84, 27.9, 27.55, 27.65, 405, 23],
    ['2004-02-02', -1, 27.61, 27.8, 27.24, 27.4, 628, 24],
    ['2004-02-03', 2, 27.4, 27.55, 27.18, 27.29, -479, 25],
    ['2004-02-04', -5, 27.22, 27.43, 27.01, 27.01, -606, 26],
    ['2004-02-05', -6, 27.06, 26.17, 26.83, 26.96, 555, 27],
    ['2004-02-06', 4, 27.03, 26.19, 26.93, 27.08, 472, 28],
    ['2004-02-07', 3, 27.03, 26.19, 26.93, 27.08, 472, 29],
    ['2004-02-08', -5, 27.03, 26.19, 26.93, 27.08, 472, 30],
    ['2004-02-09', 1, 27.03, 26.19, 27.93, 27.08, 472, 31],
    ['2004-02-10', -3, 27.03, 27.19, 25.93, 27.08, 472, 32],
    // ['2004-02-11', 5, 27.03, 27.19, 26.93, 27.08, 472]
  ];
}
