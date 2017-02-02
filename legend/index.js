var legend, chart;

anychart.onDocumentLoad(function() {
  var stage = anychart.graphics.create('container', 400, 300);
  stage.suspend();

  var rect = stage.rect().setBounds(stage.getBounds()).stroke('2 black');
  var data = [
    {name: 'item 1', iconType: 'line'},
    {name: 'item 2', iconType: 'splinearea'},
    {name: 'item 3', iconType: 'stepline'},
    {name: 'item 12', iconType: 'steparea'},
    {name: 'item 4', iconType: 'circle'},
    {name: 'item 5', iconType: 'triangleup'},
    {name: 'item 6', iconType: 'star5'},
    {name: 'item 7', iconType: 'bubble'},
    {name: 'item 8', iconType: 'column'},
    {name: 'item 9', iconType: 'rangesteparea'},
    {name: 'item 10', iconType: 'rangecolumn'},
    {name: 'item 11', iconType: 'candlestick'}
  ];

  legend = anychart.standalones.legend();

  legend.items(data);
  legend.title()
      .enabled(true)
      .text('Complex_test')
      .padding(0, 10, 0, 5)
      // .rotation(0)
      // .orientation('left');

  legend.titleSeparator()
      .enabled(true)
      .stroke('red')
      .margin(20)
      // .orientation(anychart.enums.Orientation.RIGHT);

  legend
      .position('top')
      .align('right')
      // .parentBounds(rect.getBounds())
      .background().enabled(1).fill({keys: ['yellow', 'green .7'], angle: -90}).cornerType('roundinner').corners(10).stroke('4 pink');

  legend
      .iconTextSpacing(5)
      .itemsLayout('h')
      .itemsSpacing('10')
      .margin(10)
      // .margin(20, 0)
      // .padding(5, 15);
      .padding(10);

  // legend.width(270);
  // legend.height(200);

  legend.tooltip().background()
      .stroke('2 red')
      .fill('pink');

  legend.container(stage).draw();

  stage.resume();
});


function t_flip90() {
  legend.title().rotation((legendTitle.rotation() || 0) + 90);
}

function t_orientation(value) {
  legend.title().orientation(value);
}

function s_orientation(value) {
  legend.titleSeparator().orientation(value);
}

function t_align(value) {
  legend.title().align(value);
}

function pos(value) {
  legend.position(value);
}

function ali(value) {
  legend.align(value);
}

function lay(value) {
  legend.itemsLayout(value);
}
