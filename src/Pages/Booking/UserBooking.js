import React, { useState } from "react";
import EditBooking from "./EditBooking"; // Import the new EditBooking component

export default function UserBookings({ user, booking, editBooking }) {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const userBookings = booking
    .filter((val) => val.data.name === user.name)
    .map((val, index) => (
      <tr key={val.id}>
        <td className="text-left bg-white p-3">{index + 1}</td>
        <td className="text-left bg-white p-3">
          <button
            onClick={() => {
              setSelectedBooking(val);
              setEditModalVisible(true);
            }}
            className="text-white bg-blue-500 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Edit
          </button>
        </td>
      </tr>
    ));

  return (
    <div className="details px-8 h-screen ">
      <div className="flex justify-end p-1 gap-8">
        <form>
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            className=" relative  block min-w-0 flex-auto rounded border-2 border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] "
          />
        </form>
        <button className="text-black border-2  flex items-center rounded-md text-sm px-6 py-2 text-center  mb-2 gap-2">
          <BsCalendar2Date />
          Date
        </button>
        <button className="text-black border-2   rounded-md text-sm px-6 py-2 text-center mb-2">
          Filter
        </button>
      </div>
      <table className="w-full flex-wrap">
        <thead className="bg-gray-200 border-b-2 border-gray-200">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">
              Serial No.
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">
              Booking Id
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">
              Service Type
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">
              Booking Time
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">
              Customer Name
            </th>

            <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">
              Mobile
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">
              Payment Status
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">
              Status
            </th>
          </tr>
        </thead>
        <tbody>{bookingList}</tbody>
      </table>
      {editModalVisible && (
        <EditBooking
          onClose={() => setEditModalVisible(false)}
          booking={selectedBooking}
          editBooking={editBooking}
        />
      )}
      {/* ... render pagination if needed */}
    </div>
  );
}
