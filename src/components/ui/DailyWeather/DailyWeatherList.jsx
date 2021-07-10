import React from 'react'
import DailyWeatherCard from './DailyWeatherCard'

export default function DailyWeatherList({dailyWeatherList = []}) {
    return (
        <div className="weather__list">
            {
                dailyWeatherList.map(item => {
                    return (
                        <DailyWeatherCard weather={item}/>
                    )
                })
            }
        </div>
    )
}
