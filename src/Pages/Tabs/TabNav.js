import React from "react";
import { Link } from "react-router-dom";

const TabNav = () => {
  return (
    <div className="absolute px-20 py-8">
      <div className="flex gap-5 justify-between items-center py-2 text-md rounded-lg border border-solid border-slate-300 text-zinc-700 max-md:flex-wrap">
        <Link to="/Tabs/UserPage" className="flex-auto self-stretch my-auto">
          Normal Users
        </Link>
        <Link to="/Tabs/PartnerPage" className="flex-auto self-stretch my-auto">
          Partner User
        </Link>
        <Link to="/Tabs/Block" className="flex-auto self-stretch my-auto">
          Blocked Users
        </Link>
      </div>
    </div>
  );
};

export default TabNav;
