import React, { useState } from 'react';
import { Button, Box, Typography, Grid, Avatar, TextField, CssBaseline, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';

import './styles.css';



// type User = {
//   email: string,
//   password: string
// }

export default function Login(){

  const defaultFormData = {
    email: '',
    password: ''
  }


  const [formData, setFormData] = useState(defaultFormData)

  // const onChange = () => {
  // }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  }

  const onChangeSetState = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

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
              Sign in
            </Typography>

            <Box
              component="form"
              onSubmit={onSubmit}
              style={{
                width: '25%'
              }}
            >
              <Grid container alignItems="center" justifyContent="center">

                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id="email"
                  label='Email'
                  name='email'
                  onChange={onChangeSetState}
                  // onBlur={onChange}
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  type="password"
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
                  size="large"
                >Sign in</Button>

                <Grid container justifyContent="center">
                  <Grid item>
                    <Link to="/signup" style={{ color: '#212112', textDecoration: 'none' }}>
                      Create an account? Sign up
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