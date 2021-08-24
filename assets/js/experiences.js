// events data per destination

const destinations = {
    "Guadeloupe" : {
        events: [{          
            name : "Sustainable Cities Conference",
			description : "Learn how Guadeloupe is starting the green revolution to prepare the world of tomorrow",
			price : "free",
            date : "Sep 22, 2021",
			localTime: "10.00 am",
            city: "Basse Terre",
            location :[15.99854, -61.72548]
        },

		{          
            name : "Carribean Festival",
			description : "Dicover the music of the Carribeans. Plastic free concert.",
			price : "15 eur per person",
            date : "Oct 15, 2021",
			localTime: "06.00 pm",
            city: "Le Gosier",
            location :[16.20685, -61.49329]
        },
    ],
        descriptions: {
			title : "Welcome to Guadeloupe",
            summary : "Guadeloupe is an archipelago and overseas department and region of France in the Caribbean. Whether walking through lively village streets, touring country lanes or gliding between island by ferry, Guadeloupe serves up a rich menu of unique cultural experiences.",
            toLink : "https://www.lesilesdeguadeloupe.com/tourisme/fr-fr/",
            image : "assets/css/images/destinations/guadeloupe.jpeg",
        },
    
    },

	"Saint Martin" : {
        events: [{          
            name : "Marigot's beach clean up",
			description : "Join us this Sunday to clean up Marigot's beach. ",
			price : "free",
            date : "Aug 22, 2021",
			localTime: "09.00 am",
            city: "Marigot",
            location :[18.073099, -63.082199]
        },
    ],
        descriptions: {
			title : "Welcome to Saint Martin",
            summary : "The culture of Saint Martin is a blend of its African, French, British, and Dutch heritage.Saint Martin is known to be the capital of duty free and gastronomy in the Caribbean. The warm hospitality of its people, its diversity and its varied cultural activities all allowed it to be nicknamed the 'Friendly Island'",
            toLink : "https://www.st-martin.org/",
            image : "assets/css/images/destinations/saint-martin.jpeg",    
        },
    
    },

	"Saint Barthelemy" : {
        events: [{          
            name : "Saint Barth's Marathon",
			description : "This year, Saint Barth's Marathon is running for the Climate. Join us!",
			price : "10 eur per person",
            date : "Sep 5, 2021",
			localTime: "10.00 am",
            city: "Gustavia",
            location :[17.900000, -62.8333]
        },
    ],
        descriptions: {
            title : "Welcome to Saint Barthelemy",
            summary: "Beaches with turquoise water near luxuriant nature and one of the best healthy and natural gastronomies in the world, Saint Barthelemy, also called saint Barts is a small tourism-oriented island in the Caribbean with remarkable natural scenery. Visit Saint Barts with an endless trail in the French caribean island.",
            toLink : "https://www.saintbarth-tourisme.com/",
            image : "assets/css/images/destinations/saint-barthelemy.jpeg",

        },
    
    },

	"Martinique" : {
        events: [{          
            name : "Fort de France eBike tour",
			description : "Visit the beautiful city of Fort de France in a sustainable way.  ",
			price : "8 eur per person",
            date : "Aug 31, 2021",
			localTime: "10.00 am",
            city: "Fort de France",
            location :[14.600000, -61.083302]
        },

		{          
            name : " Petit Manoir Culinary trip",
			description : "Taste and feel the exciting flavors of Martinique.",
			price : "20 EUR per person",
            date : "Aug 31, 2021",
			localTime: "10.00 am",
            city: "Le Lamentin",
            location :[14.614367, -61.011064]
        },
    ],
        descriptions: {
            title : "Welcome to Martinique",
            summary : "Lauded as the best Caribbean vacation destination, Martinique or “Madinina” to the Caribbean Indians, is located in the heart of the Caribbean archipelago, and is part of the Lesser Antilles, or 'Windward Islands'. Martinique boasts a whole world of natural wonders. The beautiful island offers a seductive mix of magnificent beaches, dramatic mountains and tropical gardens.",
            toLink : "https://www.martinique.org/node/35905/ORGMAR972V500ENJ/detail/fort-de-france/office-de-tourisme-centre-de-martinique",
            image : "assets/css/images/destinations/martinique.jpeg",
        },
    
    },

	"French Guiana" : {
        events: [{          
            name : "Cayenne Chili Festival",
			description : "Challenge your taste buds with the famous Cayenne Chili ",
			price : "free",
            date : "Oct 10, 2021",
			localTime: "10.00 am",
            city: "Cayenne",
            location :[4.9371143, -52.3258307]
        },

		{          
            name : "Guided visit of Monkey mountain",
			description : "Meet different species of monkeys during this memorable half day trip",
			price: "15 eur per person",
            date : "Sep 2, 2021",
			localTime: "02.00 pm",
            city: "Kourou",
            location :[5.159700, -52.650299]
        },
    ],
        descriptions: {
            title : "Welcome to French Guiana",
            summary : "Located between the Republic of Suriname and Brazil, French Guiana is a paradise for ecotourism and a kingdom of forests, rivers and animals and seduces all nature lovers. Here, the dream is inevitably immense. The first symbol of this destination is the European Spatial Center in Kourou, which helps to open the doors of knowledge of the universe",
            toLink : "https://www.guyane-amazonie.fr/",
            image : "assets/css/images/destinations/frenchguiana.jpeg",
        },
    
    },

	"Reunion Island" : {
        events: [{          
            name : "Sakifo Music Festival",
			description : "Dance to the music of the world. First year, plastice free.",
			price : "20 eur per person",
            date : "Nov 20, 2021",
			localTime: "06.00 pm",
            city: "Saint Pierre",
            location :[-21.341900, 55.477798]
        },

		{          
            name : "La Maison de l'Ecologie",
			description : "Come and learn about the biodiversity protection in Reunion Island .",
            price : "5 eur per person",
            date : "Oct 24, 2021",
			localTime: "09.00 am",
            city: "Saint Denis",
            location :[-20.878901, 55.448101]
        },

		{          
            name : "La Cite du Volcan",
			description : "The museum welcomes you with new activities, spectacles and a specific section on preserving the volcano biodiversity",
			price :" 8 eur per person",
            date : "Aug 25, 2021",
			localTime: "10.00 am",
            city: "Plaines des Cafres",
            location :[-21.1667, 55.5833]
        },
    ],
        descriptions: {
            title : "Welcome to Reunion Island",
            summary : "It’s possible to combine protecting nature with tourism! And this is exactly the sort of holiday you can enjoy on Reunion Island. With 40 per cent of the island designated by UNESCO as a World Heritage Site, protecting nature has become a real priority here. Reunion Island offers an infinite number of amazing sites and contrasting landscapes. The island is known for the spectacular Piton de la Fournaise, an active basaltic volcano.",
            toLink : "https://www.reunion.fr/",
            image : "assets/css/images/destinations/reunion-island.jpeg",
        },
    
    },

	"Saint Pierre et Miquelon" : {
        events: [{          
            name : "La Ferme Urbaine de Paulette ",
			description : "Visit this atypic sustainable farm in the middle of the city. Activity feeding the animals possible",
			price: "free",
            date : "Sep 2, 2021",
			localTime: "02.00 pm",
            city: "Miquelon Langlade",
            location :[47.0975, -56.3814]
        },
    ],
        descriptions: {
            title : "Welcome to Saint Pierre et Miquelon",
            summary : "A trip to the French islands of Saint-Pierre and Miquelon is a must for anyone planning travel in eastern Newfoundland. The winding narrow streets of Saint-Pierre are filled with vibrant shops and must-try restaurants. Between the friendly bonjours and the delicate pastries come and discover the two beautiful islands of Saint Pierre et Miquelon, a real piece of France in North America.",
            toLink : "http://www.spm-tourisme.fr/",
            image : "assets/css/images/destinations/saintpierreetmiquelon.jpeg",
        },
    
    },

	"Mayotte" : {
        events: [{          
            name : "Mamoudzou Beach Cleaning",
			description : "Join Mamoudzou Climate Association to help clean up the beach. Gloves and bags provided.",
			price : "free",
            date : "Aug 30, 2021",
			localTime: "02.00 pm",
            city: "Mamoudzou",
            location :[-12.7804169, 45.2279184]
        },
    ],
        descriptions: {
            title : "Welcome to Mayotte",
            summary : "The island of Mayotte has an abundance of endemic fauna and flora. Wherever you are, you are sure to find beautiful beaches. Fans of snorkelling will be able to see various types of turtles as well as numerous tropical fish in the lagoon. Mayotte's ecosystem holds botanical treasures like the ylang-ylang flower, which is very scented, coconut and breadfruit trees. ",
            toLink : "https://www.mayotte-tourisme.com/",
            image : "assets/css/images/destinations/mayotte.jpeg",
        },
    
    },

	"New Caledonia" : {
        events: [{          
            name : "Coral Park Noumea ",
			description : "Learn about corals life and discover how the park is contributing to rebuild the barrier reef",
			price : "5 eur per person",
            date : "Sep 6, 2021",
			localTime: "10.00 am",
            city: "Noumea",
            location :[-22.275801, 166.457993]
        },
    ],
        descriptions: {
            title : "Welcome to New Caledonia",
            summary : "New Caledonia is like nowhere else:  a lagoon registered on the Unesco world heritage list. A main island, Grande Terre, with spectacular natural scenery, a true adventure playground. Jaw-dropping islands will reveal the perfect combination of amazing landscapes and superb hospitality.",
            toLink : "https://www.nouvellecaledonie.travel/fr/offices-tourisme",
            image : "assets/css/images/destinations/newcaledonia.jpeg",

        },
    
    },

	"French Polynesia" : {
        events: [{          
            name : "Papeete Pearl Farming",
			description : "Discover pearl sustainable farming, respecting the animals life",
			price : "7 eur per person",
            date : "Sep 22, 2021",
			localTime: "02.00 pm",
            city: "Papeete",
            location :[-17.53733, -149.5665]
        },
    ],
        descriptions: {
            title : "Welcome to French Polynesia",
            summary : "Follow Paul Gauguin to the middle of the Pacific Ocean. The five archipelagoes of French Polynesia contain 118 islands - 76 of them inhabited - and just as many landscapes, from volcanoes to coral reefs. Exotic wildlife, impeccable cuisine, welcoming locals, French Polynesia is your new tropical vacation destination.",
            toLink : "https://tahititourisme.fr/fr-fr/",
            image : "assets/css/images/destinations/frenchpolynesia.jpeg",

        },
    
    },   


    "Wallis et Futuna" : {
        events: [{          
            name : "Wallis's Vegan Festival",
			description : "Level up the way you eat without compromising the flavours of Wallis.",
			price : "3 eur per person",
            date : "Sep 7, 2021",
			localTime: "02.00 pm",
            city: "Matā'utu",
            location :[13.282509, -176.176447]
        },
    ],
        descriptions: {
            title : "Welcome to Wallis et Futuna",
            summary : "Wallis and Futuna is a collection of three islands and various tiny islets that offer visitors the opportunity to bask in the beauty of unspoilt nature, while maintaining the comforts of home. Wallis is completely surrounded by coral reefs, creating a lagoon-like appearance between the reef and the shores of the beach. Be the first to set foot in these volcanic and paradisiacal lands.",
            toLink : "https://www.wallis-et-futuna.wf/voyager",
            image : "assets/css/images/destinations/wallisetfutuna.jpeg",

        },
    
    },   

    "Terres Australes" : {
        events: [{          
            name : "Expedition : An ice world",
			description : "Discover a world of ice and come say hello to penguins in their environment",
			price : "1500 eur per person - 1 week",
            date : "Oct 22, 2021",
			localTime: "09.00 am",
            city: "Terre Adelie",
            location :[-43.762953, 63.884533]
        },
    ],
        descriptions: {
            title : "Welcome to Terres Australes",
            summary : "'Stopovers at the end of the world', a beautiful journey through southern and Antarctic lands",
            toLink : "https://taaf.fr/acceder-aux-territoires/tourisme-a-bord-du-marion-dufresne/participer-a-une-rotation/",
            image : "assets/css/images/destinations/terresaustrales.jpeg",
        },
    
    },   


};


