import React,{useState,useEffect} from 'react';
import BarChartComponent from './BarChartComponent';
import {productServices} from '../Api/productServices';
import { months } from '../utils';


const MonthlyBarChart = React.memo(({month}) => {

    const [barChartData,setBarChartData]=useState([]);

    useEffect(()=>{
  
      fetch(`${productServices.monthlyBarChart}?month=${month}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setBarChartData(data?.priceRangeData)
      }).catch((error)=>{
        console.log("Error ")
      })
    },[month])

    return (
        <div style={{ ...style.card }}>
            <h2 style={{ ...style.tittle }}>{`Bar Chart - ${months[month-1]}`}</h2>
            <BarChartComponent data={barChartData} />
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

export default MonthlyBarChart 

