/* import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "userDetails",
      JSON.stringify(detail, { role: "USER" })
    );
    navigate("/Login");
  };

  return (
    <div>
      <div>
        <h1>Sign Up</h1>
      </div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Email"
              required
              value={detail.name}
              onChange={(e) => setDetail({ ...detail, name: e.target.value })}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              required
              value={detail.email}
              onChange={(e) => setDetail({ ...detail, email: e.target.value })}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              required
              value={detail.password}
              onChange={(e) =>
                setDetail({ ...detail, password: e.target.value })
              }
            />
          </div>
          <div>
            <button type="submit">Sign Up</button>
            <div>
              Already have an Account? <Link to="/Login">Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
 */