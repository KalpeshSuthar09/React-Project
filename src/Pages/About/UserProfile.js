/* import React from "react";

const UserProfile = ({ user, removeUser, blockUser }) => {
  const userList = user.map((val) => (
    <div key={val.id}>
      <div className="text-left bg-white p-3">{val.Fname}</div>
      <div className="text-left bg-white p-3">{val.Lname}</div>
      <div className="text-left bg-white p-3">{val.AboutMe}</div>
      <div className="text-left bg-white p-3">{val.Address}</div>
      <div className="text-left bg-white p-3">{val.PostalCode}</div>
      <div className="text-left bg-white p-3">{val.City}</div>
      <div className="text-left bg-white p-3">{val.State}</div>
      <div className="p-3 bg-white">
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
      </div>
    </div>
  ));

  return (
    <>
      <div className="details px-8 h-screen bg-gray-100">
        <div>{userList}</div>
      </div>
    </>
  );
};

export default UserProfile;


 */

import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function OrderList(props) {
  const { order, removeOrder } = props;

  const orderList = order.map((val, index) => (
    <div className="grid grid-cols-3 gap-4" key={index}>
      <div class="col-span-1 bg-blue-500 p-4 h-full">
            <p>Left Box</p>
        </div>

        <div class="col-span-2 grid grid-rows-2">
            <div class="bg-green-500 p-4 h-32">

                <p>Right Box 1</p>
            </div>
            <div class="bg-red-500 p-4 h-64">
                <p>Right Box 2</p>
            </div>
        </div>
      {/* <div className="about-design w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          About Me
        </label>
        <div
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          {val.AboutMe}
        </div>
      </div>
      <div className="form-design">
        <div className="text-left bg-white p-3">{val.Fname}</div>
        <div className="text-left bg-white p-3">{val.Lname}</div>
        <div className="text-left bg-white p-3">{val.Address}</div>
        <div className="text-left bg-white p-3">{val.PostalCode}</div>
        <div className="text-left bg-white p-3">{val.City}</div>
        <div className="text-left bg-white p-3">{val.State}</div>
      </div> */}
      {/* <div onClick={() => removeOrder(val.id)}>
        <DeleteIcon />
      </div> */}
    </div>
  ));

  return (
    <div>
      <div>{orderList}</div>
    </div>
  );
}
