let map;
let markers = [];
var iconBase = 'img/';
var icons = {
  parking: {
    icon: iconBase + 'tenor2.gif'
  },
  library: {
    icon: iconBase + 'library_maps.png'
  },
  info: {
    icon: iconBase + 'info-i_maps.png'
  }
};
function initMap() {
  const haightAshbury = { lat: 35.714352, lng: 139.7524633 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    disableDefaultUI: true,
    minZoom: 17,
    maxZoom: 17,
    zoomControl: false,
    center: haightAshbury,
    mapTypeId: "terrain",
    styles: [
        {
            "featureType": "all",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "32"
                },
                {
                    "lightness": "-3"
                },
                {
                    "visibility": "on"
                },
                {
                    "weight": "1.18"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "-70"
                },
                {
                    "lightness": "14"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "100"
                },
                {
                    "lightness": "-14"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "lightness": "12"
                }
            ]
        }
    ]
  });
  // This event listener will call addMarker() when the map is clicked.
  map.addListener("click", event => {
    deleteMarkers();
    addMarker(event.latLng);
  });
  // Adds a marker at the center of the map.
  addMarker(haightAshbury);
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