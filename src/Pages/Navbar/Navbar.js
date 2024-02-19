import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CiBellOn } from "react-icons/ci";

const Navbar = () => {
  const useAuth = () => {
    const user = localStorage.getItem("userDetails");
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  const user = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userDetails");
    navigate("/Login");
  };

  const profileOptions = [
    { label: "Profile", value: "/" },
    { label: "Logout", value: "logout" },
  ];

  const handleProfileChange = (selectedValue) => {
    if (selectedValue === "logout") {
      logout();
    } else {
      // Redirect to the selected profile page
      window.location.href = selectedValue;
    }
  };

  return (
    <nav className="nav p-3 bg-white shadow md:flex md:items-center md:justify-between">
      <ul className="md:flex md:items-center  md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        {user && (
          <>
            <li className="mx-20 my-6 md:my-0 ">
              <Link className="text-xl duration-500" to="/Dashboard">
                Dashboard
              </Link>
            </li>

            <li className="mx-20 my-6 md:my-0">
              <Link className="text-xl duration-500 text-center" to="/Tabs">
                User
              </Link>
            </li>
            <li className="mx-20 my-6 md:my-0 ">
              <Link className="text-xl  duration-500" to="/">
                Products
              </Link>
            </li>
            <li className="mx-20 my-6 md:my-0 ">
              <Link className="text-xl  duration-500" to="/">
                Bookings
              </Link>
            </li>

            <li className="mx-20 my-6 md:my-0 ">
              <Link className="text-xl  duration-500" to="/">
                Orders
              </Link>
            </li>
            <li className="mx-20 my-6 md:my-0 ">
              <Link className="text-2xl ">
                <CiBellOn />
              </Link>
            </li>
            {/* <li className="mx-20 my-6 md:my-0 ">
              <Link to="/" className="text-4xl decoration-neutral-700">
                <CgProfile />
              </Link>
            </li>
            {location.pathname !== "/Login" && (
              <button onClick={logout}>Logout</button>
            )} */}
            <li className="mx-20 my-6 md:my-0">
              <select
                className="text-4xl decoration-neutral-700"
                onChange={(e) => handleProfileChange(e.target.value)}
                value={location.pathname}
              >
                {profileOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </li>
          </>
        )}
        {!user && (
          <>
            <li className="mx-20 my-6 md:my-0 ">
              <Link
                to="/Login"
                className="text-4xl decoration-neutral-700"
              ></Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
