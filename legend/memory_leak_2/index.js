anychart.onDocumentReady(function() {
  var rects = [];

  var stage = anychart.graphics.create('container', 500, 500);
  var layer = stage.layer();

  function q() {
    stage.suspend();

    for (var i = 0, len = rects.length; i < len; i++) {
      var item = rects[i];
      goog.disposeAll(item.layer);
    }

    rects = [];

    for (i = 0, len = 1; i < len; i++) {
      var l2 = {};
      l2.layer = layer.layer();
      l2.rect = l2.layer.rect(10, 10, 300, 300);
      rects[i] = l2;
    }
    stage.resume();
  }
  setInterval(q, 1000);
});
