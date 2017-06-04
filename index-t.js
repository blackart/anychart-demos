anychart.onDocumentReady(function() {
  stage = anychart.graphics.create('container', 1000, 800);
  stage.suspend();

  path = stage.path();
  path
      .moveTo(100, 200)
      .curveTo(200, 100, 300, 0, 400, 100)
      .curveTo(500, 200, 600, 300, 700, 200)
      // .curveTo(800, 100, 900, 100, 900, 100);

  // var path3 = stage.path();
  // path3
  //     .moveTo(100, 200)
  //     .curveTo(200, 100, 300, 0, 400, 100)
  //     .curveTo(500, 200, 600, 300, 700, 200)
  //     .curveTo(800, 100, 900, 100, 900, 100);


  // var path2 = stage.path().deserialize(path.serializePathArgs());

  text = stage.text();
  text
      .path(path)
      .x(0)
      .y(0)
      .text('This is a long and Supercalifragilisticexpialidocious sentence. 次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉 This is a long and Supercalifragilisticexpialidocious sentence. 次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉 This is a long and Supercalifragilisticexpialidocious sentence. 次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉 This is a long and Supercalifragilisticexpialidocious sentence. 次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉')
      // .text('This is a long and Supercalifragilisticexpialidocious sentence. 次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉')
  //     // .text('Если число протоновпротоновпротоновпротоновпротонов в ядре совпадает с числом электронов, то атом в целом оказывается электрически протоновпротоновпротоновпротоновпротонов.')
  //     // .text('Flessibilità/Adattabilità al cambiamento')
  //     // .text('first chart sdgf isagfo gsaiyf oasdg foiysdagf uhsdaiufg sadi usdi asidfh ipsua   hsdia.')
  //     .width(160)
  //     // .textIndent(150)
  //     // .height(60)
  //     .fontFamily('Times New Roman')
      .fontSize(16)
      .wordWrap('normal')
      .wordBreak('keep-all')
      .textOverflow('...')
      .hAlign('middle')
      .vAlign('middle');
  //
  // // stage.rect(300, 0, 200, 500);
  // stage.rect().setBounds(text.getBounds());

  path2 = stage.path().deserialize(path.serializePathArgs());

  stage.resume();


  text2 = stage.text();
  text2
      // .path(path)
      .x(0)
      .y(400)
      .text('This is a long and Supercalifragilisticexpialidocious sentence. 次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉 This is a long and Supercalifragilisticexpialidocious sentence. 次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉 This is a long and Supercalifragilisticexpialidocious sentence. 次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉 This is a long and Supercalifragilisticexpialidocious sentence. 次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉')
      .width(721.42)
      // .textIndent(150)
      // .height(60)
      // .fontFamily('Times New Roman')
      .fontSize(16)
      .wordWrap('normal')
      .wordBreak('keep-all')
      // .textWrap('byLetter')
      .textOverflow('...')
      .hAlign('middle')
      // .vAlign('middle');


  console.log(path.getLength());
  console.log(path.domElement().getTotalLength());



  // var curve = Bezier.fromSVG(document.getElementById('MyPath').getAttribute('d'));
  // draw(stage, curve);

});


var Bezier = function(coords) {
  var args = (coords && coords.forEach) ? coords : [].slice.call(arguments);
  var len = args.length;
  var points = [];
  for (var idx = 0, step = 2; idx < len; idx += step) {
    var point = {
      x: args[idx],
      y: args[idx + 1]
    };
    points.push(point);
  }

  this.points = points;
  this.order = this.points.length - 1;
};


Bezier.prototype.compute = function(t) {
  var ZERO = {x: 0, y: 0, z: 0};

  // shortcuts
  if (t === 0) {
    return this.points[0];
  }
  if (t === 1) {
    return this.points[this.order];
  }

  var p = this.points;
  var mt = 1 - t;

  // linear?
  if (this.order === 1) {
    ret = {
      x: mt * p[0].x + t * p[1].x,
      y: mt * p[0].y + t * p[1].y
    };
    return ret;
  }

  // quadratic/cubic curve?
  if (this.order < 4) {
    var mt2 = mt * mt,
        t2 = t * t,
        a, b, c, d = 0;
    if (this.order === 2) {
      p = [p[0], p[1], p[2], ZERO];
      a = mt2;
      b = mt * t * 2;
      c = t2;
    }
    else if (this.order === 3) {
      a = mt2 * mt;
      b = mt2 * t * 3;
      c = mt * t2 * 3;
      d = t * t2;
    }
    var ret = {
      x: a * p[0].x + b * p[1].x + c * p[2].x + d * p[3].x,
      y: a * p[0].y + b * p[1].y + c * p[2].y + d * p[3].y
    };
    if (this._3d) {
      ret.z = a * p[0].z + b * p[1].z + c * p[2].z + d * p[3].z;
    }
    return ret;
  }

  // higher order curves: use de Casteljau's computation
  var dCpts = JSON.parse(JSON.stringify(this.points));
  while (dCpts.length > 1) {
    for (var i = 0; i < dCpts.length - 1; i++) {
      dCpts[i] = {
        x: dCpts[i].x + (dCpts[i + 1].x - dCpts[i].x) * t,
        y: dCpts[i].y + (dCpts[i + 1].y - dCpts[i].y) * t
      };
      if (typeof dCpts[i].z !== "undefined") {
        dCpts[i] = dCpts[i].z + (dCpts[i + 1].z - dCpts[i].z) * t
      }
    }
    dCpts.splice(dCpts.length - 1, 1);
  }
  return dCpts[0];
};


Bezier.prototype.getLUT = function(steps) {
  steps = steps || 100;
  if (this._lut && this._lut.length === steps) {
    return this._lut;
  }
  this._lut = [];
  for (var t = 0; t <= steps; t++) {
    this._lut.push(this.compute(t / steps));
  }
  return this._lut;
};


Bezier.fromSVG = function(svgString) {
  var list = svgString.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g).map(parseFloat);
  var relative = /[cq]/.test(svgString);
  if (!relative) return new Bezier(list);
  list = list.map(function(v,i) {
    return i < 2 ? v : v + list[i % 2];
  });
  return new Bezier(list);
};


var draw = function(stage, curve) {
  var steps = 100;

  var pts = curve.getLUT(steps);

  var step = 1 / steps;
  var p0 = curve.points[0], pc;
  var path = stage.path().stroke('red');

  for (var t = step; t < 1.0 + step; t += step) {
    pc = curve.compute(Math.min(t, 1));
    path.moveTo(p0.x, p0.y).lineTo(pc.x, pc.y);
    p0 = pc;
  }

  // var len = curve.length();
  var alen = 0;
  for (var i = 0, p1, dx, dy; i < pts.length - 1; i++) {
    p0 = pts[i];
    p1 = pts[i + 1];
    dx = p1.x - p0.x;
    dy = p1.y - p0.y;
    alen += Math.sqrt(dx * dx + dy * dy);
  }
  alen = ((100 * alen) | 0) / 100;
  // len = ((100 * len) | 0) / 100;
  console.log(alen);
  // api.text("Approximate length, " + api.steps + " steps: " + alen + " (true: " + len + ")", {x: 10, y: 15});
};
    