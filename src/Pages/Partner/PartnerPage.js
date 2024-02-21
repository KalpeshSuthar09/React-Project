import React from "react";
import { useState, useEffect } from "react";
import uuid4 from "uuid4";
import AddPartner from "./AddPartner";
import PartnerList from "./PartnerList";
import WithPermission from "../Routes/WithPermission";

const PartnerPage = () => {
  const [showModel, setShowModel] = useState(false);

  const localStorageKey = "partner";
  const [partner, setPartner] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(partner));
  }, [partner]);

  const addPartner = (data) => {
    setPartner([...partner, { id: uuid4(), ...data }]);
  };

  const removePartner = (id) => {
    const updatedList = partner.filter((val) => {
      return val.id !== id;
    });
    setPartner(updatedList);
  };
  return (
    <div>
      <div className="flex flex-col">
        <WithPermission roleRequired="ADMIN" message="Only Admin can view this">
          <button
            className=" place-self-end flex items-center gap-1 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110"
            onClick={() => setShowModel(true)}
          >
            Add Partner
          </button>
          {showModel && (
            <AddPartner
              onClose={() => setShowModel(false)}
              addPartner={addPartner}
            />
          )}
          <PartnerList partner={partner} removePartner={removePartner} />
        </WithPermission>
      </div>
    </div>
  );
};

export default PartnerPage;
