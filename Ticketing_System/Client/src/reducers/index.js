import { combineReducers } from "redux";

import tickets from './tickets';
import authReducer from "./auth";

export default combineReducers ({
    tickets, authReducer
})