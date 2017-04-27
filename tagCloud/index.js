var chart;


anychart.onDocumentReady(function () {
  chart = anychart.tagCloud();

  // var str = 'Detailed in the first story of the Archronicus, the main premise of Dota 2 is the endless war between the Radiant and Dire ancients. They are two greater fragments of a primordial, imprisoned into a single moon by the third fragment, Zet. This prison became known as the Mad Moon, pictured at the top right of this page. The image is from the Archronicus, and is the only clear depiction of the ancients in their imprisoned form. The name Mad Moon is derived from the appearance of a single eye with a wicked smile (tilted 90 degrees in the image) and the description of the bright and violent radiance it gave off. The ancients were eventually torn apart into several smaller fragments when their prison fell from outer space and onto the world below. The scattered shards covered the planet, which became known as the Nemesis Stones. The two ancients, although broken, still resolve to destroy each other due to being opposite forces that weaken when close together. The influence exerted by these glowing stones brainwash common beings into doing their bidding, which become lane creeps. Beings of stronger will are Heroes, who can resist the influence of the ancients and remain themselves in the presence of the nemesis stones. Heroes tend to align with one of the two ancients, but may decide to fight for the other ancient regardless of their lore. Shopkeepers and Neutral Creeps appear to be resistant to the influence of the ancients as well.'
  var str = $('#war').val();

  chart.data(str, {mode: 'byWord', minLength: 16, maxItems: 250});
  chart.container('container').draw();
});
