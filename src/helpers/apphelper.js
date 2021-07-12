import { initialState } from "../context/index";
import { ACTION_TYPES } from "../context/types";

export function getDataFromCache(dispatch) {
    let appData = localStorage.getItem("appData");
  if (!appData) {
    dispatch({
      type: ACTION_TYPES.LOAD_APP_DATA,
      payload: initialState,
    });
    return;
  }
  try {
    appData = JSON.parse(appData);
    dispatch({
      type: ACTION_TYPES.LOAD_CACHED_DATA,
      payload: appData,
    });
  } catch (e) {
    dispatch({
      type: ACTION_TYPES.LOAD_APP_DATA,
      payload: initialState,
    });
  }
}

export function cacheData(data) {
    if(!data) 
        return
    localStorage.setItem("appData", JSON.stringify(data))
}