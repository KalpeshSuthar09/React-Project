import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const useAuth = () => {
  const _user = localStorage.getItem("userDetails");
  let user;

  if (_user) {
    user = JSON.parse(_user);
    console.log("user", user);
  }

  if (user) {
    return {
      auth: true,
      role: user.role,
    };
  } else {
    return {
      auth: false,
      role: null,
    };
  }
};

const ProtectedRouteType = {
  roleRequired: "ADMIN" | "USER",
};

const ProtectedRoutes = ({ roleRequired }) => {
  const { auth, role } = useAuth();

  if (roleRequired) {
    return auth ? (
      roleRequired === role ? (
        <Outlet />
      ) : (
        <Navigate to="/PermissionDenied" />
      )
    ) : (
      <Navigate to="/Login" />
    );
  } else {
    return auth ? <Outlet /> : <Navigate to="/Login" />;
  }
};

export default ProtectedRoutes;
