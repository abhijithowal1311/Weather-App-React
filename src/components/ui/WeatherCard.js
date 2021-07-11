import moment from "moment";
import React from "react";
import { Card, CardBody, Progress } from "reactstrap";
import weatherUtils from "../../utils/weatherUtilities";

export default function WeatherCard({ weather, unitText, place }) {
  console.log("location and weather", weather);
  return (
    <Card className="weather__card">
      <CardBody className="card__content">
          <div className="d-flex justify-content-around">
            { weather && weather.current && <img className="card__icon" alt="" src={weatherUtils.getWeatherIconUrl(weather.current.weather[0])}  /> }
            <div className="d-flex flex-column">
                <strong>Today</strong>
                <strong>{new Date().getHours() + ":" + new Date().getMinutes()}</strong>
                <div className="current__date">{moment(new Date()).format("ddd") + ", " + moment(new Date()).format("DD MMMM")} </div>
            </div>
          </div>
        <div className="current_temp text-center pt-3">
          {weather.current && weather.current.temp} {unitText}
        </div>
        <div className="current__place"> {place} </div>
        <div>
            <div className="d-flex align-items-center justify-content-between mt-3">
                <div className="weather_card_label">Humidity</div>
                <div className="weather_card_value">{weather.current && weather.current.humidity}%</div>
            </div>
            <Progress color="info" className="progress__bar" value={weather.current && weather.current.humidity} />
            <div className="d-flex align-items-center justify-content-between mt-3">
                <div className="weather_card_label">Wind Speed</div>
                <div className="weather_card_value">{weather.current && parseFloat(weather.current.wind_speed*18/5).toFixed(2)} km/h</div>
            </div>
        </div>
      </CardBody>
    </Card>
  );
}
