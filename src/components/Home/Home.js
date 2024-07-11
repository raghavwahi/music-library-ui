import React, { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import DataTable from "../../DataTable/DataTable";

const Home = () => {
  const { isLoading, error, sendRequest: sendDataRequest } = useHttp();

  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const storeData = (data) => {
    setData(() => [...data.data]);
    setTotalCount(data.total);
  };

  useEffect(() => {
    sendDataRequest(
      {
        url: `${process.env.REACT_APP_API_URL}/songs/?limit=-1`,
      },
      storeData
    );
  }, [sendDataRequest]);

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
