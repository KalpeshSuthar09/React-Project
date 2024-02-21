import React from "react";
import { useState, useEffect } from "react";
import uuid4 from "uuid4";
import PartnerProfileForm from "./PartnerProfileForm";
import PartnerProfile from "./PartnerProfile";

const PartnerProfilePage = () => {
  const [showModel, setShowModel] = useState(false);

  const localStorageKey = "partner";
  const [profile, setProfile] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(profile));
  }, [profile]);

  const addProfile = (data) => {
    setProfile([...profile, { id: uuid4(), ...data }]);
  };

  const removeProfile = (id) => {
    const updatedList = profile.filter((val) => {
      return val.id !== id;
    });
    setProfile(updatedList);
  };

  return (
    <div>
      <div className="flex flex-col">
        <button
          className=" place-self-end flex items-center gap-1 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110"
          onClick={() => setShowModel(true)}
        >
          Update Profile
        </button>
        {showModel && (
          <PartnerProfileForm
            onClose={() => setShowModel(false)}
            addProfile={addProfile}
          />
        )}
        <PartnerProfile profile={profile} removeProfile={removeProfile} />
      </div>
    </div>
  );
};

export default PartnerProfilePage;
