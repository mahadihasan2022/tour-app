import React from 'react';
import useAuth from '../Hooks/useAuth';
import Order from '../Payment/Order';
import Login from '../Pages/Login/Login';

const RequireAuth = ({children}) => {
    const {user} = useAuth();
    return !user?.email ? <Login/>: <Order/>
};


export default RequireAuth;