$(document).ready(function() {
  var i, j, len;
  var headers = ['Name', 'Ticker', 'Cost', 'Change, %', 'Рыночная капитализаия', 'Volume', 'Chart'];
  var data = [
    ['Apple',	'AAPL',	146.28,	0.45, '762.68B', 35439389],
    ['Microsoft', 'MSFT',	71.21,	1.35,	'549.78B', 27617291],
    ['J&J',	'JNJ', 136.43, 0.28,	'367.52B', 9007077],
    ['Exxon Mobil', 'XOM', 81.61,	0.65,	'345.80B', 10611159],
    ['JPMorgan', 'JPM', 86.86,	-0.18,	'308.60B', 18812029],
    ['Wells Fargo Pref L', 'WFC_pl',	1306.2,	-0.61,	'262.11B', 2160],
    ['Wells Fargo&Co', 'WFC', 52.45,  -0.08, '262.11B', 21868452],
    ['General Electric', 'GE', 27.57,  0.07, '239.42B', 31736487],
    ['AT&T', 'T', 37.95,  -0.39, '233.32B', 22906645],
    ['Procter&Gamble', 'PG', 89.42,  0.44, '228.70B', 8782097],
    ['Bank of America', 'BAC', 22.82,  -0.48, '227.10B', 85399612],
    ['Wal-Mart Stores', 'WMT', 74.84,  -0.90, '226.88B', 13080330],
    ['Novartis ADR', 'NVS', 86.34,  0.00, '225.39B', 2199472],
    ['Roche Holding ADR', 'RHHBY', 32.76,  1.42, '224.73B', 2196467],
    ['Visa', 'V', 95.58,  1.74, '220.38B', 11637316],
    ['China Mobile ADR', 'CHL', 53.61,  0.06, '218.91B', 434357],
    ['Royal Dutch Shell ADR',	'RDSa',	52.61,	0.71, '217.10B', 1972577],
    ['Royal Dutch Shell B ADR', 'RDSb',	54.02, 0.43, '217.10B', 3140401],
    ['Oracle', 'ORCL', 50.95,  1.29, '209.64B', 42812545],
    ['Pfizer', 'PFE', 34.17,  0.32, '203.49B', 30046310],
    ['Chevron', 'CVX', 105.00,  0.53, '198.93B', 5773319],
    ['PetroChina ADR', 'PTR', 61.97,  -0.03, '196.49B', 65126],
    ['Coca-Cola', 'KO', 45.25,  0.40, '193.33B', 9544792],
    ['Anheuser-Busch Inbev ADR', 'BUD', 113.30,  -0.04, '190.59B', 908389],
    ['Comcast', 'CMCSA', 39.50,  -1.10, '187.35B', 27861316],
    ['Philip Morris', 'PM', 119.56,  -0.13, '185.69B', 3391441],
    ['Verizon', 'VZ', 45.39,  -0.07, '185.16B', 10069733],
    ['Taiwan Semiconductor', 'TSM', 36.73,  0.05, '184.93B', 5558572],
    ['Merck&Co', 'MRK', 66.16,  0.21, '180.96B', 14093453],
    ['Home Depot', 'HD', 151.31,  -2.68, '180.90B', 11422231],
    ['UnitedHealth', 'UNH', 185.25,  -0.67, '178.52B', 3438489],
    ['Citigroup', 'C', 63.41,  -0.33, '174.58B', 16395259],
    ['HSBC ADR', 'HSBC', 43.36,  0.12, '173.07B', 1158129],
    ['Toyota Motor ADR', 'TM', 105.24,  -0.24, '171.77B', 106361],
    ['PepsiCo', 'PEP', 116.96,  0.70, '167.08B', 3453406],
    ['Unilever ADR', 'UL', 54.350,  0.06, '164.77B', 1778109],
    ['Unilever NV ADR', 'UN', 55.680,  0.14, '164.77B', 1254601],
    ['Walt Disney', 'DIS', 104.36,  0.13, '163.31B', 18147866],
    ['Intel', 'INTC', 34.19,  -0.49, '161.00B', 29260888],
    ['Cisco', 'CSCO', 32.09,  0.75, '160.45B', 25792153],
    ['Altria', 'MO', 76.49,  0.01, '147.75B', 3876672],
    ['IBM', 'IBM', 154.11,  -0.19, '144.79B', 3282205],
    ['Mastercard', 'MA', 124.01,  0.58, '132.92B', 3381548],
    ['SAP ADR', 'SAP', 107.48,  0.39, '131.90B', 596634],
    ['Louis Vuitton ADR', 'LVMUY', 51.860,  0.46, '131.11B', 102854],
    ['British American Tobacco ADR', 'BTI', 70.110,  0.34, '129.97B', 74416],
    ['British American Tobacco ADR', 'BTI', 70.11,  0.34, '129.97B', 957850],
    ['3M', 'MMM', 212.90,  0.32, '127.15B', 1584876],
    ['Amgen', 'AMGN', 172.50,  -0.76, '126.86B', 14368474],
    ['McDonald’s', 'MCD', 154.64,  -0.10, '126.04B', 2214734]
  ];


  var headers_ = '';
  for (i = 0, len = headers.length; i < len; i++) {
    headers_ += '<th>' + headers[i]  + '</th>'
  }
  var thead = '<thead><tr>' + headers_ + '</tr></thead>';


  var data_ = '';
  for (i = 0; i < data.length; i++) {
    data_ += '<tr>';
    for (j = 0; j < data[i].length; j++) {
      data_ += '<td>' + data[i][j] + '</td>'
    }
    data_ += '<td id="chart' + i + '"></td>';
    data_ += '</tr>';
  }
  var tbody = '<tbody>' + data_ + '</tbody>';

  $('#example').append(thead + tbody);


  var chart;
  for (i = 0; i < data.length; i++) {
    // chart = anychart.bullet([20, 10]);
    // chart.height(0);
    // chart.container('chart' + i).draw();
  }


  $('#example').DataTable();
});