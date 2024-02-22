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
import UserProfilePage from "../About/UserProfilePage";
import PartnerProfilePage from "../About/PartnerProfilePage";
import BookingTab from "../Tabs/BookingTabs";
import Booking from "../Booking/Booking";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<InnerContent />}>
            <Route path="/" element={<Navigate replace to="Dashboard" />} />
            <Route path="/Dashboard" element={<Dashboard />} />

            <Route path="/Tabs" element={<Tabs />}>
              <Route
                path="/Tabs"
                element={<Navigate replace to="UserPage" />}
              />
              <Route path="UserPage" element={<UserPage />} />

              <Route
                path="/PartnerPage"
                element={<ProtectedRoutes roleRequired="ADMIN" />}
              >
                <Route path="/PartnerPage" element={<PartnerPage />} />
              </Route>
              <Route path="/PartnerPage" element={<PartnerPage />} />
            </Route>
            <Route path="/BookingTab" element={<BookingTab />}>
              <Route
                path="/BookingTab"
                element={<Navigate replace to="Booking" />}
              />
              <Route path="Booking" element={<Booking />} />
            </Route>
            <Route path="/UserProfilePage" element={<UserProfilePage />} />
            <Route
              path="/PartnerProfilePage"
              element={<PartnerProfilePage />}
            />
          </Route>
        </Route>

        <Route path="Login" element={<PublicRoutes />}>
          <Route path="/Login" element={<Login />} />
        </Route>
        

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
import PermissionDenied from "./PermissionDenied";
import UserProfilePage from "../About/UserProfilePage";
import PartnerProfilePage from "../About/PartnerProfilePage";
import BookingTab from "../Tabs/BookingTabs";
import Booking from "../Booking/Booking";
import PublicRoutes from "./PublicRoute";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <InnerContent />
            </ProtectedRoutes>
          }
        >
          <Route index element={<Navigate replace to="Dashboard" />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Tabs" element={<Tabs />}>
            <Route index element={<Navigate replace to="UserPage" />} />
            <Route path="UserPage" element={<UserPage />} />
            <Route
              path="PartnerPage"
              element={<ProtectedRoutes roleRequired="ADMIN" />}
            >
              <Route index element={<PartnerPage />} />
            </Route>
          </Route>
          <Route path="BookingTab" element={<BookingTab />}>
            <Route index element={<Navigate replace to="Booking" />} />
            <Route path="Booking" element={<Booking />} />
          </Route>
          <Route path="UserProfilePage" element={<UserProfilePage />} />
          <Route path="PartnerProfilePage" element={<PartnerProfilePage />} />
        </Route>

          {/* Public Routes */}
        <Route path="Login" element={<PublicRoutes />}>
          <Route path="/Login" element={<Login />} />
        </Route>

        {/* Permission Route */}
        <Route path="PermissionDenied" element={<PermissionDenied />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
