import BarChart_data from '../data/BarChart_data.json'

import 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

export default function BarChart(){
    const barChart={
        labels:BarChart_data.map(item=>item.label),
        datasets:[
            {
                label:"Daily Hunts",
                data :BarChart_data.map(item=>item.value),
                backgroundColor:[
                    '#f30808',
                    '#f8f129',
                    '#2ff50c',
                    '#0763ed',
                    '#ff0bf7',
                    '#11c7f5',
                    '#f6a327'
                ],
                borderWidth:2,
                tension:0.4,
                fill:true
            }
        ]
    }
    return(
        <Bar data={barChart}/>
    )
}