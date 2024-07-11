import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import useHttp from "../../hooks/use-http";

const SearchSong = () => {
  const { isLoading, error, sendRequest: sendDataRequest } = useHttp();

  const [title, setTitle] = useState("");
  const [songInfo, setSongInfo] = useState(null);

  const storeData = (data) => {
    setSongInfo({ ...data });
  };

  const handleSearch = () => {
    sendDataRequest(
      {
        url: `${process.env.REACT_APP_API_URL}/songs/${title}`,
      },
      storeData
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Search for a Song
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <TextField
          fullWidth
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="Enter Song Title"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={4}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
          height="100%"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            disabled={isLoading}
          >
            Search
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        {error && (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        )}
      </Grid>
      {!error && songInfo && (
        <Grid item xs={12}>
          <Box mt={2}>
            {Object.keys(songInfo).map((key, index) => (
              <Typography key={index}>
                {key}: {songInfo[key]}
              </Typography>
            ))}
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default SearchSong;
