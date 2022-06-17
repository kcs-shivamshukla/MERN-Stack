/* eslint-disable no-const-assign */
import React, { useEffect } from "react";
// import { Button, Typography } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
// import moment from 'moment';

// import useStyles from './styles';
import { getTickets } from "../../actions/tickets";
import DeleteTicket from "./DeleteTicket";
import EditTicket from "./EditTicket";

const columns = [
  { field: "_id", headerName: "ID", width: "90", hide: true },
  { field: "ticket_no", headerName: "Ticket No", flex: 0.2 },
  { field: "usrname", headerName: "User Name", width: "100" },
  { field: "ticket_desc", headerName: "ticket_desc", flex: 0.5 },
  { field: "createdAt", headerName: "Created At", width: "150" },
  { field: "updatedAt", headerName: "Updated At", width: "150" },
  { field: "deleted_At", headerName: "Resolved At", width: "100" },
  {
    field: "Edit",
    renderCell: (cellValues) => {
      return <EditTicket cellValues={cellValues} />;
    },
  },
  {
    field: "Delete",
    renderCell: (cellValues) => {
      return <DeleteTicket cellValues={cellValues} />;
    },
  },
];

const Ticket = ({ ticket }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);
  // const classes = useStyles();
  const tickets = useSelector((tickets) => tickets);

  return (
    <DataGrid
      columns={columns}
      rows={tickets.tickets}
      getRowId={(row) => row._id}
      pageSize={10}
      rowsPerPageOptions={[10, 20]}
      autoHeight
      sx={{
        m: 2,
        textAlign: "center",
      }}
    ></DataGrid>
  );
};

export default Ticket;
