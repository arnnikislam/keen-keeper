"use client";

import { useContext, useMemo } from "react";
import Link from "next/link";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CheckInContext } from "@/context/CheckInContext";

const COLORS = {
  Text: "#7E35E1",
  Call: "#244D3F",
  Video: "#37A163",
};

const StatsPage = () => {
  const { items } = useContext(CheckInContext);

  // Count check-ins per type from the timeline log
  const data = useMemo(() => {
    const count = { call: 0, text: 0, video: 0 };
    items.forEach((item) => {
      if (count[item.type] !== undefined) count[item.type]++;
    });
    return [
      { name: "Text", value: count.text },
      { name: "Call", value: count.call },
      { name: "Video", value: count.video },
    ];
  }, [items]);

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-[#1f2937]">
        Friendship Analytics
      </h2>

      <div className="my-6 rounded bg-white p-6 shadow">
        <p className="text-[18px] text-[#244D3F]">By Interaction Type</p>

        {items.length === 0 ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center gap-3 text-center">
            <p className="text-[#64748B]">
              No interactions yet. Check in with a friend to see your stats.
            </p>
            <Link
              href="/"
              className="btn border-0 bg-[#244D3F] text-white shadow-none hover:bg-[#1c3d32]"
            >
              Go to Friends
            </Link>
          </div>
        ) : (
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={70}
                  outerRadius={88}
                  paddingAngle={5}
                  cornerRadius={8}
                  stroke="none"
                >
                  {data.map((entry) => (
                    <Cell key={entry.name} fill={COLORS[entry.name]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  iconType="circle"
                  iconSize={8}
                  formatter={(value) => (
                    <span className="text-xs text-[#64748B]">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsPage;
