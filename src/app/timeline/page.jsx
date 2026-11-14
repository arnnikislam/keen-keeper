"use client";
import EmptyTimeline from "@/components/EmptyTimeline/EmptyTimeline";
import { CheckInContext } from "@/context/CheckInContext";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const filterLabels = {
  all: "All",
  text: "Text",
  call: "Call",
  video: "Video",
};

const sortLabels = {
  newest: "Newest First",
  oldest: "Oldest First",
};

const getTimestamp = (item) => new Date(`${item.date} ${item.time}`).getTime();

const TimelinePage = () => {
  const { items } = useContext(CheckInContext);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  if (items.length === 0) {
    return (
      <div className="my-10">
        <h2 className="font-bold text-3xl">Timeline</h2>
        <EmptyTimeline />
      </div>
    );
  }


  const filteredItems =
    !filter || filter === "all"
      ? items
      : items.filter((item) => item.type === filter);


  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sort === "newest") return getTimestamp(b) - getTimestamp(a);
    if (sort === "oldest") return getTimestamp(a) - getTimestamp(b);
    return 0;
  });

  const handleFilter = (type) => {
    setFilter(type);
    document.activeElement?.blur();
  };

  const handleSort = (order) => {
    setSort(order);
    document.activeElement?.blur();
  };

  return (
    <div className="my-10">
      <h2 className="font-bold text-3xl">Timeline</h2>

      <div className="my-4 flex flex-wrap items-center gap-2">
        {/* Filter dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button">
            <div className="flex justify-between items-center w-60 btn bg-[#F8FAFC] rounded shadow">
              <span>{filterLabels[filter] || "Filter Timeline"}</span>
              <span>
                <FaChevronDown />
              </span>
            </div>
          </div>
          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button onClick={() => handleFilter("all")}>All</button>
            </li>
            <li>
              <button onClick={() => handleFilter("text")}>Text</button>
            </li>
            <li>
              <button onClick={() => handleFilter("call")}>Call</button>
            </li>
            <li>
              <button onClick={() => handleFilter("video")}>Video</button>
            </li>
          </ul>
        </div>

        {/* Sort dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button">
            <div className="flex justify-between items-center w-60 btn bg-[#F8FAFC] rounded shadow">
              <span>{sortLabels[sort] || "Sort by Date"}</span>
              <span>
                <FaChevronDown />
              </span>
            </div>
          </div>
          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button onClick={() => handleSort("newest")}>Newest First</button>
            </li>
            <li>
              <button onClick={() => handleSort("oldest")}>Oldest First</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="my-4 space-y-4">
        {sortedItems.map((item, index) => {
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

        {sortedItems.length === 0 && (
          <p className="text-[#64748B]">No {filter} check-ins yet.</p>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;
