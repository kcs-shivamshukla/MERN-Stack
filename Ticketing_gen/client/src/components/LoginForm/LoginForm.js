import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import heroimg from "../../images/login.svg";
import { signin } from "../../actions/auth";
import { validPassword, validUsername } from "../../regex/regex";


const initialState = { usrname: "", password: "" };
const initialFormValidateValue = { firstName: false, lastName: false, usrname: false, password: false}

const theme = createTheme();

export default function SignInSide() {

  
  const userErrorDetails = useSelector(store => store.authReducer.error);

  const [formData, setFormData] = useState(initialState);
  const [validateForm, setValidateForm] = useState(initialFormValidateValue);
  const userError = userErrorDetails;


  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
  
    if(userError !== undefined) {
      toast.error(userError.message);
      setTimeout(() => {
        dispatch({type: 'USER_LOGIN_FAILED', payload: ""})
      }, 5000)
    }
  },[userError, dispatch])




  var flag=true;
  const validateDetailsFlag = Object.values(formData).every(value => {
      if ( value === '' || validateForm.firstName || validateForm.lastName || validateForm.usrname || validateForm.password ) {
          flag=false;
      }
      return flag;
  });



  const handleSubmit = (event) => {
    event.preventDefault();
    if(validateDetailsFlag) {
      dispatch(signin(formData, navigate));
    }

    else {
      alert('Invalid Input.')
    }
  };

  const handleChange = (e, regEx) => {
    const RegExObj = new RegExp(regEx);

    if (e.target.value === "" || RegExObj.test(e.target.value)) {

      setValidateForm({...validateForm, [e.target.name]: false})
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      setValidateForm({...validateForm, [e.target.name]: true})
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
            <Typography component="h1" variant="h5" sx={{ mb: 3}}>
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
                  error={validateForm.usrname}
                  helperText={validateForm.usrname ? "Username must contain alphanumeric character." : ""}
                  onChange={(e) => onChangeSetState(e)}
                  onBlur={(e) => handleChange(e, validUsername)}
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={formData.password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  error={validateForm.password}
                  helperText={validateForm.password ? "password must contain one number and one special characters." : ""}
                  autoComplete="current-password"
                  onChange={(e) => onChangeSetState(e)}
                  onBlur={(e) => handleChange(e, validPassword)}
                />
            
                <Button
                  type="submit"
                  fullWidth
                  disabled={!validateDetailsFlag}
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
        <ToastContainer
        autoClose={5000} />
      </Grid>
    </ThemeProvider>
  );
}
