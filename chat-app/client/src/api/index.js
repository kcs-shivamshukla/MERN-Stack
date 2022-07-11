import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const signin = (formData) => axios.post(`${BASE_URL}/users/signin`, formData)

export const signup = (formData) => axios.post(`${BASE_URL}/users/signup`, formData)

export const getusers = () => axios.get(`${BASE_URL}/users/getUsers`);

export const sendChat = (chatData) => axios.post(`${BASE_URL}/chats/sendChat`, chatData)