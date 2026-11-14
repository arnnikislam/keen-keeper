"use client";
import EmptyTimeline from "@/components/EmptyTimeline/EmptyTimeline";
import { CheckInContext } from "@/context/CheckInContext";
import Image from "next/image";
import React, { useContext } from "react";

const TimelinePage = () => {
  const { items } = useContext(CheckInContext);
  if (items.length === 0) {
    return (
      <div className="my-10">
        <h2 className="font-bold text-3xl">Timeline</h2>
        <EmptyTimeline/>
      </div>
    );
  }
  return (
    <div className="my-10">
      <h2 className="font-bold text-3xl">Timeline</h2>
      <div className="my-4 space-y-4">
        {items.map((item, index) => {
          return (
            <div key={index} className="bg-white rounded shadow p-4">
              {item.type === "call" ? (
                <div className="flex items-center gap-6">
                  <Image
                    src="/images/call.png"
                    height="40"
                    width="40"
                    alt="call"
                    className="h-7 w-7"
                  />
                  <div>
                    <p>
                      <span className="text-lg text-[#244D3F]">Call</span>{" "}
                      <span className="text-[#64748B]">with {item.name}</span>
                    </p>
                    <p className="text-[#64748B]">
                      {item.date} {item.time}
                    </p>
                  </div>
                </div>
              ) : item.type === "text" ? (
                <div className="flex items-center gap-6">
                  <Image
                    src="/images/text.png"
                    height="40"
                    width="40"
                    alt="text"
                    className="h-7 w-7"
                  />
                  <div>
                    <p>
                      <span className="text-lg text-[#244D3F]">Text</span>{" "}
                      <span className="text-[#64748B]">with {item.name}</span>
                    </p>
                    <p className="text-[#64748B]">
                      {item.date} {item.time}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-6">
                  <Image
                    src="/images/video.png"
                    height="40"
                    width="40"
                    alt="video"
                    className="h-7 w-7"
                  />
                  <div>
                    <p>
                      <span className="text-lg text-[#244D3F]">Video</span>{" "}
                      <span className="text-[#64748B]">with {item.name}</span>
                    </p>
                    <p className="text-[#64748B]">
                      {item.date} {item.time}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelinePage;
