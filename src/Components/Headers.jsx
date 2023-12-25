import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Drawer from "@material-ui/core/Drawer";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
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
  desktopRoutes: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobileViewIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawerContentWrapper: {
    width: "70vw",
  },
  closeIconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end !important",
    width: "100%",
  },
  closeIcon: {
    padding: "10px 10px 0px 0px",
  },
}));
const Headers = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container alignItems="center" justifyContent="space-around">
        <Grid
          item
          xs={9}
          sm={12}
          md={6}
          lg={9}
          xl={9}
          className={classes.Title}
        >
          <Typography
            variant="h4"
            component={Link}
            to={"/godream/"}
            className={classes.appBarRoot}
          >
            GO DREAM
          </Typography>
          <Typography variant="subtitle2">overseas education</Typography>
        </Grid>
        <Grid item md={2} lg={1} xl={1} className={classes.desktopRoutes}>
          <Button color="inherit" component={Link} to="/godream/services">
            Services
          </Button>
        </Grid>
        <Grid item md={2} lg={1} xl={1} className={classes.desktopRoutes}>
          <Button color="inherit" component={Link} to="/godream/about">
            About
          </Button>
        </Grid>
        <Grid item md={2} lg={1} xl={1} className={classes.desktopRoutes}>
          <Button color="inherit" component={Link} to="/godream/contactUs">
            Contact
          </Button>
        </Grid>
        <Grid item xs={3} className={classes.mobileViewIcon}>
          <MenuRoundedIcon
            onClick={() => {
              setOpenDrawer(true);
            }}
          />
        </Grid>
      </Grid>
      <Drawer
        anchor={"right"}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          spacing={0}
          className={classes.drawerContentWrapper}
        >
          <Grid item sm={12} className={classes.closeIconWrapper}>
            <HighlightOffIcon
              className={classes.closeIcon}
              onClick={() => {
                setOpenDrawer(false);
              }}
            />
          </Grid>
          <Grid item sm={12}>
            <Button
              color="inherit"
              component={Link}
              to="/godream/services"
              onClick={() => {
                setOpenDrawer(false);
              }}
            >
              Services
            </Button>
          </Grid>
          <Grid item sm={12}>
            <Button
              color="inherit"
              component={Link}
              to="/godream/about"
              onClick={() => {
                setOpenDrawer(false);
              }}
            >
              About
            </Button>
          </Grid>
          <Grid item sm={12}>
            <Button
              color="inherit"
              component={Link}
              to="/godream/contactUs"
              onClick={() => {
                setOpenDrawer(false);
              }}
            >
              Contact
            </Button>
          </Grid>
        </Grid>
      </Drawer>
    </Fragment>
  );
};

export default Headers;
