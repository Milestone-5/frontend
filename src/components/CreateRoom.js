import React from "react";
import { TextField } from "@mui/material";

const CreateRoom = () => {
  const handleSubmit = () => {
    console.log("submitted!");
  };

  return (
    <div className="p-5">
      <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
        <TextField label="Room Topic" required />
        <TextField label="Room Name" required />
        <TextField label="Room Description" multiline rows={4} />
        <input
          type="submit"
          value="Create Room"
          className="rounded-lg px-4 py-2 text-[#fff] bg-[#5E39C4] hover:bg-[#9881DA] transition duration-200 shadow-md cursor-pointer"
        />
      </form>
    </div>
  );
};

export default CreateRoom;
