"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "New Delhi", value: 35, color: "#7C3AED" },
  { name: "Mumbai", value: 23, color: "#EF4444" },
  { name: "West Bengal", value: 21, color: "#FACC15" },
  { name: "Others", value: 9, color: "#D1D5DB" },
];

const cityDetails = [
  {
    name: "New Delhi",
    amount: "₹26.5L",
    percent: "35%",
    change: "+1.2%",
    changeColor: "text-green-600",
    dotColor: "bg-violet-600",
  },
  {
    name: "Mumbai",
    amount: "₹36.4L",
    percent: "23%",
    change: "-3.3%",
    changeColor: "text-red-500",
    dotColor: "bg-red-500",
  },
  {
    name: "West Bengal",
    amount: "₹12.2L",
    percent: "21%",
    change: "-2.3%",
    changeColor: "text-red-500",
    dotColor: "bg-yellow-400",
  },
  {
    name: "Others",
    amount: "₹24.3L",
    percent: "9%",
    change: "+1.09%",
    changeColor: "text-green-600",
    dotColor: "bg-gray-400",
  },
];

export default function TopCities() {
  return (
    <div className="bg-white max-w-md w-full rounded-2xl shadow-md p-6">
        <div><h2 className="text-lg font-semibold mb-4 text-gray-700">Top Cities</h2></div>
      
      <div className="flex flex-col items-center">
        <div className="w-48 h-24 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="100%"
                startAngle={180}
                endAngle={0}
                innerRadius={50}
                outerRadius={80}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute mt-[-60px] left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-[0.6rem] text-gray-500 mt-2">Total</div>
            <div className="text-xs font-bold text-black">₹68.2L</div> 
            <div className="text-green-600 text-[0.6rem]">↑ 2.2%</div>
          </div>
        </div>

        <div className="mt-6 w-full">
          {cityDetails.map((city, idx) => (
            <div
              key={city.name}
              className={`flex justify-between items-center py-1 ${
                idx !== cityDetails.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full inline-block ${city.dotColor}`}
                ></span>
                <span>{city.name}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span>{city.amount}</span>
                <span className="bg-gray-100 text-gray-600 rounded px-1.5 py-0.5 text-xs">
                  {city.percent}
                </span>
                <span className={`flex items-center gap-1 ${city.changeColor}`}>
                  {city.change.includes("-") ? "↓" : "↑"} {city.change.replace("+", "").replace("-", "")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
