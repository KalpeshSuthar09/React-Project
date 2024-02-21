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
    <div className="absolute bg-white mb-32">
      <div className="flex flex-col">
        <button onClick={onClose} className="place-self-end">
          <GiTireIronCross size={20} />
        </button>
        <div className="bottom-section px-1">
          <form className="flex flex-col gap-4 mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="input-box mt-2.5">
                <input
                  type="text"
                  name="Fname"
                  placeholder="Enter First Name"
                  value={detail.Fname}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="input-box mt-2.5">
                <input
                  type="text"
                  name="Address"
                  placeholder="Enter Address"
                  value={detail.Address}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-10">
            <button
            onClick={handleAdd}
            className="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
