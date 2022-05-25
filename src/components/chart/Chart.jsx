import React from 'react'
import './chart.scss'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  { name: "January", Total: 1200 },
  { name: "Feburary", Total: 3000 },
  { name: "March", Total: 100 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 800 },
  { name: "June", Total: 1900 },
];

const Chart = ({aspect, title}) => {
     return (
          <div className="chart">
               <div className="title">{title}</div>
       <ResponsiveContainer width="100%" aspect={aspect} >
       <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
         <defs>
       <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
       <stop offset="5%" stopColor="#00458e" stopOpacity={0.8}/>
       <stop offset="95%" stopColor="#00458e" stopOpacity={0}/>
       </linearGradient>
       </defs>
       <XAxis dataKey="name" stroke="gray" />
       {/* <YAxis /> */}
       <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
       <Tooltip />
      {/* the Total is connecting to the data that is defined */}
      <Area type="monotone" dataKey="Total" stroke="#00458e" fillOpacity={1} fill="url(#total)" />
      </AreaChart>
      </ResponsiveContainer>
          </div>

     )
}

export default Chart
