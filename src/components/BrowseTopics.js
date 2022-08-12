import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import RoomsCard from "./RoomsCard";

const BrowseTopics = ({ changeRoom, rooms }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/get-topics")
      .then((res) => setTopics(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex-grow divide-y-2">
      <div className="flex mb-2 font-bold">
        <h1>BROWSE TOPICS</h1>
      </div>
      <div className="space-y-2">
        <div
          className="flex flex-col bg-[#fff] hover:bg-[#FFCC85] px-4 py-2 shadow-md rounded-xl mt-4 transition duration-200 cursor-pointer"
          onClick={(e) => changeRoom("All")}
        >
          <div className="flex items-center">
            <div className="w-full flex-wrap text-[#000]">All</div>
            <div className="bg-[#F58F00] rounded-full w-8 h-8 flex items-center justify-center">
              {rooms.length}
            </div>
          </div>
        </div>
        {topics.map((topic) => (
          <div
            className="flex flex-col bg-[#fff] hover:bg-[#FFCC85] px-4 py-2 shadow-md rounded-xl mt-4 transition duration-200 cursor-pointer"
            onClick={(e) => changeRoom(topic.name)}
          >
            <div className="flex items-center">
              <div className="w-full flex-wrap text-[#000]">{topic.name}</div>
              <div className="bg-[#F58F00] rounded-full w-8 h-8 flex items-center justify-center">
                {topic.count}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseTopics;
