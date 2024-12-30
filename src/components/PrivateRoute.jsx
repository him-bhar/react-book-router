import React from "react";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({Component}) => {
    const isAuthenticated = false;
    //TODO logic here to validate is user is authenticate or not.

    return isAuthenticated ? Component : <Navigate to="/" />;
};

export default PrivateRoute;

//This is like a Route wrapper, where we are checking whether user is authenticated.
//If yes, the original Component is rendered
//If no, user is redirected back to home page or / here. Can be anything configure here.