import { useState, useEffect } from "react";
import { ACTION_TYPES } from "../context/types";
import { weatherAPI } from "../service/weatherAPI";

function useWeatherData(location, unitType, dispatch) {
  const [weatherData, setweatherData] = useState(null);

  useEffect(() => {
      console.log("location changed",location)
    function getWeatherData() {
      weatherAPI
        .getWeatherInfo(
          { lat: location.latitude, lon: location.longitude },
          unitType
        )
        .then((response) => {
          setweatherData(response);
        });
    }
    location && location.latitude && getWeatherData();
  }, [location, dispatch, unitType]);

  return weatherData;
}

export default useWeatherData;
