var legend, chart, legendTitle;

anychart.onDocumentLoad(function() {
  var stage = anychart.graphics.create('container', 400, 300);
  stage.suspend();

  var rect = stage.rect().setBounds(stage.getBounds()).stroke('2 black');
  var data = [
    {name: 'item 1'},
    {name: 'item 2'},
    {name: 'item 3'},
    {name: 'item 4'},
    {name: 'item 5'},
    {name: 'item 6'},
    {name: 'item 7'}
  ];

  legend = anychart.standalones.legend();

  legend.items(data);
  legendTitle = legend.title()
      .enabled(true)
      .text('Complex_test')
      .padding(0)
      .rotation(0)
      .orientation('left');

  legend.titleSeparator()
      .orientation(anychart.enums.Orientation.RIGHT);

  legend
      .position('top')
      .align('right')
      // .parentBounds(rect.getBounds())
      .background().enabled(1).fill({keys: ['yellow', 'green .7'], angle: -90}).cornerType('roundinner').corners(10).stroke('4 pink');

  legend
      .iconTextSpacing(5)
      .itemsLayout('vertical')
      .itemsSpacing('10')
      .margin(10)
      // .margin(20, 0)
      // .padding(5, 15);
      .padding(10);

  // legend.width(300);
  legend.height(200);

  legend.tooltip().background()
      .stroke('2 red')
      .fill('pink');

  legend.container(stage).draw();

  stage.resume();
});


function t_flip90() {
  legendTitle.rotation((legendTitle.rotation() || 0) + 90);
}

function t_orientation(value) {
  legendTitle.orientation(value);
}

function t_align(value) {
  legendTitle.align(value);
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
