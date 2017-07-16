var data = [
  {
    country: 'Russia',
    crony: 18,
    ncrony: 3
  }, {
    country: 'Malaysia',
    crony: 13,
    ncrony: 1
  }, {
    country: 'Philippines',
    crony: 10,
    ncrony: 3
  }, {
    country: 'Singapore',
    crony: 10,
    ncrony: 4
  }, {
    country: 'Ukraine',
    crony: 6,
    ncrony: 1
  }, {
    country: 'Mexico',
    crony: 6,
    ncrony: 2
  }, {
    country: 'Indonesia',
    crony: 4,
    ncrony: 2
  }, {
    country: 'Turkey',
    crony: 3.5,
    ncrony: 2.5
  }, {
    country: 'India',
    crony: 3,
    ncrony: 9
  }, {
    country: 'Taiwan',
    crony: 3,
    ncrony: 7
  }, {
    country: 'China',
    crony: 2.5,
    ncrony: 3
  }, {
    country: 'Thailand',
    crony: 2,
    ncrony: 9
  }, {
    country: 'South Africa',
    crony: 2,
    ncrony: 7
  }, {
    country: 'Britain',
    crony: 2,
    ncrony: 4
  }, {
    country: 'Brazil',
    crony: 2,
    ncrony: 5
  }, {
    country: 'USA',
    crony: 1.9,
    ncrony: 11
  }, {
    country: 'Argentina',
    crony: 1.8,
    ncrony: 1
  }, {
    country: 'France',
    crony: 1.5,
    ncrony: 7
  }, {
    country: 'Japan',
    crony: 0.5,
    ncrony: 1.2
  }, {
    country: 'South Korea',
    crony: 0.4,
    ncrony: 4.5
  }, {
    country: 'Poland',
    crony: 0.3,
    ncrony: 1.7
  }, {
    country: 'Germany',
    crony: 0.2,
    ncrony: 13.8
  }
];

var colors = [
  '#60B3E2',
  '#dc6b67'
];

function createDynamicsChart(data, container) {
  var chart, chartData;
  chartData = [
    {value: data[0], fill: '#60B3E2'},
    {value: data[1], fill: '#dc6b67'}
  ];
  chart = anychart.bar(chartData);
  chart.tooltip()
      .title(false)
      .separator(false)
      .format(function() {
        return 'Value: ' + this.chart.data().get(0, 'value').toFixed(1) + '%';
      })
      .allowLeaveStage(true);
  chart
      .xAxis(false)
      .yAxis(false)
      .title(false)
      .background(null)
      .padding(0)
      .legend(false)
      .credits(false);
  var series = chart.getSeries(0);
  series.stroke(null);

  chart.container(container[0]).draw();
  container[0].chart = chart;
}

$(document).ready(function() {
  anychart.licenseKey('test-key-32db1f79-cc9312c4');

  //configure table
  var tableContainer = $('#example');
  var table = tableContainer.DataTable({
    data: data,
    // autoWidth: false,
    columns: [
      {
        title: "Country",
        data: 'country'
      },
      {
        title: "",
        data: function() {
          return "";
        },
        orderDataType: "chart"
      }
    ]
  });
  //initialize charts and render it to table
  table.rows().every(function(rowIdx) {
    var data = [this.data().crony, this.data().ncrony];
    var node, chartContainer;

    node = table.cell(rowIdx, 1).node();
    $(node).css('padding', 0);
    chartContainer = $('<div class="chart-container" id="bar' + rowIdx + '"></div>');
    chartContainer.appendTo(node);
    createDynamicsChart(data, chartContainer);
  });

  //ordering by chart value
  $.fn.dataTable.ext.order['chart'] = function(settings, col) {
    return this.api().column(col, {order: 'index'}).nodes().map(function(td, i) {
      return $(td).find('div')[0].chart.data().get(0, 'value');
    });
  };
});