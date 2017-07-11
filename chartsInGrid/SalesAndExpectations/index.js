var data = [
  ['Apple',	'AAPL',	146.28,	5.45],
  ['Microsoft', 'MSFT',	71.21,	2.35],
  ['J&J',	'JNJ', 136.43, 4.28],
  ['Exxon Mobil', 'XOM', 81.61,	3.65],
  ['JPMorgan', 'JPM', 86.86,	-2.18],
  ['Wells Fargo Pref L', 'WFC_pl',	1306.2,	-7.61],
  ['Wells Fargo&Co', 'WFC', 52.45,  -1.08],
  ['General Electric', 'GE', 27.57,  10.07],
  ['AT&T', 'T', 37.95,  -8.39],
  ['Procter&Gamble', 'PG', 89.42,  3.44],
  ['Bank of America', 'BAC', 22.82,  -5.48],
  ['Wal-Mart Stores', 'WMT', 74.84,  -1.90],
  ['Novartis ADR', 'NVS', 86.34,  6.00],
  ['Roche Holding ADR', 'RHHBY', 32.76,  7.42],
  ['Visa', 'V', 95.58,  1.74],
  ['China Mobile ADR', 'CHL', 53.61,  11.06],
  ['Royal Dutch Shell ADR',	'RDSa',	52.61,	2.71],
  ['Royal Dutch Shell B ADR', 'RDSb',	54.02, 1.43],
  ['Oracle', 'ORCL', 50.95,  5.29],
  ['Pfizer', 'PFE', 34.17,  8.32],
  ['Chevron', 'CVX', 105.00,  15.53],
  ['PetroChina ADR', 'PTR', 61.97, 2.23 ],
  ['Coca-Cola', 'KO', 45.25,  0.40],
  ['Anheuser-Busch Inbev ADR', 'BUD', 113.30,  -4.04],
  ['Comcast', 'CMCSA', 39.50,  -4.10],
  ['Philip Morris', 'PM', 119.56,  -1.13],
  ['Verizon', 'VZ', 45.39,  -2.07],
  ['Taiwan Semiconductor', 'TSM', 36.73,  3.05],
  ['Merck&Co', 'MRK', 66.16,  7.21],
  ['Home Depot', 'HD', 151.31,  -4.68],
  ['UnitedHealth', 'UNH', 185.25,  -11.67],
  ['Citigroup', 'C', 63.41,  -12.33],
  ['HSBC ADR', 'HSBC', 43.36,  3.12],
  ['Toyota Motor ADR', 'TM', 105.24, 4.56],
  ['PepsiCo', 'PEP', 116.96,  0.70],
  ['Unilever ADR', 'UL', 54.350,  2.06],
  ['Unilever NV ADR', 'UN', 55.680,  1.14],
  ['Walt Disney', 'DIS', 104.36,  5.13],
  ['Intel', 'INTC', 34.19,  -6.49],
  ['Cisco', 'CSCO', 32.09,  2.75],
  ['Altria', 'MO', 76.49,  3.01],
  ['IBM', 'IBM', 154.11,  -1.19],
  ['Mastercard', 'MA', 124.01,  6.58],
  ['SAP ADR', 'SAP', 107.48,  3.39],
  ['Louis Vuitton ADR', 'LVMUY', 51.860,  1.46],
  ['British American Tobacco ADR', 'BTI', 70.110,  6.34],
  ['3M', 'MMM', 212.90,  3.32],
  ['Amgen', 'AMGN', 172.50,  -1.76],
  ['McDonald’s', 'MCD', 154.64,  -2.10]
];

function createChart(data, container) {
  var chart, chartData;
  chartData = [
    {value: data[0], gap: .7, fill: '#545f69', stroke: null},
    {value: data[1], gap: .2, fill: '#545f69', stroke: '2 545f69'}
  ];
  chart = anychart.bullet(chartData);
  chart
      .background(null)
      .padding(0);
  chart.container(container[0]).draw();
  container[0].chart = chart;
}

$(document).ready(function() {
  var table = ($('#example')).DataTable( {
    data: data,
    select: true,
    columns: [
      {title: "Name"},
      {title: "Ticker"},
      {title: "Cost"},
      {title: "Change, %"},
      {
        title: "Changed cost",
        data: function(row, type, set, meta) {
          return (row[2] + (row[2] * row[3] / 100)).toFixed(2);
        }
      },
      {
        title: "Chart",
        data: function(row, type, set, meta) {
          return "";
        },
        orderDataType: "chart"
      }
    ]
  });

  table.rows().every(function (rowIdx) {
    var node = table.cell(rowIdx, 5).node();
    var data = [this.data()[2], parseFloat(table.cell(rowIdx, 4).data())];
    var chartContainer = $('<div class="chart-container" id="chart' + rowIdx + '"></div>');
    chartContainer.appendTo(node);
    createChart(data, chartContainer);
  });

  $.fn.dataTable.ext.order['chart'] = function(settings, col) {
    return this.api().column(col, {order: 'index'}).nodes().map(function(td, i) {
      return $(td).find('div')[0].chart.data().get(0, 'value');
    });
  }
});