import React from "react";

const Props = {
  roleRequired: "ADMIN" | "USER",
  message: String,
  children: React.ReactNode,
};

const useRole = () => {
  let user;
  const _user = localStorage.getItem("userDetails");

  if (_user) {
    user = JSON.parse(_user);
  }

  if (user) {
    return user.role;
  } else {
    return "USER";
  }
};

const WithPermission = ({ roleRequired, message, children }) => {
  const role = useRole();

  return (
    <>
      {roleRequired === role ? (
        children
      ) : (
        <h3>{message ? message : "Permission Denied"}</h3>
      )}
    </>
  );
};

export default WithPermission;
