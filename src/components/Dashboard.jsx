"use client";

import Image from "next/image";
import { BsChevronDown } from "react-icons/bs";
import SalesCard from "./SalesCard";
import TotalSold from "./TotalSold";
import TopCitiesCard from "./TopCitiesCard";
import DataTable from "./dataTable";
export default function Dashboard() {
  return (
    <div className="flex w-full ">
      <div className="flex-1 flex flex-col overflow-auto border-2 rounded-md border-gray-200 m-2">
        <div className="flex items-center justify-between border-b w-full py-2 px-5 ">
          <h2 className="text-md font- text-gray-800">Quick Commerce</h2>
          <div className="flex">
            <div className="flex items-center gap-1 px-2 py-1 mr-2 rounded-md border border-gray-200 shadow-sm">
              <Image
                src="/assets/ChartLine.png"
                alt="Chart Line"
                width={20}
                height={20}
              />
              <Image
                src="/assets/bi_toggle-on.png"
                alt="Toggle"
                width={20}
                height={10}
              />
            </div>

            <div className="flex items-center gap-2 text-sm border-3 rounded-md px-2 py-1 shadow-sm">
              <Image
                src="/assets/CalendarDots.png"
                alt="Calendar Icon"
                width={16}
                height={16}
              />
              <span className="text-gray-700">Aug 01, 2024 - Aug 03, 2024</span>
              <BsChevronDown
                width={14}
                height={14}
                className="font-bold text-gray-600"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 p-1 border-b w-full py-2 px-5  border border-gray-200 ">
          <div className="flex items-center gap-2 p-1 rounded-md border border-gray-200  w-fit">
          {/* Blinkit - Active */}
          <div className="flex items-center gap-1 bg-[#DFEAE8] text-[#3B7C0F] text-xs px-2 py-1 rounded-md font-medium">
            <Image
              src="/assets/Blinkit Logo.png"
              alt="Blinkit"
              width={12}
              height={12}
            />
            <span>Blinkit</span>
          </div>

          {/* Zepto - Inactive */}
          <div className="flex items-center gap-1 text-[#7029C2] text-xs px-2.5 py-1 rounded-full font-medium opacity-50">
            <Image
              src="/assets/Zepto Logo.png"
              alt="Zepto"
              width={12}
              height={12}
            />
            <span>Zepto</span>
          </div>

          {/* Instamart - Inactive */}
          <div className="flex items-center gap-1 text-[#D25B00] text-xs px-2.5 py-1 rounded-full font-medium opacity-50">
            <Image
              src="/assets/Instamart Logo.png"
              alt="Instamart"
              width={12}
              height={12}
            />
            <span>Instamart</span>
          </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 p-4">
          <SalesCard/>
          <TotalSold/>
          <TopCitiesCard/>
        </div>

        <div className="mt-8 bg-white p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md font-semibold text-black ">
              SKU level data
              <p className="text-[0.7rem] text-gray-500 font-extralight">Analytics for all your SKUs</p>
            </h3>
            <button className="text-sm text-[#DCF4F2] bg-[#027056] px-3 rounded-md flex justify-between items-center gap-2 py-3 shadow-md">
              <span> Filters(1)</span>
             
              <BsChevronDown
                width={14}
                height={14}
                className="font-bold text-[#DCF4F2]"
              />
            </button>
          </div>
        <DataTable/>
        </div>

        <div className="mt-6 bg-white p-4 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md font-semibold text-black">
              City level data
              <p className="text-[0.7rem] text-gray-500 font-extralight">Analytics for all your Cities</p>
            </h3>
            <button className="text-sm text-[#DCF4F2] bg-[#027056] px-3 rounded-md flex justify-between items-center gap-2 py-3 shadow-md">
              <span>Filters(1)</span>
              
              <BsChevronDown
                width={14}
                height={14}
                className="font-bold text-[#DCF4F2]"
              />
            </button>
          </div>
          <DataTable/>
        </div>
      </div>
    </div>
  );
}