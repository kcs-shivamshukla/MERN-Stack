import mongoose from 'mongoose';

const ticketSchema = mongoose.Schema({
    ticket_no: Number,
    emp_id: String,
    usrname: String,
    ticket_desc: String,
    date: {
        type: Date
    },
    created_At: {
        type: String,
        default: new Date()
    },
    updated_At: {
        type: String
    },
    deleted_At: {
        type: String
    }
});

const TicketMessage = mongoose.model('TicketMessage', ticketSchema);

export default TicketMessage;