<!DOCTYPE html>
<html>
<head>
    <title>Puke Moan</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDcbYr1unjyMn3gcwaDyrVfdn9bW2ELBjk&callback=initMap&libraries=&v=weekly" defer
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
    <br>
    <p style="text-align:center;">Tip: You can use arrow keys to move.</p>
    <p style="text-align:center;">Note: 80% chance to earn 0 - 10 points<br>19% change to earn 10 - 20 points<br> 1% change to earn 500 to 1000 points </p>
    <br>
    <div class="navigation-controller" style="text-align:center;">
        <input onclick="moveUp();" type="button" value="Walk up ˄" />
        <input onclick="moveDown();" type="button" value="Walk down ˅" />
        <input onclick="moveLeft();" type="button" value="Walk Left ˂" />
        <input onclick="moveRight();" type="button" value="Walk Right ˃" />
        <input onclick="findMe();" type="button" value="Find me" /><br><br>
        <input type="checkbox" id="toggleCenter" value="on"> Always center character
    </div>
    <div style="text-align:center;">
    <br>
      <button onclick="generatePoints()">Scan here</button>
    </div>
</body>
</html>

