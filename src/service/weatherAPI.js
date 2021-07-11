import { handleErrors } from "./service";

export const weatherAPI = {
  getWeatherInfo,
};

function getWeatherInfo(location, unitType = "metric" ) {
  try {
    return fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&units=${unitType}&appid=6f80860a12f26ad52917d7ef87ffc885`
    ).then(handleErrors);
  } catch (e) {
    return { success: false };
  }
}
