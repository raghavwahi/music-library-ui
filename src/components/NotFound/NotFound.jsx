import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Button, Container, Box } from "@mui/material";

const NotFound = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4} textAlign="center">
        <Typography variant="h1" color="textPrimary" gutterBottom>
          404 - Page Not Found
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>
        <Button
          component={RouterLink}
          to="/"
          variant="contained"
          color="primary"
        >
          Go to Home Page
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
