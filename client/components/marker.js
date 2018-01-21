const { Marker } = require('mapbox-gl');

const iconURLs = {
  shelters: '../../public/markers/shelters.png',
  utilities: '../../public/markers/electricity.png',
  consumables: '../../public/markers/shelters.png',
  firstaids: '../../public/markers/disability.png',
  miscellaneous: '../../public/markers/shelters.png'
};

const buildMarker = (type, coords) => {
  if (!iconURLs.hasOwnProperty(type)) {
    type = 'miscellaneous';
  }
  const markerEl = document.createElement('div');
  markerEl.style.backgroundSize = 'contain';
  markerEl.style.width = '32px';
  markerEl.style.height = '37px';
  markerEl.style.backgroundImage = `${iconURLs[type]}`;
  return new Marker(markerEl).setLngLat(coords);
};


module.exports = buildMarker;
