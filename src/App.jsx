import React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./themes/themes";
import { useSelector } from "react-redux";
import Nav from "./components/Nav/Nav";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";

const App = () => {
  const themeMode = useSelector((state) => state.theme.mode);

  const themeconfig = createTheme(
    themeMode === "light" ? lightTheme : darkTheme
  );

  return (
    <ThemeProvider theme={themeconfig}>
      <CssBaseline />
      <BrowserRouter>
        <Nav />
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
