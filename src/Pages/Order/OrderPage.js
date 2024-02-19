import React from "react";
import { useState, useEffect } from "react";
import uuid4 from "uuid4";
import AddOrder from "./AddOrder";
import OrderList from "./OrderList";

const OrderPage = () => {
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
          Add Order
        </button>
        {showModel && <AddOrder addOrder={addOrder}  onClose={() => setShowModel(false)}/>}
        <OrderList order={order} removeOrder={removeOrder} />
      </div>
    </div>
  );
};

export default OrderPage;
