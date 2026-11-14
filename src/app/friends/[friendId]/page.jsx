import QuickCheckIn from "@/components/QuickCheckIn/QuickCheckIn";
import Image from "next/image";
import React from "react";
import { BiMessageDots } from "react-icons/bi";
import { FiArchive, FiPhoneCall } from "react-icons/fi";
import { MdOutlineVideocam } from "react-icons/md";
import { RiDeleteBin5Line, RiNotificationSnoozeLine } from "react-icons/ri";

const FriendDetailPage = async ({ params }) => {
  const { friendId } = await params;
  const res = await fetch("http://localhost:3000/friends.json");
  const friends = await res.json();
  const filteredFriend = friends.find(
    (friend) => friend.id === Number(friendId),
  );
  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = filteredFriend;

  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row gap-6">
        {/* left column */}
        <div className="md:flex-5 lg:flex-3 space-y-4">
          <div className="bg-white rounded shadow-sm flex flex-col justify-center items-center min-h-90 space-y-2">
            <Image
              src={picture}
              width="100"
              height="100"
              alt={name}
              className="rounded-full"
            />
            <h2 className="font-bold text-xl ">{name}</h2>

            <p
              className={`${status === "almost due" ? "bg-[#EFAD44]" : status === "on-track" ? "bg-[#244D3F]" : "bg-[#EF4444]"} text-white rounded-full px-3 px-py`}
            >
              {status}
            </p>
            <p className="text-center italic px-4">&quot;{bio}&quot; </p>
            <div className="flex justify-center gap-3">
              {tags.map((tag, index) => (
                <p
                  key={index}
                  className="bg-[#CBFADB] text-[#244D3F] rounded-full px-3 py-px"
                >
                  {tag}
                </p>
              ))}
            </div>
            <p className="text-[#64748B]">Email : {email} </p>
          </div>

          <div className="space-y-3">
            <button className="btn bg-white w-full shadow ">
              <RiNotificationSnoozeLine /> Snooze 2 Weeks
            </button>
            <button className="btn bg-white w-full shadow">
              <FiArchive /> Archive
            </button>
            <button className="btn bg-white w-full shadow text-[#EF4444]">
              <RiDeleteBin5Line /> Delete
            </button>
          </div>
        </div>

        {/* right column */}
        <div className="md:flex-5 lg:flex-7 space-y-6">
          {/* stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded shadow min-h-30 lg:min-h-37 flex flex-col justify-center items-center gap-2">
              <p className="font-bold md:text-xl lg:text-3xl text-[#244D3F]">
                {days_since_contact}{" "}
              </p>
              <p className="text-[#64748B]">Days Since Contact</p>
            </div>
            <div className="bg-white rounded shadow min-h-30 lg:min-h-37 flex flex-col justify-center items-center gap-2">
              <p className="font-bold md:text-xl lg:text-3xl text-[#244D3F]">
                {goal}{" "}
              </p>
              <p className="text-[#64748B]">Goal (Days)</p>
            </div>
            <div className="bg-white rounded shadow min-h-30 lg:min-h-37 flex flex-col justify-center items-center gap-2">
              <p className="font-bold md:text-xl lg:text-3xl text-[#244D3F]">
                {next_due_date}
              </p>
              <p className="text-[#64748B]">Next Due</p>
            </div>
          </div>

          {/* goal card */}
          <div className="shadow bg-white rounded flex flex-col p-6">
            <div className="flex justify-between items-center">
              <p className="text-[#244D3F] text-[18px]">Relationship Goal</p>
              <button className="btn">Edit</button>
            </div>

            <p>
              <span className="text-[#64748B]">Connect every</span>{" "}
              <span className="font-bold">{goal} days</span>
            </p>
          </div>

          {/* check-in card */}
          <QuickCheckIn name={name}></QuickCheckIn>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailPage;
