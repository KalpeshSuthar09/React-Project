import React, { useState } from "react";
import { GiTireIronCross } from "react-icons/gi";

export default function AddBooking({ addBooking, onClose }) {
  const [booking, setBooking] = useState({
    name: "",
    service: "",
    mobile: "",
    bookingTime: "",
    payment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
    localStorage.setItem("Booking-Details", JSON.stringify(booking));
  };

  const handleAdd = () => {
    if (
      booking.service === "" ||
      booking.mobile === "" ||
      booking.name === "" ||
      booking.bookingTime === "" ||
      booking.payment === ""
    ) {
      alert("Please fill the details");
      return;
    }
    addBooking(booking);
    setBooking({ name: "", service: "", mobile: "", bookingTime: "", payment: "" });
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
                type="text"
                name="service"
                placeholder="Service Type"
                value={booking.service}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter Mobile No."
                name="mobile"
                value={booking.mobile}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter Payment"
                name="payment"
                value={booking.payment}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <input
                type="date"
                placeholder="Enter Booking Date"
                name="bookingTime"
                value={booking.bookingTime}
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
