var legend, chart;

anychart.onDocumentLoad(function() {
  var stage = anychart.graphics.create('container', 600, 300);
  stage.suspend();

  chart = anychart.line([1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]);
  chart.getSeries(0).name('veryvery\n\rlongtext');
  chart.getSeries(1).name('s2');
  chart.getSeries(2).name('s3');
  chart.getSeries(3).name('asdhfiuhef iuhwiefhiwuhfw iuwehfsdfsf');
  chart.legend({enabled: true});
  chart.legend()
      .itemsFormatter(function(items) {
        items[3]['maxWidth'] = 70;
        items[3]['textOverflow'] = anychart.graphics.vector.Text.TextOverflow.ELLIPSIS;
        return items;
      });
  chart.legend().iconSize(30);
  chart.legend().title()
      .padding(10)
      .enabled(true)
      .orientation('left')
      .rotation(0)

  chart.container(stage).draw();

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
