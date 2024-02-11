import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const RestrictedRoute = ({ element, currentUser, ...rest }) => {
  return (
    <Route
      {...rest}
      element={currentUser ? <Navigate to="/" /> : element}
    />
  );
};

export default RestrictedRoute;
