import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import RoomsCard from "./RoomsCard";
import { Link } from "react-router-dom";

const rooms = [
  {
    id: 1,
    name: "Review Day",
    topic: "SPARTA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quis beatae illum aut provident similique soluta ducimus suscipit fugit nulla ipsa esse deserunt voluptas, assumenda veritatis, ea vel, architecto expedita.",
  },
  {
    id: 2,
    name: "Mentoring",
    topic: "SPARTA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quis beatae illum aut provident similique soluta ducimus suscipit fugit nulla ipsa esse deserunt voluptas, assumenda veritatis, ea vel, architecto expedita.",
  },
];

const StudyRooms = () => {
  return (
    <div className="flex-grow">
      <div className="flex items-center justify-between mb-10">
        <div className="">
          <h1>STUDY ROOMS</h1>
          <p>1 rooms available</p>
        </div>
        <div className="flex">
          <Link to="create-room">
            <button className="flex items-center gap-2 rounded-lg px-4 py-2 bg-[#5E39C4] hover:bg-[#9881DA] transition duration-200 ">
              <AiOutlinePlus /> Create Room
            </button>
          </Link>
        </div>
      </div>
      {rooms.map((room) => (
        <RoomsCard room={room} />
      ))}
    </div>
  );
};

export default StudyRooms;
