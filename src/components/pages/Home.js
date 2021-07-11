import { Button } from "reactstrap";
import React, { useContext } from "react";
import { WeatherContext } from "../../context";
import WeatherGraph from "../graph/WeatherGraph";
import DailyWeatherList from "../ui/DailyWeather/DailyWeatherList";
import { ACTION_TYPES } from "../../context/types";
import { toast, ToastContainer } from "react-toastify";
import SavedPlaces from "../ui/SavedPlaces/SavedPlaces";

export default function Home() {
  const [state, dispatch] = useContext(WeatherContext);

  function addtoSavedPlaces() {
    toast.info("Place is Saved")
    dispatch({
      type: ACTION_TYPES.ADD_TO_SAVED_PLACES
    })
  }

  return (
    <div className="d-flex flex-column page">
      {/* /TODO: implement later */}
      <SavedPlaces />
      <div className="d-flex w-100 justify-content-between">
        <div className="page__title_2 py-3 text-primaryNew">{state.place}<span className="font-size-20"> (this week)</span></div>
        <span className="interactive text-primary py-3 px-2" onClick={addtoSavedPlaces}>Save</span>
      </div>
      {state.weatherData && state.weatherData.daily && (
        <DailyWeatherList dailyWeatherList={state.weatherData.daily} />
      )}
      <div className="page__title_2 py-4 text-primaryNew">Weather Graph</div>
      <WeatherGraph />
      <ToastContainer/>
    </div>
  );
}
