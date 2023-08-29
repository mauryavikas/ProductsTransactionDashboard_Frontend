import React,{useState,useEffect} from 'react';
import PieChartComponent from './PieChartComponent';
import {productServices} from '../Api/productServices';
import { months } from '../utils';

const MonthlyPieChart = React.memo(({month}) => {

      const [pieChartData,setPieChartData]=useState([]);

      useEffect(()=>{
    
        fetch(`${productServices.monthlyPieChart}?month=${month}`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setPieChartData(data?.categoryCount)
        }).catch((error)=>{
          console.log("Error ")
        })
      },[month])
  
    return (
        <div style={{ ...style.card }}>
            <h2 style={{ ...style.tittle }}>{`Pie Chart - ${months[month-1]}`}</h2>
            <PieChartComponent data={pieChartData} />
        </div>
    )
});

const style = {
    card: {
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
        padding: "10px",
    },
    tittle: {
        fontSize: "20px",
        marginBottom: "10px",
        textAlign:"center"
    },
}

export default MonthlyPieChart 