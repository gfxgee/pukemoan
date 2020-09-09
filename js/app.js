let map;
let markers = [];
var iconBase = 'img/';
var icons = {
  parking: {
    icon: iconBase + 'tenor2.gif'
  },
  library: {
    icon: iconBase + 'house.gif'
  },
  info: {
    icon: iconBase + 'info-i_maps.png'
  }
};
let current_location = { lat: 35.710, lng: 139.753 };
function initMap() {
  
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    disableDefaultUI: true,
    minZoom: 17,
    maxZoom: 17,
    zoomControl: false,
    center: current_location,
    mapTypeId: "terrain",
    styles: [
        {
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#f49f53"
                }
            ]
        },
        {
            "featureType": "landscape",
            "stylers": [
                {
                    "color": "#f9ddc5"
                },
                {
                    "lightness": -7
                }
            ]
        },
        {
            "featureType": "road",
            "stylers": [
                {
                    "color": "#813033"
                },
                {
                    "lightness": 43
                }
            ]
        },
        {
            "featureType": "poi.business",
            "stylers": [
                {
                    "color": "#645c20"
                },
                {
                    "lightness": 38
                }
            ]
        },
        {
            "featureType": "water",
            "stylers": [
                {
                    "color": "#1994bf"
                },
                {
                    "saturation": -69
                },
                {
                    "gamma": 0.99
                },
                {
                    "lightness": 43
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#f19f53"
                },
                {
                    "weight": 1.3
                },
                {
                    "visibility": "on"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi.business"
        },
        {
            "featureType": "poi.park",
            "stylers": [
                {
                    "color": "#645c20"
                },
                {
                    "lightness": 39
                }
            ]
        },
        {
            "featureType": "poi.school",
            "stylers": [
                {
                    "color": "#a95521"
                },
                {
                    "lightness": 35
                }
            ]
        },
        {},
        {
            "featureType": "poi.medical",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#813033"
                },
                {
                    "lightness": 38
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
            "elementType": "labels"
        },
        {
            "featureType": "poi.sports_complex",
            "stylers": [
                {
                    "color": "#9e5916"
                },
                {
                    "lightness": 32
                }
            ]
        },
        {},
        {
            "featureType": "poi.government",
            "stylers": [
                {
                    "color": "#9e5916"
                },
                {
                    "lightness": 46
                }
            ]
        },
        {
            "featureType": "transit.station",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "stylers": [
                {
                    "color": "#813033"
                },
                {
                    "lightness": 22
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "lightness": 38
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#f19f53"
                },
                {
                    "lightness": -10
                }
            ]
        },
        {},
        {},
        {}
    ]
  });
  // This event listener will call addMarker() when the map is clicked.
  map.addListener("click", event => {
    //deleteMarkers();
    clearMarkers();
    addMarker(event.latLng);
  });
  // Adds a marker at the center of the map.
  addMarker(current_location);
  //randomMarker(haightAshbury);
}

// Adds a marker to the map and push to the array.
function addMarker(location) {
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: icons['parking'].icon
  });
  
  markers.push(marker);
}

function randomMarker(location) {
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: icons['library'].icon
    });
    
    markers.push(marker);
  }
// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}
function moveUp(){
    current_location = { lat: current_location.lat + 0.001, lng: current_location.lng };
    console.log(current_location);
    deleteMarkers();
    addMarker(current_location);
    //map.setCenter(current_location);
}
function moveDown(){
    current_location = { lat: current_location.lat - 0.001, lng: current_location.lng };
    console.log(current_location);
    deleteMarkers();
    addMarker(current_location);
    //map.setCenter(current_location);
}
function moveLeft(){
    current_location = { lat: current_location.lat, lng: current_location.lng - 0.001 };
    console.log(current_location);
    deleteMarkers();
    addMarker(current_location);
    //map.setCenter(current_location);
}
function moveRight(){
    current_location = { lat: current_location.lat, lng: current_location.lng + 0.001 };
    console.log(current_location);
    deleteMarkers();
    addMarker(current_location);
    //map.setCenter(current_location);
}
function findMe(){
    map.setCenter(current_location);
}
