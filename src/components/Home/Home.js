import React, { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import DataTable from "../../DataTable/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/slices/dataSlice";

const Home = () => {
  const { isLoading, error, sendRequest: sendDataRequest } = useHttp();
  const dispatch = useDispatch();
  const { data, count: totalCount } = useSelector((state) => state.data);

  useEffect(() => {
    const storeData = (data) => {
      dispatch(fetchData(data));
    };

    sendDataRequest(
      {
        url: `${process.env.REACT_APP_API_URL}/songs/?limit=-1`,
      },
      storeData
    );
  }, [sendDataRequest, dispatch]);

  return (
    <>
      {!isLoading && (
        <DataTable
          data={data}
          totalRecords={totalCount}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default Home;
