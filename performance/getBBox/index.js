var chart, rowHeight, colWidth, stage;
var n = 10000;
var texts = [];
var times = []
var t1, t2, bbox;

createSVGElement = function(tag) {
  return document.createElementNS('http://www.w3.org/2000/svg', tag);
};


function measure() {
  for (var i = 0; i < n; i++) {
    // alpha = 90 / n * i;
    // x = 100 * Math.cos(alpha * Math.PI / 180);
    // y = 100 * Math.sin(alpha * Math.PI / 180);

    // text = createSVGElement('path');
    // text.setAttribute('d', 'M0,0L' + x + ',' + y);
    // text.setAttribute('stroke', 'red');
    // svg.appendChild(text);



    var text = texts[i];
    // text.setAttribute('x', i * 10);
    // text.setAttribute('y', 100);

    // text.setAttribute('transform', 'translate(' + i * 10 + ',' + 100 + ')');
    // t1 = Date.now();
    // bbox = text.getBBox();
    // t2 = Date.now();
    // times.push({time: t2 - t1, bbox: bbox});

    bbox = text.getBounds();
  }

  for (var i = 0; i < n; i++) {
    var text = texts[i];
    text.setPosition(100, 50 + i * 15);
  }
}


var container = document.getElementById('container');
var svg = createSVGElement('svg');
container.appendChild(svg);


var time1 = Date.now();
for (var i = 0; i < n; i++) {
  // text = createSVGElement('text');
  // textNode = document.createTextNode(i);
  // text.appendChild(textNode);
  // text.innerHTML = i;
  // svg.appendChild(text);

  text = new anychart.core.ui.Text();
  text.text(i);
  text.applySettings();
  text.renderTo(svg);


  // alpha = 90 / n * i;
  // x = 100 * Math.cos(alpha * Math.PI / 180);
  // y = 100 * Math.sin(alpha * Math.PI / 180);
  //
  // text = createSVGElement('path');
  // text.setAttribute('d', 'M0,0L' + x + ',' + y);
  // text.setAttribute('stroke', 'red');
  // svg.appendChild(text);

  texts.push(text);

  // bbox = texts[i].getBBox();
}

measure()

var time2 = Date.now();
console.log(time2 - time1);
