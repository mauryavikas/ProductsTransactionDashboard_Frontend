import React,{useState,useEffect} from 'react'
import {productServices} from '../Api/productServices'
import { months } from '../utils';

const MonthlyStatistics = React.memo(({month}) => {
    


    const [statisticsData,setStatisticsData]=useState([]);

    useEffect(()=>{
  
      fetch(`${productServices.monthlystatistics}?month=${month}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setStatisticsData(data)
      }).catch((error)=>{
        console.log("Error ")
      })
    },[month])
    
    return (
        <div style={{ ...style.card}}>
            <h2 style={{ ...style.tittle}}>{`Statistics - ${months[month-1]}`}</h2>
            <div style={{ ...style.content}}>
                <div style={{ ...style.field }}>
                    <h3 style={{ fontSize: "16px" }}>Total Sale : </h3>
                    <p style={{ ...style.value }}>{parseFloat(statisticsData?.totalSaleAmount).toFixed(2)}</p>
                </div>
                <div style={{ ...style.field }}>
                    <h3 style={{ fontSize: "16px" }}>Total Sold Items : </h3>
                    <p style={{ ...style.value }}>{statisticsData?.totalSoldItem}</p>
                </div>
                <div style={{ ...style.field}}>
                    <h3 style={{ fontSize: "16px" }}>Total Not Sold Items : </h3>
                    <p style={{ ...style.value }}>{statisticsData?.totalUnsoldItem}</p>
                </div>
            </div>
        </div>
    )
});

const style = {
    card: {
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
    },
    tittle: {
        fontSize: "20px",
        marginBottom: "10px",
        textAlign:"center"
    },
    content: {
        flex:1,
        display: "flex",
        flexDirection: "column",
        justifyContent:'center'
    },
    field: {
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center",
        padding:"0 10px",
        gap: "10px",
    },
    value: {
        fontSize: "16px",
        color: "#007bff",
        margin: "5px 0",
        fontWeight:"bold",
    }
}

export default MonthlyStatistics