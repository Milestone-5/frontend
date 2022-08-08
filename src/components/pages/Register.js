import React, { useState } from "react";
import { TextField } from "@mui/material";
import { users } from "../../db";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/api/register',{
        name,
        username,
        password
    }).then(res => {
        localStorage.setItem("user", JSON.stringify(res.data))
        navigate('/')
    }).catch(err => console.log(err))
  };

  return (
    <div className="flex justify-center ">
      <div className="w-1/2 mt-10 bg-[#F58F00] rounded-xl">
        <h1 className="p-5 text-center font-bold rounded-t-xl text-3xl bg-[#FFCC85]">
          Register
        </h1>
        <form className="flex flex-col p-5 space-y-5 " onSubmit={handleSubmit}>
          <TextField
            label="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <TextField
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <TextField
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            value={password}
            required
          />
          <input
            type="submit"
            value="Register"
            className="rounded-lg px-4 py-2 text-[#fff] bg-[#5E39C4] hover:bg-[#9881DA] transition duration-200 shadow-md cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Register;
=======
export default Register;
>>>>>>> 5e97f71c7fedb0e9d6c39f0dcd9fbbaf122ef55f
