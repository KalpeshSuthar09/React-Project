import React, { useState } from "react";
import { GiTireIronCross } from "react-icons/gi";

export default function PartnerProfileForm({ addProfile, onClose }) {
  const [detail, setDetail] = useState({
    Fname: "",
    Lname: "",
    AboutMe: "",
    Email: "",
    Mobile: "",
    Location: "",
    Link: "",
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
      detail.Link === "" ||
      detail.Location === "" ||
      detail.Email === "" ||
      detail.Mobile === "" ||
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
    addProfile(detail);
    setDetail({
      Fname: "",
      Lname: "",
      AboutMe: "",
      Email: "",
      Mobile: "",
      Location: "",
      Link: "",
      Address: "",
      PostalCode: "",
      City: "",
      State: "",
    });
  };

  return (
    <div className=" fixed flex justify-center items-center px-16 py-12 text-lg font-medium whitespace-nowrap bg-white text-zinc-700 max-md:px-5">
      <div className=" flex flex-col items-center px-16 pt-4 pb-12 mt-5 ml-20 max-w-full bg-white rounded-md shadow-sm w-[868px] max-md:px-5 max-md:mt-10">
        <button onClick={onClose} className="place-self-end">
          <GiTireIronCross size={20} />
        </button>
        <div>
          <form className="flex flex-col items-center gap-5 ">
            <div className="input-box mt-2.5">
              <input
                type="text"
                name="Fname"
                placeholder="Enter First Name"
                value={detail.Fname}
                onChange={handleChange}
                className="block py-1 px-2 w-96 text-sm text-center text-gray-900 bg-transparent border-b-2 border-gray-300  dark:text-black  dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                required
              />
            </div>
            <div className="input-box mt-2.5">
              <input
                type="text"
                name="Lname"
                placeholder="Enter Last Name"
                value={detail.Lname}
                onChange={handleChange}
                className="block py-1 px-2 w-96 text-sm text-center text-gray-900 bg-transparent border-b-2 border-gray-300  dark:text-black  dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                required
              />
            </div>
            <div className="input-box mt-2.5">
              <input
                type="text"
                name="Email"
                placeholder="Enter Email"
                value={detail.Email}
                onChange={handleChange}
                className="block py-1 px-2 w-96 text-sm text-center text-gray-900 bg-transparent border-b-2 border-gray-300  dark:text-black  dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                required
              />
            </div>
            <div className="input-box mt-2.5">
              <input
                type="text"
                name="Mobile"
                placeholder="Enter Mobile No."
                value={detail.Mobile}
                onChange={handleChange}
                className="block py-1 px-2 w-96 text-sm text-center text-gray-900 bg-transparent border-b-2 border-gray-300  dark:text-black  dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                required
              />
            </div>
            <div className="input-box mt-2.5">
              <input
                type="text"
                name="Location"
                placeholder="Enter Location"
                value={detail.Location}
                onChange={handleChange}
                className="block py-1 px-2 w-96 text-sm text-center text-gray-900 bg-transparent border-b-2 border-gray-300  dark:text-black  dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                required
              />
            </div>
            <div className="input-box mt-2.5">
              <input
                type="text"
                name="Link"
                placeholder="Enter Link"
                value={detail.Link}
                onChange={handleChange}
                className="block py-1 px-2 w-96 text-sm text-center text-gray-900 bg-transparent border-b-2 border-gray-300  dark:text-black  dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-blue-600"
              />
            </div>
            <div className="input-box mt-2.5">
              <input
                type="text"
                name="Address"
                placeholder="Enter Address"
                value={detail.Address}
                onChange={handleChange}
                className="block py-1 px-2 w-96 text-sm text-center text-gray-900 bg-transparent border-b-2 border-gray-300  dark:text-black  dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                required
              />
            </div>
            <div className="input-box mt-2.5">
              <input
                type="text"
                name="PostalCode"
                placeholder="Enter Postal Code"
                value={detail.PostalCode}
                onChange={handleChange}
                className="block py-1 px-2 w-96 text-sm text-center text-gray-900 bg-transparent border-b-2 border-gray-300  dark:text-black  dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                required
              />
            </div>
            <div className="input-box mt-2.5">
              <input
                type="text"
                name="City"
                placeholder="Enter City"
                value={detail.City}
                onChange={handleChange}
                className="block py-1 px-2 w-96 text-sm text-center text-gray-900 bg-transparent border-b-2 border-gray-300  dark:text-black  dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                required
              />
            </div>
            <div className="input-box mt-2.5">
              <input
                type="text"
                name="State"
                placeholder="Enter State"
                value={detail.State}
                onChange={handleChange}
                className="block py-1 px-2 w-96 text-sm text-center text-gray-900 bg-transparent border-b-2 border-gray-300  dark:text-black  dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                required
              />
            </div>
            <div className="input-box sm:col-span-2">
              <input
                type="text"
                name="AboutMe"
                placeholder="Enter About Me"
                value={detail.AboutMe}
                onChange={handleChange}
                className="block py-1 px-2 w-96 text-sm text-center text-gray-900 bg-transparent border-b-2 border-gray-300  dark:text-black  dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-blue-600"
              />
            </div>
            <div >
              <button
                onClick={handleAdd}
                className="bg-violet-700 text-white font-bold py-1 px-8 rounded w-80"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
