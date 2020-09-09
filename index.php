<!DOCTYPE html>
<html>
<head>
    <title>Yes</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDcbYr1unjyMn3gcwaDyrVfdn9bW2ELBjk&callback=initMap&libraries=&v=weekly"
      defer
    ></script>
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <script src="js/app.js"></script>
</head>
<body>
    <div id="floating-panel">
        <input onclick="clearMarkers();" type="button" value="Hide Markers" />
        <input onclick="showMarkers();" type="button" value="Show All Markers" />
        <input onclick="deleteMarkers();" type="button" value="Delete Markers" />
      </div>
    <div class="map-container">
      <div id="map"></div>
    </div>
    <div style="text-align:center;">
    <br>
      <button >Scan here</button>
    </div>
</body>
</html>

