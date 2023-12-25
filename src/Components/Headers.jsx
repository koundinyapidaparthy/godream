import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  appBarRoot: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    fontFamily: "'Hahmlet', serif",
    fontWeight: 600,
  },
  Title: {
    paddingLeft: "10px !important",
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px !important",
      flexGrow: 1,
    },
  },
  routes: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const Headers = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      // spacing={1}
      alignItems="center"
      justifyContent="space-around"
    >
      <Grid item xs={9} sm={12} md={6} lg={9} xl={9} className={classes.Title}>
        <Typography
          variant="h4"
          component={Link}
          to={"/"}
          className={classes.appBarRoot}
        >
          GO DREAM
        </Typography>
        <Typography variant="subtitle2">overseas education</Typography>
      </Grid>
      <Grid item xs={1} sm={0} md={2} lg={1} xl={1} className={classes.routes}>
        <Button color="inherit" component={Link} to="/services">
          Services
        </Button>
      </Grid>
      <Grid item xs={1} sm={0} md={2} lg={1} xl={1} className={classes.routes}>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
      </Grid>
      <Grid item xs={1} sm={0} md={2} lg={1} xl={1} className={classes.routes}>
        <Button color="inherit" component={Link} to="/contactUs">
          Contact
        </Button>
      </Grid>
    </Grid>
  );
};

export default Headers;
