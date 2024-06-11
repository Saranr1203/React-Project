import React from "react";
import "./Edit.css";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

const Edit = (props) => {
  return (
    <div className="hehe">
      <div className="hehein">
        <div className="t">
          <table>
            <thead className="thead">
              <tr>
                <th>Task Name</th>
                <th>Deadline</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    value={props.Name}
                    onChange={(e) => {
                      props.setn(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={props.Dead}
                    onChange={(e) => {
                      props.setd(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    list="pri"
                    value={props.Pri}
                    onChange={(e) => {
                      props.setp(e.target.value);
                    }}
                  />
                  <datalist id="pri">
                    <option value="Low" />
                    <option value="Medium" />
                    <option value="High" />
                  </datalist>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bott">
          <div className="de">
            <IconButton aria-label="delete" onClick={() => {
                props.dele();
                props.showupdate();
                props.showd();
              }}>
              <DeleteIcon />
            </IconButton>
          </div>
          <div className="la">
            <Button
              variant="outlined"
              className="can"
              onClick={props.showupdate}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                props.edit();
                props.showupdate();
                props.showd();
              }}
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
