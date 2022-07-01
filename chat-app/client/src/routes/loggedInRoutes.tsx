import { Outlet } from "react-router-dom";

import Signin from '../components/Login/Login';

export default function LoggedInRoutes () {
    const user = JSON.parse(localStorage.getItem("profile")|| '{}');
    const size = Object.keys(user).length
   return size ? <Outlet /> : <Signin />
}
