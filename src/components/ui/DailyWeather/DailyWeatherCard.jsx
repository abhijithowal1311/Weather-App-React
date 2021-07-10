import moment from "moment";
import React from "react";
import { Card, CardBody } from "reactstrap";
import weatherUtils from "../../../utils/weatherUtilities";

export default function DailyWeatherCard({ weather = {} }) {
  return (
    <Card className="d-flex px-3 py-0 daily__weather__card">
      <CardBody className="daily__weather__item">
        <img src={weatherUtils.getWeatherIconUrl(weather.weather[0])} />
        <div className="text-bold font-size-14 text-center">
          {parseInt(weather.temp.min)}/{parseInt(weather.temp.max)}
        </div>
        <div className="text-muted pt-1">
            {moment.unix(weather.dt).format('DD ddd')}
        </div>
      </CardBody>
    </Card>
  );
}
