import React from "react";
import { Link } from "react-router-dom";

const TabNav = () => {


  return (
    <div className="absolute px-20 py-8">
      <div className="tab-nav flex flex-row w-96 border-2 bg-white rounded-md overflow-hidden py-2 gap-4 px-1">
        <Link to="/Tabs/UserPage">Normal Users</Link>
        <Link to="/Tabs/PartnerPage">Partner User</Link>
        <Link to="/Tabs/Block">Blocked Users</Link>
      </div>
    </div>
  );
};

export default TabNav;
