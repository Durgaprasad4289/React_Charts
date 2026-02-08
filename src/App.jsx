import LineChart from "./CHARTS/lineChart";
import PieChart from "./CHARTS/pieChart";
import BarChart from "./CHARTS/barChart";
import Doughnut_Chart from "./CHARTS/doughnut";

import './App.css'
export default function App(){
    return(
        
        <>
            <div className="item">
                <PieChart/>
            </div>
            <div className="item">
                <LineChart/>
            </div>
            <div className="item">
                <BarChart/>
            </div>
            <div className="item">
                <Doughnut_Chart/>
            </div>
        </>
    )
}