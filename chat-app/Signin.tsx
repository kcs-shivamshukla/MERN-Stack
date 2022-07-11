import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Button, IconButton, InputAdornment, Stack, TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
// import { useHistory } from 'react-router-dom'

interface loadingProps {
  loading: boolean;

}

function Signin() {

  const [show, setShow] = useState(null as any)
  const [email, setEmail] = useState(null as any)
  const [password, setPassword] = useState(null as any)
  const [loading, setLoading] = useState(null as any)
  // const history=useHistory();
  const handleClickShowPassword = () => {
    setShow(!show)
  };

  const signin = async () => {
    setLoading(true);




    // if(!name||!email||!password){
    //   // alert("Please fill all the fields")
    //   setLoading(false);
    //   return;
    // }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      }

      const { data } = await axios.post("/api/user/signin", { email, password }, config)
      alert("Login successfully");
      localStorage.setItem('userInfo', JSON.stringify(data))
      setLoading(false)
      // history.push('/chats')
    } catch (error) {
      alert("error")
      setLoading(false)
    }

  }
  return (
    <div>
      <Stack spacing={2}>
        <TextField value={email} id="standard-basic" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} />
        <TextField value={password} id="standard-basic" type={show ? 'text' : 'password'} label="Password" variant="standard" endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
            >
              {show ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        } onChange={(e) => setPassword(e.target.value)} />

        <Button variant='contained' color="success" onClick={signin}>
          SignIn
        </Button>
        <Button variant="contained" color="secondary" onClick={() => { setEmail("guest@example.com"); setPassword("123456") }}>
          Get Guest User Credentials
        </Button>
      </Stack>
    </div>

  )
}

export default Signin