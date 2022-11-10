import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Navbar } from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/Homepage";
import PrivateReqAuth from "./components/PrivateReqAuth";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/dashboard" element={<PrivateReqAuth><Dashboard/></PrivateReqAuth>}/> */}
      </Routes>
    </div>
  );
}

export default App;
