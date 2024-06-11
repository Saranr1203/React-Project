import { useState } from "react";
import "../App.css";
import Main from "../Main/Main";
import Right from "../Right/Right";
import Sidebar from "../Sidebar/Sidebar";
import Todo from "../Todo/Todo";
import Contact from "../Contact/Contact";
import Task from "../Task/Task";
import Details from "../Done/Details";
import Message from "../Done/Message";
import Porfdd from "../Drop/Porfdd";

const Dashboard = (props) => {
  const [task, setTask] = useState(false);
  const [all, setAll] = useState(false);
  const [detail, setDetail] = useState(false);
  const [message, setMessage] = useState(false);
  const [contact, setContact] = useState(false);

  const showTask = () => {
    setTask(!task);
  };

  const setall = () => {
    setAll(!all);
  };

  const showDetail = () => {
    setDetail(!detail);
  };

  const showmessage = () => {
    setMessage(!message);
  };

  const showcontact = () => {
    setContact(!contact);
  };

  return (
    <div className={JSON.parse(localStorage.getItem("theme")) ? "html dark-theme-variables" : "html"}>
      <div className="body">
        <div className={`container ${task || all || contact ? "opacity" : ""}`}>
          <div className="side">
            <Sidebar
              data={showTask}
              setside={props.setside}
              setlogin={props.setlogin}
              contact={showcontact}
            />
          </div>
          <div className="ma">
            <Main showall={setall} />
          </div>
          <div className="ri">
            <Right
              settheme={props.settheme}
              showPro={props.showPro}
            />
          </div>
        </div>
        {task && <Todo data={showTask} />}
        {all && <Task showdet={showDetail} det={detail} showall={setall} />}
        {contact && <Contact contact={showcontact} showmessage={showmessage} />}
        {message && <Message showmessage={showmessage} />}
        {detail && <Details showdet={showDetail} />}
        {props.pro && (
          <Porfdd setside={props.setside} setlogin={props.setlogin} showPro={props.showPro} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
