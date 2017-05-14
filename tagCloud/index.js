var chart;


anychart.onDocumentReady(function () {
  // $.ajax("warAndPeace.txt").done(function(text) {
  // $.ajax("atom.txt").done(function(text) {
  $.ajax("alice_in_wounderland.txt").done(function(text) {
    $("#war").val(text);

    chart = anychart.tagCloud();
    // chart.bounds(0, 0, '50%', '50%');
    chart.title('Top 250 word of Alice In Wounderland.');
    chart.data(text, {mode: 'byWord', minLength: 4, maxItems: 250});
    // chart.data([
    //   {"x": "poem", "value": 80, 'category': 'apply'},
    //   {"x": "peom", "value": 44, 'category': 'orange'},
    //   {"x": "moep", "value": 40, 'category': 'cherry'},
    //   {"x": "meop", "value": 36, 'category': 'apply'},
    //   {"x": "emop", "value": 32, 'category': 'orange'},
    //   {"x": "epom", "value": 28, 'category': 'cherry'},
    //   {"x": "opem", "value": 24, 'category': 'apply'},
    //   {"x": "omep", "value": 20, 'category': 'orange'},
    //   {"x": "mope", "value": 56, 'category': 'cherry'},
    //   {"x": "mepo", "value": 12, 'category': 'apply'},
    //   {"x": "pemo", "value": 10, 'category': 'orange'},
    //   {"x": "pome", "value": 10, 'category': 'cherry'}
    // ], {mode: 'byWord', minLength: 4, maxItems: 250});

    chart.colorRange(true);
    // chart.colorScale(anychart.scales.linearColor(anychart.color.singleHueProgression('#3b5998')));
    chart.colorScale(anychart.scales.ordinalColor());
    chart.legend(true);

    chart.hovered({
      // fontFamily: 'Times New Roman',
      // fontFamily: 'Comic Sans MS',
      // fontSize: 80,
      // fontSize: function() {
      //   return this.sourceValue * 1.1;
      // },
      // fontSize: '110%',
      // fill: 'red'
    });

    chart.selected({
      // fill: 'green',
      // fontWeight: 'bold'
    });

    chart.normal({
      // fontSize: '140%'
      // fontSize: null
    });

    chart.container('container').draw();
  });
});
