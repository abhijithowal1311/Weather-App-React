import React from 'react'
import { Doughnut, Line, Bar, Bubble } from 'react-chartjs-2';
import { WEATHER_PARAMETER_MAPPING } from '../../constants';

export default function GraphContent({data, type, param}) {
    let options =  {labels: data.labels,
    datasets: [{
        label: WEATHER_PARAMETER_MAPPING[param],
        data: data.data,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
    }]}

    return (
        <div className="d-flex w-100 justify-content-center align-items-center p-lg-5 p-2 pt-lg-5 pt-4">
            { options && GetGraphType(type, options) }
        </div>
    )
}

function GetGraphType(type, options) {
    switch(type) {
        case "line":
            return <Line data={options} className="d-flex w-100 graph__container"/>
        case "bar":
            return <Bar  data={options} className="d-flex w-100 graph__container"/>
        default:
            return <Bubble data={options} className="d-flex w-100 graph__container"/>
    }
}