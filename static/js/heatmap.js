// Creating map object
var myMap = L.map("map", {
  center: [39.8283, -98.5795],
  zoom: 4
});

// Adding tile layer to the map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Store API query variables


// Assemble API query URL
var url = "/api/shootings";

// Grab the data with d3
d3.json(url, function(response) {
  console.log(response)

  // Create a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data shooting property to a variable
    var shooting = response[i];

    // Check for shooting property
    if (shooting) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([shooting.Location[0], shooting.Location[1]])
        .bindPopup("<h3>Date:" + shooting.Date + "<h3><h3>Fatalities: " + shooting.Fatalities + "<h3><h3>Shooter Age:" + shooting.Age + "<h3><h3>Day: " + shooting.Day + "<h3><h3>State:" + shooting.State + "<h3><h3>Location:" + shooting.Place + "<h3>"));
    }

  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});
