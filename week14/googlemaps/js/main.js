function initialize() {
  // set map properties
  var mapProp = {
    center : new google.maps.LatLng(37.788890,-122.398104),
    zoom : 5,
    disableDefaultUI : true,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };
  // add map to screen
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  // create marker
  var marker = new google.maps.Marker({
    // set center to mapProp.center value
  	position : mapProp.center
  });

  // add marker to map
  marker.setMap(map);

  // add event to a marker
  google.maps.event.addListener(marker, "click", function() {
    // increase zoom amount
  	map.setZoom(9);
    // choose center based on marker varible
  	map.setCenter(marker.getPosition());
  });
};

// add on load to the browser window
google.maps.event.addDomListener(window, "load", initialize);
