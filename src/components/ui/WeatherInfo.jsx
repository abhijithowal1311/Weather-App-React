import React from "react";
import weatherUtils from "../../utils/weatherUtilities";

export default function WeatherInfo({ weather }) {
  return (
    <div className="weather__info">
      { weather && weather.weather && <img
        className="card__icon"
        alt=""
        src={weatherUtils.getWeatherIconUrl(
          weather.weather[0]
        )}
      />}
      <div className="d-flex flex-column align-items-center">
        <div className="weather__temp">{weather.feels_like}°</div>
        <div>feels like</div>
      </div>

      <div className=""></div>
    </div>
  );
}
