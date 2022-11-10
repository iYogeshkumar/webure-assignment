import "../css/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
       
        
      <div className="nav-main-div">
      <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/register">
          <p>Registration</p>
        </Link>
        <Link to="/login">
          <p>Login</p>
        </Link>
        <Link to="/dashboard">
          <p>Dashboard</p>
        </Link>
      </div>
    </div>
  );
};