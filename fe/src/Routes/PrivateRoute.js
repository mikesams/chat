import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import TokenService from '../Services/token.service';

const PrivateRoute = ({ component: Component, actionName, actions, ...rest }) => {
    const currentUser = TokenService.getLocalAccessToken();
    if (!currentUser) {
        return <Navigate to={{ pathname: '/auth/login', state: { from: rest.location } }} />
    }
    if (!actions.includes(actionName)) {
        TokenService.removeUser();
        return <Navigate to={{ pathname: '/auth/login' }} />
    }
    return (<Component {...rest} />)

}

export default PrivateRoute;