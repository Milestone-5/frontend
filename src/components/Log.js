import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Log = ({ log }) => {
  return (
    <div className="border border-[#FFCC85] text-[#000] rounded-md px-4 py-2">
      <div className="flex items-center gap-2">
        <div className="">
          <CgProfile size={30} color={"#44288F"} />
        </div>
        <div className="">
          <Link to="/profile" className="text-[12px] text-[#5E39C4]">
            @{log.username}
          </Link>
          <p className="text-[12px] text-[#000]">at {log.time}</p>
        </div>
      </div>
      <p className="text-sm my-1">
        in{" "}
        <Link className="text-[#5E39C4]" to="/">
          {log.room}
        </Link>
      </p>
      <div className="bg-[#F58F00] text-[#fff] px-2 py-1 rounded-sm text-sm mb-1">
        {log.message}
      </div>
    </div>
  );
};

export default Log;
