import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'universal-cookie';

const ProtectedRoute = () => {
    const cookies = new Cookies(null, { path: '/' });

    const authUserData = () => {
        const data = cookies.get('role');
        if (data=='admin') return true;
        else return false;
    };

    return authUserData() ? <Outlet /> : <Navigate to={"/login-register"} />;
}

export default ProtectedRoute