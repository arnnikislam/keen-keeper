import React from "react";

const Summary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
      <div className="bg-white rounded-2xl shadow-sm py-6 px-2 flex flex-col justify-center items-center gap-4">
        <p className="font-bold text-xl text-[#244D3F]">10</p>
        <p className="text-[#64748B]">Total Friends</p>
      </div>
      <div className="bg-white rounded-2xl shadow-sm py-6 flex flex-col justify-center items-center gap-4">
        <p className="font-bold text-xl text-[#244D3F]">10</p>
        <p className="text-[#64748B]">On Track</p>
      </div>
      <div className="bg-white rounded-2xl shadow-sm py-6 flex flex-col justify-center items-center gap-4">
        <p className="font-bold text-xl text-[#244D3F]">10</p>
        <p className="text-[#64748B]">Need Attention</p>
      </div>
      <div className="bg-white rounded-2xl shadow-sm py-6 flex flex-col justify-center items-center gap-4">
        <p className="font-bold text-xl text-[#244D3F]">10</p>
        <p className="text-[#64748B]">Interactions This Month</p>
      </div>
    </div>
  );
};

export default Summary;
