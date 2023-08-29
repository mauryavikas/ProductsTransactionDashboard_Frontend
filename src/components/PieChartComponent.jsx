import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const PieChartComponent=React.memo(({data})=>{
  return (
    <PieChart width={400} height={300}>
      <Pie
        dataKey="items"
        nameKey="category"
        isAnimationActive={false}
        data={data}
        cx={200}
        cy={150}
        outerRadius={80}
        fill="rgb(37, 121, 211)"
        label
      />
      <Tooltip />
    </PieChart>
  );
});

export default PieChartComponent
