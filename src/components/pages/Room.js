import React from "react";
import { CgProfile } from "react-icons/cg";

const Room = () => {
  return (
    <div className="bg-[#F58F00] h-screen py-4 px-12">
      <div className="flex gap-8 text-[#fff] font-bold">
        <div className=" flex-grow ">
          <div className="flex items-center justify-between mb-5">
            <div className="">
              <h1 className="text-xl">Review Day</h1>
            </div>

            <div className="flex">
              <div to="create-room">
                <button className="flex items-center gap-2 rounded-lg px-4 py-2 bg-[#5E39C4] hover:bg-[#9881DA]  ">
                  Join Room
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <p>
              HOST: <span className="text-[#44288F]">@ceavinrufus</span>
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <h1>PARTICIPANTS</h1>
        </div>
      </div>
    </div>
  );
};

export default Room;
