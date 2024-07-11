import React from "react";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to the Themed Application
      </Typography>
      <Typography variant="body1">
        This is a sample application to demonstrate theme switching using
        Material-UI.
      </Typography>
    </div>
  );
};

export default Home;
