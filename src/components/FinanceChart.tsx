"use client";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 3000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 3800,
  },
  {
    name: "Apr",
    income: 2780,
    expense: 1908,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
  },
  {
    name: "Jun",
    income: 5390,
    expense: 3800,
  },
  {
    name: "July",
    income: 3490,
    expense: 4300,
  },

  {
    name: "Aug",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Sep",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Oct",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Nov",
    income: 5490,
    expense: 4300,
  },
  {
    name: "Dec",
    income: 3490,
    expense: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-ig font-semibold">Finance</h2>
        <Image src="/more.png" alt="more" width={20} height={20} />
      </div>
      {/* chart */}
      <ResponsiveContainer width={"100%"} height="90%">
        <LineChart data={data} width={500} height={300}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={10} />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#C3BBFA"
            strokeWidth={3}
          />
          <Line type="monotone" dataKey="income" stroke="#CFCEFF" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default FinanceChart;
