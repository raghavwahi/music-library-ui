// src/App.js
import React, { useState } from "react";
import { createTheme, ThemeProvider, CssBaseline, Button } from "@mui/material";
import { lightTheme, darkTheme } from "./theme/theme";
import Home from "./components/Home/Home"; // Assuming you have a Home component

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeConfig = createTheme(theme === "light" ? lightTheme : darkTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      <Button onClick={toggleTheme} variant="contained" color="primary">
        Toggle Theme
      </Button>
      <Home />
    </ThemeProvider>
  );
};

export default App;
