import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
    height: "250px",
    background: "#88888840",
    [theme.breakpoints.down("sm")]: {
      height: "330px",
      padding: "0px !important",
      display: "inline-block",
    },
  },
  header: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      padding: "5px !important",
      marginTop: "15px",
      width: "100%",
      textAlign: "center",
    },
  },
  textItems: {
    fontWeight: 600,
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      padding: "5px !important",
      width: "max-content",
      textAlign: "center",
    },
  },
  containerWrapper: {
    [theme.breakpoints.down("sm")]: {
      padding: "5px !important",
    },
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.wrapper}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} md={4}>
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          direction="column"
          spacing={4}
        >
          <Grid item xs={12} className={classes.header}>
            Location
          </Grid>
          <Grid item xs={12} className={classes.containerWrapper}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <Typography className={classes.textItems}>
                  Lakshmi Puram, Guntur
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.textItems}>
                  Andha Pradesh, 521324
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          direction="column"
          spacing={4}
        >
          <Grid item className={classes.header}>
            Hours
          </Grid>
          <Grid item xs={12} className={classes.containerWrapper}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <Typography className={classes.textItems}>
                  Monday - Saturday
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.textItems}>
                  10:00AM - 7:00AM
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          direction="column"
          spacing={4}
        >
          <Grid item xs={12} className={classes.header}>
            Contact
          </Grid>
          <Grid item xs={12} className={classes.containerWrapper}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <Typography className={classes.textItems}>
                  <a href="mailto:godreambusiness@gmail.com">
                    godreambusiness@gmail.com
                  </a>
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.textItems}>
                  <a href="tel:+918008743740"> +91 8008743740</a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
