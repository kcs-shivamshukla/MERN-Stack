import { Navigate} from "react-router-dom";

import Login from '../components/Login/Login'

export default function NotLoggedInRoutes() {
    const user = localStorage.getItem("profile")
    return user ? <Navigate to="/"/> : <Login />
}