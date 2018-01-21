"use strict"
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMapGL from 'react-map-gl';

//const accessToken = 'pk.eyJ1IjoiY3luZzI0IiwiYSI6ImNqY25ydGZkdzFscGoyd3JuZjZnY2h6eDEifQ.87cz_oxJm1pma_aWv5lI4A';

export class Home extends Component {

  constructor() {
    super();
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
        accessToken: 'pk.eyJ1IjoiY3luZzI0IiwiYSI6ImNqY25ydGZkdzFscGoyd3JuZjZnY2h6eDEifQ.87cz_oxJm1pma_aWv5lI4A'
      }
    }
    this.onViewportChange = this.onViewportChange.bind(this);
  }

 onViewportChange = viewport => {
    this.setState({viewport})
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={this.onViewportChange}
      />
    );
  }
}
/* 
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
 */