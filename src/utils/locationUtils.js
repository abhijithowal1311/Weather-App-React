import { ACTION_TYPES } from "../context/types";
import locationAPI from "../service/locationAPI";

const locationUtils = {
  fetchAndAddPlaceName,
};

function fetchAndAddPlaceName(place, dispatch) {
  if (place.unauthorized) {
    dispatch({
      type: ACTION_TYPES.API_UNAUTHORIZED,
    });
  }
  console.log("place found",place)
  dispatch({
    type: ACTION_TYPES.ADD_USER_PLACE,
    payload: place.locality,
  });
}

export default locationUtils;
