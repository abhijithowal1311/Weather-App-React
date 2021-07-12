import moment from "moment";
import {
  WEATHER_PARAMETERS,
  WEATHER_TYPE,
  WEATHER_TYPE_LABELS,
  WEATHER_TYPE_LABELS_REVERSE,
} from "../constants";
import clear from "../assets/weather/clear_sky.jpeg";
import fewClouds from "../assets/weather/few clouds.jpeg";
import mist from "../assets/weather/mist.jpeg";
import rain from "../assets/weather/rain.jpeg";
import scattered from "../assets/weather/scattered clouds.jpeg";
import snow from "../assets/weather/snow.jpeg";
import thunderstorms from "../assets/weather/thunderstorm.jpeg";

const utils = {
  validateEmail,
  validateUserForm,
  getGraphFilters,
  getGraphLabels,
  getGraphData,
  getWeatherImage,
  getGraphParams
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateUserForm(name, email, location) {
  let errors = {};
  errors.email = validateEmail(email)
    ? ""
    : "Please Enter a valid Email Address";
  let response = { errorPresent: errors.email, errors: errors };
  if (!response.errorPresent) {
    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        name: name,
        email: email,
        location: location,
        present: true,
      })
    );
  }
  return response;
}

function getGraphFilters(weatherData) {
  let filtered = Object.keys(weatherData).filter(
    (x) => WEATHER_TYPE.indexOf(x) != -1
  );
  return {
    filters: filtered.map((item) => WEATHER_TYPE_LABELS[item]),
    originalFilters: filtered,
  };
}

function getGraphLabels(filter, weatherData) {
  let data = weatherData[filter];
  data = data.map((item) => item.dt);
  data = filter == "hourly" ? data.slice(0, 24) : data;
  const getDate = (item) => moment.unix(item).format("DD ddd")
  const getHour = (item) => { return moment.unix(item).format("HH")+":00" } 
  return data.map((item) => filter == "hourly" ? getHour(item) : getDate(item));
}


function getGraphParams(weatherData) {
  if (!weatherData || !weatherData.length)
    return
  let filtered = Object.keys(weatherData[0]).filter(
    (x) => WEATHER_PARAMETERS.indexOf(x) != -1
  );
  return filtered;
}

function getGraphData(filter, weatherData, parameter) {
  let data = weatherData[filter];
  data = data.map((item) => item[parameter]);
  data = filter == "hourly" ? data.slice(0, 24) : data;
  return data.map((item) => (filter !== "daily" ? item : parameter == "temp" ? item.max : item));
}

function getWeatherImage(weather) {
  switch (weather.description) {
    case "moderate rain":
    case "overcast clouds":
    case "broken clouds":
    case "light rain":
    case "moderate rain":
      return rain;
    case "shower rain":
    case "extreme rain":
    case "thunderstorm with light rain":
    case "thunderstorm with rain":
      return thunderstorms;
    case "clear sky":
      return clear;
    case "few clouds":
      return fewClouds;
    case "scattered clouds":
      return scattered;
    default:
      return clear;
  }
}

export default utils;
