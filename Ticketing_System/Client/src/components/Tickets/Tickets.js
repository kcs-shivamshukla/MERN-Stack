import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@mui/material';

import Ticket from './Ticket/Ticket';
import useStyles from './styles';

const Tickets = () => {
    const tickets = useSelector((tickets) => tickets)
    const classes = useStyles();


    return(
        tickets.length === 0 ? <CircularProgress /> :
        <Grid className={classes.container} container alignItems='stretch' spacing={3}>
            {
                tickets.tickets.map((ticket) => (
                    <Grid key={ticket._id} item xs={12} sm={6}>
                        <Ticket ticket={ticket}/>    
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default Tickets;