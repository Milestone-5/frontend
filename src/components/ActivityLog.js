import React from "react";
import Log from "./Log";

const logs = [
  {
    time: "13.37",
    username: "ceavinrufus",
    room: "Mentoring",
    message: "Besok kita mentoring di mana ya?",
  },
  {
    time: "14.00",
    username: "ceavinrufus",
    room: "Review Day 6",
    message: "Halo",
  },
  {
    time: "14.00",
    username: "johndoe",
    room: "Review Day 6",
    message: "Halo jugaa",
  },
];

const ActivityLog = () => {
  return (
    <div className="divide-y-2">
      <div className="shadow-md">
        <div className="bg-[#FFCC85] px-4 py-2 text-[#000] rounded-t-md ">
          <div className="flex">
            <h1>RECENT ACTIVITIES</h1>
          </div>
        </div>
        <div className="bg-[#fff] p-2 rounded-b-md space-y-2">
          {logs.reverse().map((log) => (
            <Log log={log} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
