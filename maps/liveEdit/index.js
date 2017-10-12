var stage, map, chart, s1, s2, s3, s, axis, cs, cr, series;
var selectedRegions = [];
var scale, scaleInp, scaleEnd;
var min = 0, max = 350;
var startX, startY;
var stage, chart, series;
var currentElProp;
var cdn_url = 'http://cdn.anychart.com/geodata/1.2.0/countries/';

var randomExt = function(a, b) {
  return Math.round(Math.random() * (b - a + 1) + a);
};

var generateData = function() {
  var data = [];
  features = chart.geoData()['features'];
  for (var i = 0, len = features.length; i < len; i++) {
    var feature = features[i];
    if (feature['properties']) {
      id = feature['properties'][chart.geoIdField()];
      data.push({'id': id, 'value': randomExt(min, max), size: randomExt(1, 100)});
    }
  }
  return data;
};

var maps = {
};

var mapProjections = {
  BONNE: 'bonne',
  ECKERT1: 'eckert1',
  ECKERT3: 'eckert3',
  FAHEY: 'fahey',
  HAMMER: 'hammer',
  AITOFF: 'aitoff',
  MERCATOR: 'mercator',
  ORTHOGRAPHIC: 'orthographic',
  ROBINSON: 'robinson',
  WAGNER6: 'wagner6',
  WSG84: 'wsg84',
  EQUIRECTANGULAR: 'equirectangular',
  AUGUST: 'august'
};

function getMaps(list) {
  var countries = list['countries'];
  var keys = Object.keys(countries);

  for (var i = 0; i < keys.length; i++) {
    maps[keys[i]] = cdn_url + keys[i] + '/' + countries[keys[i]]['js'];
  }

  $(document).ready(function() {
    init();
  });
}

(function() {
  $.ajax({
    type: 'GET',
    url: 'http://cdn.anychart.com/geodata/1.2.0/countries.json',
    success: function(json) {
      getMaps(json);
    }
  });
})();

function createChosen(parent, id, label, description, items, opt_formatter, opt_callback) {
  var form = $('<div class="form-horizontal"></div>');
  form.append('<div class="form-group"><div class="col-xs-3"><label class="control-label" for="' + id + '">' + label + '</label></div><div class="col-xs-9"><select class="chosen-select" data-placeholder="' + description + '" id="' + id + '"></select></div></div>');
  $(parent).append(form);

  var chosen = $('#' + id);

  var type = typeof items;
  var isObject = type == 'object' && items != null || type == 'function';
  var option_text;

  if (isObject) {
    for (var item in items) {
      chosen.append('<option value="' + items[item] + '">' + item + '</option>');
    }
  } else {
    for (var i = 0, len = items.length; i < len; i++) {
      item = items[i];
      option_text = opt_formatter ? opt_formatter(item) : item;
      chosen.append('<option value="' + item + '">' + option_text + '</option>');
    }
  }

  var callChain = id.split('_');
  var entry = chart;
  var value;

  for (i = 0, len = callChain.length; i < len; i++) {
    var obj = callChain[i];
    if (i == callChain.length - 1) {
      value = entry[obj]();
    } else {
      entry = entry[obj]();
    }
  }
  chosen.val(value);
  chosen.chosen({width: '100%'});
  chosen.trigger("chosen:updated");

  var callback = opt_callback ? opt_callback :
      function(e) {
        var id_ = $(this).attr('id');
        var value = $(this).val();
        var callChain = id_.split('_');

        var entry = chart;
        for (var i = 0, len = callChain.length; i < len; i++) {
          var obj = callChain[i];
          if (i == callChain.length - 1) {
            entry[obj](value);
          } else {
            entry = entry[obj]();
          }
        }
      };
  chosen.chosen().change(callback);

  return form;
}

function drawMap() {
  stage = anychart.graphics.create('container');

  chart = anychart.map();
  chart.geoData('anychart.maps.france');
  chart.interactivity().drag(false);
  chart.crsAnimation(false);

  var dataSet = anychart.data.set([]);

  series = chart.choropleth(dataSet);
  series.labels()
      .format(function() {return this.getDataValue('id');})
      .enabled(false);

  series.tooltip(false);
  chart.axes(true);
  chart.crosshair(true);

  chart.container(stage).draw();

  var data = [];
  var features = chart.geoData()['features'];
  for (var i = 0, len = features.length; i < len; i++) {
    var feature = features[i];
    if (feature['properties']) {
      var id = feature['properties'][chart.geoIdField()];
      data.push({'id': id, 'title': feature['properties']['code_hasc'], 'value': randomExt(100, 1000)});
    }
  }
  dataSet.data(data);
}


