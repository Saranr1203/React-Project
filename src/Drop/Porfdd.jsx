import React from "react";
import "./Profdd.css";
import { database } from "../Firebase/Firebase";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Porfdd = (props) => {
  const navigate = useNavigate();

  return (
    <div className="dd">
      <ul className="ull">
        {JSON.parse(localStorage.getItem("llogin")) ? (
          <li
            onClick={() => {
              props.setside();
              props.setlogin();
              signOut(database).then((val) => {
                props.showPro();
                navigate("/");
              });
            }}
          >
            Signout
          </li>
        ) : (
          <Link
            to="/Login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li onClick={props.showPro}>Login</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Porfdd;
