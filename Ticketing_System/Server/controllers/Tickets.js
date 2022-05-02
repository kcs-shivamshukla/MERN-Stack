import mongoose from 'mongoose';
import TicketMessage from '../models/TicketMessage.js';

export const getTickets = async (req, res) => {
    try {
        const ticketMessage = await TicketMessage.find().sort({date:-1});

        res.status(200).json(ticketMessage);


    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createTicket = async (req, res) => {

    const ticket = req.body;

    const date=new Date();
    const d=date.getDate();
    const m=1 + date.getMonth();
    const y=date.getFullYear();
    const Day=d.toString()+"/"+m.toString()+"/"+y.toString();

    const newTicket = new TicketMessage({...ticket, created_At: Day,date: new Date().toISOString()});
    

    try {
        await newTicket.save()

        res.status(201).json(newTicket);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updateTicket = async (req, res) => {

    const { id: _id } = req.params;
    const ticket = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id.');
    
    const updatedTicket = await TicketMessage.findByIdAndUpdate(_id, {...ticket, updated_At: new Date().toISOString()}, {new: true});
    res.json(updatedTicket);
}

export const deleteTicket = async(req, res) => {
    const { id: _id } = req.params;
    
    const ticket = req.body;
    const { emp_id, ticket_desc, emp_name } = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id.');

    const deletedTicket = await TicketMessage.findByIdAndUpdate(_id, {...ticket,emp_id,ticket_desc, deleted_At: new Date().toISOString(),_id: _id}, {new: true});
    res.json(deletedTicket)
}