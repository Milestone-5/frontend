import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import RoomsCard from "./RoomsCard";
import { Link } from "react-router-dom";

const rooms = [
  {
    id: 1,
    name: "Review Day 6",
    topic: "SPARTA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quis beatae illum aut provident similique soluta ducimus suscipit fugit nulla ipsa esse deserunt voluptas, assumenda veritatis, ea vel, architecto expedita.",
    participants: 2,
  },
  {
    id: 2,
    name: "Mentoring",
    topic: "SPARTA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quis beatae illum aut provident similique soluta ducimus suscipit fugit nulla ipsa esse deserunt voluptas, assumenda veritatis, ea vel, architecto expedita.",
    participants: 1,
  },
  {
    id: 3,
    name: "Introduction",
    topic: "Sistem dan Arsitektur Komputer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quis beatae illum aut provident similique soluta ducimus suscipit fugit nulla ipsa esse deserunt voluptas, assumenda veritatis, ea vel, architecto expedita.",
    participants: 0,
  },
];

const StudyRooms = () => {
  return (
    <div className="divide-y-2">
      <div className="flex items-center justify-between mb-2">
        <div className="">
          <h1>STUDY ROOMS</h1>
          <p>3 rooms available</p>
        </div>
        <div className="flex">
          <Link to="create-room">
            <button className="flex items-center rounded-lg px-4 py-2 bg-[#5E39C4] hover:bg-[#9881DA] transition duration-200 shadow-md">
              <div className="flex items-center gap-2">
                <AiOutlinePlus /> Create Room
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div className="">
        {rooms.map((room) => (
          <RoomsCard room={room} />
        ))}
      </div>
    </div>
  );
};

export default StudyRooms;
