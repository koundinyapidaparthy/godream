import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import HomeHeaderImage from "../images/HomeHeader.jpg";
import Services from "./Services";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
    overflowX: "hidden",
    overflowY: "scroll",
    ...(theme.scrollbar || {}),
  },
  mainViewWrapper: {
    height: "95vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: "47.5vh",
    },
    overflowY: "hidden",
  },
  HeaderTitle: {
    position: "absolute",
    top: "22vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  OpeningHeader: {
    color: "white",
    zIndex: 2,
    lineHeight: 1.1,
    fontWeight: "bold",
    fontSize: "90px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "75px", // Adjust font size for small screens and up
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "40px", // Adjust font size for small screens and up
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px", // Adjust font size for small screens and up
    },
  },
  HomeHeaderImage: {
    width: "100%",
    height: "100%",
    top: "15px",
    position: "absolute",
    boxShadow: `0px 0px 10px ${theme.palette.primary.light}`,
    objectFit: "cover",
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container direction="row" className={classes.wrapper}>
        <Grid item xs={12} className={classes.mainViewWrapper}>
          <div className={classes.HeaderTitle}>
            <Typography className={classes.OpeningHeader}>GO DREAM:</Typography>
            <Typography className={classes.OpeningHeader}>
              Inspiring Global
            </Typography>
            <Typography className={classes.OpeningHeader}>
              Academic Pursuits
            </Typography>
          </div>
          <img
            loading="lazy"
            src={HomeHeaderImage}
            alt="Home Header Top"
            className={classes.HomeHeaderImage}
          />
        </Grid>
        <Grid item xs={12}>
          <Services hideScrollBars />
        </Grid>
        <Grid item xs={12}>
          <ContactUs hideScrollBars />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
