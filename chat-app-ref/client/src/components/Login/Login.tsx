import React, { useState } from "react";
import {
  Button,
  Box,
  Typography,
  Grid,
  Avatar,
  TextField,
  CssBaseline,
  Paper,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles.scss";
import { validEmail, validPassword } from "../../constants/Regex";
import { signin } from "../../api";

export default function Login() {
  //Default State Values
  const defaultFormData = {
    email: "",
    password: "",
  };

  const defaultValidateFormValues = {
    email: false,
    password: false,
  };

  //State
  const [formData, setFormData] = useState(defaultFormData);
  const [validateForm, setValidateForm] = useState(defaultValidateFormValues);

  //Hook Objects
  const navigate = useNavigate();

  //Form Action Functions
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateFlag) {
      try {
        const { data } = await signin(formData);
        localStorage.setItem("profile", JSON.stringify(data));
        console.log(data);
        setFormData({
          ...formData,
          email: "",
          password: "",
        });
        navigate("/dashboard");
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    }
  };

  const onChangeSetState = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
    regEx: string | RegExp
  ) => {
    const RegExObj = new RegExp(regEx);

    if (e.target.value === "" || RegExObj.test(e.target.value)) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
      setValidateForm({
        ...validateForm,
        [e.target.name]: false,
      });
    } else {
      setValidateForm({
        ...validateForm,
        [e.target.name]: true,
      });
    }
  };

  const validateFlag = Object.values(formData).every((value) => {
    var flag = true;
    if (value === "" || validateForm.email || validateForm.password) {
      flag = false;
    }
    return flag;
  });

  return (
    <Grid container sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid item xs={12} component={Paper} square>
        <Box
          sx={{
            mx: 4,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar sx={{ m: 1, backgroundColor: "#71D6A4" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4" sx={{ mb: 3 }}>
            Sign in
          </Typography>

          <Box
            component="form"
            onSubmit={onSubmit}
            style={{
              width: "25%",
            }}
          >
            <Grid container alignItems="center" justifyContent="center">
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                error={validateForm.email}
                helperText={validateForm.email ? "Email is invalid." : ""}
                onChange={onChangeSetState}
                onBlur={(
                  e: React.FocusEvent<
                    HTMLInputElement | HTMLTextAreaElement,
                    Element
                  >
                ) => handleChange(e, validEmail)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="password"
                id="password"
                label="Password"
                name="password"
                error={validateForm.password}
                helperText={
                  validateForm.password
                    ? "Your password must be at least 8 characters long, contain at least one number and have a mixture of uppercase and lowercase letters."
                    : ""
                }
                onChange={onChangeSetState}
                onBlur={(
                  e: React.FocusEvent<
                    HTMLInputElement | HTMLTextAreaElement,
                    Element
                  >
                ) => handleChange(e, validPassword)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "#71D6A4" }}
                size="large"
                disabled={!validateFlag}
              >
                Sign in
              </Button>

              <Grid container justifyContent="center">
                <Grid item>
                  <Link
                    to="/signup"
                    style={{ color: "#212112", textDecoration: "none" }}
                  >
                    Create an account? Sign up
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>

      <ToastContainer position="top-left" />
    </Grid>
  );
}
