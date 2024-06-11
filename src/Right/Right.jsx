import React from "react";
import "./Right.css";
import { HiMenu } from "react-icons/hi";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import ProfilePic from "../Assets/profile.png";
import Calendar from "../Calendar/Calendar";

const Right = (props) => {
  return (
    <div className="right">
      <div className="top">
        <button id="menu-btn">
          <span>
            <HiMenu />
          </span>
        </button>
        <div className="theme-toggler" onClick={props.settheme}>
          <span
            className={
              !JSON.parse(localStorage.getItem("theme")) ? "active" : ""
            }
          >
            <MdLightMode />
          </span>
          <span
            className={
              JSON.parse(localStorage.getItem("theme")) ? "active" : ""
            }
          >
            <MdDarkMode />
          </span>
        </div>
        <div className="profile">
          {JSON.parse(localStorage.getItem("llogin")) ? <div className="info">
            <p>
              Hey, <b>{JSON.parse(localStorage.getItem("username"))}</b>
            </p>
            {JSON.parse(localStorage.getItem("username"))==="Saran" ? <small className="text-muted">Admin</small> : ""}
          </div> : ""}

          <div className="profile-photo">
            <img src={ProfilePic} alt="" onClick={props.showPro} />
          </div>
        </div>
      </div>
      <div className="calendar">
        <Calendar />
      </div>
    </div>
  );
};

export default Right;
