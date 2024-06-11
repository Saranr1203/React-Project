import React, { useEffect, useState } from "react";
import "./Main.css";
import { MdTask } from "react-icons/md";
import Button from "@mui/material/Button";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import Checkbox from "@mui/material/Checkbox";

const Main = (props) => {
  const [tasks, setTasks] = useState([]);
  const UID = JSON.parse(localStorage.getItem("UID"))
  const Limits = collection(db, UID);


  const gettasks = async () => {
    try {
      const q = query(Limits, orderBy("name"), limit(3));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let todosArr = [];
        querySnapshot.forEach((doc) => {
          todosArr.push({ ...doc.data(), id: doc.id });
        });
        setTasks(todosArr);
      });
      return () => unsubscribe();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    gettasks();
  }, []);

  const tick = async (id, comp) => {
    await updateDoc(doc(db, UID, id), {
      completed: comp,
    });
    gettasks();
  };

  return (
    <main>
      <h1>Dashboard</h1>

      <div className="insights">
        {tasks.map((student) => (
          <div key={student.id}>
            <span className="col">
              <MdTask />
            </span>
            <div className="middle">
              <div className="left">
                <h1>{student.name}</h1>
                <h3>{student.deadline}</h3>
              </div>
              <div className="progress"></div>
              {student.completed && <Checkbox size="small" defaultChecked onClick={() => tick(student.id, !student.completed)}/>}
              {!student.completed && <Checkbox size="small" onClick={() => tick(student.id, !student.completed)}/>}
            </div>
            <small className="text-muted">
              {student.completed ? "Completed" : "On Progress"}
            </small>
          </div>
        ))}
      </div>

      <div className="recent-orders">
        <div>
          <h2>Recent Tasks</h2>
          <table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Deadline</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.deadline}</td>
                  <td>{student.priority}</td>
                  <td>{student.completed ? "Completed" : "On Progress"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="show">
          <Button variant="contained" onClick={props.showall}>
            Show All
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Main;
