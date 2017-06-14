var parser, map, chart, s1, s2, s3, s, axis, axis_lin, cs, cr, series, currentColorScale;

var randomExt = function(a, b) {
  return Math.round(Math.random() * (b - a + 1) + a);
};

var min = 0, max = 350;

anychart.onDocumentReady(function() {
  var a = Convertor.convert(Highcharts.maps["countries/nl/nl-all"], 'full');

  map = anychart.map();
  map.geoData(a);
  map.container('container').draw();

  map.listen('click', function(e) {
    var localCord = map.globalToLocal(e.clientX, e.clientY);
    var latLong = map.inverseTransform(localCord.x, localCord.y);

    console.log(latLong.long, latLong.lat);
  })
});
