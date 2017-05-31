anychart.onDocumentReady(function() {
  var stage = anychart.graphics.create('container', 1000, 300);
  stage.suspend();

  var text = stage.text();
  text
      .x(300)
      .text('This is a long and Supercalifragilisticexpialidocious sentence. 次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉')
      // .text('Если число протоновпротоновпротоновпротоновпротонов в ядре совпадает с числом электронов, то атом в целом оказывается электрически протоновпротоновпротоновпротоновпротонов.')
      // .text('Flessibilità/Adattabilità al cambiamento')
      // .text('first chart sdgf isagfo gsaiyf oasdg foiysdagf uhsdaiufg sadi usdi asidfh ipsua   hsdia.')
      .width(160)
      // .textIndent(150)
      // .height(60)
      .fontFamily('Times New Roman')
      .fontSize(16)
      .wordWrap('normal')
      // .textWrap('byLetter')
      .textOverflow('...')
      // .hAlign('center');

  // stage.rect(300, 0, 200, 500);
  stage.rect().setBounds(text.getBounds());

  stage.resume();
});
    