import React, { useEffect, useRef, useState } from "react";
import "./Todo.css";
import "../App.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { RxCross2 } from "react-icons/rx";
import Button from "@mui/material/Button";
import { FiUpload } from "react-icons/fi";

const Todo = (props) => {

  const UID = JSON.parse(localStorage.getItem("UID"))

  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("");

  const inputRef = useRef();
  useEffect(()=>{
    inputRef.current.focus();
  },[])


  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const student = { name, deadline, priority, completed: false };
      await addDoc(collection(db, UID), student);
      setName("");
      setDeadline("");
      setPriority("");
      alert("Task Added");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="topp">
      <div className="bg">
        <div className="contain">
          <div className="close">
            <RxCross2 onClick={props.data} className="cl" />
          </div>
          <div className="head">
            <h3 className="heading">Let's Get Started👏</h3>
          </div>
          <div className="forms">
            <form className="form" onSubmit={onSubmit}>
              <div className="inp">
                <div className="taskname">
                  <label>Task Name : </label>
                  <br />
                  <input
                    type="text"
                    placeholder="Add Task Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    ref={inputRef}
                  />
                </div>
                <div className="deadline">
                  <label>Dead Line : </label>
                  <br />
                  <input
                    type="date"
                    placeholder="Add Dead Line"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    required
                  />
                </div>
                <div className="priority">
                  <label>Priority : </label>
                  <br />
                  <input
                    type="text"
                    list="pri"
                    placeholder="Add Priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    required
                  />
                  <datalist id="pri">
                    <option value="Low" />
                    <option value="Medium" />
                    <option value="High" />
                  </datalist>
                </div>
              </div>
              <div className="submit">
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<FiUpload />}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
