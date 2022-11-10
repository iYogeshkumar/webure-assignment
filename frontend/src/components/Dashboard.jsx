import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/Dashboard.css"

const Dashboard = () => {

  const [data, setData] = useState([]);

  fetch("https://webureassgnmt.herokuapp.com/register")
    .then((res) => res.json())
    .then((data) => setData(data));
  return (
    <div>
         <Link to="/">
        <button className="loginout">Logout</button>
      </Link>
    <div className="adminis-div">
      <br />
      <br />
      <br />
      <div className="head" id="headd">
        <div>
          <p>Name</p>
        </div>
        <div>
          <p>Email</p>
        </div>
        <div>
          {" "}
          <p>password</p>
        </div>
       
      </div>

      {data.map((e) => {
        return (
          <div className="head">
            <div>
              {" "}
              <p>{e.name}</p>
            </div>
            <div>
              {" "}
              <p>{e.email}</p>
            </div>
            <div>
              <p> {e.password}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default Dashboard
