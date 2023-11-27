import React, { useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Styles";
import { CREATE_CUSTOMER_MUTATION } from "../GraphQL/Mutations.js";
import { useMutation } from "@apollo/client";

const ContactUs = () => {
  const formDataRef = useRef({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    mobileNumber: "",
    reason: "",
  });

  const handleChange = (e) => {
    formDataRef.current = {
      ...formDataRef.current,
      [e.target.name]: e.target.value,
    };
  };

  const [CreateCustomer, { error }] = useMutation(CREATE_CUSTOMER_MUTATION);
  const addCustomer = () => {

    if (error) {
      console.log(error);
    } else {
      CreateCustomer({
        variables: {
          firstName: formDataRef.current.firstName,
          lastName: formDataRef.current.lastName,
          email: formDataRef.current.email,
          countryCode: formDataRef.current.countryCode,
          mobileNumber: formDataRef.current.mobileNumber,
          reason: formDataRef.current.reason,
        },
      });
    }
  };


  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formDataRef.current);
    addCustomer();
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
        onChange={handleChange}
      />
      <TextField
        className={classes.textField}
        label="Last Name"
        name="lastName"
        variant="outlined"
        fullWidth
        required
        onChange={handleChange}
      />
      <TextField
        className={classes.textField}
        label="Email"
        name="email"
        type="email"
        variant="outlined"
        fullWidth
        required
        onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </div>
      <TextField
        className={classes.textField}
        label="Reason of Contact"
        name="reason"
        variant="outlined"
        fullWidth
        onChange={handleChange}
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

export default ContactUs;
