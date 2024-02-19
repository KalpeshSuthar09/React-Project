/* import React from "react";
import { useState, useEffect } from "react";
import uuid4 from "uuid4";
import  Block  from "../Block/Block";
import UserProfileForm from "./UserProfileForm";
import UserProfile from "./UserProfile";

const UserProfilePage = () => {
  const [showModel, setShowModel] = useState(false);
  const [blocked, setBlocked] = useState([]);

  const localStorageKey = "User-Profile";
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(user));
  }, [user]);

  const addDetails = (data) => {
    setUser([...user, { id: uuid4(), ...data }]);
  };

  const removeUser = (id) => {
    const updatedList = user.filter((val) => {
      return val.id !== id;
    });
    setUser(updatedList);
  };

  const blockUser = (id) => {
    const blockedUser = user.find((u) => u.id === id);
    removeUser(id);
    setBlocked([...blocked, blockedUser]);
  };

  const unblockUser = (id) => {
    const unblockedUser = blocked.find((u) => u.id === id);
    setBlocked(blocked.filter((u) => u.id !== id));
    addDetails(unblockedUser);
  };
  return (
    <div>
      <div className="flex flex-col">
        <button
          className=" place-self-end flex items-center gap-1 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110"
          onClick={() => setShowModel(true)}
        >
          AddUser
        </button>
        {showModel && (
          <UserProfileForm onClose={() => setShowModel(false)} addDetails={addDetails} />
        )}
        <UserProfile user={user} removeUser={removeUser} blockUser={blockUser} />
        <Block blocked={blocked} unblockUser={unblockUser} />
      </div>
    </div>
  );
};

export default UserProfilePage;
 */

import React from "react";
import { useState, useEffect } from "react";
import uuid4 from "uuid4";
import UserProfileForm from "./UserProfileForm";
import UserProfile from "./UserProfile";

const UserProfilePage = () => {
  const [showModel, setShowModel] = useState(false);

  const localStorageKey = "order";
  const [order, setOrder] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(order));
  }, [order]);

  const addOrder = (data) => {
    setOrder([...order, { id: uuid4(), ...data }]);
  };

  const removeOrder = (id) => {
    const updatedList = order.filter((val) => {
      return val.id !== id;
    });
    setOrder(updatedList);
  };
  return (
    <div>
      <div className="flex flex-col">
        <button
          className=" place-self-end flex items-center gap-1 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110"
          onClick={() => setShowModel(true)}
        >
          AddUser
        </button>
        {showModel && (
          <UserProfileForm onClose={() => setShowModel(false)} addOrder={addOrder} />
        )}
        <UserProfile order={order} removeOrder={removeOrder}  />
      </div>
    </div>
  );
};

export default UserProfilePage;
