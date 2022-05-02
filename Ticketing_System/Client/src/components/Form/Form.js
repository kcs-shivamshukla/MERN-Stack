import React,{ useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createTicket } from '../../actions/tickets';

const Form = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const [ticketData, setTicketData] = useState({
        creator: '', emp_id: '',usrname: '', ticket_desc: '', 
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createTicket(ticketData));
        setTicketData({
            creator: '', emp_id: '',usrname: '', ticket_desc: '', 
        })
    }


    return(
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Add Ticket</Typography>
                <TextField name='creator' variant='outlined' label='Creator' fullWidth value={ticketData.creator} onChange={(e) => setTicketData({ ...ticketData, creator: e.target.value})}/>
                <TextField name='emp_id' variant='outlined' label='Emp_id' fullWidth value={ticketData.emp_id} onChange={(e) => setTicketData({...ticketData, emp_id: e.target.value})}/>
                <TextField name='usrname' variant='outlined' label='User Name' fullWidth value={ticketData.usrname} onChange={(e) => setTicketData({...ticketData, usrname: e.target.value})}/>
                <TextField name='ticket_desc' variant='outlined' label='Ticket_Desc' fullWidth value={ticketData.ticket_desc} onChange={(e) => setTicketData({...ticketData, ticket_desc: e.target.value})}/>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
            
            
            </form>
        </Paper>
    )
}

export default Form;