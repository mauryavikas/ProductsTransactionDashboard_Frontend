import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";



const  BarChartComponent= React.memo(({data})=>{
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 10,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="range" allowDataOverflow={true} />
      <YAxis allowDecimals={false} />
      <Tooltip />
      <Legend />
      <Bar dataKey="items" stackId="a" fill="rgb(37, 121, 211)" />
      {/* <Bar dataKey="uv" stackId="a" fill="#82ca9d" /> */}
    </BarChart>
  );
});

export default BarChartComponent
