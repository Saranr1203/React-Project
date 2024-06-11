import React from "react";
import Logo from "../Assets/Logo.png";
import "./Sidebar.css";
import { IoCloseSharp } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineNumber } from "react-icons/ai";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { MdAddTask } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { database } from "../Firebase/Firebase";
import { signOut } from "firebase/auth";

const Sidebar = (props) => {
  const navigate = useNavigate();

  return (
    <aside>
      <div className="top">
        <div className="logo">
          <img src={Logo} alt="" />
          <h2>
            t<span>i</span>cks
          </h2>
        </div>
        <div className="close">
          <IoCloseSharp />
        </div>
      </div>

      <div className="sidebar">
        <div className="a">
          <span>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <HiOutlineHome />
            </Link>
          </span>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <h3>Home</h3>
          </Link>
        </div>
        {JSON.parse(localStorage.getItem("lside")) && (
          <div className="a">
            <span>
              <Link
                to="/dashboard"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <RxDashboard />
              </Link>
            </span>
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>Dashboard</h3>
            </Link>
          </div>
        )}
        {JSON.parse(localStorage.getItem("lside")) && (
          <div className="a" onClick={props.data}>
            <span>
              <MdAddTask />
            </span>
            <h3>Add Task</h3>
          </div>
        )}
        <div className="a">
          <Link
            to="/About"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span>
              <AiOutlineNumber />
            </span>
          </Link>
          <Link
            to="/About"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3>About</h3>
          </Link>
        </div>
        <div className="a" onClick={props.contact}>
          <span>
            <AlternateEmailIcon />
          </span>
          <h3>Contact Us</h3>
        </div>
        <div className="a">
          <span>
            <AiOutlineLogin />
          </span>
          {!JSON.parse(localStorage.getItem("llogin")) ? (
            <Link
              to="/Login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>Login</h3>
            </Link>
          ) : (
            <h3
              onClick={() => {
                props.setside();
                props.setlogin();
                signOut(database).then((val) => {
                  navigate("/");
                });
              }}
            >
              Signout
            </h3>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
