import React, { useContext } from 'react'
import { WeatherContext } from '../../context'
import GraphContent from './GraphContent'
import GraphFilter from './GraphFilter'

export default function WeatherGraph() {
    const [state,dispatch] = useContext(WeatherContext);
    
    return (
        <div className="graph">
            <GraphFilter />
            <GraphContent />
        </div>
    )
}
