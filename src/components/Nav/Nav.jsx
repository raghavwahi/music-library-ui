import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { Home as HomeIcon, Analytics } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/slices/themeSlice";

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
          component={Link}
          to="/"
          sx={{ mr: 3 }}
          color="inherit"
          startIcon={<HomeIcon />}
        >
          Home
        </Button>
        <Button
          component={Link}
          to="/searchsong"
          sx={{ mr: 3 }}
          color="inherit"
          startIcon={<HomeIcon />}
        >
          Search Song
        </Button>
        <Button
          component={Link}
          to="/charts"
          sx={{ mr: 3 }}
          color="inherit"
          startIcon={<Analytics />}
        >
          Charts
        </Button>
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
