export const weatherAPI = {
  getWeatherInfo,
};

function getWeatherInfo(location, unitType) {
  try {
    return fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&units=${unitType}&appid=6f80860a12f26ad52917d7ef87ffc885`
    ).then(handleErrors);
  } catch (e) {
    return { success: false };
  }
}

function handleErrors(response) {
  if (response && response.status === 401) {
    return { unauthorized: true };
  }
  if (!response.ok) {
    return { error: response.status, isError: true };
  }
  return response.json();
}
