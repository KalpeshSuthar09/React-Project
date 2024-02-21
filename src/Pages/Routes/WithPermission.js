import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const Props = {
  roleRequired: "ADMIN" | "USER",
  message: String,
  children: React.ReactNode,
};
/* type Props = {
  roleRequired: "ADMIN" | "USER",
  message?: String,
  children?: React.ReactNode,
}; */

const useRole = (Props) => {
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

const WithPermission = (Props) => {
  const { roleRequired, message, children } = Props;
  const role = useRole();
  return (
    <>{roleRequired === role ? children : <h3>{message ? message : ""}</h3>}</>
  );
};

export default WithPermission;
