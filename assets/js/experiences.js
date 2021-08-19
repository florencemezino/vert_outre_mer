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
            name : "Sustainable Cities Conference",
			description : "Learn how Guadeloupe is starting the green revolution to prepare the world of tomorrow",
            date : "Sep 22, 2021",
			localTime: "02.00 pm",
            city: "Basse Terre",
            location :[15.99854, -61.72548]
        },
    ],
        description: {
            title : "Welcome to Saint Barthelemy",
            description : "Saint Barthelemy, also called saint Barth is a small tourism-oriented island in the Caribbean with remarkable natural scenery.",

        },
    
    },

	"Martinique" : {
        events: [{          
            name : "Sustainable Cities Conference",
			description : "Learn how Guadeloupe is starting the green revolution to prepare the world of tomorrow",
            date : "Sep 22, 2021",
			localTime: "02.00 pm",
            city: "Basse Terre",
            location :[15.99854, -61.72548]
        },
    ],
        description: {
            title : "Welcome to Martinique",
            description : "Martinique boasts a whole world of natural wonders. The beautiful island offers a seductive mix of magnificent beaches, dramatic mountains, tropical gardens, and fascinating history.",

        },
    
    },

	"French Guiana" : {
        events: [{          
            name : "Sustainable Cities Conference",
			description : "Learn how Guadeloupe is starting the green revolution to prepare the world of tomorrow",
            date : "Sep 22, 2021",
			localTime: "02.00 pm",
            city: "Basse Terre",
            location :[15.99854, -61.72548]
        },
    ],
        description: {
            title : "Welcome to French Guiana",
            description : "Located between the Republic of Suriname and Brazil, French Guiana is a kingdom of forests, rivers and animals and seduces all nature lovers",

        },
    
    },


	"Reunion Island" : {
        events: [{          
            name : "Sustainable Cities Conference",
			description : "Learn how Guadeloupe is starting the green revolution to prepare the world of tomorrow",
            date : "Sep 22, 2021",
			localTime: "02.00 pm",
            city: "Basse Terre",
            location :[15.99854, -61.72548]
        },
    ],
        description: {
            title : "Welcome to Reunion Island",
            description : "Located in the Archipelago of Mascareignes, Reunion Island offers an infinite number of amazing sites and contrasting landscapes. The island is known for the spectacular Piton de la Fournaise, an active basaltic volcano.",

        },
    
    },

	"Saint Pierre et Miquelon" : {
        events: [{          
            name : "Sustainable Cities Conference",
			description : "Learn how Guadeloupe is starting the green revolution to prepare the world of tomorrow",
            date : "Sep 22, 2021",
			localTime: "02.00 pm",
            city: "Basse Terre",
            location :[15.99854, -61.72548]
        },
    ],
        description: {
            title : "Welcome to Saint Pierre et Miquelon",
            description : "Between the friendly bonjours and the delicate pastries come and discover these two beautiful islands, a real piece of France in North America",

        },
    
    },

	"Mayotte" : {
        events: [{          
            name : "Sustainable Cities Conference",
			description : "Learn how Guadeloupe is starting the green revolution to prepare the world of tomorrow",
            date : "Sep 22, 2021",
			localTime: "02.00 pm",
            city: "Basse Terre",
            location :[15.99854, -61.72548]
        },
    ],
        description: {
            title : "Welcome to Mayotte",
            description : "The island of Mayotte has an abundance of endemic fauna and flora. It is an authentic island to visit in the Indian Ocean.",

        },
    
    },

	"New Caledonia" : {
        events: [{          
            name : "Sustainable Cities Conference",
			description : "Learn how Guadeloupe is starting the green revolution to prepare the world of tomorrow",
            date : "Sep 22, 2021",
			localTime: "02.00 pm",
            city: "Basse Terre",
            location :[15.99854, -61.72548]
        },
    ],
        description: {
            title : "Welcome to New Caledonia",
            description : "Located in the world’s largest lagoon and possessing the second-largest barrier reef, New Caledonia has so much to offer.",

        },
    
    },

	"French Polynesia" : {
        events: [{          
            name : "Sustainable Cities Conference",
			description : "Learn how Guadeloupe is starting the green revolution to prepare the world of tomorrow",
            date : "Sep 22, 2021",
			localTime: "02.00 pm",
            city: "Basse Terre",
            location :[15.99854, -61.72548]
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

var map = L.map('map').setview(selecteddESTINATIONcoordinates, 13);

for (let i = 0; i < events.length; i++) {
    const event = events[i];
    const location = event.location;
    L.marker(location).addTo(map)
        .bindPopup(event.name)
        .openPopup();
}
