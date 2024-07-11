import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { prepareData } from "../../utils/prepareData";
import ScatterChartComponent from "../ScatterChartComponent/ScatterChartComponent";
import HistogramComponent from "../HistogramComponent/HistogramComponent";
import BarChartComponent from "../BarChartComponent/BarChartComponent";
import { fetchData } from "next-auth/client/_utils";

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
        <>
          <ScatterChartComponent data={data} />
          <HistogramComponent data={data} />
          <BarChartComponent
            data={data}
            dataKey="acousticness"
            name="Acousticness"
          />
          <BarChartComponent data={data} dataKey="tempo" name="Tempo" />
        </>
      )}
    </>
  );
};

export default Charts;
