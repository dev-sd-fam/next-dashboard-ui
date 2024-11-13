"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  PolarRadiusAxis,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 50,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#C3EBFA",
  },
];

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px",
};

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex justify-between items-center">
        <h2 className="text-ig font-semibold">Students</h2>
        <Image src="/more.png" alt="more" width={20} height={20} />
      </div>
      {/* chart */}
      <div className="relative w-[100%] h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            // width={900}
            // height={300}
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="maleFemale"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* bottom */}
      <div className="flex justify-center gap-16 ">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h2 className="font-bold">1,234</h2>
          <h3 className="text-xs text-gray-400">Boys (55%)</h3>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h2 className="font-bold">1,234</h2>
          <h3 className="text-xs text-gray-400">Girls (45%)</h3>
        </div>
      </div>
    </div>
  );
};
export default CountChart;
