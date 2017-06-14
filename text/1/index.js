var chart, stage;

anychart.onDocumentReady(function() {
  stage = acgraph.create('container');

  var text = stage.html(50, 50, 'Text text text');
  // text.textWrap(acgraph.vector.Text.TextWrap.BY_LETTER);
  text
      .rotateByAnchor(45)
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
      .textIndent(0)
      .vAlign('top')
      .hAlign('start')
      // .textWrap('byLetter')
      .textOverflow('');

  // text.width(100);

  stage.rect().setBounds(text.getBounds()).fill(null);


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