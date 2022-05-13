import React, { useState } from 'react';
import { Button } from '@mui/material';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useDispatch } from 'react-redux';
import { updateTicket } from '../../actions/tickets';

const EditTicket = ({cellValues}) => {

    const [open, setOpen] = useState(false);
    const [ticketData, setTicketData] = useState({
         usrname: cellValues.row.usrname, ticket_desc: cellValues.row.ticket_desc
    });

    // const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(updateTicket(cellValues.row._id, ticketData));
      handleClose();
    }

  return (
    <div>
        <Button
        variant='contained'
        onClick={handleOpen}
        style={{backgroundColor: "#6C63FF"}}
        disabled={!(user.usrname===cellValues.row.usrname) || cellValues.row.deleted_At}
        >Edit</Button>
        
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle align="center">Edit Ticket</DialogTitle>
        <DialogContent>
          
          <TextField 
          name='usrname' 
          variant='outlined' 
          label='User Name' 
          value={ticketData.usrname}
          // defaultValue={cellValues.row.usrname} 
          disabled
           sx={{
           marginTop: '20px',
           width: 500
           }}
           />
        
        
          <TextField
        id="outlined-disabled"
        multiline
        rows={5}
        label="Ticket Desc"
        required
        name="ticket_desc"
        value={ticketData.ticket_desc}
        // defaultValue={cellValues.row.ticket_desc}
        onChange={(e) =>
          setTicketData({ ...ticketData, ticket_desc: e.target.value })
        }
        sx={{
          marginTop: "20px",
          width: 500,
        }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
        </Dialog>
    </div>
  )
}

export default EditTicket