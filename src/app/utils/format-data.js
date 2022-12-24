export const formatData = (data) => {
  console.log(data);
  const weatherData = {
    city: data.name,
    country: data.sys.country,
    temp: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    humidity: Math.round(data.main.humidity),
    wind: data.wind.speed,
    backgroundImage: data.weather[0].main,
  };

  return weatherData;
};
