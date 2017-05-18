anychart.onDocumentReady(function () {
  var stage = anychart.graphics.create('container');

  function labelsSettings1() {
    var count =  chart1.xAxis().labels().getLabelsCount();
    var countMinor =  chart1.xAxis().minorLabels().getLabelsCount();
    for (var i = 0; i < count; i++) {
      var label =  chart1.xAxis().labels().getLabel(i);
      if (label) {
        label.background().enabled(true).fill({
          src: "http://static.anychart.com/kitty.png",
          mode: acgraph.vector.ImageFillMode.FILL,
          opacity: '0.2'
        });
        label.fontColor('red').fontSize(10);
        label.draw();
      }
    }
    for (var i1 = 0; i1 < countMinor; i1++) {
      var labelMinor =  chart1.xAxis().minorLabels().getLabel(i1);
      if (labelMinor) {
        labelMinor.fontSize(8).fontColor('Gold');
        labelMinor.draw();
      }
    }
  }
  
  var linearScale = anychart.scales.linear();
  linearScale.ticks([1000,2000,3000,4000, 5000, 6000]).minimum(1000).maximum(6000);

  chart1 = anychart.cartesian();
  chart1.line([100, 500, 300, 100, 567,213]);
  axis1 =  chart1.xAxis();
  axis1.scale(linearScale);
  axis1.minorLabels(true);

  formatLabels1 = function(){
    var currentValue = this.value;
    if (currentValue >= 5000)
    {currentValue = currentValue/100 + '%';}
    return currentValue;
  };

  chart1.xAxis().labels().format(formatLabels1);
  chart1.bounds(0, 0, '100%', '50%');
  chart1.container(stage).draw();


  chart1.xAxis().labels().format(formatLabels1);
  labelsSettings1(); // for xml & resize
});