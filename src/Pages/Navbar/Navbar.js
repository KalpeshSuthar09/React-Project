import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CiBellOn } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const useAuth = () => {
    const user = localStorage.getItem("userDetails");
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  const user = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userDetails");
    navigate("/Login");
  };

  return (
    <div className="shadow-md  w-full top-0 left-0 ">
      {user && (
        <>
          <div className="md:flex  items-center justify-between bg-white py-5 md:px-10 px-6 font-[Montseerat]">
            <div className=" text-2xl cursor-pointer flex items-center">
              <Link className="text-xl duration-500" to="/Dashboard">
                Dashboard
              </Link>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            >
              <IoMdMenu name={open ? "close" : "menu"} />
            </div>
            <ul
              className={`md:flex md:items-center md:gap-10 gap-40  md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-20 " : "top-[-490px]"
              }`}
            >
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <Link className="text-xl duration-500 text-center" to="/Tabs">
                  User
                </Link>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <Link className="text-xl  duration-500" to="/BookingTab">
                  Bookings
                </Link>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <Link className="text-xl  duration-500" to="/">
                  Products
                </Link>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <Link className="text-xl  duration-500" to="/">
                  Order
                </Link>
              </li>
            </ul>
            <div className="flex flex-row justify-center items-center">
              <div className="text-xl">
                <CiBellOn />
              </div>
              <div className="mx-10 md:my-0">
                <DropdownButton
                  id="dropdown-basic-button"
                  title={<CgProfile />}
                  className="text-xl decoration-neutral-700"
                >
                  <Dropdown.Item className="text-left">Profile</Dropdown.Item>
                  <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </div>
        </>
      )}
      {!user && (
        <>
            <Link
              to="/Login"
              className="text-4xl decoration-neutral-700"
            ></Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
