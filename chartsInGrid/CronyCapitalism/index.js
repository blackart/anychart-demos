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

function createDynamicsChart(scale, data, container) {
  var chart, chartData;
  chartData = [
    {value: data[0], fill: '#60B3E2', country: data[2]},
    {value: data[1], fill: '#dc6b67', country: data[2]}
  ];
  chart = anychart.bar(chartData);
  chart.tooltip()
      .titleFormat(function() {
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
        title: "Country",
        data: 'country',
        width: '20%'
      },
      {
        title: "",
        data: function() {
          return "";
        },
        orderDataType: "chart",
        width: '80%'
      }
    ]
  });

  //initialize charts and render it to table
  table.rows().every(function(rowIdx) {
    var data = [this.data().crony, this.data().ncrony, this.data().country];
    var node, chartContainer;

    node = table.cell(rowIdx, 1).node();
    $(node).css('padding', 0);
    chartContainer = $('<div class="chart-container" id="bar' + rowIdx + '"></div>');
    chartContainer.appendTo(node);
    createDynamicsChart(scale, data, chartContainer);
  });

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