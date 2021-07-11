import React, { useReducer, createContext } from "react";
import { rootReducer } from "./reducer";

export const WeatherContext = createContext();

const initialState = {
  user: {
    name: "",
    email: "",
    location: "",
  },
  weatherData: {},
  savedData: [],
  locationWeatherData: {},
  currentLocation: {},
  locationEnabled: false,
  locatonBlocked: false,
  appLoading: true,
  defaultLocation: "Bangalore",
  loading: false,
  error: null,
  appTheme: "light",
  unauthorized: false,
  defaultPlace: "",
  place: "",
  unitType: "metric"
};

export const WeatherContextProvider = (props) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <WeatherContext.Provider value={[state, dispatch]}>
      {props.children}
    </WeatherContext.Provider>
  );
};
