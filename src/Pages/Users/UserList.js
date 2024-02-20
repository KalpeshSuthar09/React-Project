import React, { useState } from "react";
import { BsCalendar2Date } from "react-icons/bs";
import {Link} from 'react-router-dom'
import UserProfilePage from "../About/UserProfilePage";

const UserList = ({ user }) => {
  const [search, setSearch] = useState("");
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = user.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(user.length / itemsPerPage);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => handleChangePage(i)}>
          {i}
        </button>
      );
    }
    return (
      <div className=" pagination w-8 text-black  focus:outline-none  font-normal  text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-white-600 dark:hover:bg-gray-200 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] border-2">
        {pageNumbers}
      </div>
    );
  };

  const userList = currentItems
    .filter((val) => {
      return search === "" ? val : val.name.includes(search);
    })
    .map((val) => (
      <tr key={val.id}>
        <td className="text-left bg-white p-3"><Link to="/UserProfilePage">{val.name}</Link></td>
        <td className="text-left bg-white p-3">{val.email}</td>
        <td className="text-left bg-white p-3">{val.role}</td>
        <td className="text-left bg-white p-3">{val.date}</td>
        <td className="text-left bg-white p-3">
        <button
            className="text-white bg-green-700   font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            Active
          </button>
        </td>
      </tr>
    ));

  return (
    <>
      <div className="details px-8 h-[100vh] ">
        <div className="flex justify-end p-1 gap-8">
          <form>
            <input
              type="search"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              className=" relative  block min-w-0 flex-auto rounded border-2 border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem]  "
            />
          </form>
          <button className="text-black border-2  flex items-center rounded-md text-sm px-6 py-2 text-center  mb-2 gap-2">
            <BsCalendar2Date />
            Date
          </button>
          <button className="text-black border-2   rounded-md text-sm px-6 py-2 text-center mb-2 ">
            Filter
          </button>
        </div>
        <table className="w-full">
          <thead className="bg-gray-200 border-b-2 border-gray-100">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/5">
                Name
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/5">
                Email
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/5">
                Role
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/5">
                Register Date
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/5">
                Status
              </th>
            </tr>
          </thead>
          <tbody>{userList}</tbody>
        </table>
        {renderPagination()}
      </div>
    </>
  );
};

export default UserList;
