import { fetchWeatherData } from './requestWeather';

const addWeatherData = (text) => {
  const weatherData = document.querySelector('.weatherData');
  const newText = document.createElement('p');

  newText.innerHTML = text;
  weatherData.appendChild(newText);
};

const resetDisplay = (locationDisplay, tempDisplay, weatherData) => {
  locationDisplay.innerHTML = '';
  tempDisplay.innerHTML = '';
  weatherData.innerHTML = '';
};

export const displayWeather = async (lat, long, unit) => {
  if (unit == undefined) {
    unit = 'metric';
  }

  let data = await fetchWeatherData(lat, long, unit);

  const locationDisplay = document.querySelector('.locationDisplay');
  const currentTempDisplay = document.querySelector('.currentTemp');
  const weatherData = document.querySelector('.weatherData');
  resetDisplay(locationDisplay, currentTempDisplay, weatherData);

  locationDisplay.innerHTML = data.city + ', ' + data.country;

  const temperature = document.createElement('p');
  temperature.innerHTML = data.temp;

  currentTempDisplay.prepend(temperature);
  const tempDisplay = document.querySelector('.temp');
  tempDisplay.style.display = 'grid';

  addWeatherData('Feels Like: ' + data.feelsLike + '\u00B0');
  if (unit == 'metric') {
    addWeatherData('Wind: ' + Math.round(data.wind * 3.6) + ' km/h');
  } else {
    addWeatherData('Wind: ' + Math.round(data.wind) + ' mph');
  }
  addWeatherData('Humidity: ' + data.humidity + '%');
};
