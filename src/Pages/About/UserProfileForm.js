/* import React from "react";
import { useState } from "react";
import { GiTireIronCross } from "react-icons/gi";

const UserProfileForm = ({ addDetails, onClose }) => {
  const [detail, setDetail] = useState({
    Fname: "",
    Lname: "",
    AboutMe: "",
    Address: "",
    PostalCode: "",
    City: "",
    State: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
    localStorage.setItem("userDetails", JSON.stringify(detail));
  };

  const handleAdd = () => {
    if (
      detail.Fname === "" ||
      detail.Lname === "" ||
      detail.AboutMe === "" ||
      detail.Address === "" ||
      detail.PostalCode === "" ||
      detail.City === "" ||
      detail.State === ""
    ) {
      alert("Please fill the details");
      return;
    }
    addDetails(detail);
    setDetail({
      Fname: "",
      Lname: "",
      AboutMe: "",
      Address: "",
      PostalCode: "",
      City: "",
      State: ""
    });
  };

  
  return (
    <div className=" fixed inset-0 bg-gray-50 bg-opacity-100 backdrop-blur-sm flex justify-center items-center w-1/3 h-2/3 m-32">
      <div className="flex flex-col">
        <button onClick={onClose} className="place-self-end">
          <GiTireIronCross size={20} />
        </button>
        <div className="bottom-section px-16">
          <form className="flex flex-col gap-4 ">
            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={detail.Fname}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={detail.Lname}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={detail.Address}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={detail.PostalCode}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={detail.City}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter Password"
                name="password"
                value={detail.State}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter Register Date"
                name="date"
                value={detail.AboutMe}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
          </form>
          <button
            onClick={handleAdd}
            className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300 w-32"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileForm;

 */

import React, { useState } from "react";
import { GiTireIronCross } from "react-icons/gi";

export default function UserProfileForm({ addOrder, onClose }) {
  const [detail, setDetail] = useState({
    Fname: "",
    Lname: "",
    AboutMe: "",
    Address: "",
    PostalCode: "",
    City: "",
    State: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  };

  const handleAdd = () => {
    if (
      detail.AboutMe === "" ||
      detail.Fname === "" ||
      detail.Lname === "" ||
      detail.Address === "" ||
      detail.PostalCode === "" ||
      detail.City === "" ||
      detail.State === ""
    ) {
      alert("Please fill all the details");
      return;
    }
    addOrder(detail);
    setDetail({
      Fname: "",
      Lname: "",
      AboutMe: "",
      Address: "",
      PostalCode: "",
      City: "",
      State: "",
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-50 bg-opacity-100 backdrop-blur-sm flex justify-center items-center w-1/3 h-2/3 m-32">
      <div className="flex flex-col">
        <button onClick={onClose} className="place-self-end">
          <GiTireIronCross size={20} />
        </button>
        <div className="bottom-section px-16">
          <form className="flex flex-col gap-4 ">
            <div className="input-box">
              <input
                type="text"
                name="Fname"
                placeholder="Enter First Name"
                value={detail.Fname}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="Lname"
                placeholder="Enter Last Name"
                value={detail.Lname}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="Address"
                placeholder="Enter Address"
                value={detail.Address}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="PostalCode"
                placeholder="Enter Postal Code"
                value={detail.PostalCode}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="City"
                placeholder="Enter City"
                value={detail.City}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="State"
                placeholder="Enter State"
                value={detail.State}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="AboutMe"
                placeholder="Enter About Me"
                value={detail.AboutMe}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
          </form>
          <button
            onClick={handleAdd}
            className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300 w-32"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
