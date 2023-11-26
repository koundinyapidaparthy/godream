import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Styles";

const ContactUsForm = () => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:");
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Typography variant="h5" className={classes.header}>
        Contact Us
      </Typography>

      <TextField
        className={classes.textField}
        label="First Name"
        name="firstName"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        className={classes.textField}
        label="Last Name"
        name="lastName"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        className={classes.textField}
        label="Email"
        name="email"
        type="email"
        variant="outlined"
        fullWidth
        required
      />
      <div style={{ display: "flex", marginBottom: "16px" }}>
        <TextField
          className={classes.countryCode}
          label="Country Code"
          name="countryCode"
          variant="outlined"
          select
          fullWidth
          required
        >
          <MenuItem value="+1">+1</MenuItem>
          <MenuItem value="+44">+44</MenuItem>
        </TextField>
        <TextField
          className={classes.phoneInput}
          label="Phone Number"
          name="mobileNumber"
          variant="outlined"
          fullWidth
          required
        />
      </div>
      <TextField
        className={classes.textField}
        label="Reason of Contact"
        name="reason"
        variant="outlined"
        fullWidth
      ></TextField>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactUsForm;
