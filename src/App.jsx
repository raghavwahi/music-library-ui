import React from "react";
import { createTheme, ThemeProvider, CssBaseline, Button } from "@mui/material";
import { lightTheme, darkTheme } from "./themes/themes";
import { useDispatch, useSelector } from "react-redux";
import Home from "./components/Home/Home";
import { toggleTheme } from "./store/slices/themeSlice";

const App = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);

  const themeconfig = createTheme(
    themeMode === "light" ? lightTheme : darkTheme
  );

  return (
    <ThemeProvider theme={themeconfig}>
      <CssBaseline />
      <Button
        onClick={() => dispatch(toggleTheme())}
        variant="contained"
        color="primary"
      >
        Toggle Theme
      </Button>
      <Home />
    </ThemeProvider>
  );
};

export default App;
