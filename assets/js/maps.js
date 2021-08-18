 
 /* map style */

 window.onload = function () {
  var styles = [
    {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          { hue: '#f9e0b7' },
          { lightness: 30 }
        ]
      },{
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          { hue: '#d5c18c' },
          { lightness: 14 }
        ]
      },{
        featureType: 'road.local',
        elementType: 'all',
        stylers: [
          { hue: '#ffd7a6' },
          { saturation: 100 },
          { lightness: -12 }
        ]
      }
  ];
};



/* experiences clusters */
 
 function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat : 46.7111,
            lng: 1.7191,
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [
        {lat: -20.878901, lng: 55.448101},
        {lat: -21.341900, lng: 55.477798}, 

    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position:location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, 
        {imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});
}

/*  Reunion Island 
{lat: -20.878901, lng: 55.448101}, (Saint Denis)
{lat: -21.341900, lng: 55.477798}, (Saint Pierre)

French Guiana 
{lat: 4.937200, lng: -52.326000}, (Cayenne)
{lat: 5.159700, lng: -52.650299}, (Kourou)

*/