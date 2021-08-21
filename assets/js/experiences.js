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
			description : "Dicover the music of the Carribeans. Plastic fre concert. ",
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
            summary: "Saint Barthelemy, also called saint Barth is a small tourism-oriented island in the Caribbean with remarkable natural scenery.",
            toLink : "https://www.saintbarth-tourisme.com/",

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
            summary : "Martinique boasts a whole world of natural wonders. The beautiful island offers a seductive mix of magnificent beaches, dramatic mountains, tropical gardens, and fascinating history.",
            toLink : "https://www.saintbarth-tourisme.com/",
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
            summary : "Located between the Republic of Suriname and Brazil, French Guiana is a kingdom of forests, rivers and animals and seduces all nature lovers. It is also well knonw for its famous cayenne chilli pepper",
            toLink : "https://www.guyane-amazonie.fr/",
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
            summary : "Located in the Archipelago of Mascareignes, Reunion Island offers an infinite number of amazing sites and contrasting landscapes. The island is known for the spectacular Piton de la Fournaise, an active basaltic volcano.",
            toLink : "https://www.reunion.fr/"
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
            summary : "Between the friendly bonjours and the delicate pastries come and discover these two beautiful islands, a real piece of France in North America",
            toLink : "http://www.spm-tourisme.fr/",
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
            summary : "The island of Mayotte has an abundance of endemic fauna and flora. It is an authentic island to visit in the Indian Ocean.",
            toLink : "https://www.mayotte-tourisme.com/",
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
            summary : "Located in the world’s largest lagoon and possessing the second-largest barrier reef, New Caledonia has so much to offer.",
            toLink : "https://www.nouvellecaledonie.travel/fr/offices-tourisme",

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
            summary : "Exotic wildlife, impeccable cuisine, welcoming locals, French Polynesia is your new tropical vacation destination.",
            toLink : "https://tahititourisme.fr/fr-fr/",

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
            summary : "Be the first to set foot in these volcanic and paradisiacal lands.",
            toLink : "https://www.wallis-et-futuna.wf/voyager",

        },
    
    },   

    "Terres Australes" : {
        events: [{          
            name : "Expedition : A ice world",
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

        },
    
    },   


}


// Initializing the dropdown list

$(document).ready(function () {
    $("#dropdown-list a").on("click", function (event) {
        event.preventDefault();
        var destinationName = $(this).text();
        loadDestination(destinationName);

    })

})

// Keep selection in dropdown 

$("#dropdown-list a").click(function(){
    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  });



// Loading events markers

const france = {
    lat : 46.7111,
    lng: 1.7191,
}
const zoomLevel = 3;

const map = L.map('mapid').setView([france.lat, france.lng],zoomLevel);

function loadDestination(destinationName){
    const destination = destinations[destinationName];
    console.log(destination.events);
    console.log(map)
    var events = destination.events;

    for (let i = 0; i < events.length; i++) {
        const event = events[i];
        const location = event.location;
        
        L.marker(location).addTo(map)
            .bindPopup(`<span><strong>${event.name}</strong></span><br>
            <span><small><em>${event.description}</em></small></span><br>
            <span><small><i class="far fa-clock"></i> ${event.date} - ${event.localTime}</small></span><br>
            <span><small><i class="fas fa-map-pin"></i> ${event.city} </small></span><br>
            <span><small><i class="fas fa-money-bill"></i> ${event.price}</small></span>`)
                .on('click', (e) => {
                   document.querySelector('#destination-info').innerHTML = `${destination.descriptions}`
               })
            .openPopup();

        document.querySelector('#destination-info').innerHTML = `${destination.descriptions.summary}`
    } 

}


// Loading cluster markers (using L.markerClusterGroup())

// Clear markers before adding new ones (using markers.clearLayers();

// Loading destination description (using if /else)



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
