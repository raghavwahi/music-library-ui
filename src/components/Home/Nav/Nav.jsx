import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import { DarkMode, LightMode } from "@mui/icons-material";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../store/slices/themeSlice";

const Nav = () => {
  const dispatch = useDispatch();

  const themeMode = useSelector((state) => state.theme.mode);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Music Library
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          color="inherit"
          onClick={() => {
            dispatch(toggleTheme());
          }}
        >
          {themeMode === "light" ? <DarkMode /> : <LightMode />}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
