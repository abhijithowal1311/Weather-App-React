import { ACTION_TYPES } from "../context/types";
import locationAPI from "../service/locationAPI";

const locationUtils = {
  fetchAndAddPlaceName,
};

function fetchAndAddPlaceName(place, dispatch, type) {
  if (place.unauthorized) {
    dispatch({
      type: ACTION_TYPES.API_UNAUTHORIZED,
    });
  }
  dispatch({
    type: ACTION_TYPES.ADD_USER_PLACE,
    payload: place.locality,
    addType: type,
  });
}

export default locationUtils;
