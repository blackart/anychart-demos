var generateData, getData;

anychart.onDocumentReady(function () {
  var preloader = anychart.ui.preloader();
  preloader.render();

  var general_data = getGeneralData();
  var regions_data = getRegionsData();

  map = anychart.map();

  map.unboundRegions()
      .enabled(true)
      .fill('#E1E1E1')
      .stroke('#D2D2D2');

  // sets geo data
  map.geoData(anychart.maps.china);

  // sets title settings
  map.title()
      .useHtml(true)
      .enabled(true)
      .padding([0, 0, 20, 0])
      .text('ACME Online Shop Popularity in China by Region<br/><span style="color:#212121; font-size: 13px;">' +
          'Popularity estimated by the number of orders in the last year. ' +
          '<br> To drill up Press Backspace button or use context menu</span>');

  var menu = map.contextMenu();
  // add item DrillUp for context menu
  menu.itemsFormatter(function (items) {
    var path = map.getDrilldownPath();

    items.unshift({
      text: 'Drill Up',
      eventType: 'drillUp'
    });

    path.length <= 1 ? items[0].enabled = false : items[0].enabled = true;

    return items
  });

  // sets settings for map chart
  map.padding([10, 10, 10, 10]);
  map.interactivity().selectionMode("none");

  var series = map.choropleth(general_data)
      .stroke('#fff9c4')
      .colorScale(anychart.scales.linearColor('#fff9c4', '#fbc02d', '#e64a19', '#dd2c00'));
  series.tooltip()
      .enabled(true)
      .useHtml(true)
      .padding([8, 13, 10, 13])
      .fontSize(13)
      .titleFormat(function () {
        return this.getData('name');
      })
      .format(function () {
        return '<span style="font-size: 12px; color: #cbcbcb">Orders:</span> ' +
            this.getData("value") + '<span style="font-size: 12px; color: #cbcbcb"></span>';
      });

  map.colorRange(true);

  // create zoom controls
  var zoomController = anychart.ui.zoom();
  zoomController.render(map);

  map.container('container');

  map.draw();

  map.listen('pointClick', function (evt) {
    var point = evt.point;
    var id = point.get('id');
    var name = point.get('name');
    var url_name = point.get('name').toLowerCase().replace(/\s/g, '_');

    if (regions_data[id]) {
      var url = 'https://cdn.anychart.com/geodata/1.2.0/china_areas/' + url_name + '/' + url_name + '.js';
      $.ajax({
        type: "GET",
        url: url,
        dataType: "script",
        beforeSend: function () {
          preloader.visible(true);
        },
        success: function () {
          var geoData = 'anychart.maps.' + url_name;
          var drillMap = anychart.map();
          var drillDownTitle = 'Orders from ACME Online Shop in <span style="color:#212121; font-weight: bold">' + name + '</span><br/><span style="color:#212121; font-size: 13px;">Average number of orders by month. <br> To drill up Press Backspace button or use context menu</span>';
          drillMap.padding([10, 10, 10, 10]);
          drillMap.title().enabled(true).padding([0, 0, 20, 0]).useHtml(true).text(drillDownTitle);
          drillMap.geoData(geoData);

          var dataSet = anychart.data.set(regions_data[id]).mapAs();
          var series = drillMap.choropleth(dataSet);
          series.stroke('#fff9c4');
          series.colorScale(anychart.scales.linearColor('#fff9c4', '#fbc02d', '#e64a19', '#dd2c00'));
          series.tooltip().titleFormat(function () {
            return this.getData('name');
          });
          series.tooltip().enabled(true).useHtml(true).padding([8, 13, 10, 13]).fontSize(13).format(function () {
            return '<span style="font-size: 12px; color: #cbcbcb">Orders:</span> ' + this.getData("value") + '<span style="font-size: 12px; color: #cbcbcb"></span>';
          });
          map.drillTo(id, drillMap);
          preloader.visible(false);
        },
        error: function (data) {
          console.log('Error: ', data);
        }
      });
    }
  });

  // event context-menu for drillUp click
  menu.listen('drillUp', function () {
    map.drillUp();
  });
});