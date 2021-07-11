import React from 'react'
import { Doughnut, Line } from 'react-chartjs-2';

export default function GraphContent({data}) {
    console.log('graph data',data)
    let options =  {labels: data.labels,
    datasets: [{
        label: "temperature",
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
        borderWidth: 1
    }]}

    return (
        <div className="d-flex w-100 justify-content-center align-items-center p-5">
            { options && <Line data={options} className="d-flex w-100 graph__container bg-white"/> }
        </div>
    )
}
