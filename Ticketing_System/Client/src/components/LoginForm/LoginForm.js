import React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import heroimg from "../../images/login.svg";
import { signin } from "../../actions/auth";
import { validPassword, validUsername } from "../../regex/regex";

const initialState = { usrname: "", password: "" };
const initialIsValidValue = { isusrname: "", ispassword: "" };

const theme = createTheme();

export default function SignInSide() {
  const [formData, setFormData] = useState(initialState);

  const [isValid, setIsValid] = useState(initialIsValidValue);
  const { isusrname, ispassword } = isValid;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationMessageCSS = { color: "red", marginBottom: "10px" };



  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(formData, navigate));
  };

  const handleChange = (e, regEx) => {
    const RegExObj = new RegExp(regEx);
    const isValidKey = "is" + e.target.name;

    if (e.target.value === "" || RegExObj.test(e.target.value)) {
      setIsValid({ ...isValid, [isValidKey]: "" });
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      switch (e.target.name) {
        case "usrname":
          setIsValid({
            ...isValid,
            [isValidKey]: "Minimum 5 characters. Maximum 15 characters.",
          });
          break;

        case "password":
          setIsValid({
            ...isValid,
            [isValidKey]:
              "Minimum 8 characters. Maximum 16 characters. password should contain at least one number and one special character",
          });
          break;

        default:
          break;
      }
    }
  };

  const onChangeSetState = (e) => {
    e.preventDefault();

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${heroimg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          style={{ boxShadow: "none" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#6C63FF" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ padding: "0 50px", mt: 1 }}
            >
              <Grid container>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={formData.usrname}
                  id="usrname"
                  label="User Name"
                  name="usrname"
                  autoComplete="usrname"
                  autoFocus
                  onChange={(e) => onChangeSetState(e)}
                  onBlur={(e) => handleChange(e, validUsername)}
                />
                <div style={validationMessageCSS}>{isusrname}</div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={formData.password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => onChangeSetState(e)}
                  onBlur={(e) => handleChange(e, validPassword)}
                />
                <div style={validationMessageCSS}>{ispassword}</div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{ backgroundColor: "#6C63FF" }}
                >
                  Sign In
                </Button>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Link
                      href="SignUp"
                      variant="body2"
                      to="/SignUp"
                      style={{ color: "#6C63FF" }}
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
