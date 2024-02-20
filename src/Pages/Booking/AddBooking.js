import React, { useState } from "react";
import { GiTireIronCross } from "react-icons/gi";

export default function AddBooking({ addBooking, onClose }) {
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    password: "",
    date: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
    localStorage.setItem("Booking-Details", JSON.stringify(booking));
  };

  const handleAdd = () => {
    if (
      booking.email === "" ||
      booking.password === "" ||
      booking.name === "" ||
      booking.role === "" ||
      booking.date === ""
    ) {
      alert("Please fill the details");
      return;
    }
    addBooking(booking);
    setBooking({ name: "", email: "", password: "", date: "", role: "" });
  };

  return (
    <div className=" fixed inset-0 bg-gray-50 bg-opacity-100 backdrop-blur-sm flex justify-center items-center w-1/3 h-2/3 m-32">
      <div className="flex flex-col">
        <button onClick={onClose} className="place-self-end">
          <GiTireIronCross size={20} />
        </button>
        <div className="bottom-section px-16">
          <h1 className="form-title font-bold text-2xl text-[#002D74]">
            Add User
          </h1>
          <form className="flex flex-col gap-4 ">
            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={booking.name}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={booking.email}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter Password"
                name="password"
                value={booking.password}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter Password"
                name="role"
                value={booking.role}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <input
                type="date"
                placeholder="Enter Register Date"
                name="date"
                value={booking.date}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
          </form>
          <button
            onClick={handleAdd}
            className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300 w-32"
          >
            New Booking
          </button>
        </div>
      </div>
    </div>
  );
}
