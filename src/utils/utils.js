import moment from "moment";
import {
  WEATHER_TYPE,
  WEATHER_TYPE_LABELS,
  WEATHER_TYPE_LABELS_REVERSE,
} from "../constants";

const utils = {
  validateEmail,
  validateUserForm,
  getGraphFilters,
  getGraphLabels,
  getGraphData,
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
  return data.map((item) => moment.unix(item).format("DD ddd"));
}

function getGraphData(filter, weatherData) {
  let data = weatherData[filter];
  data = data.map((item) => item.temp);
  data = filter == "hourly" ? data.slice(0, 24) : data;
  return data.map((item) => (filter !== "daily" ? item : item.max));
}

export default utils;
