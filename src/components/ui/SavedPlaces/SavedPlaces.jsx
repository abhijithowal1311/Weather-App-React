import moment from "moment";
import React from "react";
import Slider from "react-slick";
import { Card, CardBody, Progress } from "reactstrap";
import utils from "../../../utils/utils";
import weatherUtils from "../../../utils/weatherUtilities";

export default function SavedPlaces({ savedPlaces }) {
  console.log("saved places test", savedPlaces);
  return (
    <div className="saved__places">
      {savedPlaces && savedPlaces.length ? (
        <React.Fragment>
          <div className="page__title_2 py-1 pb-2 px-3  text-primaryNew">
            Saved Places
          </div>
          <SavedPlacesList savedPlaces={savedPlaces} />
        </React.Fragment>
      ) : (
        ""
      )}
    </div>
  );
}

function SavedPlacesList({ savedPlaces }) {
  return (
    <div className="d-flex saved__places__wrapper">
      {savedPlaces &&
        savedPlaces.length > 0 &&
        savedPlaces.map((place) => {
          return (
            <Card className="saved__place__card_new px-4">
              <CardBody>
                <div className="place__name">{place.place}</div>
                <div className="weather__details">
                  <div className="weather__icon__wrapper">
                    <img
                      className="card__icon"
                      alt=""
                      src={weatherUtils.getWeatherIconUrl(
                        place.weatherData.current.weather[0]
                      )}
                    />
                  </div>
                  <div className="line"></div>
                  <div className="weather__temp">
                    {place.weatherData.current.temp}°​
                  </div>
                </div>
                <hr />
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <div className="weather_card_label">Humidity</div>
                  <div className="weather_card_value">
                    {place.weatherData.current &&
                      place.weatherData.current.humidity}
                    %
                  </div>
                </div>
                <Progress
                  color="info"
                  className="progress__bar"
                  value={
                    place.weatherData.current &&
                    place.weatherData.current.humidity
                  }
                />
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <div className="weather_card_label">Wind Speed</div>
                  <div className="weather_card_value">
                    {place.weatherData.current &&
                      parseFloat(
                        (place.weatherData.current.wind_speed * 18) / 5
                      ).toFixed(2)}{" "}
                    km/h
                  </div>
                </div>
              </CardBody>
            </Card>
          );
        })}
    </div>
  );
}
