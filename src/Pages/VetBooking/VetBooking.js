import React, { useState } from "react";
import AddVetBooking from "./AddVetBooking";
import VetBookingList from "./VetBookingList";

const VetBooking = () => {
  const [showModel, setShowModel] = useState(false);
  const [booking, setBooking] = useState([]);

  const addBooking = (newBooking) => {
    setBooking([...booking, newBooking]);
  };

  const removeBooking = (id) => {
    const updatedBookings = booking.filter((booking) => booking.id !== id);
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
          <AddVetBooking
            onClose={() => setShowModel(false)}
            addBooking={addBooking}
          />
        )}
        <VetBookingList booking={booking} removeUser={removeBooking} />
      </div>
    </div>
  );
};

export default VetBooking;
