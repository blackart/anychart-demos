var indexSeriesList = {};
var dimenstionIds = {
  BUName: [],
  PortfolioName: [],
  StrategyName: []
}
var app = angular.module('myModule', []);
app.directive('ngDetailByIndex', ['$timeout', '$filter', '$document', '$compile', '$parse', '$http', '$interval',
  function($timeout, $filter, $document, $compile, $parse, $http, $interval) {
    return {
      template: '<div id="container"></div>',
      scope: {},
      link: function($scope, $element, $attrs) {
        $scope.indexList = ["Index1", "Index2", "Index3", "Index4", "Index5", "Index6", "Index7", "Index8", "Index9", "Index10", "Index11", "Index12", "Index13", "Index14", "Index15", "Index16"];
        $interval(function() {
          var dateTime = new Date("01/01/2005");
          var result = [];
          for (var k = 0; k < 200; k++) {
            dateTime.setDate(dateTime.getDate() + 1);
            var row = {
              "time": anychart.format.dateTime(dateTime, 'MMddyyyy'),
              pnl_data: [],
              exp_data: []
            };
            for (var i = 1; i < 20; i++) {
              var newObj = {
                buid: 1111, pid: 2222,
                sid: 3333
              };
              var newObjExp = {
                buid: 1111, pid: 2222,
                sid: 3333
              };
              $scope.indexList.forEach(function(index) {
                newObj[index] = Math.random() * 10000;
                newObjExp[index] = Math.random() * 10000;
              });
              row.pnl_data.push(newObj);
              row.exp_data.push(newObjExp);
            }
            result.push(row);
          }
          if ($scope.anyChart == undefined) {
            $scope.createAnyChart();
          }
          if ($scope.table != undefined) {
            $scope.table.addData(result);
          }
        }, 50);
        $scope.tables = {};
        $scope.tabID = 1;
        $scope.element = $element;
        $scope.chartType = "PNL";//"PNL";
        $scope.chart = anychart.stock();
        $scope.createAnyChart = function(_data) {
          anychart.licenseKey('valprime-cf833744-575386c5');
          anychart.theme(anychart.themes.darkEarth);
          // initializing a table with some data
          // we should tell the table the datetime pattern, since it's non-standard
          $($element).find("#container").html('');
          // now we have three mappings with the values we want and we can plot them
          $scope.chart = anychart.stock();
          var credits = $scope.chart.credits();
          credits.enabled(false);
          $scope.chart.background().fill('black');
          $scope.chart.palette = anychart.palettes.default;
          var currentPlot = $scope.chart.plot();
          currentPlot.grid(0, {axis: currentPlot.xAxis()});
          // Enable grid by index 1.
          currentPlot.grid(1, true);
          currentPlot.legend().itemsTextFormatter(function(obj) {
            return this.seriesName;
          });
          currentPlot.legend().paginator(false);
          indexSeriesList = {};
          if ($scope.table == undefined) {
            $scope.table = anychart.data.table('time', 'MMddyyyy');
          }
          var computer = $scope.getDetailByIndexComputer2($scope.table, $scope.indexList, "pnl_data");
          var colorCount = 0;
          $scope.indexList.forEach(function(prop) {
            var indexSeries = $scope.chart.plot(0).line();
            //seriesPnl.markers(true);
            indexSeries.name(prop);
            indexSeries.stroke(colores_google(colorCount));
            colorCount++;
            if ($scope.chartType == "PNL") {
              indexSeries.tooltip({
                textFormatter: function() {
                  return this.seriesName + ":$" + this.value;
                }
              });
            }
            else {
              indexSeries.tooltip({
                textFormatter: function() {
                  return this.seriesName + ":$" + this.value;
                }
              });
            }
            var mapping = $scope.table.mapAs({
              'value': computer.getFieldIndex(prop)
            });
            indexSeries.data(mapping);
            indexSeriesList[prop] = indexSeries;
          });
          $scope.chart.plot(0).yAxis(0).labels(false);//.textFormatter('{%Value}{scale:true}');
          $scope.chart.plot(0).xAxis().labels(false).minorLabels(false);
          $scope.chart.scroller().xAxis().labels(false).minorLabels(false);
          $scope.chart.plot(0).legend(true);
          $scope.chart.container('container');
          $scope.chart.draw();
          // rangeSelector.render(document.getElementById("container"));
          $scope.anyChart = $scope.chart;
        };
        $scope.getDetailByIndexComputer2 = function(table, indexNameList, dataSource) {
          var buids = dimenstionIds["BUName"]; //"20011, 2012".split(/[^0-9]+/).map(parseFloat);
          var pids = dimenstionIds["PortfolioName"];
          ;// "20033, 20035".split(/[^0-9]+/).map(parseFloat);
          var sids = dimenstionIds["StrategyName"];
          ;// "23342, 23341, 23501".split(/[^0-9]+/).map(parseFloat);
          var _indexNameList = indexNameList;
          // creating a mapping for the table to be used in computer
          var computerInputMapping = table.mapAs({
            data: {
              column: dataSource,
              type: 'list'
            }
          });
          // creating a computer on the table
          var computer = table.createComputer(computerInputMapping);
          var blankBuket = {};
          _indexNameList.forEach(function(indexName) {
            computer.addOutputField(indexName);
            blankBuket[indexName] = 0;
          });
          // we do not need a context or startFunction for this computer, because it doesn't
          // need to pass any data between points calculation calls.
          // this function will be called for each point of data
          computer.setCalculationFunction(function(row) {
            var i, v, pnl = 0, exp = 0;
            // here we will get PNL in two variations:
            // if the data is not grouped - we will get original value - an array of objects
            // if the data is grouped - we will get a list grouping - an array of array of objects
            for (var prop in blankBuket) {
              blankBuket[prop] = 0;
            }
            var data = row.get('data');
            for (i = 0; i < data.length; i++) {
              var val = data[i];
              if (val.length) { // checking if it is an array
                for (var j = 0; j < val.length; j++) {
                  // v is an object with PNL, BUID and PID fields
                  v = val[j];
                  if ((buids.length == 0 || buids.indexOf(v.buid) >= 0) &&
                      (pids.length == 0 || pids.indexOf(v.pid) >= 0) &&
                      (sids.length == 0 || sids.indexOf(v.sid) >= 0)) {
                    _indexNameList.forEach(function(indexName) {
                      if (v[indexName] != undefined) {
                        blankBuket[indexName] += v[indexName];
                      }
                    });
                  }
                }
              } else {
                // val is an object with PNL, BUID and PID fields
                v = val;
                if ((buids.length == 0 || buids.indexOf(v.buid) >= 0) &&
                    (pids.length == 0 || pids.indexOf(v.pid) >= 0) &&
                    (sids.length == 0 || sids.indexOf(v.sid) >= 0)) {
                  _indexNameList.forEach(function(indexName) {
                    if (v[indexName] != undefined) {
                      blankBuket[indexName] += v[indexName];
                    }
                  });
                }
              }
            }
            _indexNameList.forEach(function(indexName) {
              row.set(indexName, blankBuket[indexName]);
            });
          });
          return computer;
        }
      }
    }
  }]);


// colores usados por Google en sus graficos, trends, etc.
function colores_google(n) {
  var colores_g = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"];
  return colores_g[n % colores_g.length];
}