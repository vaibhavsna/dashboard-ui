'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from 'recharts';

const data = [
  { name: '09', thisMonth: 1.5, lastMonth: 2.5 },
  { name: '10', thisMonth: 3.0, lastMonth: 2.4 },
  { name: '11', thisMonth: 2.8, lastMonth: 3.0 },
  { name: '12', thisMonth: 2.4, lastMonth: 3.1 },
  { name: '13', thisMonth: 4.7, lastMonth: 3.2 },
  { name: '14', thisMonth: 3.2, lastMonth: 2.8 },
  { name: '15', thisMonth: 5.4, lastMonth: 3.4 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border rounded text-sm shadow-sm">
        <p className="text-gray-400">{label}</p>
        <p className="text-green-700 font-semibold">This Month: {payload[0].value}</p>
        <p className="text-orange-500 font-semibold">Last Month: {payload[1].value}</p>
      </div>
    );
  }
  return null;
};

const TotalSold = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm w-full border">
      <div className="flex items-center justify-between border-b p-4">
        <span className="text-sm text-gray-500">Total Quantity Sold</span>
        <img
          src="/assets/question.png"
          alt="Info"
          className="w-4 h-4 opacity-70"
        />
      </div>
      <div className="border-b p-4">
        <div className="flex justify-between items-start">
          <div className="text-3xl font-semibold text-gray-900">125.49</div>
          <div className="text-right text-sm">
            <div className="text-green-600 font-semibold">↑ 2.4%</div>
            <div className="text-gray-500">vs 119.69 last month</div>
          </div>
        </div>
        <div className="h-48 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0D6832" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#0D6832" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="name" tick={{ fill: '#6B7280', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis domain={[0, 6]} tick={{ fill: '#6B7280', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="thisMonth"
                fill="url(#111827)"
                stroke="none"
                activeDot={false}

              />
              <Line
                type="monotone"
                dataKey="thisMonth"
                stroke="#0D6832"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="lastMonth"
                stroke="#D56A00"
                strokeWidth={2}
                strokeDasharray="4 4"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex gap-6 text-sm p-4">
        <div className="flex items-center gap-2 text-gray-700">
          <span className="h-3 w-3 rounded-full bg-green-700"></span>
          This Month
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <span className="h-3 w-3 rounded-full bg-orange-600"></span>
          Last Month
        </div>
      </div>
    </div>
  );
};

export default TotalSold;
