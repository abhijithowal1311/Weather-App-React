export const rootReducer = (state, action) => {
  switch (action.type) {
    case "ADD_WEATHER_DATA":
      return {
        ...state,
        weatherData: { ...action.payload },
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
    case "ADD_USER_PLACE":
      return {
        ...state,
        place: action.payload,
      };
    case "ADD_USER_DATA":
      console.log("we are here 2 action payload",action.payload)
      return {
        ...state,
        user: {...action.payload},
      };
    case "COMPLETE":
      return {
        loading: false,
      };
    case "API_UNAUTHORIZED":
      return {
          ...state,
          unauthorized: true
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
