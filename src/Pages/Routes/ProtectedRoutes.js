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

//protected route state

type  ProtectedRouteType = {
  roleRequired: "ADMIN" | "USER",
};

const ProtectedRoutes = (ProtectedRouteType) => {
  const { auth, role } = useAuth();

  //if role required is there or not
  if (ProtectedRouteType.roleRequired) {
    return auth ? (
      ProtectedRouteType.roleRequired === role ? (
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
