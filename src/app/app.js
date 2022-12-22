import { displayWeather } from './displayWeather';
import { addListeners } from './utils/add-button-listeners';
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
import { localstorage } from './utils/local-storage';

export const run = () => {
  addListeners();

  const autocomplete = new GeocoderAutocomplete(
    document.getElementById('autocomplete'),
    '724fa1c11525423380e5262518c11059',
    {
      /* Geocoder options */
    }
  );

  autocomplete.on('select', (location) => {
    // check selected location here
    let currentUnit = document.querySelector('.selected');
    let locationCoords = {
      lat: location.properties.lat,
      long: location.properties.lon,
      unit: currentUnit.id,
    };
    localstorage.set('location', locationCoords);

    displayWeather(
      locationCoords.lat,
      locationCoords.long,
      locationCoords.unit
    );
  });

  autocomplete.on('suggestions', (suggestions) => {
    // process suggestions here
  });
};
