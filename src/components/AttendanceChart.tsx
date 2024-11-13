"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 40,
    absent: 20,
  },
  {
    name: "Tue",
    present: 30,
    absent: 19,
  },
  {
    name: "Wed",
    present: 60,
    absent: 20,
  },
  {
    name: "Thu",
    present: 27,
    absent: 30,
  },
  {
    name: "Fri",
    present: 70,
    absent: 48,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Attendence</h2>
        <Image src="/moreDark.png" alt="moreDark" width={20} height={20} />
      </div>
      <ResponsiveContainer width={"100%"} height={"90%"}>
        <BarChart data={data} width={500} height={300} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default AttendanceChart;
