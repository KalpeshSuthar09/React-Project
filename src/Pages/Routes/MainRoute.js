/* import React from "react";
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
import Signup from "../Signup/Signup";
import Block from "../Block/Block";
import UserProfilePage from "../About/UserProfilePage";
import BookingTab from "../Tabs/BookingTabs";
import Booking from "../Booking/Booking";

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

              <Route
                path="/"
                element={<ProtectedRoutes roleRequired="ADMIN" />}
              >
                <Route path="PartnerPage" element={<PartnerPage />} />
              </Route>
              <Route path="PartnerPage" element={<PartnerPage />} />
              <Route path="Block" element={<Block />} />
            </Route>
            <Route path="/BookingTab" element={<BookingTab />}>
              <Route
                path="/BookingTab"
                element={<Navigate replace to="Booking" />}
              />
              <Route path="Booking" element={<Booking />} />
            </Route>
            <Route path="/UserProfilePage" element={<UserProfilePage />} />
          </Route>
        </Route>

        
        <Route path="Login" element={<PublicRoutes />}>
          <Route path="/Login" element={<Login />} />
        </Route>
        //<Route path="/Signup" element={<Signup/>}></Route> 

        
        <Route path="/PermissionDenied" element={<PermissionDenied />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
 */

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../Home/Dashboard";
import InnerContent from "../Home/InnerContent";
import Tabs from "../Tabs/Tabs";
import UserPage from "../Users/UserPage";
import PartnerPage from "../Partner/PartnerPage";
import Login from "../Login/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoute";
import PermissionDenied from "./PermissionDenied";
import Signup from '../Signup/Signup';
import Block from '../Block/Block';
import UserProfilePage from "../About/UserProfilePage";
import BookingTab from '../Tabs/BookingTabs';
import Booking from '../Booking/Booking';

const MainRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<ProtectedRoutes />}
      >
        <Route index element={<InnerContent />} />
        <Route path="/Dashboard" element={<Dashboard />} />

        <Route path="/Tabs" element={<Tabs />}>
          <Route index element={<Navigate replace to="UserPage" />} />
          <Route path="UserPage" element={<UserPage />} />

          <Route
            path="PartnerPage"
            element={<ProtectedRoutes roleRequired="ADMIN" />}
          >
            <Route index element={<PartnerPage />} />
          </Route>

          <Route path="Block" element={<Block />} />
        </Route>

        <Route path="/BookingTab" element={<BookingTab />}>
          <Route index element={<Navigate replace to="Booking" />} />
          <Route path="Booking" element={<Booking />} />
        </Route>

        <Route path="/UserProfilePage" element={<UserProfilePage />} />
      </Route>

      {/* Public Routes */}
      <Route path="Login" element={<PublicRoutes />}>
        <Route index element={<Login />} />
      </Route>

      {/* Uncomment the Signup route if needed */}
      {/* <Route path="/Signup" element={<Signup />} /> */}

      {/* Permission */}
      <Route path="/PermissionDenied" element={<PermissionDenied />} />
    </Routes>
  );
};

export default MainRoute;
