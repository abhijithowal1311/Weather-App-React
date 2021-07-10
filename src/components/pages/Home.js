import React, { useContext } from "react";
import { WeatherContext } from "../../context";
import WeatherGraph from "../graph/WeatherGraph";
import DailyWeatherList from "../ui/DailyWeather/DailyWeatherList";

export default function Home() {
  const [state, dispatch] = useContext(WeatherContext);

  return (
    <div className="d-flex flex-column page">
      {/* /TODO: implement later */}
      {/* <SavedPlaces /> */}
    <div className="page__title_2 py-3 text-primaryNew">{state.place}</div>
      {state.weatherData && state.weatherData.daily && (
        <DailyWeatherList dailyWeatherList={state.weatherData.daily} />
      )}
    <div className="page__title_2 py-4 text-primaryNew">Weather Graph</div>
      <WeatherGraph />
    </div>
  );
}
