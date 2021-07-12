import { act } from "react-dom/test-utils";
import { cacheData } from "../helpers/app";

export const rootReducer = (state, action) => {
  let newState = {}
  switch (action.type) {
    case "ADD_WEATHER_DATA":
      newState =  {
        ...state,
        weatherData: { ...action.payload },
        locationWeatherData: action.addType != "search" ? {...action.payload} : state.locationWeatherData,
      };
      cacheData(newState)
      return newState;
    case "ADD_USER_LOCATION":
      newState =  {
        ...state,
        currentLocation: {
          ...action.payload,
          locationEnabled: true,
          locatonBlocked: false,
        },
      };
      cacheData(newState)
      return newState
    case "BLOCK_LOCATION":
      newState =  {
        ...state,
        locationEnabled: false,
        locatonBlocked: true,
      };
      cacheData(newState)
      return newState
    case "ADD_DEFAULT_LOCATION":
      newState =  {
        ...state,
        weatherData: { ...action.payload },
        locationWeatherData: {...action.payload}
      }
      cacheData(newState)
      return newState
    case "ADD_USER_PLACE":
      newState = {
        ...state,
        place: action.payload,
        defaultPlace: action.addType != "search" ? action.payload : state.defaultPlace
      };
      cacheData(newState)
      return newState
    case "ADD_USER_DATA":
      newState =  {
        ...state,
        user: { ...action.payload },
      };
      cacheData(newState)
      return newState
    case "ADD_TO_SAVED_PLACES":
      newState =  {
        ...state,
        savedData: [
          ...state.savedData,
          {
            weatherData: state.weatherData,
            currentLocation: state.currentLocation,
            place: state.place,
            unitType: state.unitType,
          },
        ],
      };
      cacheData(newState)
      return newState;
    case "COMPLETE":
      newState =  {
        loading: false,
      };
      cacheData(newState)
      return newState
    case "API_UNAUTHORIZED":
      newState =  {
        ...state,
        unauthorized: true,
      };
      cacheData(newState)
      return newState
    case "CHANGE_APP_THEME": {
      newState =  {
        ...state,
        appTheme: action.payload,
      };
      cacheData(newState)
      return newState
    }
    case "LOAD_APP_DATA":
      newState =  {
        ...action.payload,
        appLoaded: true
      }
      cacheData(newState)
      return newState
    case "LOAD_CACHED_DATA":
      newState =  {
        ...action.payload,
        appLoaded: true
      }
      return newState
    default:
      throw new Error();
  }
};
