import React from "react";
import { useState } from "react";
import { GiTireIronCross } from "react-icons/gi";

const AddPartner = ({ addPartner, onClose }) => {
  const [detail, setDetail] = useState({
    name: "",
    email: "",
    password: "",
    date: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
    localStorage.setItem("userDetails", JSON.stringify(detail));
  };

  const handleAdd = () => {
    if (
      detail.email === "" ||
      detail.password === "" ||
      detail.name === "" ||
      detail.role === "" ||
      detail.date === ""
    ) {
      alert("Please fill the details");
      return;
    }
    addPartner(detail);
    setDetail({ name: "", email: "", password: "", date: "", role: "" });
  };

  return (
    <div className=" absolute bg-white px-1 py-2 sm:py-32 lg:px-8">
      <div className="flex flex-col">
        <button onClick={onClose} className="place-self-end">
          <GiTireIronCross size={20} />
        </button>
        <div className="bottom-section px-1">
          <h1 className="form-title font-bold text-2xl text-[#002D74] text-center">
            Add Partner
          </h1>
          <form className="flex flex-col gap-4 mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="input-box mt-2.5">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={detail.name}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="input-box mt-2.5">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={detail.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="input-box mt-2.5">
                <input
                  type="text"
                  placeholder="Enter Password"
                  name="password"
                  value={detail.password}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="input-box mt-2.5">
                <input
                  type="text"
                  placeholder="Enter Role"
                  name="role"
                  value={detail.role}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="input-box mt-2.5">
                <input
                  type="date"
                  placeholder="Enter Register Date"
                  name="date"
                  value={detail.date}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-10">
              <button
                onClick={handleAdd}
                className="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Partner
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPartner;
