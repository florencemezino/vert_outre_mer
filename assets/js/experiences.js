<<<<<<< HEAD
const destinations = {
	"Guadeloupe" : {
		events: [{			
			name : "Sustainable Cities Conference",
            date : "Sep 22, 2021",
			city: "Basse Terre",
			location :[15.99854, -61.72548]
        },
    ],

        description: {
            title : "Welcome to Guadeloupe",
            description : "Guadeloupe is an archipelago and overseas department and region of France in the Caribbean. Whether walking through lively village streets, touring country lanes or gliding between island by ferry, Guadeloupe serves up a rich menu of unique cultural experiences.",
            localTime : "2021-01-31T13:00:00",
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
=======
>>>>>>> 0d0b4e68b0a000f6dc635a7fe936790d749817f5
