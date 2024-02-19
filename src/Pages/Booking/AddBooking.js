import React, { useState } from "react";
import { GiTireIronCross } from "react-icons/gi";

export default function AddBooking({ addBooking, onClose }) {
  const [bookingData, setBookingData] = useState({
    name: "",
    service: "",
    number: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleAdd = () => {
    if (
      bookingData.name === "" ||
      bookingData.service === "" ||
      bookingData.number === "" ||
      bookingData.date === ""
    ) {
      alert("Please fill all the details");
      return;
    }
    addBooking({
      data: { ...bookingData },
      serialNumber: null,
      orderNumber: generateRandomOrderNumber(),
    });
    setBookingData({ name: "", service: "", number: "", date: "" });
  };

  const generateRandomOrderNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  return (
    <div className=" fixed inset-0 bg-gray-50 bg-opacity-100 backdrop-blur-sm flex justify-center items-center w-1/3 h-2/3 m-32">
      <div className="flex flex-col">
        <button onClick={onClose} className="place-self-end">
          <GiTireIronCross size={20} />
        </button>
        <div className="bottom-section px-16">
          <h1 className="form-title font-bold text-2xl text-[#002D74]">
            Add Booking
          </h1>
          <form className="flex flex-col gap-4 ">
            <div className="input-box">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={bookingData.name}
                onChange={handleChange}
                placeholder="Enter name"
                name="name"
                id="name"
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <label htmlFor="service">Service Type</label>
              <input
                type="text"
                value={bookingData.service}
                onChange={handleChange}
                name="service"
                id="service"
                placeholder="Enter Service Type"
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <label htmlFor="number">Number</label>
              <input
                type="number"
                onChange={handleChange}
                name="number"
                id="number"
                placeholder="Enter phone number"
                value={bookingData.number}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                onChange={handleChange}
                name="date"
                id="date"
                placeholder="Enter your Date"
                value={bookingData.date}
                className="p-2 rounded-xl border w-full"
              />
            </div>
          </form>
          <button
            className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300 w-32"
            onClick={handleAdd}
          >
            Add Booking
          </button>
        </div>
      </div>
    </div>
  );
}
