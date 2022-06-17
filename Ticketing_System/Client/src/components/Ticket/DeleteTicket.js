import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteTicket } from '../../actions/tickets';

const DeleteTicket = ({cellValues}) => {

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const handleDelete = (e) => {
      e.preventDefault();
      dispatch(deleteTicket(cellValues.row._id))
    }


  return (
    <Button
         variant='contained'
        onClick={handleDelete}
        disabled={!(user.usrname===cellValues.row.usrname) || cellValues.row.deleted_At}
        style={{backgroundColor: "#6C63FF"}}
    >Delete</Button>
  )
}

export default DeleteTicket