function createProjectionsChoosen() {
  $('#crs').parents('.form-horizontal').remove();

  var acTx = chart.geoData()['ac-tx'];
  $.each(acTx, function(k, v) {
    mapProjections[v.crs] = v.crs;
  });

  var choosenEl = createChosen('.control-panel', 'crs', 'Projection', 'Choose your projection ...', mapProjections, void 0, function(e) {
    var crs = $('#crs option:selected').val();

    stage.suspend();
    if (selectedRegions.length) {
      var id = selectedRegions[0].properties[chart.geoIdField()];
      chart.featureCrs(id, crs);
    } else {
      chart.crs(crs);
    }
    chart.geoData(chart.toGeoJSON());
    stage.resume();
  });

  $('.control-panel').prepend(choosenEl);
}

function createControls() {
  createProjectionsChoosen();
  createChosen('.control-panel', 'geoData', 'Geo data', 'Choose map ...', maps, void 0, function(e) {
    var id_ = $(this).attr('id');
    var value = $(this).val();
    var text = $(this).find('option:selected').text();
    var callChain = id_.split('_');

    var url = value;
    geoData = 'anychart.maps.' + text.toLowerCase();

    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'script',
      success: function() {
        stage.suspend();
        var entry = chart;
        for (var i = 0, len = callChain.length; i < len; i++) {
          var obj = callChain[i];
          if (i == callChain.length - 1) {
            entry[obj](geoData);
          } else {
            entry = entry[obj]();
          }
        }
        chart.getSeries(0).data(generateData());
        createProjectionsChoosen();
        stage.resume();
      }
    });
  });

  var form = $('<div class="form-horizontal"></div>');
  form.append('<div class="form-group">' +
      '<div class="col-xs-3"><label class="control-label" for="scale">Scale</label></div>' +
      '<div class="col-xs-5"><input type="range" step=".00001" id="scale" class="form-control"></div>' +
      '<div class="col-xs-4"><input value="1" id="scaleInp" class="form-control input-sm"/></div>' +
      '</div>');
  $('.control-panel').append(form);

  var form = $('<div class="form-horizontal"></div>');
  form.append('<div class="form-group">' +
      '<div class="col-xs-3"><input id="exportToGeoJSON" type="button" class="btn btn-success btn-xs" value="save"/></div>' +
      '<div class="col-xs-9">' +
      '<input id="undoBtn" type="button" class="btn btn-success btn-xs" value="undo"/><input id="redoBtn" type="button" class="btn btn-success btn-xs" value="redo"/>' +
      '</div>' +
      '</div>');
  $('.control-panel').append(form);
                     
  $('#geoData')
      .val(maps['france'])
      .trigger("chosen:updated");

  var defaultScale = chart.geoData()['ac-tx'] && chart.geoData()['ac-tx']['default'] && chart.geoData()['ac-tx']['default']['scale'] ?
      chart.geoData()['ac-tx']['default']['scale'] || anychart.charts.Map.DEFAULT_TX['default']['scale'] :
      anychart.charts.Map.DEFAULT_TX['default']['scale'];

  $('#scale').val(defaultScale);
  $('#scale').attr({min: defaultScale / 10, max: defaultScale * 10})
  $('#scaleInp').val(defaultScale);
}

