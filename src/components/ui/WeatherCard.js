import React from 'react';
import { Card, CardBody } from 'reactstrap';
import "../../styles/weather-card.scss";

export default function WeatherCard({weather, unitText, place}) {
    console.log("location and weather",weather)
    return (
        <Card className="weather__card">
            <CardBody className="card__content">
                <div>{weather.current && weather.current.temp}  {unitText}</div>
                <div> {place} </div>
            </CardBody>
        </Card>
    )
}
