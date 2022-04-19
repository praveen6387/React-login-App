import React from "react";

export const Signup = () => {
  return (
    <div className="sign">
      <p>Name</p>
      <input type="text" className="ip" />
      <p>Email</p>
      <input className="ip" type="text" />
      <p>Password</p>
      <input className="ip" type="password" name="pass" id="" />
      <p>Confirm password</p>
      <input className="ip" type="password" name="pass" id="" />
      <p>Address</p>
      <input className="ip" type="text" />
      <br />
      <button type="submit" className="signup">
        SIGNUP
      </button>
    </div>
  );
};
