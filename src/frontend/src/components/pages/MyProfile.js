import React, { useState, useEffect } from "react";
import ActivityLog from "../ActivityLog";
import { CgProfile } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import RoomsCard from "../RoomsCard";

const MyProfile = () => {
  const location = useLocation();
  const [user, setUser] = useState({});
  const [rooms, setRooms] = useState([]);
  const [usedRooms, setUsedRooms] = useState([]);

  useEffect(() => {
    if (location.state) {
      console.log(location.state);
      axios
        .get(
          `http://localhost:4000/api/get-user/?username=${location.state.username}`
        )
        .then((res) => {
          console.log(res);
          setUser(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/api/get-rooms-by-host/?hostname=${location.state.username}`
      )
      .then((res) => {
        setRooms(res.data);
      })
      .catch((err) => console.log(err));
  }, [user]);

  useEffect(() => {
    setUsedRooms(rooms);
  }, [rooms]);

  return (
    <>
      <div className="bg-[#F58F00] min-h-screen py-8 px-12 flex flex-col items-center">
        <div className="grid grid-row justify-center gap-1">
          {/*Pura-pura aja dulu ini dpnya*/}
          <CgProfile size={200} color={"#000"} />
          <p className="text-center text-3xl font-bold">{user && user.name}</p>
          <p className="text-center text-xl">@{user && user.username}</p>
          <div className="flex flex-col justify-center space-y-2 my-4">
            <Link
              to="/editprofile"
              className="px-4 py-2 bg-[#5E39C4] text-center text-[#ffffff] hover:bg-[#9881DA] rounded-3xl"
            >
              <button>Edit Profile</button>
            </Link>
            <Link
              to="/discussion"
              className="px-4 py-2 border bg-white text-center text-[#000] hover:bg-transparent rounded-3xl"
            >
              <button>Back to Discussion</button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-left w-1/2">
          <p className="text-[#ffffff] text-xl font-bold mt-5"> ABOUT </p>
          {/* <div className="rounded-xl mb-5 bg-white px-4 py-2 flex items-center"> */}
          {user &&
            (user.bio === "" ? (
              <p className="italic mb-5 text-[#fff]">No bio</p>
            ) : (
              <p className="mb-5 text-[#ffffff]">{user.bio}</p>
            ))}
          {/* </div> */}
        </div>
        <div className="grid grid-cols-[4fr_1fr] gap-8 text-[#fff] w-1/2">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="">
                <h1 className="font-bold">
                  {rooms.length} {rooms.length > 1 ? "ROOMS" : "ROOM"} HOSTED BY{" "}
                  {user && user.username}
                </h1>
              </div>
            </div>
            <div className="">
              {usedRooms.map((room) => (
                <RoomsCard room={room} />
              ))}
            </div>
          </div>
          {/*Bagian Kanan*/}
          <ActivityLog username={location.state.username} />
        </div>
      </div>
    </>
  );
};

export default MyProfile;
