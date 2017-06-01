anychart.onDocumentReady(function() {
  var stage = anychart.graphics.create('container');
  stage.suspend();

  var t = 'This is a long and Supercalifragilisticexpialidocious sentence. 次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉 在大不列顛和北愛爾蘭聯合王國下面的話真的很大的話 다음 단어 그레이트 브리튼 및 북 아일랜드 연합 왕국에 정말 큰 단어';
  var width = 160;
  var textOverflow = '...';

  anychart.graphics.fontSize = 16;
  anychart.graphics.fontFamily = 'Times New Roman';


  //normal

  var text = stage.text();
  text
      .y(0)
      .text(t)
      .width(width)
      .textOverflow(textOverflow)
      .wordBreak('normal')
      .wordWrap('normal');
  stage.rect().setBounds(text.getBounds());

  text = stage.text();
  text
      .y(0).x(200)
      .wordWrap('normal')
      .text('word-break: normal;\n word-wrap: normal;');
  stage.rect().setBounds(text.getBounds());


  text = stage.text();
  text
      .y(230)
      .text(t)
      .width(width)
      .textOverflow(textOverflow)
      .wordBreak('keep-all')
      .wordWrap('normal');
  stage.rect().setBounds(text.getBounds());

  text = stage.text();
  text
      .y(230).x(200)
      .wordWrap('normal')
      .text('word-break: keep-all;\n word-wrap: normal;');
  stage.rect().setBounds(text.getBounds());


  text = stage.text();
  text
      .y(460)
      .text(t)
      .width(width)
      .textOverflow(textOverflow)
      .wordBreak('break-all')
      .wordWrap('normal');
  stage.rect().setBounds(text.getBounds());

  text = stage.text();
  text
      .y(460).x(200)
      .wordWrap('normal')
      .text('word-break: break-all;\n word-wrap: normal;');
  stage.rect().setBounds(text.getBounds());


  //break-word

  text = stage.text();
  text
      .y(0)
      .x(400)
      .text(t)
      .width(width)
      .textOverflow(textOverflow)
      .wordBreak('normal')
      .wordWrap('break-word');
  stage.rect().setBounds(text.getBounds());

  text = stage.text();
  text
      .y(0).x(600)
      .wordWrap('normal')
      .text('word-break: normal;\n word-wrap: break-word;');
  stage.rect().setBounds(text.getBounds());


  text = stage.text();
  text
      .y(230)
      .x(400)
      .text(t)
      .width(width)
      .textOverflow(textOverflow)
      .wordBreak('keep-all')
      .wordWrap('break-word');
  stage.rect().setBounds(text.getBounds());

  text = stage.text();
  text
      .y(230).x(600)
      .wordWrap('normal')
      .text('word-break: keep-all;\n word-wrap: break-word;');
  stage.rect().setBounds(text.getBounds());


  text = stage.text();
  text
      .y(460)
      .x(400)
      .text(t)
      .width(width)
      .textOverflow(textOverflow)
      .wordBreak('break-all')
      .wordWrap('break-word');
  stage.rect().setBounds(text.getBounds());

  text = stage.text();
  text
      .y(460).x(600)
      .wordWrap('normal')
      .text('word-break: break-all;\n word-wrap: break-word;');
  stage.rect().setBounds(text.getBounds());


  stage.resume();
});
    