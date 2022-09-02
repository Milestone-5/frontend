import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import RoomsCard from "./RoomsCard";

const StudyRooms = ({ onClick, rooms }) => {
  return (
    <>
      <div className="flex-grow divide-y-2 order-3 md:order-2 m-2">
        <div className="flex items-center justify-between mb-2">
          <div className="">
            <h1 className="font-bold">STUDY ROOMS</h1>
            <p>{rooms.length} rooms available</p>
          </div>
          <div className="flex">
            <button
              className="flex items-center rounded-lg px-4 py-2 bg-[#5E39C4] hover:bg-[#9881DA] transition duration-200 shadow-md"
              onClick={onClick}
            >
              <div className="flex items-center gap-2">
                <AiOutlinePlus /> Create Room
              </div>
            </button>
          </div>
        </div>
        <div className="">
          {rooms.map((room, id) => (
            <RoomsCard room={room} key={id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default StudyRooms;
