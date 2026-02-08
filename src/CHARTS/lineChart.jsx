import LineChart_data from '../data/LineChart_data.json'

import "chart.js/auto"
import { Line } from 'react-chartjs-2'

export default function LineChart() {
    const lineData = {
        labels: LineChart_data.map(item => item.label),
        datasets: [
            {
                label: "Daily Activities",
                data: LineChart_data.map(item => item.income),
                borderColor: "#0ef4e9",
                backgroundColor: "#0ef4e933",
                borderWidth: 3,
                tension: 0.4,
                fill: true
            },
            {
                label: "Daily Activities",
                data: LineChart_data.map(item => item.outflow),
                borderColor: "#e53f26",
                backgroundColor: "#f4160e5b",
                borderWidth: 3,
                tension: 0.4,
                fill: true
            }
        ]
    }

    return <Line data={lineData} />
}
