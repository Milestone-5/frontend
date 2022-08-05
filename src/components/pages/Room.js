import React from "react";
import BubbleChat from "../BubbleChat";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const bubbles = [
  {
    username: "ceavinrufus",
    message: "Halo",
  },
  {
    username: "johndoe",
    message: "Halo jugaa",
  },
];

const participants = [
  {
    id: 1,
    username: "ceavinrufus",
  },
  {
    id: 2,
    username: "johndoe",
  },
];

const Room = () => {
  return (
    <div className="bg-[#F58F00] h-screen py-4 px-12">
      {/* Room Header */}
      <div className="flex items-center justify-between mb-5 text-[#fff] ">
        <div className="">
          <h1 className="text-xl font-bold">Review Day</h1>
        </div>

        <div className="flex">
          <div to="create-room">
            <button className="flex items-center gap-2 rounded-lg px-4 py-2 bg-[#5E39C4] hover:bg-[#9881DA]  ">
              Join Room
            </button>
          </div>
        </div>
      </div>
      {/* Host */}
      <div className="flex items-center text-[#fff] mb-2">
        <p>
          HOST: <span className="text-[#44288F]">@ceavinrufus</span>
        </p>
      </div>

      <div className="grid grid-cols-[3fr_1fr] gap-8 text-[#fff] h-3/4">
        {/* Room Info */}
        <div className="">
          {/* Chat */}
          <div className="bg-[#fff] rounded-xl text-[#000] h-full">
            <div className="p-8 h-full flex flex-col justify-between">
              <div className="space-y-4">
                {bubbles.map((bubble) => (
                  <BubbleChat bubble={bubble} />
                ))}
              </div>
              <form action="">
                <input
                  className="bg-[#FFCC85] w-full px-4 py-2 rounded-md placeholder-[#000]"
                  type="text"
                  placeholder="Write your message here"
                />
              </form>
            </div>
          </div>
        </div>

        {/* Participants */}
        <div className="divide-y-2 ">
          <div className="bg-[#FFCC85] px-4 py-2 text-[#000] rounded-t-md">
            <div className="flex">
              <h1>PARTICIPANTS</h1>
            </div>
          </div>
          <div className="bg-[#fff] p-2 rounded-b-md space-y-2">
            {participants.map((log) => (
              <Link to="/profile" className="text-[12px] text-[#5E39C4] ">
                <div className="flex items-center gap-2 px-2 py-2">
                  <CgProfile size={30} color={"#44288F"} />
                  <div className="">@{log.username}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
