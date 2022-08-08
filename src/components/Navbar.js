import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [user, setUser] = useState(null)
  const navigate = useNavigate();

  const logout = () => {
    setUser(null)
    navigate("/");
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")))
  }, [])

  return (
    <div className="flex h-[80px] items-center sticky top-0 z-50 py-4 px-12 shadow-xl bg-[#fff]">
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center text-[#FFAA33] text-2xl">
          Study<span className="font-bold">Mate</span>
        </div>
      </Link>

      {/* Profile */}
      <div className="flex flex-grow justify-end items-center gap-2">
        <div className="">
          <CgProfile size={30} color={"#44288F"} />
        </div>
        {user ? (
          <>
            <div className="">
              <h3 className="">{user.name}</h3>
              <p className="text-[12px] text-[#44288F]">@{user.username}</p>
            </div>
            <button onClick={() => setMenu(!menu)}>
              <BsChevronDown />
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
        {/* Menu */}
        {menu && user && (
          <div className="absolute rounded-lg -bottom-[60px] w-[160px] bg-[#44288F] text-sm transition duration-200 shadow-md">
            <div className="flex flex-col text-[#fff] divide-y-[1px]">
              <button className="flex items-center justify-center gap-1  px-4 py-2 rounded-t-lg hover:bg-[#9881DA] ">
                <IoSettingsOutline />
                Settings
              </button>
              <button
                className="flex items-center justify-center gap-1 px-4 py-2 rounded-b-lg hover:bg-[#9881DA] "
                onClick={logout}
              >
                <FiLogOut />
                Log Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
