import { formatData } from './utils/format-data';

export const fetchWeatherData = async (lat, long, unit) => {
  if (location == undefined) {
    location = 'Toronto';
  }
  if (unit == undefined) {
    unit = 'metric';
  }
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${unit}&APPID=46230a230d8c0d4a56fad4cc25bd3638`,
    { mode: 'cors' }
  );

  const data = formatData(await res.json());
  return data;
};
