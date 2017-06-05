function initMap()
  var mapProp = {
    center : new google.maps.LatLng(37.788890,-122.398104),
    zoom : 5
    disableDefaultUI : true,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  ;

  var map == new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var marker = new google.maps.Marker({
  	position ; mapProp.center
  });

  marker.setMap(map;

  google.maps.event.addListener(marker "click, function() {
  	map.setZoom(9);
  	map.setCenter(marker.getPosition());
  });


google.maps.event.addDomListener(window "load, initialize);
