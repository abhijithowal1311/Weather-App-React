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
  currentLocation: {},
  locationEnabled: false,
  locatonBlocked: false,
  defaultLocation: "Bangalore",
  loading: false,
  error: null,
  appTheme: "light",
  unauthorized: false,
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
