import React, { useState, useEffect } from "react";
import ActivityLog from "../ActivityLog";
import { CgProfile } from "react-icons/cg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import RoomsCard from "../RoomsCard";

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [rooms, setRooms] = useState([]);
  const [usedRooms, setUsedRooms] = useState([]);

  useEffect(() => {
    if (username) {
      console.log(username);
      axios
        .get(`http://localhost:4000/api/get-user/?username=${username}`)
        .then((res) => {
          console.log(res);
          setUser(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [username]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/get-rooms-by-host/?hostname=${username}`)
      .then((res) => {
        setRooms(res.data);
      })
      .catch((err) => console.log(err));
  }, [username]);

  useEffect(() => {
    setUsedRooms(rooms);
  }, [rooms]);

  return (
    <>
      <div className="bg-[#F58F00] h-screen py-8 px-12 flex flex-col items-center">
        <div className="grid grid-row justify-center gap-1">
          {/*Pura-pura aja dulu ini dpnya*/}
          <CgProfile size={200} color={"#000"} />
          <p className="text-center text-3xl font-bold">{user && user.name}</p>
          <p className="text-center text-xl">@{user && user.username}</p>
          <div className="flex flex-col justify-center space-y-2 my-4">
            <button class="px-4 py-2 bg-[#5E39C4] text-[#ffffff] hover:bg-[#9881DA] rounded-3xl">
              <Link to="/editprofile"> Edit Profile </Link>
            </button>
            <button class="px-4 py-2 border bg-white text-[#000] hover:bg-transparent rounded-3xl">
              <Link to="/discussion"> Back to Discussion</Link>
            </button>
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
          <ActivityLog username={username} />
        </div>
      </div>
    </>
  );
};

export default Profile;
