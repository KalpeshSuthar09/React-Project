import React, { useState } from "react";
import { BsCalendar2Date } from "react-icons/bs";

const VetBookingList = ({ booking, removeBooking }) => {
    const itemsPerPage = 10; 
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = booking.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(booking.length / itemsPerPage);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleChangePage(i)}
          className="justify-center items-center px-3.5 h-8 bg-white rounded border border-indigo-500 border-solid aspect-square"
        >
          {i}
        </button>
      );
    }
    return (
      <div className="flex flex-row gap-4 items-center justify-center">
        {pageNumbers}
      </div>
    );
  };

  const bookingList = booking
    .filter((val) => {
      return search === "" ? val : val.name.includes(search);
    })
    .map((val, index) => (
      <tr key={val.id}>
        <td className="text-left bg-white p-3">{index + 1}</td>
        <td className="text-left bg-white p-3">{val.serialNumber}</td>
        <td className="text-left bg-white p-3">{val.data.service}</td>
        <td className="text-left bg-white p-3">{val.data.bookingTime}</td>
        <td className="text-left bg-white p-3">{val.data.name}</td>
        <td className="text-left bg-white p-3">{val.data.mobile}</td>
        <td className="text-left bg-white p-3">{val.data.payment}</td>
        <td className="text-left bg-white p-3">
          <button className="text-white bg-green-700   font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 ">
            Active
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
      {renderPagination()}
    </div>
  );
};

export default VetBookingList;