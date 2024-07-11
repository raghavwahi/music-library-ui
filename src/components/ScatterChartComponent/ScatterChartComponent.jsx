import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ScatterChartComponent = ({ data }) => (
  <ScatterChart width={400} height={400}>
    <CartesianGrid />
    <XAxis type="number" dataKey="danceability" name="Danceability" />
    <YAxis type="number" dataKey="energy" name="Energy" />
    <Tooltip cursor={{ strokeDasharray: "3 3" }} />
    <Legend />
    <Scatter name="Songs" data={data} fill="#8884d8" />
  </ScatterChart>
);

export default ScatterChartComponent;
