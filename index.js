anychart.onDocumentReady(function() {
  chart = anychart.map();
  chart.geoData('anychart.maps.canada');
  chart.grids().horizontal()
      .enabled(true)
      .minorStroke({color: 'rgb(80,34,0)', dash: '1 1', thickness: 3})
      .drawLastLine(true);
  chart.container('container').draw();

  chart.grids().horizontal().enabled(false);

  chart.grids().vertical() // не включился
      .enabled(true)
      .minorStroke({color: 'rgb(80,34,0)', dash: '1 1', thickness: 3})
      .drawLastLine(true);
  //
  chart.grids().horizontal() // не включился обратно
      .enabled(true)
      .minorStroke({color: 'rgb(80,34,0)', dash: '1 1', thickness: 3})
      .drawLastLine(true);
  chart.grids().vertical().enabled(false);
});