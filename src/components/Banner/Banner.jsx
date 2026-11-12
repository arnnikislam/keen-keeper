import React from "react";
import { IoAdd } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h1 className="font-bold text-lg md:text-5xl ">
        Friends to keep close in your life
      </h1>
      <p className="text-center">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white">
        <IoAdd />
        Add a Friend
      </button>
    </div>
  );
};

export default Banner;
