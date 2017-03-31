var choroplethData = [
  {'id': 'DE', value: 10},
  {'id': 'IT', value: 15},
  {'id': 'ES', value: 20},
  {'id': 'CN', value: 30},
  {'id': 'AU', value: 40},
  {'id': 'BR', value: 11},
  {'id': 'CH', value: 37},
  {'id': 'AT', value: 11}
];

var connectorData = [
  {
    points: [73.9685374010375, -42.82239429736773, 59.23289776233006, 74.83196842523009],
    label: {enabled: true, anchor: 'top'}
  }
];

var connectorData2 = [
  {
    points: [33.901682468113314, -33.76298326545277, 50.63459159718123, 46.31327384679112],
    label: {enabled: true, anchor: 'top'}
  }
];

var connectorData1 = [
  {
    points: [53.80909182931279, -24.023273297126586, 80.43043269877023, 66.78369963621455],
    label: {enabled: true, anchor: 'top', position: .4},
    marker: {position: .4}
  }
];


var bubbleData = [
  // {name: "Brasil", long: -51.1, lat: -13.2, size: 2},
  {name: "Alaska", long: -152.6, lat: 65.6, size: 5},
  {name: "USA", long: -100, lat: 40, size: 2}
];

var markerData = [
  {name: "USA", long: 46.64964433121245, lat: -19.16849591321863},
];

var chart;


anychart.onDocumentReady(function () {
  chart = anychart.line([7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]);


  chart.xScale().names(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
  // chart.yAxis(false);

  chart.container('container').draw();


  // anychart.performance.printTree();
});



// data for the sample
function getData() {
  return [
    {name: "New York", lat: '40.6643', long: '-73.9385', number: 12},
    {name: "Seattle", lat: '47.6097', long: '-122.3331', number: 10},
    {name: "Chicago", lat: '41.8376', long: '-87.6818', number: 9},
    {name: "Houston", lat: '29.7805', long: '-95.3863', number: 8},
    {name: "San Diego", lat: '32.711555', long: '-117.158701', number: 4}
  ]
}


// helper function to bind data field to the local var.
function filter_function(val1, val2) {
  if (val2)
    return function(fieldVal) {
      return val1 <= fieldVal && fieldVal < val2;
    };
  else
    return function(fieldVal) {
      return val1 <= fieldVal;
    };
}