import React, { useEffect, useState } from "react";
import BubbleChat from "../BubbleChat";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3001')

const Room = () => {
  const location = useLocation()
  const [isAuth, setIsAuth] = useState(true);
  const [isJoined, setIsJoined] = useState(true);
  const [room, setRoom] = useState({})
  const [pesan, setPesan] = useState("")
  const [pesans, setPesans] = useState([])

  // const bubbles = messages.filter(function (el) {
  //   return el.roomId === parseInt(roomId);
  // });

  useEffect(() => {
    setRoom(location.state)
  }, [])

  useEffect(() => {
    if(room.users){
      socket.emit('join-room', room._id)
      axios.get(`http://localhost:4000/api/get-pesan/?room=${room._id}`)
      .then( res => setPesans(res.data))
      .catch( err => console.log(err))
    }
  }, [room])

  socket.on('receive-message', data => {
    if(!(pesans.includes(data))){
        setPesans([...pesans, data])
    }
  })

  const handleSubmit = e => {
    e.preventDefault()
    if(pesan !== ''){
      socket.emit('send-message', 
          pesan, 
          room._id, 
          JSON.parse(localStorage.getItem('user')).username
      )
    }
    console.log(room._id);
  }

  return (
    <div className="bg-[#F58F00] h-screen py-4 px-12">
      {/* Room Header */}
      <div className="flex items-center justify-between mb-5 text-[#fff] ">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">{room.name && room.name}</h1>
        </div>

        <div className="flex">
          <button
            disabled={!isAuth || isJoined}
            className="flex items-center gap-2 rounded-lg px-4 py-2 bg-[#5E39C4] hover:bg-[#9881DA] disabled:bg-[#9881DA] "
          >
            Join Room
          </button>
        </div>
      </div>

      {/* Host */}
      <div className="flex items-center text-[#fff] mb-2">
        <p>
          HOST:{" "}
          <span className="text-[#44288F]">@{room.users && room.users[0]}</span>
        </p>
      </div>

      <div className="grid grid-cols-[3fr_1fr] gap-8 text-[#fff] h-3/4">
        {/* Chat */}
        <div className="bg-[#fff] rounded-xl text-[#000] h-full">
          <div className="p-8 h-full flex flex-col justify-between">
            <div className="space-y-4">
              {pesans.map((bubble) => (
                <BubbleChat bubble={bubble} />
              ))}
            </div>
            <form action="" onSubmit={handleSubmit}>
              <input
                className="bg-[#FFCC85] w-full px-4 py-2 rounded-md placeholder-[#000]"
                type="text"
                placeholder="Write your message here"
                onChange={e => setPesan(e.target.value)}
              />
            </form>
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
            {room.users && room.users.map(username => (
              // <Link to={"/profile/" + username} className="text-[#5E39C4] ">
                <div className="flex items-center gap-2 px-2 py-2">
                  <CgProfile size={30} color={"#44288F"} />
                  <div style={{color: '#44288F'}}>@{username}</div>
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
