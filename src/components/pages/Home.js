import React, { useContext, useEffect, useMemo } from "react";
import { WeatherContext } from "../../context";
import useWeatherData from "../../hooks/useWeatherData";
import weatherUtils from "../../utils/weatherUtilities";
import WeatherCard from "../ui/WeatherCard";

export default function Home() {
  const [state, dispatch] = useContext(WeatherContext);
  const weatherInfo = useWeatherData(
    state.currentLocation,
    state.unitType,
    dispatch
  );

  const unitText = useMemo(
    () => weatherUtils.getTemperatueType(state.unitType),
    [state.unitType]
  );

  useEffect(() => {
    weatherInfo && weatherUtils.addWeatherInfoToStore(weatherInfo, dispatch);
  }, [weatherInfo]);

  return (
    <div>
      {weatherInfo && <WeatherCard weather={weatherInfo} unitText={unitText} />}
    </div>
  );
}
