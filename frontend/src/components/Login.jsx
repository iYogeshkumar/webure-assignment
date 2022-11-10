import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    const payload = {
      email,
      password,
    };
    await fetch("https://webureassgnmt.herokuapp.com/user/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", res.token);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="logincontainer">
      <h2 className="loginhead">Login</h2>
      <input
      className="logininput"
        type="email"
        placeholder="email"
        value={email}
        onChange={handleEmailChange}
      ></input>
      <br />
      <br />
      <input
      className="logininput"
        type="text"
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
      ></input>
      <br />
      <br />
      <Link to="/dashboard">
        <button className="loginbutton" onClick={handleSubmit}>Login</button>
      </Link>
    </div>
  );
};

export { Login };
