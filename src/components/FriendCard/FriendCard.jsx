import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendCard = ({ friend }) => {
  const { id, name, picture, days_since_contact, status, tags } = friend;
  return (
    <Link href={`/friends/${id}`}>
      <div className="bg-white rounded-2xl shadow-sm flex flex-col justify-center items-center min-h-80 space-y-2">
        <Image
          src={picture}
          width="100"
          height="100"
          alt={name}
          className="rounded-full"
        />
        <h2 className="font-bold text-xl ">{name}</h2>
        <p className="text-[#64748B]">{days_since_contact}d ago</p>
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
        <p
          className={`${status === "almost due" ? "bg-[#EFAD44]" : status === "on-track" ? "bg-[#244D3F]" : "bg-[#EF4444]"} text-white rounded-full px-3 px-py`}
        >
          {status}
        </p>
      </div>
    </Link>
  );
};

export default FriendCard;
