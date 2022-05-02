/* eslint-disable import/no-anonymous-default-export */
import moment from 'moment'


export default (tickets = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload.map(ticket => {
                if(ticket.updated_At) ticket.updated_At = moment(ticket.updated_At).fromNow();
                if(ticket.deleted_At) ticket.deleted_At = moment(ticket.deleted_At).fromNow();
                return ticket

            })
        
        case 'CREATE':
            return [action.payload, ...tickets];
            
        case 'UPDATE': 
            return tickets.map((ticket) => {
                if(ticket._id === action.payload._id) {
                    action.payload.updated_At = moment(action.payload.updated_At).fromNow();
                    // action.payload.deleted_At = moment(action.payload.deleted_At).fromNow();
                    return action.payload
                }
                else {
                    return ticket
                }
            });

        case 'DELETE':
            return tickets.map((ticket) => {
                if(ticket._id === action.payload._id) {
                    if(ticket.updated_At) action.payload.updated_At = moment(action.payload.updated_At).fromNow();
                    action.payload.deleted_At = moment(action.payload.deleted_At).fromNow();
                    return action.payload
                }
                else {
                    return ticket
                }
            });
        default:
            return tickets;
    }
}