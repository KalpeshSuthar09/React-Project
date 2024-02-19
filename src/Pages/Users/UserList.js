import React, { useState } from "react";

const UserList = ({ user, removeUser, blockUser }) => {
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
    return <div  className=" pagination w-8 text-black  focus:outline-none  font-normal  text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-white-600 dark:hover:bg-gray-200 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] border-2">{pageNumbers}</div>;
  };

  const userList = currentItems
    .filter((val) => {
      return search === "" ? val : val.name.includes(search);
    })
    .map((val) => (
      <tr key={val.id}>
        <td className="text-left bg-white p-3">{val.name}</td>
        <td className="text-left bg-white p-3">{val.email}</td>
        <td className="text-left bg-white p-3">{val.role}</td>
        <td className="text-left bg-white p-3">{val.date}</td>
        <td className="p-3 bg-white">
          <button
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => removeUser(val.id)}
          >
            Delete
          </button>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => blockUser(val.id)}
          >
            Block
          </button>
        </td>
      </tr>
    ));

  return (
    <>
      <div className="details px-8 h-screen ">
        <div className="flex justify-end p-4">
          <form >
            <input
              type="search"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              className=" relative m-0 block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem]  font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            />
          </form>
          <button className="text-black  focus:outline-none  font-normal rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-white-600 dark:hover:bg-gray-200 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
            Date
          </button>
          <button className="text-black  focus:outline-none   font-normal rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-white-600 dark:hover:bg-gray-200 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
            Filter
          </button>
        </div>
        <table className="w-full">
          <thead className="bg-gray-100 border-b-2 border-gray-100">
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
                Action
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


