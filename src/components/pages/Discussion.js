import React from "react";
import { Link } from "react-router-dom";
import BrowseTopics from "../BrowseTopics";
import StudyRooms from "../StudyRooms";

const Discussion = () => {
  return (
    <div className="bg-[#F58F00] h-screen py-4 px-12">
      <div className="grid grid-cols-[1fr_4fr_1fr] gap-8 text-[#fff] font-bold">
        <BrowseTopics />
        <StudyRooms />
        <div className="flex justify-end">
          <h1>RECENT ACTIVITIES</h1>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
