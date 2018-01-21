var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
// const api = require("./api");
// const buildMarker = require("./marker.js");

//Instantiate the Map
mapboxgl.accessToken = 'pk.eyJ1IjoiY3luZzI0IiwiYSI6ImNqY25ydGZkdzFscGoyd3JuZjZnY2h6eDEifQ.87cz_oxJm1pma_aWv5lI4A';

const fullstackCoords = [-73.989, 40.735] //set initial coordinates

var map = new mapboxgl.Map({
  container: 'map',
  center: fullstackCoords,
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/dark-v9'
});