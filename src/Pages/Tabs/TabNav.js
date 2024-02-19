import React from "react";
import { Link } from "react-router-dom";

const TabNav = () => {

  return (
    <div className="tab-nav flex flex-row ">
      <Link to="/Tabs/UserPage">User</Link>
      <Link to="/Tabs/PartnerPage">Partner</Link>
      <Link>Blocked</Link>
    </div>
  );
};

export default TabNav;
