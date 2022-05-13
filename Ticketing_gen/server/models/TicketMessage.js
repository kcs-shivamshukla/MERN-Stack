const { Schema, model } = require("mongoose");

const ticketSchema = new Schema(
  {
    ticket_no: {
      type: String,
      required: true,
    },
    emp_id: { type: String },
    usrname: { type: String, required: true },
    ticket_desc: { type: String, required: true },
    deleted_At: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const TicketMessageModel = model("TicketMessage", ticketSchema);

module.exports = TicketMessageModel;
