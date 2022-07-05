import { Outlet } from "react-router-dom";

import Login from '../components/Login/Login';

export default function LoggedInRoutes () {
    const user = localStorage.getItem("profile")
   return user ? <Outlet /> : <Login />
}
