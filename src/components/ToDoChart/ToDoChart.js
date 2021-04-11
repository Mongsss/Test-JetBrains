import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const ToDoChart = ({ filterList }) => {
  const [data, setData] = useState([]);

  const fetchDays = () => {
    let arr = filterList.map(item => {
      let properties = {
        "day": item.date,
      };
      return properties;
    });

    let newArr = {};

    arr.forEach(function(obj) {
      let key = JSON.stringify(obj.day);
      newArr[key] = (newArr[key] || 0) + 1
    });

    let res = [];

    Object.keys(newArr).forEach(function(key) {
      let obj = {};
      obj[key] = newArr[key];
      res.push({
        day: key,
        count: newArr[key]
      });
    });

    return res;
  }
  
  useEffect(() => {
    console.log(fetchDays());
    setData(fetchDays());
  }, [filterList]);


  return (
    <div style={{ height:"300px" }}>
      <ResponsiveContainer width="100%" height="100%" >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ToDoChart;