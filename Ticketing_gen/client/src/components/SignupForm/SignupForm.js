import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import heroimg from '../../images/hero3.svg';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { validName, validUsername, validPassword } from '../../regex/regex'

const initialState = {firstName: '', lastName: '', usrname: '', password: ''}
const initialFormValidateValue = { firstName: false, lastName: false, usrname: false, password: false}

const theme = createTheme();

export default function Register() {

  const [formData, setFormData] = useState(initialState);
  const [validateForm, setValidateForm] = useState(initialFormValidateValue);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  var flag=true;
  const validateDetailsFlag = Object.values(formData).every(value => {
      if (value === '') {
          flag=false;
      }
      return flag;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
   if(validateDetailsFlag) {
     dispatch(signup(formData, navigate));
   }

   else {
     alert('Invalid Input.');
   }
  };

  const onChangeSetState = (e) => {
    e.preventDefault();

    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleChange = (e,regEx) => {

    const RegExObj = new RegExp(regEx);
    
    if(e.target.value==="" || RegExObj.test(e.target.value))
    {
        setValidateForm({...validateForm, [e.target.name]: false});
        setFormData({...formData, [e.target.name]: e.target.value});
        
    }
    else{
        setValidateForm({...validateForm, [e.target.name]: true});
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${heroimg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{boxShadow: 'none'}}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#6C63FF' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 3}}>
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ padding: '0 50px', mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  value={formData.firstName}
                  required
                  fullWidth
                  error={validateForm.firstName}
                  helperText={validateForm.firstName ? "Only Characters allowed" : ""}
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => handleChange(e,validName)}
                  onBlur={(e) => handleChange(e,validName)}
                />
    
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  value={formData.lastName}
                  id="lastName"
                  label="Last Name"
                  error={validateForm.lastName}
                  helperText={validateForm.lastName ? "Only Characters allowed" : ""}
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => handleChange(e,validName)}
                  onBlur={(e) => handleChange(e,validName)}
                />
               
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={formData.usrname}
                  id="usrname"
                  label="User Name"
                  error={validateForm.usrname}
                  helperText={validateForm.usrname ? "Username must contain alphanumeric character." : ""}
                  name="usrname"
                  autoComplete="usrname"
                  onChange={(e) => onChangeSetState(e)}
                  onBlur={(e) => handleChange(e, validUsername)}
                />
               
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={formData.password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  error={validateForm.password}
                  helperText={validateForm.password ? "password must contain one number and one special characters." : ""}
                  autoComplete="new-password"
                  onChange={(e) => onChangeSetState(e)}
                  onBlur={(e) => handleChange(e, validPassword)}
                />
                
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              disabled={!validateDetailsFlag}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor: '#6C63FF'}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href='Signin' variant="body2" to="/Signin" style={{color: '#6C63FF'}}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}