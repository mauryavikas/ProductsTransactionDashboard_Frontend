import React, { useState } from 'react';
import { months } from '../utils';

const MonthDropdown = ({ selectedMonth, onMonthChange=(m)=>{} }) => {


    const handleChange = (event) => {
        const selectedValue = event.target.value;
        onMonthChange(selectedValue);
    };

    return (
        <select
            style={{ padding: "8px", fontSize: "14px", border: "1px solid #ccc", borderRadius: "4px" }}
            value={selectedMonth}
            onChange={handleChange}
        >
            {months.map((month, index) => (
                <option key={index} value={index + 1}>
                    {month}
                </option>
            ))}
        </select>
    );
};

export default React.memo(MonthDropdown);
