import React from "react";
import { useState, useEffect } from "react";
import uuid4 from "uuid4";
import UserProfileForm from "./UserProfileForm";
import UserProfile from "./UserProfile";

const UserProfilePage = () => {
  const [showModel, setShowModel] = useState(false);

  const localStorageKey = "UserProfile";
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
    const profileToDelete = profile.find((val) => val.id === id);
    const shouldDelete = window.confirm(
      `Are you sure you want to delete ${profileToDelete?.Fname} ${profileToDelete?.Lname}'s profile?`
    );

    if (shouldDelete) {
      const updatedList = profile.filter((val) => {
        return val.id !== id;
      });
      setProfile(updatedList);
    } else {
      alert("Profile deletion canceled.");
    }
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
          <UserProfileForm
            onClose={() => setShowModel(false)}
            addProfile={addProfile}
          />
        )}
        <UserProfile profile={profile} removeProfile={removeProfile} />
      </div>
    </div>
  );
};

export default UserProfilePage;
