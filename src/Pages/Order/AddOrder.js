import React, { useState } from "react";
import { GiTireIronCross } from "react-icons/gi";


export default function AddOrder({ addOrder, onClose }) {
  const [orderData, setOrderData] = useState({
    name: "",
    service: "",
    number: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleAdd = () => {
    if (
      orderData.name === "" ||
      orderData.service === "" ||
      orderData.number === "" ||
      orderData.address === ""
    ) {
      alert("Please fill all the details");
      return;
    }
    addOrder({
      data: { ...orderData },
      serialNumber: null,
      orderNumber: generateRandomOrderNumber(),
    });
    setOrderData({ name: "", service: "", number: "", address: "" });
  };

  const generateRandomOrderNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  return (
    <div className="container">
        <div>
        <button onClick={onClose} className="place-self-end">
          <GiTireIronCross size={20} />
        </button>
        </div>
      <form>
        <div className="input-box">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={orderData.name}
            onChange={handleChange}
            placeholder="Enter name"
            name="name"
            id="name"
          />
        </div>
        <div className="input-box">
          <label htmlFor="service">Service Type</label>
          <input
            type="text"
            value={orderData.service}
            onChange={handleChange}
            name="service"
            id="service"
            placeholder="Enter Service Type"
          />
        </div>
        <div className="input-box">
          <label htmlFor="number">Number</label>
          <input
            type="number"
            onChange={handleChange}
            name="number"
            id="number"
            placeholder="Enter phone number"
            value={orderData.number}
          />
        </div>
        <div className="input-box">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            onChange={handleChange}
            name="address"
            id="address"
            placeholder="Enter your Address"
            value={orderData.address}
          />
        </div>
      </form>

      <button className="btn" onClick={handleAdd}>
        Add Order
      </button>
    </div>
  );
}