import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import video from "../Assets/video.mp4";
import logo from "../Assets/profile.png";
import { FaUserShield } from "react-icons/fa6";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { database } from "../Firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { IoMdMail } from "react-icons/io";    

const Login = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(database, formData.email, formData.password)
      .then((data) => {
        props.setside();
        props.setlogin();
        localStorage.setItem("UID", JSON.stringify(data.user.uid));
        localStorage.setItem("username", JSON.stringify(formData.username));
        if (JSON.parse(localStorage.getItem("llogin"))) {
          navigate("/dashboard");
        } else {
          navigate("/Login");
        }
      })
      .catch((error) => {
        alert(error.code);
      });

    try {
      const validationErrors = {};
      if (!formData.username.trim()) {
        validationErrors.username = "username is required";
      }

      if (!formData.email.trim()) {
        validationErrors.email = "email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        validationErrors.email = "email is not valid";
      }

      if (!formData.password.trim()) {
        validationErrors.password = "password is required";
      } else if (formData.password.length < 6) {
        validationErrors.password = "password should be at least 6 char";
      }

      if (formData.confirmPassword !== formData.password) {
        validationErrors.confirmPassword = "password not matched";
      }

      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Welcome to Ticks </h2>
          </div>
          <div className="footerDiv flex">
            <span className="text">Don't have an account?</span>
            <Link to={"/register"}>
              <button className="btn">SignUp</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="" />
            <h3>Login!</h3>
          </div>

          <form className="form grid" onSubmit={handleSubmit}>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  onChange={handleChange}
                />
              </div>
              {errors.username && <span className="V">{errors.username}</span>}
            </div>
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <IoMdMail className="icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  onChange={handleChange}
                />
              </div>
              {errors.email && <span className="V">{errors.email}</span>}
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  onChange={handleChange}
                />
              </div>
              {errors.password && <span className="V">{errors.password}</span>}
            </div>
            <br />
            <button type="submit" className="btn flex">
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>
            <br />
            <span className="forgetPassword">
              <p>Forgot your password?</p>
              <Link to={"/Forgetpass"}>
                <button className="btn1">Click Here</button>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
