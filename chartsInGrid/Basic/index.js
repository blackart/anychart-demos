var data = [{
  year: 2006,
  toyota: 6800228,
  gm: 5779719,
  vw: 5429896,
  ford: 3956708,
  hyundai: 2003608,
  changes: [0, 0, 0, 0, 0],
  percent: 0
}, {
  year: 2007,
  toyota: 7211474,
  gm: 6259520,
  vw: 5964004,
  ford: 3565626,
  hyundai: 2292075,
  changes: [411246, 479801, 534108, -391082, 288467],
  percent: 5.5
}, {
  year: 2008,
  toyota: 7768633,
  gm: 6015257,
  vw: 6110115,
  ford: 3346561,
  hyundai: 2435471,
  changes: [557159, -244263, 146111, -219065, 143396],
  percent: 1.5
}, {
  year: 2009,
  toyota: 6148794,
  gm: 4997824,
  vw: 5902583,
  ford: 2952026,
  hyundai: 4222532,
  changes: [-1619839, -1017433, -207532, -394535, 1787061],
  percent: -5.7
}, {
  year: 2010,
  toyota: 7267535,
  gm: 6266959,
  vw: 7120532,
  ford: 2958507,
  hyundai: 5247339,
  changes: [1118741, 1269135, 1217949, 6481, 1024807],
  percent: 19
}, {
  year: 2011,
  toyota: 6793714,
  gm: 6494385,
  vw: 8157058,
  ford: 3093893,
  hyundai: 6118221,
  changes: [-473821, 227426, 1036526, 135386, 870882],
  percent: 6.2
}, {
  year: 2012,
  toyota: 8381968,
  gm: 6608567,
  vw: 8576964,
  ford: 3123340,
  hyundai: 6761074,
  changes: [1588254, 114182, 419906, 29447, 642853],
  percent: 9.1
}, {
  year: 2013,
  toyota: 8565176,
  gm: 6733192,
  vw: 9259506,
  ford: 3317048,
  hyundai: 6909194,
  changes: [183208, 124625, 682542, 193708, 148120],
  percent: 4
}, {
  year: 2014,
  toyota: 10230000,
  gm: 9920000,
  vw: 10140000,
  ford: 6320000,
  hyundai: 7710000,
  changes: [1664824, 3186808, 880494, 3002952, 800806],
  percent: 27
}];

var colors = [
  '#60B3E2',
  '#dc6b67'
];

function createDynamicsChart(scale, data, container) {
  var chart, chartData;
  chartData = [
    {value: data[0], fill: '#60B3E2', country: data[2]},
    {value: data[1], fill: '#dc6b67', country: data[2]}
  ];
  chart = anychart.bar(chartData);
  chart.tooltip()
      // .title(false)
      // .separator(false)
      .titleFormat(function() {
        console.log(this);
        return this.getData('country')
      })
      .format(function() {
        return this.series.getPoint(0).get('value') + ' | ' + this.series.getPoint(1).get('value');
      })
      .allowLeaveStage(true);

  chart
      .xAxis(false)
      .yAxis(false)
      .title(false)
      .background(null)
      .padding(0, '2%', 0, 0)
      .legend(false)
      .credits(false)
      .yScale(scale);

  chart.interactivity().selectionMode(false);

  var series = chart.getSeries(0);
  series.stroke(null);
  series.pointWidth('85%');

  chart.container(container[0]).draw();

  container[0].chart = chart;
}

$(document).ready(function() {
  anychart.licenseKey('test-key-32db1f79-cc9312c4');

  var scale = anychart.scales.linear();
  var min = 0, max = Number.NEGATIVE_INFINITY;
  $.each(data, function(index, value) {
    max = Math.max(max, value.crony, value.ncrony);
  });
  scale.minimum(min).maximum(max);

  //configure table
  var tableContainer = $('#example');
  var table = tableContainer.DataTable({
    paging: false,
    info: false,
    searching: false,
    data: data,
    autoWidth: true,
    pageLength: 100,
    columns: [
      {
        title: "Year",
        data: 'year',
      },
      {
        title: "Toyota",
        data: 'toyota',
      },
      {
        title: "GM",
        data: 'gm',
      },
      {
        title: "VW",
        data: 'vw',
      },
      {
        title: "Ford",
        data: 'ford',
      },
      {
        title: "Hyundai",
        data: 'hyundai',
      },
      {
        title: "",
        data: function() {
          return "";
        },
      },
      {
        title: "Values",
        data: function() {
          return "";
        },
        orderDataType: "chart",
      },
      {
        title: "Changes",
        data: function() {
          return "";
        },
      },
      {
        title: "%",
        data: 'percent',
      }
    ]
  });

  //initialize charts and render it to table
  // table.rows().every(function(rowIdx) {
  //   var data = [this.data().crony, this.data().ncrony, this.data().country];
  //   var node, chartContainer;
  //
  //   node = table.cell(rowIdx, 1).node();
  //   $(node).css('padding', 0);
  //   chartContainer = $('<div class="chart-container" id="bar' + rowIdx + '"></div>');
  //   chartContainer.appendTo(node);
  //   createDynamicsChart(scale, data, chartContainer);
  // });

  //ordering by chart value
  $.fn.dataTable.ext.order['chart'] = function(settings, col) {
    return this.api().column(col, {order: 'index'}).nodes().map(function(td, i) {
      return $(td).find('div')[0].chart.getSeries(0).data().get(0, 'value');
    });
  };

  table
      .order([ 1, 'desc' ])
      .draw();
});