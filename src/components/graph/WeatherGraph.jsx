import React, { useContext } from 'react'
import { WeatherContext } from '../../context'
import GraphContent from './GraphContent'
import GraphFilter from './GraphFilter'

export default function WeatherGraph() {
    const [state,dispatch] = useContext(WeatherContext);
    console.log('c',state.weatherData)
    return (
        <div className="graph">
            <GraphFilter />
            {state.weatherData && state.weatherData.lat && <GraphContent data={state.weatherData}/> }
        </div>
    )
}
