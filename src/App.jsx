import React, { useState, useCallback } from 'react'
import './App.css'
import {
  Header,
  ProductsTable,
  MonthlyStatistics,
  MonthlyBarChart,
  MonthlyPieChart,
} from "./components"

function App() {

  const [month, setMonth] = useState(3);
  const handleMonthChange = useCallback((m) => {
    setMonth(m);
  });
  return (
    <div className='main'>
      <Header />
      <div className='products'>
        <ProductsTable month={month} onMonthChange={handleMonthChange} />
      </div>
      <div className='data-container'>
          <MonthlyStatistics month={month} />
          <MonthlyBarChart month={month}/>
          <MonthlyPieChart month={month}/>
      </div>
    </div>
  )
}

export default App
