 
 /* map style 

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

*/


/* experiences clusters */
 
 function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat : 46.7111,
            lng: 1.7191,
        }
    });

    var labels = "";
    var locations = [
        /* Guadeloupe */
        {lat: 15.99854, lng: -61.72548}, /* Basse Terre, */
        {lat: 16.20685 , lng: -61.49329}, /* Le Gosier, */

        /* Saint Martin */
        {lat: 18.073099, lng: -63.082199}, /* Marigot, */

        /* Saint Barthelemy */
        {lat: 17.900000, lng: -62.8333}, /* Gustavia, */

        /* Martinique */
        {lat: 14.600000, lng: -61.083302}, /* Fort de France, */
 
        /* French Guiana */
        {lat: 4.937200, lng: -52.326000}, /*  Cayenne, */
        {lat: 5.159700, lng: -52.650299}, /*  Kourou, */

        /* Reunion Island */
        {lat: -20.878901, lng: 55.448101}, /*  Saint Denis, Maison de l'écologie */
        {lat: -21.341900, lng: 55.477798}, /*  Saint Pierre, Sakifo */
        {lat: -21.1667, lng: 55.5833}, /*  Plaine des cafres, Cite du Volcan */

        /* Saint Pierre et Miquelon */
        {lat: 47.0975 , lng: -56.3814}, /* Saint Pierre, */

        /* Mayotte */
        {lat: -12.7794, lng: 45.2272}, /* Mamoudzou, */

        /* New Caledonia */
        {lat: -22.275801, lng: 166.457993}, /* Noumea, */

        /* French Polynesia */
        {lat: -17.535000, lng: -149.569600}, /* Papeete, */

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
