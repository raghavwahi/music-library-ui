import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { prepareData } from "../../utils/prepareData";
import ScatterChartComponent from "../ScatterChartComponent/ScatterChartComponent";
import HistogramComponent from "../HistogramComponent/HistogramComponent";
import BarChartComponent from "../BarChartComponent/BarChartComponent";
import { fetchData } from "next-auth/client/_utils";
import { Grid, Typography } from "@mui/material";

const Charts = () => {
  const dispatch = useDispatch();

  let { data, status } = useSelector((state) => state.data);
  data = prepareData(data);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  return (
    <>
      {status === "success" && (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              Scatter Chart
            </Typography>
            <ScatterChartComponent data={data} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              Histogram
            </Typography>
            <HistogramComponent data={data} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              Acousticness Bar Chart
            </Typography>
            <BarChartComponent
              data={data}
              dataKey="acousticness"
              name="Acousticness"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              Tempo Bar Chart
            </Typography>
            <BarChartComponent data={data} dataKey="tempo" name="Tempo" />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Charts;
