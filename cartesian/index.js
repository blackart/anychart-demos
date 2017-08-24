
anychart.onDocumentReady(function () {
  chart = anychart.column();

  var series = chart.column([
    ['Rouge', '80540'],
    ['Foundation', '94190'],
    ['Mascara', '102610'],
    ['Lip gloss', '110430'],
    ['Pomade', '128000'],
    ['Nail polish', '143760'],
    ['Eyebrow pencil', '170670'],
    ['Eyeliner', '213210'],
    ['Eyeshadows', '249980']
  ]);

  chart.xGrid(0).enabled(true);

  chart.container('container').draw();
});
