const destinations = {
    "Guadeloupe" : {
        events: [{          
            name : "Sustainable Cities Conference",
			description : "Learn how Guadeloupe is starting the green revolution to prepare the world of tomorrow",
            date : "Sep 22, 2021",
			localTime: "10.00 am",
            city: "Basse Terre",
            location :[15.99854, -61.72548]
        },
    ],
        description: {
            title : "Welcome to Guadeloupe",
            description : "Guadeloupe is an archipelago and overseas department and region of France in the Caribbean. Whether walking through lively village streets, touring country lanes or gliding between island by ferry, Guadeloupe serves up a rich menu of unique cultural experiences.",
        },
    
    },

	"Saint Martin" : {
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
            title : "Welcome to Guadeloupe",
            description : "Guadeloupe is an archipelago and overseas department and region of France in the Caribbean. Whether walking through lively village streets, touring country lanes or gliding between island by ferry, Guadeloupe serves up a rich menu of unique cultural experiences.",

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
            title : "Welcome to Guadeloupe",
            description : "Guadeloupe is an archipelago and overseas department and region of France in the Caribbean. Whether walking through lively village streets, touring country lanes or gliding between island by ferry, Guadeloupe serves up a rich menu of unique cultural experiences.",

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
            title : "Welcome to Guadeloupe",
            description : "Guadeloupe is an archipelago and overseas department and region of France in the Caribbean. Whether walking through lively village streets, touring country lanes or gliding between island by ferry, Guadeloupe serves up a rich menu of unique cultural experiences.",

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
            title : "Welcome to Guadeloupe",
            description : "Guadeloupe is an archipelago and overseas department and region of France in the Caribbean. Whether walking through lively village streets, touring country lanes or gliding between island by ferry, Guadeloupe serves up a rich menu of unique cultural experiences.",

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
            title : "Welcome to Guadeloupe",
            description : "Guadeloupe is an archipelago and overseas department and region of France in the Caribbean. Whether walking through lively village streets, touring country lanes or gliding between island by ferry, Guadeloupe serves up a rich menu of unique cultural experiences.",

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
            title : "Welcome to Guadeloupe",
            description : "Guadeloupe is an archipelago and overseas department and region of France in the Caribbean. Whether walking through lively village streets, touring country lanes or gliding between island by ferry, Guadeloupe serves up a rich menu of unique cultural experiences.",

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
            title : "Welcome to Guadeloupe",
            description : "Guadeloupe is an archipelago and overseas department and region of France in the Caribbean. Whether walking through lively village streets, touring country lanes or gliding between island by ferry, Guadeloupe serves up a rich menu of unique cultural experiences.",

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
            title : "Welcome to Guadeloupe",
            description : "Guadeloupe is an archipelago and overseas department and region of France in the Caribbean. Whether walking through lively village streets, touring country lanes or gliding between island by ferry, Guadeloupe serves up a rich menu of unique cultural experiences.",

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
            title : "Welcome to Guadeloupe",
            description : "Guadeloupe is an archipelago and overseas department and region of France in the Caribbean. Whether walking through lively village streets, touring country lanes or gliding between island by ferry, Guadeloupe serves up a rich menu of unique cultural experiences.",

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
