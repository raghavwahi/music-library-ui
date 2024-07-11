import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarChartComponent = ({ data, dataKey, name }) => (
  <BarChart width={400} height={400} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="title" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey={dataKey} fill="#8884d8" name={name} />
  </BarChart>
);

export default BarChartComponent;
