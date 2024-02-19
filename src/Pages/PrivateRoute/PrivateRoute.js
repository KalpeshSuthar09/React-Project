import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, roles, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("userDetails"));
  
  if (!user || !roles.includes(user.role)) {
    return <Navigate to="/Login" />;
  }

  return element;
};

export default PrivateRoute;
