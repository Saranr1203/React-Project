import React, { useState } from "react";
import { Link } from "react-router-dom";
import video from "../Assets/video.mp4";
import logo from "../Assets/profile.png";
import { IoMdMail } from "react-icons/io";
import { AiOutlineSwapRight } from "react-icons/ai";
import { database } from "../Firebase/Firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const Forgetpass = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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

    sendPasswordResetEmail(database, formData.email)
      .then((data) => {
        alert("Check Your Gmail");
      })
      .catch((error) => {
        alert(error.code);
      });

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
  };
  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Welcome to Ticks </h2>
          </div>
          <div className="footerDiv flex">
            <span className="text">Have an account?</span>
            <Link to={"/Login"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="" className="fpimg"/>
            <br />
            <h3>Forget Password!!!</h3>
          </div>

          <form className="form grid" onSubmit={handleSubmit}>
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <IoMdMail className="icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </div>
              {errors.email && <span className="V">{errors.email}</span>}
            </div>
            <br />
            <button type="submit" className="btn flex">
              <span>Change Password</span>
              <AiOutlineSwapRight className="icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgetpass;
