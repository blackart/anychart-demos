function Convertor() {

};

Convertor.convert = function(data) {
  if (!this.singleton) {
    this.singleton = new Convertor();
  }
  return this.singleton.convert_(data);
};

Convertor.prototype.checkHitZone = function(x, y, polygon) {
  var i, j, rel1, rel2, c = false;

  for (i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    rel1 = polygon[i][1] > y;
    rel2 = polygon[j][1] > y;
    if (rel1 !== rel2 && (x < (polygon[j][0] - polygon[i][0]) * (y - polygon[i][1]) / (polygon[j][1] - polygon[i][1]) + polygon[i][0])) {
      c = !c;
    }
  }

  return c;
};

Convertor.prototype.coordsIterator = function(features, callback) {
  var coord, coord_, point;
  var i, j, k, l;
  var len, len_, len__, len___;

  for (i = 0, len = features.length; i < len; i++) {
    var feature = features[i];
    var coordinates = feature['geometry']['coordinates'];
    var is_multi = feature['geometry']['type'] == 'MultiPolygon';
    if (is_multi) {
      for (j = 0, len_ = coordinates.length; j < len_; j++) {
        coord = coordinates[j];
        for (k = 0, len__ = coord.length; k < len__; k++) {
          coord_ = coord[k];
          for (l = 0, len___ = coord_.length; l < len___; l++) {
            point = coord_[l];
            callback(point);
          }
        }
      }
    } else {
      for (j = 0, len = coordinates.length; j < len; j++) {
        coord = coordinates[j];
        for (l = 0, len_ = coord.length; l < len_; l++) {
          point = coord[l];
          callback(point);
        }
      }
    }
  }
};

Convertor.prototype.scaleCoords = function(features) {
  var max_x = -Number.MAX_VALUE;
  var min_x = Number.MAX_VALUE;
  var max_y = -Number.MAX_VALUE;
  var min_y = Number.MAX_VALUE;

  this.coordsIterator(features, function(point) {
    if (point[0] > max_x)
      max_x = point[0];
    if (point[0] < min_x)
      min_x = point[0];
    if (point[1] > max_y)
      max_y = point[1];
    if (point[1] < min_y)
      min_y = point[1];
  });

  var magic_number = 9999;
  var scale_min_x = Math.abs(magic_number / min_x);
  var scale_max_x = Math.abs(magic_number / max_x);
  var scale_min_y = Math.abs(magic_number / min_y);
  var scale_max_y = Math.abs(magic_number / max_y);

  var multi = Math.min(scale_min_x, scale_max_x, scale_min_y, scale_max_y);

  this.coordsIterator(features, function(point) {
    point[0] = Math.round(point[0] * multi);
    point[1] = Math.round(point[1] * multi);
  });

  return multi
};

Convertor.prototype.hcConvert = function(coord, tx) {
  var x = coord[0];
  var y = coord[1];

  var targetTx = null;
  for (var txName in tx) {
    var tx_ = tx[txName];

    if ('hitZone' in tx_ && this.checkHitZone(x, y, tx_.hitZone.coordinates[0])) {
      targetTx = tx_;
    }
  }
  if (!targetTx)
    targetTx = tx.default;

  var normalized = {
    x: ((x - (targetTx.jsonmarginX || 0)) / (targetTx.jsonres || 1)),
    y: ((y - (targetTx.jsonmarginY || 0)) / (targetTx.jsonres || 1))
  };

  coord[0] = normalized.x;
  coord[1] = normalized.y;


  // x = normalized.x;
  // y = normalized.y;
  // //
  // var xoffset = -targetTx.xoffset * targetTx.scale + (targetTx.xpan || 0);
  // var yoffset = -targetTx.yoffset * targetTx.scale - (targetTx.ypan || 0);
  //
  // x -= xoffset || 0;
  // y -= yoffset || 0;
  //
  // var scale = targetTx.scale;
  // var crs = targetTx.crs;
  //
  //
  // //to wsg84 from any CRS
  // var p = window['proj4'](crs).inverse([x / scale, y / scale]);

  //to CRS from wsg84
  // var p = window['proj4'](crs).forward([x / scale, y / scale]);

  // coord[0] = p[0];
  // coord[1] = p[1];
};

