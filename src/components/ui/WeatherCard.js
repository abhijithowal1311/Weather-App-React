import React from 'react'

export default function WeatherCard({weather, unitText}) {
    console.log("location and weather",weather)
    return (
        <div>
            <div>{weather.current && weather.current.temp}  {unitText}</div>
        </div>
    )
}
