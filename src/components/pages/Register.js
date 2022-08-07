import React, { useState } from "react";
import { TextField } from "@mui/material";
import { users } from "../../db";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function addAccount(arr, account) {
    const { length } = arr;
    const id = length + 1;
    const found = arr.some((e) => e.username === username);
    if (!found) arr.push({ id, ...account, bio: "" });
    return arr;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    addAccount(users, { name: name, username: username, password: password });
    console.log(users);

    setName("");
    setUsername("");
    setPassword("");
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

export default Register;
