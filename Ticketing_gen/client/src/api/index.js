import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:9000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile') && localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${(localStorage.getItem('token'))}`
  }

  return req;
})


export const fetchTickets = () => API.get("/tickets");

export const createTicket = (newTicket) => API.post("/tickets", newTicket);

export const updateTicket = (id, updatedTicket) =>
  API.put(`/tickets/${id}`, updatedTicket);

export const deleteTicket = (id) => API.post(`/tickets/delete/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);

export const signUp = (formData) => API.post("/user/signup", formData);
