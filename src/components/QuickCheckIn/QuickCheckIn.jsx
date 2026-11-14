"use client";
import { CheckInContext } from "@/context/CheckInContext";
import React, { useContext } from "react";
import { BiMessageDots } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineVideocam } from "react-icons/md";
import { Slide, toast } from "react-toastify";

const QuickCheckIn = ({ name }) => {
  const { items, setItems } = useContext(CheckInContext);
  const handleCheckIn = (type) => {
    toast.success(`Successfully ${type} with ${name} `, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
    const now = new Date();
    const date = now.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "Asia/Dhaka",
    });
    const time = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Dhaka",
    });
    const newItem = {
      name,
      type,
      date,
      time,
    };
    setItems([newItem, ...items]);
  };
  return (
    <div className="shadow bg-white rounded flex flex-col p-6 space-y-4">
      <p className="text-[#244D3F] text-[18px]">Quick Check-In</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          className="btn flex-col h-20 lg:h-30 text-xl"
          onClick={() => handleCheckIn("call")}
        >
          <span>
            <FiPhoneCall />
          </span>
          <span>Call</span>
        </button>
        <button
          className="btn flex-col h-20 lg:h-30 text-xl"
          onClick={() => handleCheckIn("text")}
        >
          <span>
            <BiMessageDots />
          </span>
          <span>Text</span>
        </button>
        <button
          className="btn flex-col h-20 lg:h-30 text-xl"
          onClick={() => handleCheckIn("video")}
        >
          <span>
            <MdOutlineVideocam />
          </span>
          <span>Video</span>
        </button>
      </div>
    </div>
  );
};

export default QuickCheckIn;
