var headers = ['Name', 'Ticker', 'Cost', 'Changed cost', 'Change, %', 'Chart'];
var data = [
// {id: '', country: 'Total', total2014: 13006451, year2015: [1028647, 958258, 1651602, 1209967, 1152573, 1415303, 1184154, 781939, 1399582, 1138802, 1124964, 1156489]},
  {
    id: 1,
    country: 'Germany',
    total2014: 3036773,
    year2015: [211337, 223254, 323039, 291395, 256385, 313539, 290196, 226314, 272479, 278372, 272377, 247355]
  },
  {
    id: 2,
    country: 'United Kingdom',
    total2014: 2476435,
    year2015: [163856, 76958, 492774, 185778, 198706, 257817, 178420, 79060, 462517, 177664, 178876, 180077]
  },
  {
    id: 3,
    country: 'France',
    total2014: 1795885,
    year2015: [133179, 147584, 196565, 170765, 143771, 225638, 147125, 92048, 164769, 161737, 150334, 183720]
  },
  {
    id: 4,
    country: 'Italy',
    total2014: 1359616,
    year2015: [131858, 135303, 162120, 149653, 147335, 147988, 132096, 59846, 130877, 133650, 134021, 109395]
  },
  {
    id: 5,
    country: 'Spain',
    total2014: 855308,
    year2015: [68119, 86719, 113304, 82716, 94031, 111333, 102922, 55922, 69852, 80055, 81650, 88609]
  },
  {
    id: 6,
    country: 'Belgium',
    total2014: 482939,
    year2015: [47324, 44504, 55245, 51423, 40502, 49426, 36121, 31252, 36725, 39474, 36329, 32741]
  },
  {
    id: 7,
    country: 'Netherlands',
    total2014: 387835,
    year2015: [47652, 33476, 29030, 26666, 27879, 36999, 33908, 30939, 34502, 39006, 40516, 69159]
  },
  {
    id: 8,
    country: 'Poland',
    total2014: 327219,
    year2015: [29673, 28396, 33601, 28526, 27186, 30390, 29654, 23559, 27255, 29062, 30312, 37358]
  },
  {
    id: 9,
    country: 'Sweden',
    total2014: 303948,
    year2015: [20408, 23735, 31590, 30536, 29458, 32257, 24139, 26877, 29653, 31563, 31352, 33540]
  },
  {
    id: 10,
    country: 'Switzerland',
    total2014: 301942,
    year2015: [18400, 22388, 31487, 28982, 27422, 33119, 30228, 23431, 24136, 25236, 26312, 32642]
  },
  {
    id: 11,
    country: 'Austria',
    total2014: 303318,
    year2015: [23427, 20641, 31086, 29500, 26517, 30462, 26917, 22677, 25966, 25149, 23381, 22832]
  },
  {
    id: 12,
    country: 'Czech Rep.',
    total2014: 192314,
    year2015: [15727, 16383, 21155, 20568, 18113, 21315, 21415, 18278, 18056, 19658, 20421, 19768]
  },
  {
    id: 13,
    country: 'Denmark',
    total2014: 189051,
    year2015: [16023, 13595, 19800, 16950, 17048, 21410, 16236, 16192, 17857, 16878, 17098, 18461]
  },
  {
    id: 14,
    country: 'Portugal',
    total2014: 142827,
    year2015: [11852, 14289, 20088, 15013, 18347, 21063, 15554, 9437, 12625, 13718, 13343, 13126]
  },
  {
    id: 15,
    country: 'Norway',
    total2014: 144202,
    year2015: [10523, 10685, 14159, 12782, 12036, 14207, 12394, 12604, 12421, 13197, 12600, 13078]
  },
  {
    id: 16,
    country: 'Ireland',
    total2014: 96344,
    year2015: [29886, 15782, 18861, 9441, 6913, 1451, 27593, 6401, 4770, 2460, 948, 342]
  },
  {
    id: 17,
    country: 'Finland',
    total2014: 106236,
    year2015: [10268, 7990, 11098, 9636, 9117, 8980, 8723, 8402, 8515, 9166, 8992, 7920]
  },
  {
    id: 18,
    country: 'Romania',
    total2014: 70172,
    year2015: [4978, 4116, 5339, 5482, 5927, 8630, 9253, 7362, 5752, 7562, 8022, 8739]
  },
  {
    id: 19,
    country: 'Slovakia',
    total2014: 72249,
    year2015: [4572, 5304, 6718, 6532, 6596, 7455, 7106, 6756, 5969, 6691, 6953, 7316]
  },
  {
    id: 20,
    country: 'Hungary',
    total2014: 67476,
    year2015: [4881, 5893, 6292, 6736, 5875, 7346, 7012, 4997, 6267, 8191, 6590, 7094]
  },
  {
    id: 21,
    country: 'Greece',
    total2014: 71218,
    year2015: [5848, 4894, 6529, 7801, 9071, 8999, 5447, 4470, 5125, 4946, 5859, 6816]
  },
  {
    id: 22,
    country: 'Slovenia',
    total2014: 53296,
    year2015: [5139, 4550, 5958, 5348, 5388, 5467, 5079, 3993, 9827, 173, 5095, 3433]
  },
  {
    id: 23,
    country: 'Luxembourg',
    total2014: 49793,
    year2015: [3205, 3783, 4868, 5046, 4231, 4548, 4334, 2636, 3376, 4398, 3412, 2636]
  },
  {
    id: 24,
    country: 'Croatia',
    total2014: 33997,
    year2015: [2382, 2179, 3400, 3763, 4914, 4647, 3289, 1652, 2123, 2408, 2209, 1855]
  },
  {
    id: 25,
    country: 'Bulgaria',
    total2014: 20359,
    year2015: [1419, 1481, 2108, 1998, 1995, 2540, 2061, 1607, 1872, 1941, 2130, 3141]
  },
  {
    id: 26,
    country: 'Estonia',
    total2014: 20861,
    year2015: [1624, 1223, 1946, 1984, 1712, 1971, 1861, 1524, 1817, 1867, 1552, 1268]
  },
  {
    id: 27,
    country: 'Lithuania',
    total2014: 14503,
    year2015: [1422, 1067, 1269, 1747, 1467, 1591, 1563, 1208, 1530, 1576, 1438, 1207]
  },
  {
    id: 28,
    country: 'Iceland',
    total2014: 9536,
    year2015: [680, 632, 977, 1305, 2614, 2564, 1180, 837, 797, 808, 793, 842]
  },
  {
    id: 29,
    country: 'Latvia',
    total2014: 12452,
    year2015: [1148, 829, 1233, 1238, 1174, 1243, 1237, 1000, 1184, 1291, 1128, 1060]
  },
  {id: 30, country: 'Cyprus', total2014: 8347, year2015: [846, 625, 963, 657, 843, 908, 1091, 658, 968, 905, 921, 959]}
];

