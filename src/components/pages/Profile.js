import React, { useState, useEffect } from "react";
import BrowseTopics from "../BrowseTopics";
import ActivityLog from "../ActivityLog";
import StudyRooms from "../StudyRooms";
import { GrClose } from "react-icons/gr";
import CreateRoom from "../CreateRoom";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import axios from "axios";

const Profile = ({ user }) => {
  const [name, setName] = useState( user ? user.name : "");
  const [username, setUsername] = useState(user ? user.username : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [modal, setModal] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [usedRooms, setUsedRooms] = useState([]);

  const toggleModal = () => {
    setModal(!modal);
  };

  const changeRoom = (value) => {
    if (value === "All") {
      console.log(rooms);
      setUsedRooms(rooms);
    } else {
      setUsedRooms(rooms.filter((e) => e.topic === value));
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/get-rooms")
      .then((res) => {
        setRooms(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setUsedRooms(rooms);
  }, [rooms]);

  return (
    <>
      {modal && (
        <div className="fixed h-screen w-screen">
          <div
            className="fixed w-full h-full p-0 bg-black/[0.6]"
            onClick={toggleModal}
          ></div>
          <div className="fixed top-1/2 left-1/2 z-50 bg-[#fff] rounded-xl w-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="bg-[#FFCC85] p-5 rounded-t-xl text-xl">
              <h1 className="flex items-center justify-between font-bold">
                Create Room{" "}
                <button onClick={toggleModal}>
                  <GrClose />
                </button>
              </h1>
            </div>
            <CreateRoom />
          </div>
        </div>
      )}
      <div className="bg-[#F58F00] h-screen py-8 px-12">
          <div className="grid grid-cols-[1fr_4fr_1fr] gap-8 text-[#fff] ">
            {/*Bagian Kiri*/}
            <BrowseTopics changeRoom={changeRoom} rooms={rooms} />
            <div>
              <div className="grid grid-row justify-center gap-1">
                {/*Pura-pura aja dulu ini dpnya*/}
                <CgProfile size={200} color={"#44288F"} />
                <p className="text-center text-3xl font-bold"> name </p>
                <p className="text-center text-xl"> @user.name </p>
                <button class="h-10 text-[#5E39C4] bg-[#FFFFFF] hover:text-[#ffffff] hover:bg-[#5E39C4] rounded-3xl border-violet-500 mt-4">
                  <Link to="/editprofile"> Edit Profile </Link>
                </button> 
              </div>
              <p className="text-[#ffffff] text-xl font-bold mt-5" > ABOUT </p>
              <p className="text-justifiy mb-5"> ini bio </p>
              <StudyRooms onClick={toggleModal} rooms={usedRooms} />

              <button class="w-full h-10 bg-[#5E39C4] text-[#ffffff] hover:bg-[#9881DA] rounded-3xl mt-8">
                <Link to="/discussion"> Back to Discussion</Link>
              </button>
            </div>
            {/*Bagian Kanan*/}
            <ActivityLog />
          </div>
      </div>
    </>
  );
};

export default Profile;
