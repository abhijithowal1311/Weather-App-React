import { ACTION_TYPES } from "../context/types";

export default function requestLocationAccess(dispatch) {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  return navigator.geolocation.getCurrentPosition(
    (pos) => onLocationRetrieve(pos, dispatch),
    (error) => onLocationBlocked(error, dispatch),
    options
  );
}

function onLocationRetrieve(pos, dispatch) {
  var crd = pos.coords;

  dispatch({
      type: ACTION_TYPES.ADD_USER_LOCATION,
      payload: {
          latitude: crd.latitude,
          longitude: crd.longitude
      }
  })
}

function onLocationBlocked(err, dispatch) {
    dispatch({
        type: ACTION_TYPES.BLOCK_LOCATION,
        payload: {
        }
    })
}
