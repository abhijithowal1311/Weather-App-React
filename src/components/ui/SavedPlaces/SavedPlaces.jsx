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
          <SavedPlacesListNew savedPlaces={savedPlaces} />
        </React.Fragment>
      ) : (
        ""
      )}
    </div>
  );
}

function SavedPlacesListNew({ savedPlaces }) {
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

function SavedPlacesList({ savedPlaces }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  console.log("saved places 2", savedPlaces);
  return (
    <Slider {...settings} c>
      {savedPlaces &&
        savedPlaces.length > 0 &&
        savedPlaces.map((place) => {
          return (
            <div className="saved__place__card px-4">
              <Card className="m-0 p-0">
                <CardBody className="m-0 p-0">
                  <img
                    className="weather__image"
                    src={utils.getWeatherImage(
                      place.weatherData.current.weather[0]
                    )}
                  />
                  <div className="weather__details">
                    <div className="place__name">{place.place}</div>
                    <div className="weather__content">
                      <div className="d-flex justify-content-around p-3">
                        {
                          <img
                            className="card__icon"
                            alt=""
                            src={weatherUtils.getWeatherIconUrl(
                              place.weatherData.current.weather[0]
                            )}
                          />
                        }
                        <div className="d-flex flex-column">
                          <strong>Today</strong>
                          <strong>
                            {new Date().getHours() +
                              ":" +
                              new Date().getMinutes()}
                          </strong>
                          {/* <div className="current__date">{moment(new Date()).format("ddd") + ", " + moment(new Date()).format("DD MMMM")} </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          );
        })}
    </Slider>
  );
}
