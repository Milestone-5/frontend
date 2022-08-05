import React, { useState } from "react";
import BrowseTopics from "../BrowseTopics";
import ActivityLog from "../ActivityLog";
import StudyRooms from "../StudyRooms";
import { TextField } from "@mui/material";
import { GrClose } from "react-icons/gr";

const Discussion = () => {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleSubmit = () => {
    console.log("submitted!");
  };

  return (
    <>
      {modal && (
        <div className="fixed h-screen w-screen">
          <div
            className="fixed w-full h-full p-0 bg-black/[0.6]"
            onClick={toggleModal}
          ></div>
          <div className="fixed top-1/2 left-1/2 z-50 bg-[#F58F00] rounded-xl w-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="bg-[#FFCC85] p-5 rounded-t-xl text-xl">
              <h1 className="flex items-center justify-between font-bold">
                Create Room{" "}
                <button onClick={toggleModal}>
                  <GrClose />
                </button>
              </h1>
            </div>
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
          </div>
        </div>
      )}
      <div className="bg-[#F58F00] h-screen py-8 px-12">
        <div className="grid grid-cols-[1fr_4fr_1fr] gap-8 text-[#fff] ">
          <BrowseTopics />
          <StudyRooms onClick={toggleModal} />
          <ActivityLog />
        </div>
      </div>
    </>
  );
};

export default Discussion;
