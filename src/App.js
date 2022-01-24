import * as React from "react";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";
import { Home } from "./Home";
import { UserDetails } from "./UserDetails";
import { AddUser } from "./AddUser";
import { UserProfiles } from "./UserProfile";
import { EditUser } from "./EditUser";
import { EditProfile } from "./EditProfile";


export default function App() {

  const usersList = [
    {
      id: 1,
      name: "John",
      username: "John_Abraham",
      age: 23,
      gender: "Male",
      email: "johnabraham@gmail.com",
      image:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      name: "Sopia",
      username: "Sopia_vargese",
      age: 29,
      gender: "Female",
      email: "sopiavargese@hotmail.com",
      image:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      id: 3,
      name: "Rebbeca",
      username: "Rebbeca_carter",
      age: 25,
      gender: "Female",
      email: "rebbecacarter@gmail.com",
      image:"https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 4,
      name: "Syed",
      username: "Syed_suhail",
      age: 19,
      gender: "Male",
      email: "syedsuhail@gmail.com",
      image:"https://images.pexels.com/photos/2294492/pexels-photo-2294492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      id: 5,
      name: "Christoper",
      username: "Christoper_Nolan",
      age: 43,
      gender: "Male",
      email: "christoper@gmail.com",
      image:"https://images.pexels.com/photos/6470946/pexels-photo-6470946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      id: 6,
      name: "Shawn",
      username: "Shawn_mendes",
      age: 50,
      gender: "Male",
      email: "shawn@gmail.com",
      image:"https://images.pexels.com/photos/4183516/pexels-photo-4183516.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];
  const [users, setUsers] = useState(usersList);
  
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="header">
        <AppBar class="animate__animated animate__backInDown animate__delay-2s" position="static" sx={{color:"black",backgroundColor:"whitesmoke"}}>
          <Toolbar>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/users");
              }}
            >
              Users
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/create-user");
              }}
            >
              Add Users
            </Button>
            
          </Toolbar>
        </AppBar>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route
          path="/users"
          element={<UserDetails users={users} setUsers={setUsers} />}
        />
        <Route
          path="/edit-user/:id"
          element={<EditUser users={users} setUsers={setUsers} />}
        />
        <Route
          path="/create-user"
          element={<AddUser users={users} setUsers={setUsers} />}
        />
        <Route 
        path="/profile/:id" 
        element={<UserProfiles users={users} />} />
        <Route
          path="/edit-profile/:id"
          element={<EditProfile users={users} setUsers={setUsers} />}
        />
      </Routes>
    </div>
  );
}