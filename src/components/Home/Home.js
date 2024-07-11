import React, { useEffect } from "react";
import DataTable from "../../DataTable/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/slices/dataSlice";

const Home = () => {
  const dispatch = useDispatch();
  const {
    data,
    count: totalCount,
    status,
  } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      {status === "success" && (
        <DataTable data={data} totalRecords={totalCount} />
      )}
    </>
  );
};

export default Home;
