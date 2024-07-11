import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Charts from "../Charts/Charts";
import SearchSong from "../SearchSong/SearchSong";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/searchsong" element={<SearchSong />} />
    </Routes>
  );
};

export default AppRouter;
