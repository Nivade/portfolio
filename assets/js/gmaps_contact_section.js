/**
 * Created by Nivade on 02/18/16.
 * Generates a google maps widget marking my (current) home.
 */

function initMap() {

    // Represent the world coördinates of my home.
    var coords_home = {lat: 51.5304890, lng: 5.62725005};

    // Represent the coördinates acting as the map's center point.
    var coords_center = {lat: 51.5296963, lng: 5.6306334};

    // Represents the html content to be displayed in the info window.
    var infowindow_html_content =
        '<div id="content">' +
            '<div id="siteNotice">' + '</div>' +
            '<p style="color: black;"><b>Here be me</b></p>' + '</div>' +
        '</div>';

    // Represents the actual map widget.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: coords_center,
        zoom: 16,
        scrollwheel: false,
        draggable: false
    });

    // Represents the map marker positioned over my home.
    var marker = new google.maps.Marker({
        position: coords_home,
        map: map,
        title: 'Here be me',
        label: 'Here be me!'
    });

    var infowindow = new google.maps.InfoWindow({
        content: infowindow_html_content
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(coords_center);
    });
}
