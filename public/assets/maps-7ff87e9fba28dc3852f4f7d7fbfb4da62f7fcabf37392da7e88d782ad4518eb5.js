/**
 * Created by Nivade on 02/18/16.
 */


function initMap() {
    var map;
    var thuis = {lat: 51.5304890, lng: 5.62725005};
    var center = {lat: 51.5296963, lng: 5.6306334};

    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<p style="color: black;"><b>Here be me</b></p>' +
        '</div>' +
        '</div>';

    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 16,
        scrollwheel: false,
        draggable: false
    });


    var marker = new google.maps.Marker({
        position: thuis,
        map: map,
        title: 'Here be me',
        label: 'Here be me!'
    });

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}
