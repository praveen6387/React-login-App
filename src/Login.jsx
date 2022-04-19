import React from "react";

export const Login = () => {
  return (
    <div className="log">
      <p>Email</p>
      <input className="ip" type="text" />
      <p>Password</p>
      <input className="ip" type="password" />
      <br />
      <br />
      <button type="submit" className="login">
        LOGIN
      </button>
    </div>
  );
};
