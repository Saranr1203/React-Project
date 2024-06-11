import React from "react";
import Button from "@mui/material/Button";
import BG from "../Assets/home_bg.jpg";
import DBG from "../Assets/image.png";
import "./Home.css";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { database } from "../Firebase/Firebase";
import { signOut } from "firebase/auth";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <div className="hhtop ">
      <div>
        <h1>Home</h1>
      </div>
      <div className="htop">
        <div className="hone">
          <h1>Welcome to ticks.</h1>
        </div>
        <div className="htwo">
          <h1>Write, Plan, Execute.</h1>
        </div>
        <div className="para">
          <p>
            The new Task Master that lets you tick of more than usual where
            better, faster work happens..!!
          </p>
        </div>
        <div className="but">
          {JSON.parse(localStorage.getItem("llogin")) ? (
            <Button
              variant="contained"
              onClick={() => {
                props.setside();
                props.setlogin();
                signOut(database).then((val) => {
                  navigate("/Login");
                });
              }}
            >
              Get into ticks →
            </Button>
          ) : (
            <Link
              to="/Login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button variant="contained">Get into ticks →</Button>
            </Link>
          )}
          <Link
            to="/About"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button variant="outlined">Know More</Button>
          </Link>
        </div>
        <div className="img">
          {JSON.parse(localStorage.getItem("theme")) ? <img src={DBG} alt="" /> : <img src={BG} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default Home;
