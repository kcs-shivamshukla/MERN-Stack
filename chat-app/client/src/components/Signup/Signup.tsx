import React, { useState } from 'react';
import { Button, Box, Typography, Grid, Avatar, TextField, CssBaseline, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Signup(){

  const onChangeSetState = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
  }

  const defaultFormData = {
    fullName: '',
    email: '',
    password: ''
  }

  const [formData, setFormData] = useState(defaultFormData)

    return (
      <Grid container sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          component={Paper}
          square
        >
          <Box
            sx={{
              mx: 4,
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Avatar sx={{ m: 1, backgroundColor: '#71D6A4' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h4' sx={{ mb: 3 }}>
              Sign up
            </Typography>

            <Box
              component="form"
              onSubmit={onSubmit}
              noValidate
              style={{
                width: '25%'
              }}
            >
              <Grid container alignItems="center" justifyContent="center">
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='fullName'
                  label='Full Name'
                  name='fullName'
                  onChange={onChangeSetState}
                />

                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id="email"
                  label='Email'
                  name='email'
                  onChange={onChangeSetState} 
                />

                <TextField
                  margin='normal'
                  required
                  fullWidth
                  type='password'
                  id="password"
                  label='Password'
                  name='password'
                  onChange={onChangeSetState}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                  style={{ backgroundColor: "#71D6A4" }}
                  size="medium"
                >Sign up</Button>

                <Grid container justifyContent="center">
                  <Grid item>
                    <Link to="/" style={{ color: '#212112', textDecoration: 'none' }}>
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>

              </Grid>
            </Box>
          </Box>
        </Grid>


      </Grid>
    )
  }
