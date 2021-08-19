var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={pk.eyJ1IjoiZmxvcmVuY2Vtem4iLCJhIjoiY2tzaXpxdm0xMjNrMTJ1cDIzZDJwM2IwYiJ9.Zq9EUXd9jrZCk4ppkwdCZg}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZmxvcmVuY2Vtem4iLCJhIjoiY2tzaXpxdm0xMjNrMTJ1cDIzZDJwM2IwYiJ9.Zq9EUXd9jrZCk4ppkwdCZg'
}).addTo(mymap);


/*
mapboxgl.accessToken = 'pk.eyJ1IjoiZmxvcmVuY2Vtem4iLCJhIjoiY2tzaXpxdm0xMjNrMTJ1cDIzZDJwM2IwYiJ9.Zq9EUXd9jrZCk4ppkwdCZg';
const map = new mapboxgl.Map({
	container: 'mapid',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [12.550343, 55.665957],
	zoom: 8
});
// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker()
.setLngLat([12.554729, 55.70651])
.addTo(map);
 
// Create a default Marker, colored black, rotated 45 degrees.
const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
.setLngLat([12.65147, 55.608166])
.addTo(map);







/*
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);



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
			description : "Dicover the music of the Carribeans. This is a plastic fre concert. Come have fun with us! ",
			price : "15 EUR per person",
            date : "Oct 15, 2021",
			localTime: "06.00 pm",
            city: "Le Gosier",
            location :[16.20685, -61.49329]
        },
    ],
        description: {
			title : "Welcome to Guadeloupe",
            description : "Guadeloupe is an archipelago and overseas department and region of France in the Caribbean. Whether walking through lively village streets, touring country lanes or gliding between island by ferry, Guadeloupe serves up a rich menu of unique cultural experiences.",
        },
    
    },

	"Saint Martin" : {
        events: [{          
            name : "Marigot's beach clean up",
			description : "Join us this Sunday to clean up Marigot's beach. ",
			price : "free",
            date : "Aug 22, 2021",
			localTime: "04.00 pm",
            city: "Marigot",
            location :[18.073099, -63.082199]
        },
    ],
        description: {
			title : "Welcome to Saint Martin",
            description : "The culture of Saint Martin is a blend of its African, French, British, and Dutch heritage.Saint Martin is known to be the capital of duty free and gastronomy in the Caribbean. The warm hospitality of its people, its diversity and its varied cultural activities all allowed it to be nicknamed the 'Friendly Island'",

        },
    
    },

	"Saint Barthelemy" : {
        events: [{          
            name : "Saint Barth's Marathon",
			description : "This year, Saint Barth's Marathon is running for the Climate. Come and run for the good cause.",
			price : "10 EUR per person",
            date : "Sep 5, 2021",
			localTime: "10.00 am",
            city: "Gustavia",
            location :[17.900000, -62.8333]
        },
    ],
        description: {
            title : "Welcome to Saint Barthelemy",
            description : "Saint Barthelemy, also called saint Barth is a small tourism-oriented island in the Caribbean with remarkable natural scenery.",

        },
    
    },

	"Martinique" : {
        events: [{          
            name : "Fort de France eBike tour",
			description : "Visit the beautiful city of Fort de France in a sustainable way.  ",
			price : "8 EUR per person",
            date : "Aug 31, 2021",
			localTime: "10.00 am",
            city: "Fort de France",
            location :[14.600000, -61.083302]
        },

		{          
            name : "Culinary trip du Petit Manoir",
			description : "Visit the beautiful city of Fort de France in a sustainable way.  ",
			price : "20 EUR per person",
            date : "Aug 31, 2021",
			localTime: "10.00 am",
            city: "Le Lamentin",
            location :[14.614367, -61.011064]
        },
    ],
        description: {
            title : "Welcome to Martinique",
            description : "Martinique boasts a whole world of natural wonders. The beautiful island offers a seductive mix of magnificent beaches, dramatic mountains, tropical gardens, and fascinating history.",

        },
    
    },

	"French Guiana" : {
        events: [{          
            name : "Cayenne Chili Pepper Festival",
			description : "Challenege your taste buds and come experience the famous local chili : Cayenne Chili Pepper in every shape",
			price : "free",
            date : "Oct 10, 2021",
			localTime: "10.00 am",
            city: "Cayenne",
            location :[4.937200, 52.326000]
        },

		{          
            name : "Guided visit of monkey mountain",
			description : "Meet different species of monkeys during this memorable half day trip",
			price: "15 EUR",
            date : "Sep 2, 2021",
			localTime: "02.00 pm",
            city: "Kourou",
            location :[5.159700, -52.650299]
        },
    ],
        description: {
            title : "Welcome to French Guiana",
            description : "Located between the Republic of Suriname and Brazil, French Guiana is a kingdom of forests, rivers and animals and seduces all nature lovers. It is also well knonw for its famous cayenne chilli pepper",

        },
    
    },


	"Reunion Island" : {
        events: [{          
            name : "Sakifo Music Festival",
			description : "All music of the world are coming together during this amazing festival. The festival has been organized to be plastic free this year.",
			price : "20 EUR per person",
            date : "Nov 20, 2021",
			localTime: "06.00 pm",
            city: "Saint Pierre",
            location :[-21.341900, 55.477798]
        },

		{          
            name : "Opening : la Maison de l'Ecologie",
			description : "All music of the world are coming together during this amazing festival. The festival has been organized to be plastic free this year.",
            date : "Oct 24, 2021",
			localTime: "09.00 am",
            city: "Saint Denis",
            location :[-20.878901, 55.448101]
        },

		{          
            name : "The volcano, journey par La Cite du Volcan",
			description : "Reopening : La cite du volcan welcomes you with new activities, spectacles and a specific section on preserving the biodiversity",
			price :" 8 EUR per person",
            date : "Aug 25, 2021",
			localTime: "10.00 am",
            city: "Plaines des Cafres",
            location :[-21.1667, 55.5833]
        },
    ],
        description: {
            title : "Welcome to Reunion Island",
            description : "Located in the Archipelago of Mascareignes, Reunion Island offers an infinite number of amazing sites and contrasting landscapes. The island is known for the spectacular Piton de la Fournaise, an active basaltic volcano.",

        },
    
    },

	"Saint Pierre et Miquelon" : {
        events: [{          
            name : "Opening : La Ferme Urbaine de Paulette ",
			description : "Come and visit this atypic sustainable farm in the middle of the city. Activity feeding the animals possible",
			price: "2 EUR per adult, free for children until 12 years old",
            date : "Sep 2, 2021",
			localTime: "02.00 pm",
            city: "Saint-Pierre",
            location :[47.0975, -56.3814]
        },
    ],
        description: {
            title : "Welcome to Saint Pierre et Miquelon",
            description : "Between the friendly bonjours and the delicate pastries come and discover these two beautiful islands, a real piece of France in North America",

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
            location :[55.5833, -61.72548]
        },
    ],
        description: {
            title : "Welcome to Mayotte",
            description : "The island of Mayotte has an abundance of endemic fauna and flora. It is an authentic island to visit in the Indian Ocean.",

        },
    
    },

	"New Caledonia" : {
        events: [{          
            name : "Opening : Coral Park Noumea ",
			description : "Learn about corals life and discover how the park is contributing to rebuild / maintain the barrier reef against climate change",
			price : "7 EUR per person, free for children until 12 years old",
            date : "Sep 6, 2021",
			localTime: "10.00 am",
            city: "Noumea",
            location :[-22.275801, 166.457993]
        },
    ],
        description: {
            title : "Welcome to New Caledonia",
            description : "Located in the world’s largest lagoon and possessing the second-largest barrier reef, New Caledonia has so much to offer.",

        },
    
    },

	"French Polynesia" : {
        events: [{          
            name : "Journey at Papeete Pearl Farming",
			description : "Papeete Pearl farm is opening exceptionnaly to the public. Come and discover how we managed to make this activity sustainable while respecting the animals life",
			price : "7 EUR per person, free for children until 12 years old",
            date : "Sep 22, 2021",
			localTime: "02.00 pm",
            city: "Basse Terre",
            location :[ -17.535000, -149.569600]
        },
    ],
        description: {
            title : "Welcome to French Polynesia",
            description : "Exotic wildlife, impeccable cuisine, welcoming locals, French Polynesia is your new tropical vacation destination.",

        },
    
    },

}

const destinations = getDestinations();

const destinationsSelect= document.getElementById('destinations');
const selectedDestination = destinationSelect.options[destinationsSelect.select.Index].text


const selectedDestinationCoordinates = selectDestination.coordinates;
const events = destinations[selectedDestinations].events;

var mymap = L.map('mapid').setView([selectDestinationCoordinates], 13)

for (let i = 0; i < events.length; i++) {
    const event = events[i];
    const location = event.location;
    L.marker(location).addTo(map)
        .bindPopup(event.name)
        .openPopup();
}

*/