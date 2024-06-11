import React, { useEffect, useState } from "react";
import "./Task.css";
import Edit from "../Edit/Edit";
import { RxCross2 } from "react-icons/rx";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Task = (props) => {
  const [tasks, setTasks] = useState([]);
  const UID = JSON.parse(localStorage.getItem("UID"))
  const Limits = collection(db, UID);
  const [update, setUpdate] = useState(false);

  const [name, setName] = useState("");
  const [dead, setDead] = useState("");
  const [pri, setPri] = useState("");
  const [id, setId] = useState("");

  const gettasks = async () => {
    try {
      const q = query(Limits, orderBy("name"));
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

  const ticks = async (id, comp) => {
    await updateDoc(doc(db, UID, id), {
      completed: comp,
    });
    gettasks();
  };

  const del = async (id) => {
    await deleteDoc(doc(db, UID, id));
    gettasks();
  };

  const showUpdate = () => {
    setUpdate(!update);
  };

  const setname = (naam) => {
    setName(naam);
  };
  const setdead = (dea) => {
    setDead(dea);
  };
  const setpri = (prii) => {
    setPri(prii);
  };
  const setid = (idd) => {
    setId(idd);
  };

  const editTask = async () => {
    await updateDoc(doc(db, UID, id), {
      name: name,
      deadline: dead,
      priority: pri,
    });
    gettasks();
  };

  const deleteTask = async () => {
    await deleteDoc(doc(db, UID, id));
    gettasks();
  };

  return (
    <div>
      <div className={`taskmain ${update || props.det ? "opa" : ""}`}>
        <div className="taskhead">
          <h3>All Tasks</h3>
          <RxCross2 className="RxCros" onClick={props.showall}/>
        </div>
        <div className="taskin">
          <div className="ttable">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Task Name</th>
                  <th>Deadline</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((student) => (
                  <tr
                    key={student.id}
                    className={student.completed ? "clicked" : ""}
                  >
                    <td>
                      {student.completed && (
                        <Checkbox
                          size="small"
                          defaultChecked
                          onClick={() => ticks(student.id, !student.completed)}
                        />
                      )}
                      {!student.completed && (
                        <Checkbox
                          size="small"
                          onClick={() => ticks(student.id, !student.completed)}
                        />
                      )}
                    </td>
                    <td>{student.name}</td>
                    <td>{student.deadline}</td>
                    <td>{student.priority}</td>
                    <td>{student.completed ? "Completed" : "On Progress"}</td>
                    <td>
                      <IconButton
                        aria-label="delete"
                        onClick={() => {
                          showUpdate();
                          setname(student.name);
                          setdead(student.deadline);
                          setpri(student.priority);
                          setid(student.id);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                    </td>
                    <td>
                      <IconButton
                        aria-label="delete"
                        onClick={() => del(student.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {update && (
        <Edit
          showupdate={showUpdate}
          Name={name}
          Dead={dead}
          Pri={pri}
          setn={setname}
          setd={setdead}
          setp={setpri}
          edit={editTask}
          showd={props.showdet}
          dele={deleteTask}
        />
      )}
    </div>
  );
};

export default Task;
