/* function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat : 46.619261,
            lng: -33.134766,
        }
    });
    var labels = "Event 1";
    var locations = [
        {lat: 40.785091, lng: -73.968285},
        {lat: 41.0840045, lng: -73.874245},
        {lat: 40.754932, lng: -73.984016},

    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position:location,
            label: labels[i % labels.length]
        });
    });

    new MarkerClusterer(map, markers, {
        imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}

*/


var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();