function makeListeners() {
  chart.listen('pointsselect', function(e) {
    selectedRegions = e.seriesStatus[0].points;
    var defaultCrs = chart.geoData()['ac-tx'] && chart.geoData()['ac-tx']['default'] && chart.geoData()['ac-tx']['default']['crs'] ?
        chart.geoData()['ac-tx']['default']['crs'] :
        anychart.charts.Map.DEFAULT_TX['default']['crs'];

    var defaultScale = chart.geoData()['ac-tx'] && chart.geoData()['ac-tx']['default'] && chart.geoData()['ac-tx']['default']['scale'] ?
        chart.geoData()['ac-tx']['default']['scale'] || anychart.charts.Map.DEFAULT_TX['default']['scale'] :
        anychart.charts.Map.DEFAULT_TX['default']['scale'];

    var featureName = '';
    if (!selectedRegions.length) {
      $('#scale').val(defaultScale);
      $('#scaleInp').val(defaultScale);
      $('#crs').val(chart.crs()).trigger("chosen:updated");;
    } else {
      var scaleFactor = e.point.scaleFactor();
      var crs = e.point.crs()

      var prop = e.point.getFeatureProp();
      featureName = prop[chart.geoIdField()];

      $('#scale').val(scaleFactor);
      $('#scale').attr({min: scaleFactor / 10, max: scaleFactor * 10})
      $('#scaleInp').val(scaleFactor);
      $('#crs').val(crs).trigger("chosen:updated");
    }

    $('#featureId').text(featureName);
  });

  chart.listen('chartdraw', function(e) {
    var iterator = series.data().getIterator();

    var startX, startY, drag;
    while (iterator.advance()) {
      var pointEl = iterator.meta('currentPointElement');
      var el = pointEl.domElement;
      var prop = pointEl.properties;

      el.drag(true).cursor('hand');

      el.listenOnce('start', function(e) {
        startX = e.clientX;
        startY = e.clientY;

        currentElProp = prop;
      }, false, prop);

      el.listenOnce('drag', function() {
        chart.crosshair(false);
      });

      el.listenOnce('end', function(e) {
        stage.suspend();

        chart.crosshair(true);
        var dx = e.clientX - startX;
        var dy = e.clientY - startY;

        if (dx || dy) {
          chart.translateFeature(this[chart.geoIdField()], dx, dy);
          chart.geoData(chart.toGeoJSON());
        }

        stage.resume();
      }, false, prop);
    }
  });

  $(document).mousemove(function(e) {
    // var scaled = chart.scale().pxToScale(e.clientX, e.clientY);
    var coords = chart.globalToLocal(e.clientX, e.clientY);
    var latLon = chart.inverseTransform(coords.x, coords.y);

    $('#tooltip').css({'left': e.clientX + 15, 'top': e.clientY + 15})
        .show()
        .html(
            'Client coords: ' + e.clientX + ' , ' + e.clientY + '<br>' +
            // 'Scaled: ' + scaled[0] + ' , ' + scaled[1] + '<br>' +
            'Lat: ' + latLon.lat.toFixed(4) + ' , ' + 'Lon: ' + latLon.long.toFixed(4)
        );
  });

  $(document).mouseout(function(e) {
    $('#tooltip').html('').hide();
  });

  $('#exportToGeoJSON').click(function(e) {
    var json = "window['anychart']=window['anychart']||{};window['anychart']['maps']=window['anychart']['maps']||{};window['anychart']['maps']['map']=" + JSON.stringify(chart.toGeoJSON());
    var blob = new Blob([json], {type: "application/javascript;charset=utf-8"});
    saveAs(blob, "map.js");
  });

  $('#applyChanges').click(function(e) {
    chart.geoData(chart.toGeoJSON());
  });

  $('#scale').on('input', function(e) {
    var region = selectedRegions[0];
    if (region) {
      var value = $(this).val();
      $('#scaleInp').val(value);
      chart.featureScaleFactor(region.properties[chart.geoIdField()], value);
    }
  });

  $('#scale').on('mouseup', function(e) {
    chart.geoData(chart.toGeoJSON());
  });

  $('#scaleInp').on('change', function(e) {
    var region = selectedRegions[0];
    if (region) {
      var value = $(this).val();
      $('#scale').val(value);
      chart.featureScaleFactor(region.properties[chart.geoIdField()], value);
      chart.geoData(chart.toGeoJSON());
    }
  });
}

function init() {
  $(document).ready(function() {
    $('body').append('<div id="tooltip"></div>');
    $('#tooltip')
        .css({
          'position': 'absolute',
          'z-index': 1000,
          'pointerEvents': 'none',
          'font-size': '14px'
        });

    drawMap();
    createControls();
    makeListeners();
  });
}

