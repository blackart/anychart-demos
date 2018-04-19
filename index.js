anychart.onDocumentReady(function () {
  chart = anychart.column([
    {x: 'январь', value: 1},
    {x: 'февраль', value: 2},
    {x: 'март', value: 3},
    {x: 'апрель', value: 4},
    {x: 'май', value: 5},
    {x: 'июнь', value: 6},
    {x: 'июль', value: 7},
    {x: 'август', value: 8},
    {x: 'сентябрь', value: 9},
    {x: 'октябрь', value: 10},
    {x: 'ноябрь', value: 11},
    {x: 'декабрь', value: 12}
  ]);
  // chart.padding(0).margin(0);

  var position = 'inside';
  // var position = 'outside';

  //bottom
  chart.xAxis()
      .staggerMode(true)
      .staggerMaxLines(10)
      .title(true)
      .ticks().position(position);
  chart.xAxis()
      .labels().position(position);

  // chart.xAxis(false);

  //left
  chart.yAxis()
      // .title(true)
      .ticks().position(position);
  chart.yAxis()
      .labels().position(position);
  //
  chart.yAxis(2)
      .title(true)
      .ticks().position('outside');
  chart.yAxis(2)
      .labels().position('outside');

  chart.yAxis(3)
      .title(true)
      .ticks().position(position);
  chart.yAxis(3)
      .labels().position(position);

  // //top
  chart.xAxis(1)
      .staggerMode(true)
      .staggerMaxLines(10)
      // .title(true)
      .orientation('top')
      .ticks().position(position);
  chart.xAxis(1)
      .labels().position(position);

  //right
  chart.yAxis(1)
      // .title(true)
      .orientation('right')
      .ticks().position(position);
  chart.yAxis(1)
      .labels().position(position);

  chart.container("container").draw();
});