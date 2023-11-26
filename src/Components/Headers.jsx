import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const Headers = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Website Name
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/services">
          Services
        </Button>
        <Button color="inherit" component={Link} to="/contactUs">
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Headers;
