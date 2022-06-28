import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import decode from 'jwt-decode'
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import { HiTicket } from "react-icons/hi";
import { useDispatch } from "react-redux";

import useStyles from "./styles";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [userToken, setUserToken] = useState(localStorage.getItem("token"));
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    
    navigate("/");
    
    setUser(null);
  };

  useEffect(() => {
    const token = userToken?.token;
    if (token) {
      const decodedToken = decode(token)

      if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUserToken(localStorage.getItem('token'));
  },[userToken.token, logout])

  return (
    <div>
      <AppBar
        className={classes.appBar}
        position="static"
        color="inherit"
        style={{ flexDirection: "row" }}
      >
        <div className={classes.brandContainer}>
          <Typography
            className={classes.heading}
            variant="h2"
            align="center"
          >
            Tickets <HiTicket className={classes.icon} />
          </Typography>
        </div>
        <Toolbar className={classes.toolbar}>
          {
            <div className={classes.profile}>
              <Avatar
                alt={user?.name}
                src={user?.imageURL}
                sx={{ backgroundColor: "#6C63FF" }}
              >
                {user?.usrname.charAt(0).toUpperCase()}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user?.usrname}
              </Typography>
              <Button
                className={classes.logout}
                variant="contained"
                onClick={logout}
                style={{ backgroundColor: "#6C63FF" }}
              >
                Logout
              </Button>
            </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
