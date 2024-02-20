import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CiBellOn } from "react-icons/ci";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

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
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userDetails");
    navigate("/Login");
  };

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4">
        <div className="lg:flex md:flex lg:flex-1 items-center justify-start font-normal hidden">
          {user && (
            <>
              <div className="flex-10">
                <ul className="flex gap-32 mr-16 text-[18px]">
                  <li>
                    <Link className="text-xl duration-500" to="/Dashboard">
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-xl duration-500 text-center"
                      to="/Tabs"
                    >
                      User
                    </Link>
                  </li>
                  <li>
                    <Link className="text-xl  duration-500" to="/">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link className="text-xl  duration-500" to="/">
                      Bookings
                    </Link>
                  </li>

                  <li>
                    <Link className="text-xl  duration-500" to="/">
                      Orders
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-end flex-1 gap-20">
                <Link className="text-3xl ">
                  <CiBellOn />
                </Link>
                <DropdownButton
                  id="dropdown-basic-button"
                  title={<CgProfile />}
                  className="text-3xl flex"
                >
                  <Dropdown.Item><Link to='/UserProfilePage'>Profile</Link></Dropdown.Item>
                  {/* <Dropdown.Item><Link to='/UserProfilePage'>Profile</Link></Dropdown.Item> */}
                  <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                </DropdownButton>
              </div>
            </>
          )}
          {!user && (
            <>
              <li className="mx-20 my-6  ">
                <Link
                  to="/Login"
                  className="text-4xl decoration-neutral-700"
                ></Link>
              </li>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
