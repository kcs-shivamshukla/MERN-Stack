import axios from 'axios';
import { Chat, User } from '../constants/interface';

const BASE_URL = 'http://localhost:5000';

export const signin = (formData: User) => axios.post(`${BASE_URL}/users/signin`, formData)

export const signup = (formData: User) => axios.post(`${BASE_URL}/users/signup`, formData)

export const getusers = () => axios.get(`${BASE_URL}/users/getUsers`);

export const sendChat = (chatContent: Chat) => axios.post(`${BASE_URL}/chats/addChat`, chatContent)

export const getAllChats = (chatDetails: Chat) => axios.post(`${BASE_URL}/chats/getallchats`, chatDetails);