anychart.onDocumentReady(function() {
  chart = anychart.map();
  chart.geoData('<svg xmlns="http://www.w3.org/2000/svg">' +
      '<g id="1"><rect x="0" y="0" width="100" height="100"></rect></g></svg>');
  chart.connector([
    //        V       V          -< проблемы в совпадении X
    {points: [40, 10, 40, 80], stroke:'red'}, // кровь в консоли

    //             V       V          -< проблемы в совпадении Y
    {points: [50, 10, 70, 10], stroke:'red 0.7'}, // кровь в консоли
  ]);
  chart.container('container').draw();
});