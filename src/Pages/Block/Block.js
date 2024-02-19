/* import React, { useState } from "react";

const BlockedUserList = ({user, blockedUsers, unblockUser }) => {
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
    return <div className="pagination">{pageNumbers}</div>;
  };

  const blockList = currentItems.map((val) => (
    <tr key={val.id}>
      <td className="text-left bg-white p-3">{val.name}</td>
      <td className="text-left bg-white p-3">{val.email}</td>
      <td className="text-left bg-white p-3">{val.password}</td>
      <td className="text-left bg-white p-3">{val.date}</td>
      <td className="p-3 bg-white">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => unblockUser(val.id)}
        >
          Unblock
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="details px-8 h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Blocked User Details</h2>
      <table className="w-full">
        <thead className="bg-gray-200 border-b-2 border-gray-200">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Name
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Email
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Password
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Register Date
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default BlockedUserList;
 */