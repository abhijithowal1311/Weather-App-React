import { act } from "react-dom/test-utils";

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "ADD_WEATHER_DATA":
      console.log("payload test",state, action)
      return {
        ...state,
        weatherData: { ...action.payload },
        locationWeatherData: action.addType != "search" ? {...action.payload} : state.locationWeatherData,
      };
    case "ADD_USER_LOCATION":
      return {
        ...state,
        currentLocation: {
          ...action.payload,
          locationEnabled: true,
          locatonBlocked: false,
        },
      };
    case "BLOCK_LOCATION":
      return {
        ...state,
        locationEnabled: false,
        locatonBlocked: true,
      };
    case "ADD_DEFAULT_LOCATION":
      return {
        ...state,
        weatherData: { ...action.payload },
        locationWeatherData: {...action.payload}
      }
    case "ADD_USER_PLACE":
      return {
        ...state,
        place: action.payload,
        defaultPlace: action.addType != "search" ? action.payload : state.defaultPlace
      };
    case "ADD_USER_DATA":
      console.log("we are here 2 action payload", action.payload);
      return {
        ...state,
        user: { ...action.payload },
      };
    case "ADD_TO_SAVED_PLACES":
      return {
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
    case "COMPLETE":
      return {
        loading: false,
      };
    case "API_UNAUTHORIZED":
      return {
        ...state,
        unauthorized: true,
      };
    case "CHANGE_APP_THEME": {
      return {
        ...state,
        appTheme: action.payload,
      };
    }
    default:
      throw new Error();
  }
};
