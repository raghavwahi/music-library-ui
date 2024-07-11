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

const HistogramComponent = ({ data }) => (
  <BarChart width={400} height={400} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="duration_seconds" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="duration_seconds" fill="#8884d8" />
  </BarChart>
);

export default HistogramComponent;
