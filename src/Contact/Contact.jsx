import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { RxCross2 } from "react-icons/rx";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_0585323",
      "template_myop2dq",
      {
        name: name,
        email: email,
        message: message,
      },
      "pQbbg2tMvsPwRj6-P"
    );
    setName("");
    setEmail("");
    setMessage("");
    props.showmessage();
  };

  return (
    <div className="conmain">
      <div className="clos">
        <h3 className="headin">Contact Us</h3>
        <RxCross2 className="cl" onClick={props.contact} />
      </div>
      <div className="in">
        <div className="forms">
          <form className="for" onSubmit={sendEmail}>
            <div className="name">
              <label htmlFor="name">Name :</label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
                required
                ref={inputRef}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Your Email ID :</label>
              <br />
              <input
                type="email"
                value={email}
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Mail ID"
                required
              />
            </div>
            <div className="msg">
              <label htmlFor="message">Enter Your Message :</label>
              <br />
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hmm, What's Up..!!"
                required
              ></textarea>
            </div>
            <div className="send">
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                type="submit"
                onSubmit={sendEmail}
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
