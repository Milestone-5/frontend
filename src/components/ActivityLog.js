import React from "react";
import Log from "./Log";
import { messages } from "../db";

const ActivityLog = () => {
  return (
    <div className="divide-y-2">
      <div className="shadow-md">
        <div className="bg-[#FFCC85] px-4 py-2 text-[#000] rounded-t-md ">
          <div className="flex font-bold">
            <h1>RECENT ACTIVITIES</h1>
          </div>
        </div>
        <div className="bg-[#fff] p-2 rounded-b-md space-y-2">
          {messages.reverse().map((log) => (
            <Log log={log} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
