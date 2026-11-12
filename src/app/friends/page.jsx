import FriendCard from "@/components/FriendCard/FriendCard";
import React from "react";

const FriendList = async () => {
  const res = await fetch("http://localhost:3000/friends.json");
  const friends = await res.json();

  return (
    <div className="my-8">
      <h2 className="font-bold text-xl my-4">Your Friends</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend}></FriendCard>
        ))}
      </div>
    </div>
  );
};
export default FriendList;
