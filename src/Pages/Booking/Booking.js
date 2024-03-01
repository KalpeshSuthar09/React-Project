import React from "react";
import { useState, useEffect } from "react";
import uuid4 from "uuid4";
import BookingList from "./BookingList";
import AddBooking from "./AddBooking";

export default function Booking() {
  const [showModel, setShowModel] = useState(false);

  const localStorageKey = "bookings";
  const [booking, setBooking] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(booking));
  }, [booking]);

  const addBooking = (data) => {
    setBooking([...booking, { id: uuid4(), ...data }]);
  };

  const removeBooking = (id) => {
    const updatedBookings = booking.filter((val) => val.id !== id);
    setBooking(updatedBookings);
  };

  return (
    <div>
      <div className="flex flex-col">
        <button
          className=" place-self-end flex items-center gap-1 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110"
          onClick={() => setShowModel(true)}
        >
          Add Booking
        </button>
        {showModel && (
          <AddBooking
            onClose={() => setShowModel(false)}
            addBooking={addBooking}
          />
        )}
        <BookingList booking={booking} removeUser={removeBooking} />
      </div>
    </div>
  );
}
