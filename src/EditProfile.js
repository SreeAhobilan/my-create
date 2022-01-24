import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function EditProfile({ users, setUsers }) {
  const { id } = useParams();
  const user = users[id];
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [email, setEmail] = useState(user.email);
  const [image, setImage] = useState(user.image);
  const navigate = useNavigate();

  const saveEditedValues = () => {
    const usersCopy = [...users];

    let filtered = usersCopy[id];
    filtered.name = name;
    filtered.username = username;
    filtered.age = age;
    filtered.gender = gender;
    filtered.email = email;
    filtered.image = image;

    console.log("after edit", usersCopy);
    setUsers(usersCopy);
    navigate(`/profile/${id}`);

  };
  const editName = (e) => {
    setName(e.target.value);
    
  };
  const editUserName = (event) => {
    setUsername(event.target.value);
    
  };
  const editAge = (e) => {
    setAge(e.target.value);

  };
  const editGender = (e) => {
    setGender(e.target.value);

  };
  const editEmail = (e) => {
    setEmail(e.target.value);

  };
  const editImage = (e) => {
    setImage(e.target.value);
  
  };
  return (
    <div className="textField-edit">
      <h2 className="textField-h2">Form to Edit the Profile Details</h2>
      <TextField
        label="Enter a Name"
        variant="filled"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={name}
        onChange={editName}
      />
      <br />
      <TextField
        label="Enter Username"
        variant="filled"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={username}
        onChange={editUserName}
      />
      <br />

      <TextField
        label="Enter Age"
        variant="filled"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={age}
        onChange={editAge}
      />
      <br />

      <TextField
        label="Enter Gender"
        variant="filled"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={gender}
        onChange={editGender}
      />
      <br />

      <TextField
        label="Enter email"
        variant="filled"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={email}
        onChange={editEmail}
      />
      <br />
      <TextField
        label="Enter Image URL"
        variant="filled"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={image}
        onChange={editImage}
      />
      <br />
      <br />

      <div className="edit-btn">
        <ArrowBackIcon
        onClick={() => navigate(`/profile/${id}`)}
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
            console.log("books");
          }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}