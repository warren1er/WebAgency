var map; 
function initMap(){
      var webagency = {lat: 48.8731628, lng: 2.349824300000023};
    map = new google.maps.Map(document.getElementById('map'),{
        center: webagency,
        zoom: 13
    });
    var marker = new google.maps.Marker({
        position: webagency,
        map: map
    });
}