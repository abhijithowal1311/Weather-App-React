import { ACTION_TYPES } from "../context/types";

const weatherUtils = {
  getTemperatueType,
  addWeatherInfoToStore,
  getWeatherIconUrl
};

function getTemperatueType(unitType) {
  switch (unitType) {
    case "metric":
      return "°C";
    case "imperial":
      return "°F";
    default:
      return "K";
  }
}

function addWeatherInfoToStore(weatherInfo, dispatch) {
  if (weatherInfo.unauthorized) {
    dispatch({
      type: ACTION_TYPES.API_UNAUTHORIZED,
    });
  }
  dispatch({
    type: ACTION_TYPES.ADD_WEATHER_DATA,
    payload: weatherInfo,
  });
}

function getWeatherIconUrl(item) {
  return `https://openweathermap.org/img/wn/${item.icon}.png`
}

export default weatherUtils;