function createDynamicsChart(data, container) {
  var chart, chartData;
  chartData = [
    {value: data[0], gap: .7, fill: '#44A4D3'},
    {value: data[1], gap: .2, fill: '#eee'}
  ];
  chart = anychart.pie(chartData);
  chart
      .background(null)
      .padding(1)
      .legend(false)
      .innerRadius(7)
      .credits(false);
  chart.container(container[0]).draw();
  container[0].chart = chart;
}

function createGrossLossChart(data, container) {
  var chart, chartData;
  chartData = [
    {value: data[0], gap: .5, fill: data[0] > 0 ? '#6fb270' : '#dc6b67', stroke: null}
  ];
  chart = anychart.bullet(chartData);
  chart
      .background(null)
      .padding(0)
      .credits(false);
  chart.scale()
      .minimum(-30)
      .maximum(30);
  chart.container(container[0]).draw();
  container[0].chart = chart;
}

$(document).ready(function() {
  $.each(data, function(index, row) {
    var sum = 0;
    $.map(row.year2015, function(n) {
      sum += n;
    });
    row.total2015 = sum;
  });
  anychart.licenseKey('test-key-32db1f79-cc9312c4');
  var dataSet = anychart.data.set(data);
  var chData = dataSet.mapAs(void 0, {'id': 'country', 'value': 'total2015'});
  var colors = [
    '#cd2a27',
    '#b34442',
    '#9c5554',
    '#85605f',
    '#6e6363',
    '#616661',
    '#537557',
    '#3d8244',
    '#23912e',
    '#009e0f'
  ];

  var map = anychart.map();
  map
      .credits(false)
      .geoData('anychart.maps.world')
      .geoIdField('name');
  map.unboundRegions().fill('#444444');
  map.colorRange()
      .enabled(true)
      .orientation('left')
      .align('bottom');
  map.scale()
      .minimumX(-25)
      .maximumX(20)
      .minimumY(50)
      .maximumY(60);
  var chSeries = map.choropleth(chData);
  chSeries.colorScale(anychart.scales.linearColor(colors));
  map.container('map').draw();
  
  //configure table
  var tableContainer = $('#example');
  var table = tableContainer.DataTable({
    data: data,
    // autoWidth: false,
    columns: [
      {
        title: "",
        data: 'id'
      },
      {
        title: "Country",
        data: 'country'
      },
      {
        title: "January",
        data: 'year2015.0'
      },
      {
        title: "February",
        data: 'year2015.1'
      },
      {
        title: "March",
        data: 'year2015.2'
      },
      {
        title: "April",
        data: 'year2015.3'
      },
      {
        title: "May",
        data: 'year2015.4'
      },
      {
        title: "June",
        data: 'year2015.5'
      },
      {
        title: "July",
        data: 'year2015.6'
      },
      {
        title: "August",
        data: 'year2015.7'
      },
      {
        title: "September",
        data: 'year2015.8'
      },
      {
        title: "October",
        data: 'year2015.9'
      },
      {
        title: "November",
        data: 'year2015.10'
      },
      {
        title: "December",
        data: 'year2015.11'
      },
      {
        title: "Dynamics",
        data: function() {
          return "";
        },
        orderDataType: "chart"
      },
      {
        title: "Gross/Loss",
        data: function() {
          return "";
        },
        orderDataType: "chart"
      },
      {
        title: "Total",
        data: 'total2015'
      }
    ],
    columnDefs: [
      {
        targets: 0,
        createdCell: function(td, cellData, rowData, row, col) {
          $(td).css({
            'color': '#888',
            'font-weight': 400,
            'font-size': '14px',
            'padding-left': '14px',
            'width': '20px'
          });
        }
      },
      {
        targets: 1,
        createdCell: function(td, cellData, rowData, row, col) {
          $(td).css({
            'background': '#626262',
            'color': '#fff',
            'font-size': '12px',
            'line-height': '20px',
            'font-family': 'Arial'
          });
        }
      },
      {
        targets: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        createdCell: function(td, cellData, rowData, row, col) {
          $(td).css({
            'width': '65px'
          })
        }
      }
    ]
  });
//initialize charts and render it to table
  table.rows().every(function(rowIdx) {
    var percent = (this.data().total2015 - 2014) / (this.data().total2014 / 100) - 100;
    var data = [percent, 100 - percent];
    var node, chartContainer;

    node = table.cell(rowIdx, 14).node();
    $(node).css('padding', 0);
    chartContainer = $('<div class="pie-chart-container" id="pie' + rowIdx + '"></div>');
    chartContainer.appendTo(node);
    createDynamicsChart(data, chartContainer);

    node = table.cell(rowIdx, 15).node();
    $(node).css('padding', 0);
    chartContainer = $('<div class="bullet-chart-container" id="bullet' + rowIdx + '"></div>');
    chartContainer.appendTo(node);
    createGrossLossChart([percent], chartContainer);
  });

  //ordering by chart value
  $.fn.dataTable.ext.order['chart'] = function(settings, col) {
    return this.api().column(col, {order: 'index'}).nodes().map(function(td, i) {
      return $(td).find('div')[0].chart.data().get(0, 'value');
    });
  };

  tableContainer.on('mouseenter', 'tbody td', function() {
    table.column(this).nodes().to$().addClass('hovered');
  });

  tableContainer.on('click', 'tbody td', function() {
    table.columns().nodes().flatten().to$().removeClass('selected');
    var col = table.column(this);
    col.nodes().to$().addClass('selected');
    var d = [];
    $.each(data, function(index, row) {
      d.push({id: row.country, value: col.data()[index]});
    });
    chSeries.data(d);
    // chSeries.colorScale().resetDataRange();
  });

  tableContainer.on('mouseleave', 'tbody td', function() {
    table.column(this).nodes().to$().removeClass('hovered');
  });
});