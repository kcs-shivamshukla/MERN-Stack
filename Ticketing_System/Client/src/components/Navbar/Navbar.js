import React, {  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import { HiTicket } from "react-icons/hi";
import { useDispatch } from 'react-redux';

import useStyles from './styles';

const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const location = useLocation();


    const logout = () => {
      dispatch({ type: 'LOGOUT' });

      navigate('/')

      setUser(null);
    }

    // useEffect(() => {
    //   const token = user?.token

    //   setUser(JSON.parse(localStorage.getItem('profile')));
    // },[location])

  return (
    <AppBar className={classes.appBar} position="static" color="inherit" style={{flexDirection: 'row'}}>
        <div className={classes.brandContainer}>
        <Typography component={Link} to='/' className={classes.heading} variant="h2" align="center">
            Tickets <HiTicket className={classes.icon} />
          </Typography>
        </div> 

        <Toolbar className={classes.toolbar}>
        {
                <div className={classes.profile}>
                    <Avatar className = {classes.purple} alt={user?.name} src={user?.imageURL} sx ={{backgroundColor: '#6C63FF'}}>{user?.usrname.charAt(0).toUpperCase()}</Avatar>
                    <Typography className={classes.userName} variant='h6'>{user?.usrname}</Typography>
                    <Button className={classes.logout} variant='contained' onClick={logout} style={{backgroundColor: "#6C63FF"}}>Logout</Button>
                </div>
        }
        </Toolbar>
        </AppBar>
  )
}

export default Navbar