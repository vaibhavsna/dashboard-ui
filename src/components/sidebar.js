"use client";

import Image from "next/image";
import { FiHome, FiBarChart2 } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

export default function Sidebar() {
    const pathName = usePathname();
    const [activePath, setActivePath] = useState(pathName);
    const handleLinkClick = (path) => {
        setActivePath(path);
    };
  return (
    <div className="flex h-screen w-1/5 sticky top-0">
      <div className="w-1/5 h-screen bg-white  flex flex-col items-center justify-between py-4">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/assets/side1.png"
            alt="Main Logo"
            width={40}
            height={40}
            className="rounded-sm object-cover"
          />
          <Image
            src="/assets/Frame 1686553273.png"
            alt="Mamaearth"
            width={30}
            height={30}
            className="rounded-sm"
          />
          <Image
            src="/assets/Frame 1686553273 (1).png"
            alt="Boat"
            width={30}
            height={30}
            className="rounded-sm"
          />
          <div className=" w-8 h-8 rounded-md border border-gray-300 flex items-center justify-center text-xl text-gray-500">
            +
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="rotate-90 text-gray-400 text-sm">⋮</div>
          <div className="w-8 h-8 bg-[#F4F4F4] rounded-full flex items-center justify-center text-purple-700 font-bold text-xs">
            NV
          </div>
        </div>
      </div>

      <aside className="w-4/5 bg-white h-full flex flex-col justify-between border-r pt-6">
        <div>
          <div className="flex items-center px-4 gap-3 mb-6">
            <div className="flex items-center justify-between bg-[#F5F5F5] px-2 py-1 rounded-md w-full">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#309E96] flex justify-center items-center rounded-md">
                  <Image
                    src="/assets/ss.png"
                    alt="Brand Icon"
                    width={14}
                    height={14}
                  />
                </div>
                <p className="text-sm text-[#031B15]">Test_brand</p>
              </div>
              <Image
                src="/assets/CaretUpDown.png"
                alt="Dropdown Icon"
                width={14}
                height={14}
              />
            </div>
            <Image
              src="/assets/chevrons-left.png"
              alt="Collapse Icon"
              width={14}
              height={14}
            />
          </div>

          <div className="flex flex-col gap-6 px-6">
            <div className="flex items-center gap-2 text-[#555]">
              <FiHome className="text-lg" />
              <span className="text-sm">Overview</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#555]">
                <Image
                  src="/assets/Vector.png"
                  alt="Channel Icon"
                  width={16}
                  height={16}
                />
                <span className="text-sm">Channels</span>
                <BsChevronDown className="text-xs ml-auto" />
              </div>

              <div className="flex flex-col gap-2 text-sm text-[#888] pl-5 mt-2">
                <Link
                  href="/meta-ads"
                  onClick={() => handleLinkClick("/meta-ads")}
                  className={clsx("px-3 py-1.5 rounded-lg w-fit",
                    activePath === "/meta-ads" ? "bg-[#E6F9F8] text-[#309E96]" : "text-[#888]"
                  )}
                >
                  Meta Ads
                </Link>
                <Link
                  href="/google-ads"
                  onClick={() => handleLinkClick("/google-ads")}
                  className={clsx("px-3 py-1.5 rounded-lg w-fit",
                    activePath === "/google-ads" ? "bg-[#E6F9F8] text-[#309E96]" : "text-[#888]"
                  )}
                >
                  Google Ads
                </Link>
                <Link
                  href="/" 
                  onClick={() => handleLinkClick("/")}
                  className={clsx("px-3 py-1.5 rounded-lg w-fit",
                    activePath === "/" ? "bg-[#E6F9F8] text-[#309E96]" : "text-[#888]"
                  )}
                >
                  Quick Commerce
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[#555]">
              <Image
                src="/assets/creative.png"
                alt="Creative Icon"
                width={16}
                height={16}
              />
              <span className="text-sm">Creatives</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 p-6 text-sm text-[#888]">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/help.png"
              alt="Help Icon"
              width={16}
              height={16}
            />
            <span>Help</span>
          </div>
          <div className="flex items-center gap-2">
            <FiBarChart2 className="text-base" />
            <span>Settings</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