// Initializing the dropdown list

$(document).ready(function () {
    $("#dropdown-list a").on("click", function (event) {
        event.preventDefault();
        var destinationName = $(this).text();
        loadDestination(destinationName);

    });

});

// Keep selection in dropdown 

$("#dropdown-list a").click(function(){
    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  });



// Loading destination events markers


const france = {
    lat : 46.7111,
    lng: 1.7191,
};
const zoomLevel = 3;

const map = L.map('mapid').setView([france.lat, france.lng],zoomLevel);
// 
let markers = [];
// 

function loadDestination(destinationName){
    // 
    if (markers.length > 0) {
        for(let i = 0; i < markers.length; i++) {
            map.removeLayer(markers[i]);
        }
    
        markers = [];
    }
    // 

    const destination = destinations[destinationName];
    console.log(destination.events);
    console.log(map);
    var events = destination.events;

    for (let i = 0; i < events.length; i++) {
        const event = events[i];
        const location = event.location;
        // 
        const marker = new L.marker(location);
        markers.push(marker);
        // 
        marker.addTo(map)
            .bindPopup(`<span style="color:#146A84;"><strong>${event.name}</strong></span><br>
            <span style="color: #146A84;"><small><em>${event.description}</em></small></span><br>
            <span><small><i class="far fa-clock"></i> ${event.date} - ${event.localTime}</small></span><br>
            <span><small><i class="fas fa-map-pin"></i> ${event.city} </small></span><br>
            <span><small><i class="fas fa-money-bill"></i> ${event.price}</small></span>`)
            .openPopup();

        document.querySelector('#destination-info').innerHTML = `<span style="color:#146A84; font-weight: 300; font-size: 20px; margin-top:10px;">${destination.descriptions.summary}
        <a href="${destination.descriptions.toLink}" style="color:#BEC0C2; text-decoration:"underline" target="_blank">read more</a></span><br>
        <img src="${destination.descriptions.image}" style="border-radius:2%; margin-top:10px; width: 300px;"></img>`;
    } 
}


// rendering leaflet map

function init () {
    
    const mainLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZmxvcmVuY2Vtem4iLCJhIjoiY2tzaXhjeXB2MjhiNDJ1cXRqbWhob3c1NiJ9.D_23R3oBTJcVFRjDiASpVA'
    });

    mainLayer.addTo(map);
 
}



