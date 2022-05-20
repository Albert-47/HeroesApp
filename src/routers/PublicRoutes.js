import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

const PublicRoutes = ({ children }) => {

    const { user } = useContext(AuthContext);

  return !user.logged 
    ? children 
    : <Navigate to='/marvel' />
}

export default PublicRoutes