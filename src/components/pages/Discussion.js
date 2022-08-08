import React, { useState } from "react";
import BrowseTopics from "../BrowseTopics";
import ActivityLog from "../ActivityLog";
import StudyRooms from "../StudyRooms";
import { GrClose } from "react-icons/gr";
import CreateRoom from "../CreateRoom";

const Discussion = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

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
              <CreateRoom/>
          </div>
        </div>
      )}
      <div className="bg-[#F58F00] h-screen py-8 px-12">
        <div className="grid grid-cols-[1fr_4fr_1fr] gap-8 text-[#fff] ">
          <BrowseTopics />
          <StudyRooms onClick={toggleModal} />
          <ActivityLog />
        </div>
      </div>
    </>
  );
};

export default Discussion;
