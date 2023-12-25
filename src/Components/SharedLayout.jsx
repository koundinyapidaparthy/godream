import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "./Headers";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  fullWidth: {
    width: "100%",
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12} className={classes.fullWidth}>
        <Headers />
      </Grid>
      <Grid item xs={12}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Home;
