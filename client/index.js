import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
//import './index.css';
import store from './store';

ReactDOM.render(
<Provider store={store}>
  <Routes />
</Provider>,
document.getElementById('app'));
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoiY3luZzI0IiwiYSI6ImNqY25ydGZkdzFscGoyd3JuZjZnY2h6eDEifQ.87cz_oxJm1pma_aWv5lI4A';
var map = new mapboxgl.Map({
container: 'YOUR_CONTAINER_ELEMENT_ID', //change this name when we add more to our stylesheet
style: 'mapbox://styles/mapbox/dark-v9'
});
