 
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

/* dropdown destination selection */


function optionClicked(){
    let destinationPicked = document.getElementById("dropdownMenuLink").value;
    if(destinationPicked == 'guadeloupe'){
        div.innerHTML = `"Welcome to Guadeloupe\n
        Guadeloupe is an archipelago and overseas department and region of France in the Caribbean.\n
        Whether walking through lively village streets, touring country lanes or gliding between island by ferry, Guadeloupe serves up a rich menu of unique cultural experiences."`;
    }else if(destinationPicked == 'saintmartin'){
        div.innerHTML = `"Welcome to Saint Martin\n"
        The culture of Saint Martin is a blend of its African, French, British, and Dutch heritage.\n
        Saint Martin is known to be the capital of duty free and gastronomy in the Caribbean. The warm hospitality of its people, its diversity and its varied cultural activities all allowed it to be nicknamed the "Friendly Island"`;
    }else if(destinationPicked == 'saintbarthelemy'){
        div.innerHTML = `"Welcome to Saint Barthelemy\n
        Also called Saint Barth, Saint Barthelemy is a small tourism-oriented island in the Caribbean with remarkable natural scenery.\n
        “Toi Là! Je t'aime!” has become the adopted motto of St. Barths and it's simply a tribute to the island's warm character and welcoming spirit."`;
    }else if(destinationPicked == 'martinique'){
        div.innerHTML = `"Welcome to Martinique\n
        Martinique boasts a whole world of natural wonders. The beautiful island offers a seductive mix of magnificent beaches, dramatic mountains, tropical gardens, and fascinating history."`;
    }else if(destinationPicked == 'frenchguiana'){
        div.innerHTML = `"Welcome to French Guiana\n
        Located between the Republic of Suriname and Brazil, French Guiana is a kingdom of forests, rivers and animals and seduces all nature lovers"`;
    }else if(destinationPicked == 'reunionisland'){
        div.innerHTML = `"Welcome to Reunion Island\n
        located in the Archipelago of Mascareignes, Reunion Island offers an infinite number of amazing sites and contrasting landscapes.\n
        The island is known for the spectacular Piton de la Fournaise, an active basaltic volcano. "`;
    }else if(destinationPicked == 'saintpierreetmiquelon'){
        div.innerHTML = `"Welcome to Saint Pierre et Miquelon\n
        Between the friendly bonjours and the delicate pastries come and discover these two beautiful islands, a real piece of France in North America"`;
    }else if(destinationPicked == 'mayotte'){
        div.innerHTML = `"Welcome to Mayotte\n
        The island of Mayotte has an abundance of endemic fauna and flora. It is an authentic island to visit in the Indian Ocean."`;
    }else if(destinationPicked == 'newcaledonia'){
        div.innerHTML = `"Welcome to New Caledonia\n
        Located in the world’s largest lagoon and possessing the second-largest barrier reef, New Caledonia has so much to offer. "`;
    }else if(destinationPicked == 'frenchpolynesia'){
        div.innerHTML = `"Welcome to French Polynesia\n
        Exotic wildlife, impeccable cuisine, welcoming locals, French Polynesia is your new tropical vacation destination."`;
    }else{
        alert("You must pick a destination.");
    }
}

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
