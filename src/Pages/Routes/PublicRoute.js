import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("userDetails");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const PublicRoutes = (props) => {
  const auth = useAuth();
  return auth ? <Navigate to="/Dashboard" /> : <Outlet />;
};

export default PublicRoutes;
