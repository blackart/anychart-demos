var chart, stage;

anychart.onDocumentReady(function() {
  stage = acgraph.create('container');

  stage.suspend();

  var text = stage.text(0, 0, 'Text text text Text text text Text text text Text text text Text text text Text text text Text text text Text text text Text text text Text text text Text text text Text text text Text text text Text text text Text text text Text text text');
  // text.textWrap(acgraph.vector.Text.TextWrap.BY_LETTER);
  text
      // .rotateByAnchor(90)
      .fontSize(13)
      .fontFamily('Verdana, Helvetica, Arial, sans-serif')
      .direction('ltr')
      .opacity(1)
      .decoration('none')
      .fontStyle('normal')
      .fontVariant('normal')
      .fontWeight('normal')
      .letterSpacing('normal')
      .lineHeight('normal')
      // .textIndent(0)
      .vAlign('center')
      .hAlign('center')
      .path(acgraph.path().moveTo(250, 250).circularArc(250, 250, 200, 200, 0, 360))
      // .path(acgraph.path().moveTo(50, 50).curveTo(130, 105, 190, 125, 300, 300))
      // .path(acgraph.path().moveTo(100, 100).lineTo(400, 400))
      // .path(path)
      // .textWrap('byLetter')
      .textOverflow('...');

  // text.width(100);

  stage.rect().setBounds(text.getBounds()).fill(null);
  console.log(text.path().getLength());

  stage.resume();

  chart = anychart.column([5,7,2]);
  chart.bounds('50%', 0, '50%', '100%');
  chart.yAxis(false);
  var axis = chart.xAxis(0);
  axis.labels(false);
  var title = axis.title();
  title
      .enabled(true)
      .text('Title')
      .rotation(45)
      .vAlign('top')
      .hAlign('center');
  chart.container(stage).draw();
});