anychart.onDocumentReady(function () {

  // This sample uses 3rd party proj4 component
  // that makes it possible to set coordinates
  // for the points and labels on the map and
  // required for custom projections and grid labels formatting.
  // See https://docs.anychart.com/latest/Maps/Map_Projections

  // create the dataset of points that are defined by latitude and longtitude values
  var data = [
    {lat: 33.75, long: -112.18, name: "Stepford", value: 321},
    {lat: 37.50, long: -101.52, name: "Metropolis", value: 293},
    {lat: 43.12, long: -108.62, name: "Haddonfield", value: 312},
    {lat: 28.89, long: -100.09, name: "Marlberry", value: 198},
    {lat: 33.28, long: -84.28, name: "Sunnydale", value: 309},
    {lat: 39.21, long: -116.44, name: "Landmark", value: 215},
    {lat: 32.26, long: -99.88, name: "Springfield", value: 219},
    {lat: 43.63, long: -90.37, name: "Vice City", value: 179},
    {lat: 21.35, long: -157.83, name: "Honolulu, Hawaii", value: 179},
    {lat: 19.729722, long: -155.09, name: "Hilo, Hawaii", value: 179},
    {lat: 20.879343, long: -156.665039, name: "Lahaina, Hawaii", value: 179},
    {lat: 22.207749, long: -159.488525, name: "Princeville, Hawaii", value: 179},
    {lat: 63.93, long: -146.10, name: "Alaska", value: 179},
    {lat: 61.217381, long: -149.863129, name: "Anchorage, Alaska", value: 179}
  ];


  map = anychart.map();
  map.geoData(anychart.maps.united_states_of_america);

  // Creates the marker series
  var series_acme = map.marker(data);

  // format the tooltips
  series_acme.tooltip().titleFormat("{%name} of ACME Corp.");
  series_acme.tooltip().format("Yearly profit: ${%value}m");

  // format the labels
  series_acme.labels().format("{%name} branch");
  series_acme.labels().fontSize(14);
  series_acme.labels().fontColor("#000");
  series_acme.labels().fontFamily("Georgia");

  // hovered and selected labels
  series_acme.hovered().labels().fontSize(12);
  series_acme.hovered().labels().fontColor("#660000");
  series_acme.selected().labels().fontSize(12);
  series_acme.selected().labels().fontColor("#660000");

  map.title("Formatting the labels and tooltips in hovered state");

  map.container("container");
  map.draw();
});
