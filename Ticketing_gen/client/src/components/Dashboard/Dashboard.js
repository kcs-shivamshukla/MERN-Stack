import React, { useEffect, useState } from "react";
import { Container, Grow, Grid, Button, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

import { getTickets, createTicket } from "../../actions/tickets";
import Ticket from "../Ticket/Ticket";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = createTheme();

  const [open, setOpen] = React.useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));
  const token = localStorage.getItem("token");
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setTicketData({...ticketData, ticket_desc: ""});
  }

  const [ticketData, setTicketData] = useState({

    usrname: user?.usrname,
    ticket_desc: "",
    ticket_no: '#' + Math.floor(100000 + Math.random() * 900000),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createTicket(ticketData));
    setTicketData({ ...ticketData, emp_id: "", ticket_desc: "" });
    toast.success('Ticket Created.')
    handleClose();
  };

  useEffect(() => {
    if (!user || !token) {
      localStorage.clear();
      navigate("/");  
    }
    else {
      dispatch(getTickets());
    }
  }, [dispatch, user, navigate, token]);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" position="relative">
        <Navbar />
        <Grow in>
          <Container>
            <Box textAlign="center">
              <Button
                variant="contained"
                onClick={handleOpen}
                type="button"
                style={{ backgroundColor: "#6C63FF" }}
              >
                Add Ticket
              </Button>
            </Box>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle align="center">Add Ticket</DialogTitle>
              <DialogContent>
                <TextField
                  name="usrname"
                  variant="outlined"
                  label="User Name"
                  value={ticketData.usrname}
                  disabled
                  sx={{
                    marginTop: "20px",
                    width: 500,
                  }}
                />

                <TextField
                  multiline
                  rows={5}
                  id="outlined-disabled"
                  label="Ticket Desc"
                  required
                  name="ticket_desc"
                  value={ticketData.ticket_desc}
                  onChange={(e) =>
                    setTicketData({
                      ...ticketData,
                      ticket_desc: e.target.value,
                    })
                  }
                  sx={{
                    marginTop: "20px",
                    width: 500,
                  }}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit" onClick={handleSubmit}>Submit</Button>
              </DialogActions>
            </Dialog>

            <Grid container>
              <Ticket />
            </Grid>
          </Container>
        </Grow>
      </Container>
      <ToastContainer
        autoClose={2000} />
    </ThemeProvider>
  );
};
