
anychart.onDocumentReady(function () {
  anychart.licenseKey(null);

  stage = anychart.graphics.create('container', 600, 600);

  table = anychart.standalones.table(7, 5);
  table.getCell(0, 0).colSpan(5);
  table.getCell(1, 0).colSpan(3).rowSpan(2);
  table.getCell(1, 3).colSpan(2).rowSpan(2);
  table.getCell(3, 0).colSpan(5).rowSpan(2);
  table.getCell(5, 0).colSpan(2).rowSpan(2);
  table.getCell(5, 2).colSpan(3).rowSpan(2);

  table.getCell(0, 0)
      .content('Sales Dashboard')
      .border().bottom('orange', 5);
  table.getCell(0, 0)
      .fontSize(20)
      .fontColor('orange');

  table.getCell(1, 0)
      .content(anychart.line([2, 6, 9, 10], [1, 3, 2, 5, 4]))
      .border().right('orange', 5);

  table.getCell(1, 3)
      .content(
          anychart.bar([2, 6, 9, 10], [1, 3, 2, 5, 4])
      );


  table.getCell(3, 0)
      .content(anychart.column([2, 6, 9, 10], [1, 3, 2, 5, 4], [1, 3, 4, 5]))
      .border().top('orange', 5)
      .border().bottom('orange', 5);

  table.getCell(5, 0)
      .content(anychart.pie([2, 6, 9, 10]))
      .border().right('orange', 5);

  table.getCell(5, 2)
      .content(anychart.area([2, 6, 9, 1]));

  table.container(stage).draw();
});

function randomExt(a, b) {
  return Math.round(Math.random() * (b - a + 1) + a);
}
