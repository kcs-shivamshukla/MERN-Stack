import { Navigate} from "react-router-dom";

import Login from '../components/Login/Login'

export default function NotLoggedInRoutes() {
    const user = JSON.parse(localStorage.getItem("profile")|| "{}")
    const size = Object.keys(user).length;
    return size ? <Navigate to="/dashboard"/> : <Login />
}