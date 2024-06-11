import React from 'react'
import "./Details.css";
import { RxCross2 } from "react-icons/rx";
import tick from "../Assets/Tick.png";

const  Details = (props) => {
  return (
    <div className="dtop">
      <div className="dtopin">
        <div className="cros">
          <RxCross2 className="RxCross" onClick={props.showdet}/>
        </div>
        <div className="dbot">
          <div className="emoj">
            <img src={tick} alt="" />
          </div>
          <div className="mes">
            <h2>Details Updated</h2>
          </div>
        </div>
      </div>
      <div className="dbottom">
        <div className="dborder-bottom"></div>
      </div>
    </div>
  )
}

export default Details
