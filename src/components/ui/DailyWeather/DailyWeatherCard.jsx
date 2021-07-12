import moment from "moment";
import React from "react";
import weatherUtils from "../../../utils/weatherUtilities";

export default function DailyWeatherCard({ weather = {} }) {
  return (
    <div className="daily__weather__item">
      <div className="daily__weather__description">
        {weather && weather.weather && weather.weather.length > 0 && (
          <div>{weather.weather[0].main}</div>
        )}
      </div>
      <img
        className="daily__weather__icon"
        src={weatherUtils.getWeatherIconUrl(weather.weather[0])}
      />
      <div className="daily__weather__temp mt-0">
        {parseInt(weather.temp.min)} / {parseInt(weather.temp.max)}
      </div>
      <div className="daily__weather__date pt-1">
        {moment.unix(weather.dt).format("DD ddd")}
      </div>
    </div>
  );
}
