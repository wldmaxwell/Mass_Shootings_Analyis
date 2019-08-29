function createMap(shootingLocation) {

    // Create the tile layer that will be the background of our map
    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.light",
      accessToken: API_KEY
    });
  
    // Create a baseMaps object to hold the lightmap layer
    var baseMaps = {
      "Light Map": lightmap
    };
  
    // Create an overlayMaps object to hold the bikeStations layer
    var overlayMaps = {
      "Shooting Location": shootingLocation
    };
  
    // Create the map object with options
    var map = L.map("map", {
      center: [40.73, -74.0059],
      zoom: 12,
      layers: [lightmap, shootingLocation]
    });
  
    // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(map);
  }
  
  var url = "/api/shootings";
  
  var shootingMarkers = [];
  
  d3.json(url).then(function(response) {
    console.log(response)
    for (var i = 0; i < response.length; i++) {
        var shooting = response[i]
  
        var shootingMarker = L.marker([shooting.Location[0], shooting.Location[1]])
            .bindPopup("<h3>Date:" + shooting.date + "<h3><h3>State: " + shooting.state + "<h3>");
  
        shootingMarkers.push(shootingMarker);
        
        console.log(shooting)
        
    }
  
    createMap(L.layerGroup(shootingMarkers));
  
  })
  