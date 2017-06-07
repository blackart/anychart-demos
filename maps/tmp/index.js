var parser, map, chart, s1, s2, s3, s, axis, axis_lin, cs, cr, series, currentColorScale;

var randomExt = function(a, b) {
  return Math.round(Math.random() * (b - a + 1) + a);
};

var min = 0, max = 350;

anychart.onDocumentReady(function() {
  var dataSet = anychart.data.set(getData());

  map = anychart.map();
  map.interactivity().zoomOnMouseWheel(true);
  map.scale().gap(.15);
  map.geoData('anychart.maps.united_states_of_america');

  series = map.choropleth(dataSet);
  series.labels()
      .enabled(true)
      .padding(1)
      .textFormatter('{%name}');

  map.connector([{
    points: [40.71262, - 74.006124, 36.17002, - 115.140154],
    number: 17,
    to: "Las Vegas, NV",
    marker: {
      fill: "#328bde"
    },
    label: {
      enabled: true
    }
  }]);


  map.container('container').draw();
});
