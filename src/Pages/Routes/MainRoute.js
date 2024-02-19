import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Dashboard from "../Home/Dashboard";
import InnerContent from "../Home/InnerContent";
import Tabs from "../Tabs/Tabs";
import UserPage from "../Users/UserPage";
import PartnerPage from "../Partner/PartnerPage";
import Login from "../Login/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoute";
import PermissionDenied from "./PermissionDenied";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<InnerContent />}>
            <Route path="/" element={<Navigate replace to="dashboard" />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Tabs" element={<Tabs />}>
              <Route
                path="/Tabs"
                element={<Navigate replace to="UserPage" />}
              />
              <Route path="UserPage" element={<UserPage />} />
              {/* <Route
                path="/"
                element={<ProtectedRoutes roleRequired="ADMIN" />}
              >
                <Route path="PartnerPage" element={<PartnerPage />} />
              </Route> */}
               <Route path="PartnerPage" element={<PartnerPage />} />
            </Route>
          </Route>
        </Route>

        {/* Public Routes */}
        <Route path="Login" element={<PublicRoutes />}>
          <Route path="/Login" element={<Login />} />
        </Route>

        {/* Permission */}
        <Route path="/PermissionDenied" element={<PermissionDenied />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
