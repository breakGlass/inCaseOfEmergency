var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoiY3luZzI0IiwiYSI6ImNqY25ydGZkdzFscGoyd3JuZjZnY2h6eDEifQ.87cz_oxJm1pma_aWv5lI4A';
var map = new mapboxgl.Map({
container: 'YOUR_CONTAINER_ELEMENT_ID', //change this name when we add more to our stylesheet
style: 'mapbox://styles/mapbox/dark-v9'
});