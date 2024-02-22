import React from "react";
import { useState } from "react";
import { GiTireIronCross } from "react-icons/gi";

const AddUser = ({ addUser, onClose }) => {
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
    addUser(detail);
    setDetail({ name: "", email: "", password: "", date: "", role: "" });
  };

  return (
    <div className=" fixed flex justify-center items-center px-16 py-12 text-lg font-medium whitespace-nowrap bg-white text-zinc-700 max-md:px-5">
      <div className=" flex flex-col items-center px-16 pt-4 pb-12 mt-5 ml-20 max-w-full bg-white rounded-md shadow-sm w-[868px] max-md:px-5 max-md:mt-10">
        <button onClick={onClose} className="place-self-end">
          <GiTireIronCross size={20} />
        </button>
        <div className="flex flex-col mb-2 max-w-full w-[550px]">
          <h1 className="form-title font-bold text-2xl text-[#002D74] text-center">
            Add User
          </h1>
        </div>
        <div>
          <form className="flex flex-col items-center gap-5 ">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={detail.name}
                onChange={handleChange}
                className="block py-1 px-2 w-96 text-sm text-center text-gray-900 bg-transparent border-b-2 border-gray-300  dark:text-black  dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-blue-600"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={detail.email}
                onChange={handleChange}
                className="block py-1 px-2 w-96 text-sm text-center text-gray-900 bg-transparent border-b-2 border-gray-300  dark:text-black  dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-blue-600"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Password"
                name="password"
                value={detail.password}
                onChange={handleChange}
                className="block py-1 px-2 w-96 text-sm text-center text-gray-900 bg-transparent border-b-2 border-gray-300  dark:text-black  dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-blue-600"
              />
            </div>
            <div>
              <select
                name="role"
                value={detail.role}
                onChange={handleChange}
                className="block py-1 px-2 w-96 text-sm text-center text-gray-900 bg-transparent border-b-2 border-gray-300  dark:text-black  dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-blue-600"
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="user">User</option>
              </select>
            </div>
            <div>
              <input
                type="date"
                placeholder="Enter Register Date"
                name="date"
                value={detail.date}
                onChange={handleChange}
                className="block py-1 px-2 w-96 text-sm text-center text-gray-900 bg-transparent border-b-2 border-gray-300  dark:text-black  dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-blue-600"
              />
            </div>
            <div>
              <button
                onClick={handleAdd}
                className="bg-violet-700 text-white font-bold py-1 px-8 rounded w-80"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
