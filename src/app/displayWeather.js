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

const setBackground = (weather) => {
  if (weather == 'Snow') {
    document.body.style.backgroundImage = `url(
      'https://media.giphy.com/media/Cv7wrQjYcd6hO/giphy.gif'
    )`;
  } else if (weather == 'Rain') {
    document.body.style.backgroundImage = `url(
      'https://media.giphy.com/media/mmv4ATlqgLC81TvAyg/giphy.gif'
    )`;
  } else if (weather == 'Thunderstorm') {
    document.body.style.backgroundImage = `url(
      'https://media.giphy.com/media/tuZkG32IItHoI/giphy.gif')`;
  } else if (weather == 'Drizzle') {
    document.body.style.backgroundImage = `url(
      'https://media.giphy.com/media/RhqMW0XiUudHE08hfn/giphy.gif'
    )`;
  } else if (weather == 'Mist') {
    document.body.style.backgroundImage = `url(
      'https://media.giphy.com/media/xT9IgqjmZ870vakg4E/giphy.gif'
    )`;
  } else if (weather == 'Clear') {
    document.body.style.backgroundImage = `url(
      'https://media.giphy.com/media/mtHubvZ3mle4UTgZmU/giphy.gif'
    )`;
  } else if (weather == 'Clouds') {
    document.body.style.backgroundImage = `url(
      'https://media.giphy.com/media/oNXIP3xpr00k05NVPQ/giphy.gif'
    )`;
  } else if (weather == 'Smoke') {
    document.body.style.backgroundImage = `url(
      'https://media.giphy.com/media/pvQkJDjfce1q0/giphy.gif'
    )`;
  } else if (weather == 'Haze') {
    document.body.style.backgroundImage = `url(
      'https://media.giphy.com/media/d6JfdOpurCisGQdzdA/giphy.gif'
    )`;
  } else if (weather == 'Dust') {
    document.body.style.backgroundImage = `url(
      'https://media.giphy.com/media/l2u4v14vq0fleHv8Ys/giphy.gif'
    )`;
  } else if (weather == 'Fog') {
    document.body.style.backgroundImage = `url(
      'https://media.giphy.com/media/26xBwlGgyeQjxx09G/giphy.gif'
    )`;
  } else if (weather == 'Sand') {
    document.body.style.backgroundImage = `url(
      'https://media.giphy.com/media/y2o7O2HsUmozm/giphy.gif'
    )`;
  } else if (weather == 'Ash') {
    document.body.style.backgroundImage = `url(
      'https://media.giphy.com/media/l2u4v14vq0fleHv8Ys/giphy.gif'
    )`;
  } else if (weather == 'Squall') {
    document.body.style.backgroundImage = `url(
      'https://media.giphy.com/media/9jvjuSSkMOYTyQfJji/giphy.gif'
    )`;
  } else if (weather == 'Tornado') {
    document.body.style.backgroundImage = `url(
      'https://media.giphy.com/media/TvCYFq9fJnVmjIwBvq/giphy.gif'
    )`;
  }
};

export const displayWeather = async (lat, long, unit) => {
  if (unit == undefined) {
    unit = 'metric';
  }

  let loadingAnimation = document.querySelector('.loader');

  loadingAnimation.style.display = 'grid';
  await new Promise((resolve) => setTimeout(resolve, 1000));
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

  setBackground(data.backgroundImage);

  loadingAnimation.style.display = 'none';
};
