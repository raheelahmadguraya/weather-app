import { displayWeather } from '../displayWeather';
import { localstorage } from './local-storage';

export const changeUnits = (event) => {
  let location = localstorage.get('location');
  let currentUnit = document.querySelector('.selected');
  if (event.currentTarget.classList.contains('selected')) {
  } else {
    currentUnit.classList.remove('selected');
    event.currentTarget.classList.add('selected');
    displayWeather(location.lat, location.long, event.currentTarget.id);
  }
};
