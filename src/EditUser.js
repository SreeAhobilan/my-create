import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function EditUser({ users, setUsers }) {
  const { id } = useParams();
  const user = users[id];
  console.log(users);
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const navigate = useNavigate();

  const saveEditedValues = () => {
    const usersCopy = [...users];

    let filtered = usersCopy[id];
    filtered.name = name;
    filtered.username = username;

    console.log("after edit", usersCopy);
    setUsers(usersCopy);
    navigate("/users");
  };
  const editName = (e) => {
    setName(e.target.value);
  };
  const editUserName = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="textField-edit">
      <h2 className="textField-h2">Edit User Details</h2>
      <TextField
        label="Enter Your Name"
        variant="filled"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={name}
        onChange={editName}
      />
      <br />
      <TextField
        label="Enter Your Username"
        variant="filled"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={username}
        onChange={editUserName}
      />
      <br />

      <br />
      <br />

      <div className="edit-btn">
        <ArrowBackIcon
          onClick={() => navigate("/users")}
        >
        </ArrowBackIcon>
        <Button
          variant="outlined"
          style={{
            backgroundColor: "green",
            color: "#FFFFFF",
            marginLeft: "20px",
          }}
          onClick={(event) => {
            event.preventDefault();
            saveEditedValues();
          }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}