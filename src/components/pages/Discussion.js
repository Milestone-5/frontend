import React from "react";
import BrowseTopics from "../BrowseTopics";
import ActivityLog from "../ActivityLog";
import StudyRooms from "../StudyRooms";

const Discussion = () => {
  return (
    <div className="bg-[#F58F00] h-screen py-8 px-12">
      <div className="grid grid-cols-[1fr_4fr_1fr] gap-8 text-[#fff] font-bold">
        <BrowseTopics />
        <StudyRooms />
        <ActivityLog />
      </div>
    </div>
  );
};

export default Discussion;
