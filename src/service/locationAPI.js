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
        'Authorization': 'prj_live_pk_e758f64a3f833f109986908bfa74afeaccc670f1'
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
