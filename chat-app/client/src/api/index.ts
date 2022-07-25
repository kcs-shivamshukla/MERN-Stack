import axios from 'axios';
import { Chat, User } from '../constants/interface';

export const BASE_URL = 'http://localhost:5000';

const value = JSON.parse(localStorage.getItem("profile") || "{}")

var localStorageValue = value.token


axios.interceptors.request.use((req) => {
    console.log(req.url)
    if (req.url?.includes(BASE_URL)) {
        if (localStorage.getItem("profile")) {
            if (req.headers) {
                req.headers.authorization = `Bearer ${localStorageValue}`;
            }
        }
    }
    return req;
});

export const signin = (formData: User) => axios.post(`${BASE_URL}/users/signin`, formData)

export const signup = (formData: User) => axios.post(`${BASE_URL}/users/signup`, formData);

export const setprofilepicture = (userId: String, selectedImage: String) => axios.post(`${BASE_URL}/users/setprofilepicture/${userId}`, { selectedImage })

export const getusers = () => axios.get(`${BASE_URL}/users/getUsers`);

export const sendChat = (chatContent: Chat) => axios.post(`${BASE_URL}/chats/addChat`, chatContent)

export const getAllChats = (chatDetails: Chat) => axios.post(`${BASE_URL}/chats/getallchats`, chatDetails);