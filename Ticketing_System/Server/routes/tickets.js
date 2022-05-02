import express from "express";
import { getTickets, createTicket, updateTicket, deleteTicket } from "../controllers/tickets.js";

const router = express.Router();

router.get('/', getTickets)
router.post('/', createTicket)
router.put('/:id', updateTicket)
router.post('/delete/:id', deleteTicket)

export default router;