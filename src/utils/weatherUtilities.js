import { ACTION_TYPES } from "../context/types";
import locationAPI from "../service/locationAPI";
import { weatherAPI } from "../service/weatherAPI";

const weatherUtils = {
  getTemperatueType,
  addWeatherInfoToStore,
  getWeatherIconUrl,
  addDefaultWeatherInfo,
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

function addWeatherInfoToStore(weatherInfo, dispatch, type) {
  if (weatherInfo.unauthorized) {
    dispatch({
      type: ACTION_TYPES.API_UNAUTHORIZED,
    });
  }
  dispatch({
    type: ACTION_TYPES.ADD_WEATHER_DATA,
    payload: weatherInfo,
    addType: type
  });
}

function addDefaultWeatherInfo(dispatch) {
  locationAPI.getLatLong("Bangalore").then((response) => {
    if (response && response.addresses && response.addresses.length > 0) {
      weatherAPI.getWeatherInfo({lat: response.addresses[0].latitude, lon: response.addresses[0].longitude}, "metric")
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.ADD_DEFAULT_LOCATION,
          payload: response
        })
        dispatch({
          type: ACTION_TYPES.ADD_USER_PLACE,
          payload: "Bangalore"
        })
      });
    }
  });
}

function getWeatherIconUrl(item) {
  return `https://openweathermap.org/img/wn/${item.icon}.png`;
}

export default weatherUtils;
