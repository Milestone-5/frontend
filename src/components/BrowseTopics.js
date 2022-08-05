import React from "react";
import { Link } from "react-router-dom";

const topics = [
  {
    id: 1,
    name: "SPARTA",
    total: 2,
  },
];

const BrowseTopics = () => {
  return (
    <div className="flex-grow">
      <div className="flex mb-16">
        <h1>BROWSE TOPICS</h1>
      </div>
      <div className="space-y-2">
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="w-full flex-wrap">
              <Link to={"/discussion"} className="">
                All
              </Link>
            </div>
            <div className="bg-[#FFCC85] rounded-full w-8 h-8 flex items-center justify-center">
              2
            </div>
          </div>
        </div>
        {topics.map((topic) => (
          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="w-full flex-wrap">
                <Link to={"/?topic=" + topic.name} className="">
                  {topic.name}
                </Link>
              </div>
              <div className="bg-[#FFCC85] rounded-full w-8 h-8 flex items-center justify-center">
                {topic.total}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseTopics;
