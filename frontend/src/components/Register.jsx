import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Register.css"

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setFullname(e.target.value);
  };

  const handleSubmit = async () => {
    const payload = {
      fullname,
      email,
      password,
    };
    await fetch("https://webureassgnmt.herokuapp.com/user/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    
    <div className="regcontainer">
      <h2 className='signup'>SIGN UP</h2>
      <input
        className="input"
        type="text"
        placeholder="Full Name"
        value={fullname}
        onChange={handleNameChange}
      ></input>
      <br />
      <br />
      <input
        className="input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      ></input>
      <br />
      <br />
      <input
        className="input"
        type="text"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      ></input>
      <br />
      <br />
      <Link to="/login">
        <button className="signupbutton" onClick={handleSubmit}>Register</button>
      </Link>
    </div>
  );
};

export { Register };
