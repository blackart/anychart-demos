
anychart.onDocumentReady(function () {
  stage = acgraph.create('container');

  $('#container').append('<div class="seat-map-title">' +
      '<h1>District Map</h1>' +
      '<p>Source <a href="https://cdn.anychart.com/svg-data/' +
      'seat-map/map.svg"' + 'target="_blank">SVG Image</a>' + '<br>' +
      '</p>' + '</div>').append('<a href="http://www.freepik.com" ' +
      'class="link-freepik">Designed by Freepik</a>');

  // get svg file
  $.ajax({
    type: 'GET',
    url: 'https://cdn.anychart.com/svg-data/seat-map/map.svg',
    // The data that have been used for this sample can be taken from the CDN
    // load SVG image using jQuery ajax
    success: function (svgData) {
      // data for creating a SeatMap
      chart = anychart.seatMap([
        {id: 'gas-station', value: 'Gas station'},
        {id: 'hotel', value: 'Hotel'},
        {id: 'coffee-house', value: 'Coffee House'},
        {id: 'park', value: 'Park'},
        {id: 'restaurant', value: 'Restaurant'}
      ]);
      // set svg data
      chart.geoData(svgData);
      // load svg-file how it looked(colors stroke/fill except
      // for elements of series)
      chart.unboundRegions('as-is')
      // set chart padding
          .padding([85, 0, 20, 0]);

      series = chart.getSeries(0);
      // sets fill series
      series.fill(function () {
        var attrs = this.attributes;

        if (attrs) {
          var class_ = attrs.class;
          if (attrs) {
            switch (class_) {
              case 'ellipse' :
                return 'none';
              default:
                return attrs.fill;
            }
          } else {
            return this.sourceColor;
          }
        }

      });

      // sets stroke series
      series.stroke(function () {
        var attrs = this.attributes;

        return attrs ? attrs.stroke : this.sourceColor;
      });

      // sets fill on hover series
      series.hoverFill(returnColorHoverSelectFill);
      // sets fill on select series
      series.selectFill(returnColorHoverSelectFill);
      // sets stroke on hover stroke
      series.hoverStroke(function () {
        var attrs = this.attributes;

        return attrs ? attrs.stroke : this.sourceColor;
      });

      // settings for chart tooltip
      var tooltip = series.tooltip();
      tooltip.useHtml(true)
          .fontSize(15)
          .title(false)
          .separator(false)
          .format(function () {
            return '<span>' + this.value + '</span>'
          });

      // label info
      var infoLabel = chart.label();
      infoLabel.useHtml(true)
          .padding(10)
          .hAlign('left')
          .fontColor('#212121')
          .position('topRight')
          .anchor('topRight')
          .offsetY(85)
          .offsetX(20)
          .width(165)
          .text('Click on a marker<br>to see<br>more information.');
      infoLabel.background(
          {
            fill: '#FCFCFC',
            stroke: '#E1E1E1',
            corners: 3,
            cornerType: 'ROUND'
          }
      );

      // picture label
      var pictureLabel = chart.label(1);
      pictureLabel.padding(10)
          .background(true)
          .position('topRight')
          .anchor('topRight')
          .offsetY(125)
          .offsetX(40)
          .width(200)
          .height(100)
          .text('');

      chart.listen('pointsSelect', function (points) {
        var point = points.seriesStatus[0].points;

        if (chart.getSelectedPoints().length) {
          var pointIndex = point[0].index;
          // from the CDN https://cdn.anychart.com/csv-data/map-info.js
          var info = mapInfo();
          var state = info[pointIndex];

          pictureLabel.background().fill({
            src: state.picture,
            mode: 'fit'
          });
          pictureLabel.enabled(true).zIndex(100);

          infoLabel.text(
              '<span style="font-size: 16px;">' + state.name +
              '</span><br/><br/><br/><br/><br/><br/><br/><br/><br/>' +
              '<span style="color: #8c8c8c">Address: </span>' + state.address +
              '<br/>' +
              '<span style="color: #8c8c8c">Phone: </span>' + state.phone + '<br/>' +
              hoursOrDescription(point[0].id, state)
          )
              .enabled(true)
              .zIndex(99)
              .width(250);
        }
      });

      // add chartClick listener to hide infoLabel/pictureLabel
      chart.listen('click', function () {
        if (chart.getSelectedPoints().length == 0) {
          infoLabel.enabled(false);
          pictureLabel.enabled(false);
        }
      });

      // set container id for the chart
      chart.container(stage);
      // initiate chart drawing
      chart.draw();
    }
  });
});

function returnColorHoverSelectFill() {
  var attrs = this.attributes;

  if (attrs) {
    var class_ = attrs.class;
    if (attrs) {
      switch (class_) {
        case 'ellipse' :
          return '#546269';
        default:
          return attrs.fill;
      }
    } else {
      return this.sourceColor;
    }
  }
}

function isOpen(date) {
  var d = new Date();
  var min = 60;
  var currentTime = d.getHours() * min + d.getMinutes();
  var openHours = parseInt(date.split('-')[0]);
  var closeHours = parseInt(date.split('-')[1]);

  if (currentTime >= openHours * min && currentTime <= closeHours * min) {
    return 'Open today'
  } else {
    return 'Close today'
  }
}

function hoursOrDescription(id, state) {
  switch (id) {
    case 'park' :
    case 'hotel' :
      return '<span style="color: #8c8c8c">Description: </span>' + state.description;
    case 'gas-station' :
      return '<span style="color: #8c8c8c">Diesel: </span>' + state.diesel + '<br>' +
          '<span style="color: #8c8c8c">Regular: </span>' + state.regular + '<br>' +
          '<span style="color: #8c8c8c">Midgrade: </span>' + state.midgrade + '<br>' +
          '<span style="color: #8c8c8c">Premium: </span>' + state.premium;
    default :
      return '<span style="color: #8c8c8c">Hours: </span>' + state.hours +
          ' | <span><b><i>' + isOpen(state.hours24Format) + '</b></i></span>';
  }
}
    