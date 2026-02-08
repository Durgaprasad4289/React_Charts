import doughnut_data from '../data/doughnut_data.json'

import 'chart.js/auto'
import { Doughnut } from "react-chartjs-2";

export default function Doughnut_Chart(){
    const DoughnutData={
        labels:doughnut_data.map(item=>item.label),
        datasets:[
            {
                data:doughnut_data.map(item=>item.value),
                backgroundColor: [
                    '#f87171',
                    '#60a5fa',
                    '#34d399',
                    '#fbbf24'
                ],
                borderWidth:2,
                tension:.4,
                fill:true
            }
        ]
    }
    return(
        <Doughnut data={DoughnutData}/>
    )
}