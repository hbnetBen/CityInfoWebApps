﻿// This example creates circles on the map, representing populations in North
// America.

// First, create an object containing LatLng and population for each city.
var citymap = {
    Bandung: {
        center: { lat: -6.905830, lng: 107.592686 },
        population: 20000
    }
};

function initMap() {
    // Create the map.
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: -6.905830, lng: 107.592686 },
        mapTypeId: 'terrain'
    });

    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the population.
    for (var city in citymap) {
        // Add the circle for this city to the map.
        var cityCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: citymap[city].center,
            radius: Math.sqrt(citymap[city].population) * 100
        });
    }
}