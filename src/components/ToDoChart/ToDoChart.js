import React, { useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    day: 'Sunday',
    count: 0,
  },
  {
    day: 'Monday',
    count: 0,
  },
  {
    day: 'Tuesday',
    count: 0,
  },
  {
    day: 'Wednesday',
    count: 0,
  },
  {
    day: 'Thursday',
    count: 0,
  },
  {
    day: 'Friday',
    count: 0,
  },
  {
    day: 'Saturday',
    count: 0,
  },
];


const ToDoChart = ({ filterList }) => {
  // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [value, setValue]

  const fetchDays = () => {
    let arr = filterList.map(item => {
      let properties = {
        "day": item.date,
      };
      return properties;
    });

    let newArr = {}

    arr.forEach(function(obj) {
      var key = JSON.stringify(obj.day)
      newArr[key] = (newArr[key] || 0) + 1
    })

    return newArr;
  }
  

  useEffect(() => {
    console.log(fetchDays());
    fetchDays();
  }, []);

  // console.log(fetchDays());

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
          <XAxis dataKey="name" />
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