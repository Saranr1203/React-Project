import React from "react";
import "./Message.css";
import { RxCross2 } from "react-icons/rx";
import tick from "../Assets/Tick.png";

const Message = (props) => {
  return (
    <div className="mtop">
      <div className="mtopin">
        <div className="cross">
          <RxCross2 className="RxCross2" onClick={props.showmessage}/>
        </div>
        <div className="mbot">
          <div className="emoji">
            <img src={tick} alt="" />
          </div>
          <div className="mess">
            <h2>Message Sent</h2>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="border-bottom"></div>
      </div>
    </div>
  );
};

export default Message;
