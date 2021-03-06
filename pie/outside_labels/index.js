  var chart, newPie, seriesData;
var ranger, input;

function startAngle(value) {
  chart.startAngle(value);
  input.value = chart.startAngle();
}


function startAngleInp(value) {
  chart.startAngle(value);
  ranger.value = chart.startAngle();
}

anychart.onDocumentLoad(function() {
  var pointData2 = [100, 50, 3];

  var seriesData1 = [
    {x: 'All other outlets 0 ', y: pointData2[0]},
    {x: 'All other outlets 1 ', y: pointData2[0]},
    {x: 'All other outlets 2 ', y: pointData2[0]},
    {x: 'All other outlets 3 ', y: pointData2[0]}
  ];

  var seriesData2 = [
//    {x: 'All other outlets', y: 1000},

    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},

    {x: 'Department Stores', hoverLabel: {enabled: true}, y: pointData2[1], fill: {keys: ['0 red 1', '0.5 green 1', '1 blue 1']}, stroke: 'none', 'hoverFill': 'black', selected: {explode: '1%'}, hoverLabel: {'fontColor': 'red'}},


    //{x: 'Department Stores', y: pointData2[0]},
    {x: 'Department Stores', label: {enabled: true}, y: pointData2[0], fill: {keys: ['0 red 1', '0.5 green 1', '1 blue 1']}, stroke: 'none'},

    {x: 'All \nother \noutlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},

    {x: 'Discount Stores', y: pointData2[1]},

    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},


    {x: 'Discount Stores', y: pointData2[1]},
    {x: 'Discount Stores', y: pointData2[1]},
    {x: 'Discount Stores', y: pointData2[1]},

    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},

    {x: 'Men\'s/Women\'s Stores', y: pointData2[1]},

    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},
    {x: 'All other outlets', y: pointData2[2]},

    {x: 'Juvenile Specialty Stores', y: pointData2[1]}
  ];


  var seriesData3 = [];
  for (var i = 0; i < 450; i++) {
    seriesData3.push({x: 'All other outlets', y: pointData2[2]});
  }

  chart = anychart.pie(seriesData2)
      .container('container')
      .innerRadius('80%')
      .connectorLength('20%')
      //.outsideLabelsCriticalAngle(180)
      .connectorStroke('black .3', 1.5, '4 2')
      // .radius('50%')
      // .startAngle(284)
      .startAngle(179)
      // .margin(0)
      // .padding(0)
      // .explode(0);

  chart.labels().position('outside');

  chart.hovered()
      .labels().fontWeight('bold');

  chart.selected().labels().fontWeight('bold');
  // chart.selected().explode(0);

  chart.title()
      .text('ACME Corp. apparel sales through different retail channels');

  chart.labels()
      // .offsetY(0)
      //.offsetX(15)
      .enabled(true)
      .format(function() {return this.x + ' ' + this.index});

  chart.tooltip().titleFormat('{%Value}')

  chart.credits(false);
  chart.legend()
      .itemsLayout('vertical-expandable')
      .position('right')
      // .itemsFormat('{%index}')

  chart.draw();



  ranger = document.getElementById('startAngle');
  input = document.getElementById('startAngleInp');

  ranger.value = chart.startAngle();
  input.value = chart.startAngle();

  //var angle = 0;
  //setInterval(function() {
  //  chart.startAngle(angle);
  //  ranger.value = chart.startAngle();
  //  input.value = chart.startAngle();
  //  angle += 1;
  //}, 500);
});