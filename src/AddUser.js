import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export function AddUser({ users, setUsers }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  return (
    <div className="textField-add">
      <h2 className="textField-h2">Add Your Details Below</h2>
      <TextField
        label="Enter Your Name"
        variant="filled"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <TextField
        label="Enter Your Username"
        variant="filled"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <TextField
        label="Enter Your Age"
        variant="filled"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <br />
      <TextField
        label="Enter Your Gender"
        variant="filled"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={gender}
        onChange={(event) => setGender(event.target.value)}
      />
      <br />
      <TextField
        label="Enter Your email"
        variant="filled"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <TextField
        label="Enter Your Image URL"
        variant="filled"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      <br />
      <br />

      <div className="btn">
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
          onClick={() => {
            const newUser = {
              id: users.length + 1,
              name,
              username,
              age,
              gender,
              email,
              image,
            };
            setUsers([...users, newUser]);
            setName("");
            navigate("/users");
          }}
        >
          Add User
        </Button>
      </div>
    </div>
  );
}