Convertor.prototype.convert_ = function(data) {
  this.data = data;
  this.tx = data['hc-transform'];

  var i, len, ratio;

  switch (data['type']) {
    case 'FeatureCollection':
      if (!data['features']) {
        console.log('FeatureCollection object missing \'features\' member.');
      } else {
        var features = data['features'];
        for (i = 0, len = features.length; i < len; i++) {
          var feature = features[i];
          if (this.tx)
            this.transformCoords(feature['geometry']);
          if ('id' in feature)
            feature['properties']['id'] = feature['id'];
          this.transformProp(feature['properties']);
        }
        // ratio = this.scaleCoords(features);
      }
      break;

    case 'GeometryCollection':
      if (!data['geometries']) {
        console.log('GeometryCollection object missing \'geometries\' member.');
      } else {
        var geometries = data['geometries'];
        for (i = 0, len = geometries.length; i < len; i++) {
          if (this.tx)
            this.transformCoords(geometries[i]);
        }
      }
      break;

    case 'Feature':
      if (!(data['properties'] && data['geometry'])) {
        console.log('Feature object missing \'properties\' or \'geometry\' member.');
      } else {
        if (this.tx)
          this.transformCoords(data['geometry']);
        if ('id' in data)
          data['properties']['id'] = data['id'];
        this.transformProp(data['properties']);
      }
      break;

    case 'Point':
    case 'MultiPoint':
    case 'LineString':
    case 'MultiLineString':
    case 'Polygon':
    case 'MultiPolygon':
      if (data['coordinates']) {
        if (this.tx)
          this.transformCoords(data);
      } else {
        console.log('Geometry object missing \'coordinates\' member.');
      }
      break;

    default:
      console.log('GeoJSON object must be one of \'Point\',' +
          ' \'LineString\', \'Polygon\', \'MultiPolygon\', \'Feature\', \'FeatureCollection\' or \'GeometryCollection\'.');
  }

  data['ac-tx'] = {};

  for (var txName in this.tx) {
    var tx_ = this.tx[txName];
    tx_.xoffset = -tx_.xoffset * tx_.scale + (tx_.xpan || 0);
    tx_.yoffset = -tx_.yoffset * tx_.scale - (tx_.ypan || 0);

    if (tx_.hitZone) {
      this.transformCoords(tx_.hitZone);
      tx_.heatZone = tx_.hitZone.coordinates[0];
    }

    data['ac-tx'][txName] = tx_;
  }
  // data['ac-tx']['ac-ratio'] = ratio;

  return data;
};

Convertor.prototype.transformCoords = function(geosonGeometry) {
  var coord,
      polygon,
      i,
      j;

  var x, y;

  var geoCoords, len, len_;

  switch (geosonGeometry['type']) {
    case 'Point':
      x = geosonGeometry['coordinates'][0];
      y = geosonGeometry['coordinates'][1];
      this.hcConvert(geosonGeometry['coordinates'], this.tx);
      break;

    case 'MultiPoint':
      geoCoords = geosonGeometry['coordinates'];
      for (i = 0, len = geoCoords.length; i < len; i++) {
        x = geoCoords[0];
        y = geoCoords[1];
        this.hcConvert(geoCoords, this.tx);
      }
      break;

    case 'LineString':
      geoCoords = geosonGeometry['coordinates'];
      for (i = 0, len = geoCoords.length; i < len; i++) {
        coord = geoCoords[i];
        x = coord[0];
        y = coord[1];
        this.hcConvert(coord, this.tx);
      }
      break;

    case 'MultiLineString':
      var strings = geosonGeometry['coordinates'];
      for (i = 0, len = strings.length; i < len; i++) {
        geoCoords = strings[i];
        for (j = 0, len_ = geoCoords.length; j < len_; j++) {
          coord = geoCoords[j];
          x = coord[0];
          y = coord[1];
          this.hcConvert(coord, this.tx);
        }
      }
      break;

    case 'Polygon':
      polygon = geosonGeometry['coordinates'];
      for (i = 0, len = polygon.length; i < len; i++) {
        geoCoords = polygon[i];
        for (j = 0, len_ = geoCoords.length; j < len_; j++) {
          coord = geoCoords[j];
          x = coord[0];
          y = coord[1];
          this.hcConvert(coord, this.tx);
        }
      }

      break;

    case 'MultiPolygon':
      var geoPolygons = geosonGeometry['coordinates'];
      for (i = 0, len = geoPolygons.length; i < len; i++) {
        polygon = geoPolygons[i];
        for (j = 0, len_ = polygon.length; j < len_; j++) {
          geoCoords = polygon[j];
          for (var k = 0, len__ = geoCoords.length; k < len__; k++) {
            coord = geoCoords[k];
            x = coord[0];
            y = coord[1];
            this.hcConvert(coord, this.tx);
          }
        }
      }
      break;

    case 'GeometryCollection':
      if (!geosonGeometry['geometries']) {
        console.log('GeometryCollection object missing \'geometries\' member.');
      } else {
        var geometries = geosonGeometry['geometries'];
        for (i = 0, len = geometries.length; i < len; i++) {
          this.transformCoords(geometries[i]);
        }
      }
      break;

    default:
      console.log('Geometry object must be one of \'Point\', \'LineString\', \'Polygon\' or \'MultiPolygon\'.');
      return null;
      break;
  }
  return null;
};

Convertor.prototype.transformProp = function(properties) {
  properties['middle-x'] = properties['hc-middle-x'];
  properties['middle-y'] = properties['hc-middle-y'];
};