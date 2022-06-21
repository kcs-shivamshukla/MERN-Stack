const { auth } = require('../middleware/auth.js')
const { Router } = require("express");

const {
  getTickets,
  createTicket,
  updateTicket,
  deleteTicket,
} = require("../controllers/tickets.js");

const router = Router();

router.get("/",auth, getTickets);
router.post("/",auth, createTicket);
router.put("/:id",auth, updateTicket);
router.post("/delete/:id",auth, deleteTicket);

module.exports = router;
