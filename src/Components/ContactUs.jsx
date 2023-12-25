import React, { useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer";
const useStyles = makeStyles((theme) => ({
  wrappper: {
    height: "95vh",
    overflowX: "hidden",
    overflowY: "scroll",
    ...(theme.scrollbar || {}),
  },
  ContactWrapper: {
    height: "calc(100vh - 250px)",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
    },
  },
}));

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ eventDetails: e.target });
    console.log("Form submitted:");
  };

  return (
    <Grid container className={classes.wrappper}>
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          alignItems="center"
          spacing={2}
          justifyContent="center"
          className={classes.ContactWrapper}
        >
          <Grid item xs={11} sm={5}>
            <Grid container direction="row" spacing={3}>
              <Grid item xs={11}>
                <Typography variant="h4">Get in Touch</Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography variant="subtitle2">
                  Let us know how we can assist you in achieving your academic
                  dreams and we will be happy to provide guidance every step of
                  the way. Remember, at Go DREAM, we believe in empowering
                  individuals to Dream Big!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={11} sm={5}>
            <Grid container spacing={2} direction="column">
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="First Name"
                      name="firstName"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Last Name"
                      name="lastName"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  justifyContent="flex-start"
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  <Grid item xs={3} sm={2}>
                    <TextField
                      label="CC"
                      name="countryCode"
                      variant="outlined"
                      select
                      fullWidth
                      required
                    >
                      <MenuItem value="+1">+1</MenuItem>
                      <MenuItem value="+91">+91</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={9} sm={10}>
                    <TextField
                      label="Phone Number"
                      name="mobileNumber"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  name="reason"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default ContactUs;
