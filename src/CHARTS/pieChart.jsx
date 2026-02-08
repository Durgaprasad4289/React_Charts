import BarChart_data from '../data/BarChart_data.json'

import "chart.js/auto"
import { Pie } from 'react-chartjs-2'

export default function PieChart() {
    const pieData = {
        labels: BarChart_data.map(item => item.label),
        datasets: [
            {
                label: "BarChart_data",
                data: BarChart_data.map(item => item.value),
                backgroundColor: [
                    '#f87171',
                    '#60a5fa',
                    '#34d399',
                    '#fbbf24'
                ],
                borderColor: '#fff',
                borderWidth: 3
            }
        ]
    }

    return (
        <div className="pie">
            <Pie data={pieData} />
        </div>
    )
}
