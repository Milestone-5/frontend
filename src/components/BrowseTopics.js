import React from "react";
import { Link } from "react-router-dom";

const topics = [
  {
    id: 1,
    name: "SPARTA",
    total: 2,
  },
  {
    id: 2,
    name: "Sistem dan Arsitektur Komputer",
    total: 1,
  },
];

const BrowseTopics = () => {
  return (
    <div className="flex-grow divide-y-2">
      <div className="flex mb-2">
        <h1>BROWSE TOPICS</h1>
      </div>
      <div className="space-y-2">
        {topics.map((topic) => (
          <div className="flex flex-col bg-[#fff] hover:bg-[#FFCC85] px-4 py-2 shadow-md rounded-xl mt-4 transition duration-200">
            <Link to={"/?topic=" + topic.name} className="">
              <div className="flex items-center">
                <div className="w-full flex-wrap text-[#000]">{topic.name}</div>
                <div className="bg-[#F58F00] rounded-full w-8 h-8 flex items-center justify-center">
                  {topic.total}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseTopics;
