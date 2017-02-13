var chart, series, zoom;

var randomExt = function(a, b) {
  return Math.round(Math.random() * (b - a + 1) + a);
};

var generateData = function(map, opt_min, opt_max) {
  var data = [];

  features = map.geoData()['features'];
  var min = opt_min !== void 0 ? opt_min : 1900;
  var max = opt_max !== void 0 ? opt_max : 2000;
  for (var i = 0, len = features.length; i < len; i++) {
    var feature = features[i];
    if (feature['properties']) {
      id = feature['properties'][map.geoIdField()];
      data.push({'id': id, 'value': randomExt(min, max), 'labelrank': 1});
    }
  }

  return data;
};

anychart.onDocumentReady(function() {
  chart = anychart.cartesian();
  chart.line([50, 25, 43]);
  chart.line([50, 25, 43]);
  chart.legend(true);
  chart.legend().listen(anychart.enums.EventType.LEGEND_ITEM_CLICK, function(e) {
    console.log('click', goog.getUid(e.originalEvent.domTarget))
  });
  chart.legend().listen(anychart.enums.EventType.LEGEND_ITEM_MOUSE_DOWN, function(e) {
    console.log('down', goog.getUid(e.originalEvent.domTarget))
  });
  chart.legend().listen(anychart.enums.EventType.LEGEND_ITEM_MOUSE_UP, function(e) {
    console.log('up', goog.getUid(e.originalEvent.domTarget))
  });
  chart.container('container').draw();
});