function init(){
  // alert('Test to see if it works');
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(41.88129788592486, -87.67421881581986); 
  var mapOptions = {
    center: myLocation,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
    position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
	animation: google.maps.Animation.BOUNCE,
	icon: {
      url: 'images/benny_the_bull.png',
      scaledSize: new google.maps.Size(100,100)
    } 
  });

  var contentString = '<h1>Untied Center</h1><p>United Center is located at 1901 W Madison St, Chicago IL. This is home turf for the Chicago Bulls (my favorite basketball team) & Chicago Blackhawks. Many concerts are also held here.</p>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
  });
  
}

google.maps.event.addDomListener(window, 'load', init);