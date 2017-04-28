var chart;


anychart.onDocumentReady(function () {
  // $.ajax("warAndPeace.txt").done(function(text) {
  // $.ajax("atom.txt").done(function(text) {
  $.ajax("alice_in_wounderland.txt").done(function(text) {
    $("#war").val(text);

    chart = anychart.tagCloud();
    chart.title('Top 250 word of Alice In Wounderland.');
    chart.data(text, {mode: 'byWord', minLength: 4, maxItems: 250});
    chart.container('container').draw();
  });
});
