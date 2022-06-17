/* eslint-disable import/no-anonymous-default-export */
import moment from "moment";

export default (tickets = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload.map((ticket) => {
        let newTicket = {};
        newTicket._id = ticket._id;
        newTicket.ticket_no = ticket.ticket_no;
        newTicket.emp_id = ticket.emp_id;
        newTicket.usrname = ticket.usrname;
        newTicket.ticket_desc = ticket.ticket_desc;
        newTicket.createdAt = moment(ticket.createdAt).format("L");

        if (ticket.updatedAt !== ticket.createdAt && !ticket.deleted_At) {
          newTicket.updatedAt = moment(ticket.updatedAt).fromNow();
        }

        if (ticket.deleted_At) {
          newTicket.deleted_At = moment(ticket.deleted_At).fromNow();
        }

        return newTicket;
      });

    case "CREATE":
      // if(action.payload.updatedAt) {
      //   action.payload.updatedAt = ""
      // }
      return [action.payload, ...tickets];

    case "UPDATE":
      return tickets.map((ticket) => {
        if (ticket._id === action.payload._id) {
          action.payload.updatedAt = moment(action.payload.updatedAt).fromNow();

          action.payload.createdAt = moment(action.payload.createdAt).format(
            "L"
          );
          // action.payload.deleted_At = moment(action.payload.deleted_At).fromNow();
          return action.payload;
        } else {
          return ticket;
        }
      });

    case "DELETE":
      return tickets.map((ticket) => {
        if (ticket._id === action.payload._id) {
          action.payload.createdAt = moment(action.payload.createdAt).format(
            "L"
          );
          action.payload.deleted_At = moment(
            action.payload.deleted_At
          ).fromNow();
          action.payload.updatedAt = "";
          return action.payload;
        } else {
          return ticket;
        }
      });
    default:
      return tickets;
  }
};
