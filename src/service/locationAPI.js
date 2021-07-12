import { handleErrors } from "./service";

const locationAPI = {
  getLocationName,
  getLatLong,
};

function getLocationName(location) {
  try {
    return fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.lat}&longitude=${location.lon}&localityLanguage=en`
    ).then(handleErrors);
  } catch (e) {
    return { success: false };
  }
}

function getLatLong(name) {
  const options = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.REACT_APP_GEOCODING_KEY
      }
  }
  try {
    return fetch(
      `https://api.radar.io/v1/search/autocomplete?query=${name}`,
      options
    ).then(handleErrors);
  } catch (e) {
    return { success: false };
  }
}

export default locationAPI;
