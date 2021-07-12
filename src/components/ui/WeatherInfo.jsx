import React from "react";
import weatherUtils from "../../utils/weatherUtilities";
import windIcon from "../../assets/weather/wind.png";
import humidIcon from "../../assets/weather/humidity.png";
import pressureIcon from "../../assets/weather/gauge.png";
import dewIcon from "../../assets/weather/dew-point.png";
import cloudIcon from "../../assets/weather/cloud.png";

export default function WeatherInfo({ weather }) {
  return (
    <div className="weather__info">
      {weather && weather.weather && (
        <img
          className="card__icon"
          alt=""
          src={weatherUtils.getWeatherIconUrl(weather.weather[0])}
        />
      )}
      <div className="d-flex flex-column align-items-center">
        <div className="weather__temp">{weather.feels_like}°</div>
        <div>feels like</div>
      </div>
      <div className="weather__details border-right border-left">
        <div className="weather__details__item border-bottom">
          <div className="weather__label">
            <img src={humidIcon} alt="" className="weather__icon__small" />
            Humidity
          </div>
          <div className="weather__value">
            {weather.humidity}%
          </div>
        </div>
        {/* <hr /> */}
        <div className="weather__details__item border-bottom">
          <div className="weather__label">
            <img src={pressureIcon} alt="" className="weather__icon__small" />
            Pressure
          </div>
          <div className="weather__value">
            {weather.pressure} mbar
          </div>
        </div>
      </div>
      <div className="weather__details border-right">
        <div className="weather__details__item border-bottom">
          <div className="weather__label">
            <img src={windIcon} alt="" className="weather__icon__small" />
            Wind
          </div>
          <div className="weather__value">
            {parseFloat((weather.wind_speed * 18) / 5).toFixed(2)} km/h
          </div>
        </div>
        {/* <hr /> */}
        <div className="weather__details__item border-bottom">
          <div className="weather__label">
            <img src={windIcon} alt="" className="weather__icon__small" />
            Wind Gust
          </div>
          <div className="weather__value">
            {parseFloat((weather.wind_gust * 18) / 5).toFixed(2)} km/h
          </div>
        </div>
      </div>
      <div className="weather__details ">
        <div className="weather__details__item border-bottom">
          <div className="weather__label">
          <img src={dewIcon} alt="" className="weather__icon__small" />
              Dew
            </div>
          <div className="weather__value">{weather.dew_point} °</div>
        </div>
        {/* <hr /> */}
        <div className="weather__details__item">
          <div className="weather__label">
          <img src={cloudIcon} alt="" className="weather__icon__small" />
          
              Cloud Cover
            </div>
          <div className="weather__value">
            {weather.clouds} %
          </div>
        </div>
      </div>
    </div>
  );
}
