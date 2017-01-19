anychart.onDocumentReady(function() {
  anychart.licenseKey("conferenceboard.ca-b7ef3722-1fc03466");
  // create data set on our data
  var dataSet = anychart.data.set([
    ["Dec 13", -8.50, 7.20, 1.24, 109.97, 118.10, 2.38, 4.00, 1.60, 0.89, 5.34, 0.82, 0.94, 185.98, -0.20, 1.74, 4.94, 1.37, 486.33, 496.45],
    ["Jan 14", 13.40, 7.00, 1.48, 110.90, 119.03, 2.47, 3.97, 1.40, 0.89, 5.24, 0.85, 0.91, 181.10, 0.64, 1.77, 4.96, 1.40, 487.48, 493.66],
    ["Feb 14", 6.50, 7.10, 1.14, 111.54, 122.67, 2.39, 3.70, 1.80, 0.87, 5.24, 0.82, 0.90, 195.41, 0.68, 1.78, 5.11, 1.37, 517.82, 508.40],
    ["Mar 14", 25.20, 7.00, 1.55, 111.74, 123.96, 2.53, 2.96, 1.90, 0.88, 4.99, 0.83, 0.90, 160.16, -0.03, 1.79, 5.11, 1.38, 532.32, 513.19],
    ["Apr 14", -15.50, 7.00, 2.04, 112.07, 122.97, 3.13, 3.93, 1.50, 0.94, 4.79, 0.91, 0.91, 196.96, 1.48, 1.83, 5.10, 1.39, 523.81, 520.36],
    ["May 14", -14.70, 7.00, 2.28, 111.66, 121.99, 2.40, 3.73, 1.80, 0.92, 4.79, 0.89, 0.92, 195.39, 0.13, 1.89, 5.19, 1.35, 543.69, 537.78],
    ["Jun 14", 20.20, 7.00, 2.36, 111.64, 123.38, 2.86, 4.38, 1.60, 0.93, 4.79, 0.89, 0.92, 194.99, 1.31, 1.85, 5.19, 1.35, 538.09, 523.32],
    ["Jul 14", 24.70, 7.10, 2.11, 111.50, 119.21, 3.50, 4.66, 1.90, 0.95, 4.79, 0.92, 0.93, 202.84, 0.25, 1.97, 5.29, 1.32, 540.67, 526.76],
    ["Aug 14", -13.90, 7.00, 2.11, 111.47, 118.28, 3.12, 4.12, 2.10, 0.94, 4.79, 0.91, 0.92, 194.97, -0.25, 1.93, 5.13, 1.36, 537.46, 529.45],
    ["Sep 14", 37.50, 6.90, 2.03, 111.29, 115.26, 2.97, 4.11, 1.40, 0.92, 4.79, 0.90, 0.91, 196.15, 0.54, 1.95, 5.24, 1.32, 535.75, 534.24],
    ["Oct 14", 59.80, 6.60, 2.36, 111.01, 111.41, 2.63, 4.11, 1.70, 0.88, 4.79, 0.86, 0.89, 180.51, 0.01, 1.92, 5.21, 1.34, 535.03, 540.90],
    ["Nov 14", -15.30, 6.70, 1.95, 110.67, 107.46, 1.75, 3.12, 1.30, 0.90, 4.79, 0.88, 0.88, 193.18, -0.20, 1.89, 5.12, 1.36, 525.69, 531.18],
    ["Dec 14", -7.80, 6.70, 1.47, 109.61, 103.46, 1.88, 3.19, 1.60, 0.91, 4.79, 0.88, 0.87, 178.94, -0.67, 2.05, 5.20, 1.32, 523.01, 535.37],
    ["Jan 15", 24.20, 6.60, 0.97, 108.59, 93.66, 2.73, 3.36, 1.90, 0.59, 4.79, 0.56, 0.83, 182.92, -3.18, 1.85, 5.00, 1.40, 512.58, 535.40],
    ["Feb 15", 5.30, 6.90, 1.05, 109.96, 96.35, 2.51, 3.82, 1.70, 0.47, 4.74, 0.45, 0.80, 151.32, 2.03, 1.86, 4.96, 1.42, 512.47, 531.96],
    ["Mar 15", 28.90, 6.80, 1.20, 109.82, 95.56, 2.76, 3.66, 1.80, 0.53, 4.74, 0.50, 0.79, 190.71, 1.48, 1.86, 5.11, 1.38, 518.82, 556.54],
    ["Apr 15", -16.50, 6.80, 0.80, 109.66, 98.26, 2.43, 3.69, 1.60, 0.65, 4.64, 0.63, 0.81, 178.73, -0.21, 1.93, 4.99, 1.42, 515.45, 544.95],
    ["May 15", 49.30, 6.80, 0.87, 110.42, 101.25, 1.26, 2.56, 1.60, 0.67, 4.64, 0.65, 0.82, 198.32, 0.92, 1.91, 5.04, 1.41, 514.16, 547.11],
    ["Jun 15", 0.20, 6.80, 1.03, 110.65, 101.42, 1.81, 2.86, 1.60, 0.58, 4.64, 0.56, 0.81, 201.18, 0.63, 1.88, 5.10, 1.39, 541.27, 547.97],
    ["Jul 15", 5.00, 6.80, 1.27, 111.54, 93.51, 1.40, 2.40, 1.40, 0.43, 4.64, 0.40, 0.78, 190.67, 0.38, 1.97, 5.20, 1.38, 545.80, 557.35],
    ["Aug 15", 20.20, 7.00, 1.27, 110.94, 88.86, 0.58, 1.46, 1.20, 0.38, 4.64, 0.31, 0.76, 213.96, 0.36, 1.97, 5.15, 1.40, 534.01, 561.44],
    ["Sep 15", 5.80, 7.10, 1.03, 110.70, 90.70, 1.44, 2.35, 0.80, 0.41, 4.64, 0.39, 0.75, 233.26, -0.01, 2.00, 5.08, 1.40, 528.59, 553.26],
    ["Oct 15", 43.10, 7.00, 1.03, 110.54, 91.03, 1.34, 2.09, 0.90, 0.39, 4.64, 0.37, 0.76, 197.74, 0.17, 2.01, 5.01, 1.43, 516.44, 543.65],
    ["Nov 15", -32.90, 7.00, 1.36, 110.37, 89.61, 1.39, 2.33, 0.70, 0.44, 4.64, 0.32, 0.75, 212.27, 1.25, 1.98, 5.07, 1.41, 520.52, 545.49],
    ["Dec 15", 22.80, 7.10, 1.61, 110.76, 88.70, 1.73, 2.77, 0.80, 0.50, 4.64, 0.27, 0.73, 172.64, -1.92, 2.02, 5.13, 1.38, 539.18, 550.20],
    ["Jan 16", -5.70, 7.20, 2.01, 110.50, 84.55, 0.12, 2.21, 1.40, 0.48, 4.64, 0.22, 0.70, 173.86, 2.09, 2.03, 5.24, 1.35, 548.11, 560.47],
    ["Feb 16", -2.30, 7.30, 1.36, 108.78, 82.38, 0.58, 2.16, 1.60, 0.46, 4.64, 0.15, 0.72, 217.14, 0.52, 2.04, 5.02, 1.40, 517.40, 549.11],
    ["Mar 16", 40.60, 7.10, 1.27, 107.78, 86.46, 0.52, 2.42, 1.30, 0.46, 4.64, 0.17, 0.76, 202.39, -0.83, 2.02, 4.98, 1.40, 498.16, 538.08],
    ["Apr 16", -2.10, 7.10, 1.66, 107.94, 85.98, -0.04, 1.93, 1.20, 0.54, 4.64, 0.31, 0.78, 188.98, 0.78, 2.03, 5.06, 1.38, 498.73, 542.54],
    ["May 16", 13.80, 6.90, 1.50, 109.35, 90.55, 0.78, 2.36, 1.40, 0.55, 4.64, 0.28, 0.77, 187.03, -0.01, 1.88, 5.02, 1.39, 496.04, 540.75],
    ["Jun 16", -0.70, 6.80, 1.49, 109.80, 92.07, 0.34, 2.61, 1.10, 0.49, 4.64, 0.22, 0.78, 219.46, -0.03, 2.02, 5.08, 1.37, 497.05, 544.82],
    ["Jul 16", -31.20, 6.90, 1.26, 110.16, 88.10, -0.13, 1.75, 1.20, 0.50, 4.74, 0.20, 0.77, 196.68, -0.12, 1.91, 5.08, 1.38, 518.06, 544.44],
    ["Aug 16", 26.20, 7.00, 1.10, 109.62, 89.25, 1.35, 3.17, 1.30, 0.51, 4.74, 0.21, 0.77, 183.58, 0.21, 1.93, 5.13, 1.36, 524.41, 549.69],
    ["Sep 16", 67.20, 7.00, 1.34, 110.30, 88.94, 0.20, 2.66, 1.50, 0.53, 4.64, 0.24, 0.76, 218.80, 0.84, 1.97, 5.14, 1.37, 521.57, 572.52],
    ["Oct 16", 43.90, 7.00, 1.49, 111.42, 92.31, 0.02, null, 1.30, 0.50, 4.64, 0.17, 0.75, 192.30, 1.07, 1.90, 5.10, 1.38, 524.84, 537.13],
    ["Nov 16", 10.70, 6.80, 1.18, 111.88, 93.36, null, null, 1.10, 0.51, 4.64, 0.06, 0.74, 184.00, null, null, null, null, 547.37, 541.05],
    ["Dec 16", 53.70, 6.90, null, null, null, null, null, null, 0.47, 4.64, -0.04, 0.75, null, null, null, null, null, null, null]
  ]);

  var fieldNames = ["date", "Employment change", "Unemployment rate", "CPI", "Industrial prices", "Raw material prices", "Average weekly earnings", "Labour income", "Total wage settlements", "3−month T−bill rate", "5−year mortgage rate", "Canada–U.S. 90−day T−bill spread", "Exchange rate", "Housing starts", "Retail sales", "Auto sales", "Shipments", "Inventories−to−shipments", "Merchandise exports", "Merchandise imports"];


  // map data for each series, take x from the zero column and value from the nth column of data set
  var seriesData_1 = dataSet.mapAs({
    x: [0],
    value: [3]
  });
  var seriesData_2 = dataSet.mapAs({
    x: [0],
    value: [8]
  });
  var seriesData_3 = dataSet.mapAs({
    x: [0],
    value: [9]
  });


  // Chart 1 create 1 series chart with primary axis
  chart1 = anychart.line();

  // turn on chart animation
  chart1.animation(true);

  var cboc_corpBlue = "#006792";
  var cboc_blue = "#00b6de";
  var cboc_lightBlue = "#b9e0f7";
  var cboc_yellow = "#fdb913";
  var cboc_lightYellow = "#ffe49d";





  // create first series with mapped data
  var series_1 = chart1.column(seriesData_1);
  series_1.name(fieldNames[1]);
  series_1.hoverMarkers().enabled(true).type('circle').size(4);
  series_1.tooltip().position('right').anchor('left').offsetX(5).offsetY(5);
  series_1.fill(cboc_blue);
  series_1.stroke('2 red');

  var series_2 = chart1.line(seriesData_2);
  series_2.name(fieldNames[2]);
  series_2.hoverMarkers().enabled(true).type('circle').size(4);
  series_2.tooltip().position('right').anchor('left').offsetX(5).offsetY(5);
  series_2.stroke('2 green');

  var series_3 = chart1.area(seriesData_3);
  series_3.name(fieldNames[2]);
  series_3.hoverMarkers().enabled(true).type('circle').size(4);
  series_3.tooltip().position('right').anchor('left').offsetX(5).offsetY(5);
  series_3.fill(cboc_blue);
  series_3.stroke('2 yellow');




  // turn on the crosshair
  chart1.crosshair().enabled(true).yLabel().enabled(false);
  chart1.crosshair().xLabel().fontFamily("Arial").fontSize(12);
  chart1.crosshair().yStroke(null);

  // set tooltip mode to point
  chart1.tooltip().positionMode('point');
  chart1.tooltip().fontFamily("Arial").fontSize(12);
  chart1.tooltip().title().fontFamily("Arial").fontSize(14);

  // set chart title text settings
  //chart1.title("1 Labour Market 1");
  chart1.title().padding([0, 0, 5, 0]);
  chart1.title().fontFamily("Arial").fontSize(14);

  // set Primary yAxis
  //var chart1yAxisLeft = chart1.yAxis();
  chart1.yAxis().title(fieldNames[1]);
  chart1.yAxis().labels().fontFamily("Arial").fontSize(12);
  chart1.yAxis().title().fontFamily("Arial").fontSize(12);
  chart1.yAxis().stroke(null);

  //chart1labelsy.fontFamily("Courier");
  //chart1labelsy.fontSize(9);


  chart1.xAxis().labels().padding([5]);
  chart1.xAxis().labels().fontFamily("Arial").fontSize(12);

  // turn the legend on
  chart1.legend().enabled(true).fontFamily("Arial").fontSize(12).padding([10, 20, 20, 0]);
  var legend1 = chart1.legend();
  legend1.iconSize(8); // sets hover cursor

  var chart1grid = chart1.grid();
  chart1grid.enabled(true);
  chart1.credits().enabled(false);


  // set container id for the chart and set up paddings
  chart1.container('container1');
  chart1.padding([10, 10, 25, 0]);
  chart1.margin([0]);

  // initiate chart drawing
  chart1.draw();
});