import React, { useEffect, useState, useRef } from "react";
import BubbleChat from "../BubbleChat";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const Room = () => {
  const location = useLocation();
  const [isJoined, setIsJoined] = useState(true);
  const [room, setRoom] = useState({});
  const [pesan, setPesan] = useState("");
  const [pesans, setPesans] = useState([]);
  const messagesEndRef = useRef(null);

  // const bubbles = messages.filter(function (el) {
  //   return el.roomId === parseInt(roomId);
  // });

  useEffect(() => {
    setRoom(location.state);
  }, []);

  useEffect(() => {
    if (room.users) {
      socket.emit("join-room", room._id);
      axios
        .get(`http://localhost:4000/api/get-pesan/?topic=${room._id}`)
        .then((res) => setPesans(res.data))
        .catch((err) => console.log(err));
    }
  }, [room]);

  socket.on("receive-message", (data) => {
    // console.log(data);
    if (!pesans.includes(data)) {
      setPesans([...pesans, data]);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pesan !== "") {
      socket.emit(
        "send-message",
        pesan,
        room._id,
        JSON.parse(localStorage.getItem("user")).username
      );
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [pesans]);

  return (
    <div className="bg-[#F58F00] h-screen py-4 px-12">
      {/* Room Header */}
      <div className="flex items-center justify-between mb-5 text-[#fff] ">
        <div className="">
          <h1 className="text-xl font-bold">{room.name && room.name}</h1>
          <h1 className="text-xl">{room.description && room.description}</h1>
        </div>

        <div className="flex">
          <button
            disabled={isJoined}
            className="flex items-center gap-2 rounded-lg px-4 py-2 bg-[#5E39C4] hover:bg-[#9881DA] disabled:bg-[#9881DA] disabled:cursor-not-allowed"
          >
            Join Room
          </button>
        </div>
      </div>

      {/* Host */}
      <div className="flex items-center text-[#fff] mb-2">
        <p>
          HOST:{" "}
          {room.users && (
            <Link to={"/profile/" + room.users[0]} className="text-[#44288F]">
              @{room.users[0]}
            </Link>
          )}
        </p>
      </div>

      <div className="grid grid-cols-[3fr_1fr] gap-8 text-[#fff]">
        {/* Chat */}
        <div className="bg-[#fff] rounded-xl text-[#000] h-[700px]">
          <div className="p-8 flex flex-col justify-between h-[700px]">
            <div className="space-y-4 overflow-y-auto ">
              {pesans.map((bubble) => (
                <BubbleChat bubble={bubble} />
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form action="" onSubmit={handleSubmit}>
              <input
                className={
                  "bg-[#FFCC85] w-full px-4 py-2 mt-5 rounded-md placeholder-[#000] disabled:cursor-not-allowed"
                }
                type="text"
                disabled={!isJoined}
                placeholder={
                  isJoined
                    ? "Write your message here"
                    : "You must join the room first"
                }
                onChange={(e) => setPesan(e.target.value)}
              />
            </form>
          </div>
        </div>

        {/* Participants */}
        <div className="divide-y-2 h-3/5">
          <div className="bg-[#FFCC85] px-4 py-2 text-[#000] rounded-t-md">
            <div className="flex">
              <h1>PARTICIPANTS</h1>
            </div>
          </div>
          <div className="bg-[#fff] p-2 rounded-b-md space-y-2">
            {room.users &&
              room.users.map((username) => (
                // <Link to={"/profile/" + username} className="text-[#5E39C4] ">
                <div className="flex items-center gap-2 px-2 py-2">
                  <CgProfile size={30} color={"#44288F"} />
                  <Link
                    to={"/profile/" + username}
                    style={{ color: "#44288F" }}
                  >
                    @{username}
                  </Link>
                </div>
                // </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
