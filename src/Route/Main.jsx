import React, { useState } from 'react'
import Right from "../Right/Right";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Message from "../Done/Message";
import Todo from "../Todo/Todo";
import Porfdd from '../Drop/Porfdd';

const Main = (props) => {
  const [message, setMessage] = useState(false);
  const [contact, setContact] = useState(false);
  const [task, setTask] = useState(false);

  const showmessage = () => {
    setMessage(!message);
  };

  const showcontact = () => {
    setContact(!contact);
  };

  const showTask = () => {
    setTask(!task);
  };

  return (
    <div className={JSON.parse(localStorage.getItem("theme")) ? "html dark-theme-variables" : "html"}>
      <div className="body">
        <div className={`container ${task || contact ? "opacity" : ""}`}>
          <div className="side">
            <Sidebar setside={props.setside} setlogin={props.setlogin} contact={showcontact} data={showTask}/>
          </div>
          <div className="ma">
            <Home setside={props.setside} setlogin={props.setlogin} />
          </div>
          <div className="ri">
            <Right settheme={props.settheme} showPro={props.showPro}/>
          </div>
        </div>
        {task && <Todo data={showTask} />}
        {contact && <Contact contact={showcontact} showmessage={showmessage}/>}
        {message && <Message showmessage={showmessage}/>}
        {props.pro && (
          <Porfdd setside={props.setside} setlogin={props.setlogin} showPro={props.showPro} />
        )}
      </div>
    </div>
  )
}

export default Main