import axios from "axios";
import React, { useEffect, useState } from "react";
import Log from "./Log";

const ActivityLog = ({ username }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (username) {
      axios.get("http://localhost:4000/api/get-last-pesan").then((res) =>
        setMessages(
          res.data
            .filter((e) => e.sender === username)
            .slice(-3)
            .reverse()
        )
      );
    } else {
      axios
        .get("http://localhost:4000/api/get-last-pesan")
        .then((res) => setMessages(res.data.slice(-3).reverse()));
    }
  }, [username]);

  return (
    <div className="divide-y-2">
      <div className="shadow-md">
        <div className="bg-[#FFCC85] px-4 py-2 text-[#000] rounded-t-md ">
          <div className="flex font-bold">
            {username ? (
              <h1>USER RECENT ACTIVITIES</h1>
            ) : (
              <h1>RECENT ACTIVITIES</h1>
            )}
          </div>
        </div>
        <div className="bg-[#fff] p-2 rounded-b-md space-y-2">
          {messages.length > 0 ? (
            messages.map((log, id) => <Log log={log} key={id} />)
          ) : (
            <div className="text-[#838282] rounded-md p-2">
              <p className="italic">No activities</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
