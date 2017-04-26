$(document).ready(function() {

  var mapFields = {};
  $.each(anychart.maps, function(key, value) {
    var fields = mapFields[key] = {};
    $('#properties').append('<span style="padding: 5px">' + key + '</span><input type="button" id="' + key + '" value="save"/>');
    $('#' + key).on('click', function(e) {
      Convertor.iterateProperties(value, function(prop, item) {
        var newProp = {};
        $.each(prop, function(key, value) {
          if (fields[key] && !fields[key].drop) {
            newProp[fields[key].name] = value;
          }
        });
        item.properties = newProp;
      });
      console.log(JSON.stringify(value));
    });

    Convertor.iterateProperties(value, function(prop, item) {
      $.each(prop, function(key, value) {
        if (!fields[key]) {
          fields[key] = {name: key, drop: false};

          var container = $('<div></div>')
              .attr('id', key);

          var drop = $('<input/>')
              .attr('type', 'checkbox')
              .attr('checked', 'checked')
              .on('change', function(e) {
                var k = key;
                fields[k].drop = !$(this).is(':checked');
              });

          var name = $('<input/>')
              .attr('type', 'text')
              .attr('value', key)
              .on('change', function(e) {
                var k = key;
                fields[k].name = $(this).val();
              });

          container.append(drop);
          container.append(name);
          $('#properties').append(container);
        }
      });
    });
  });

  console.log(mapFields);
});
