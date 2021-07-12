import { handleErrors } from "./service";

export const weatherAPI = {
  getWeatherInfo,
};

function getWeatherInfo(location, unitType = "metric" ) {
  try {
    return fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&units=${unitType}&appid=${process.env.REACT_APP_WEATHER_KEY}`
    ).then(handleErrors);
  } catch (e) {
    return { success: false };
  }
}
