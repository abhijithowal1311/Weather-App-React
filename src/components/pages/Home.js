import { Button, Spinner } from "reactstrap";
import React, { useContext } from "react";
import { WeatherContext } from "../../context";
import WeatherGraph from "../graph/WeatherGraph";
import DailyWeatherList from "../ui/DailyWeather/DailyWeatherList";
import { ACTION_TYPES } from "../../context/types";
import { toast, ToastContainer } from "react-toastify";
import SavedPlaces from "../ui/SavedPlaces/SavedPlaces";
import WeatherInfo from "../ui/WeatherInfo";
import Loader from "react-loaders";

export default function Home() {
  const [state, dispatch] = useContext(WeatherContext);

  function addtoSavedPlaces() {
    toast.info("Place is Saved");
    dispatch({
      type: ACTION_TYPES.ADD_TO_SAVED_PLACES,
    });
  }

  return (
    <div
      className={`d-flex flex-column ${
        state.appTheme == "dark" ? "page_dark" : "page"
      }`}
    >
      {state.savedData && <SavedPlaces savedPlaces={state.savedData} />}
      <div className="d-flex w-100 justify-content-between">
        <div className="page__title py-3 pt-lg-5 text-primaryNew">
          Weather today in {state.place}
        </div>
      </div>
      {state.weatherData && state.weatherData.current ? (
        <WeatherInfo weather={state.weatherData.current} />
      ): (
        <div className="w-100 d-flex justify-content-center">
          <Loader type="ball-beat" active color="#6579f7" />
        </div>
      )}
      <div className="d-flex w-100 justify-content-between align-items-center">
        <div className="page__title py-3 pt-lg-5 text-primaryNew">
          This Week
          <span className="font-size-20"></span>
        </div>
        <span
          className="interactive font-size-20 text-primary text-bold py-3 px-2"
          onClick={addtoSavedPlaces}
        >
          Save Place
        </span>
      </div>
      {state.weatherData && state.weatherData.daily ? (
        <DailyWeatherList dailyWeatherList={state.weatherData.daily} />
      ) : (
        <div className="w-100 d-flex justify-content-center">
          <Loader type="ball-beat" active color="#6579f7" />
        </div>
      )}
      <div className="page__title w-100 py-4 text-primaryNew">
        Weather Graph
      </div>
      <WeatherGraph />
      <ToastContainer />
    </div>
  );
}
