"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

export default function Sidebar({ isOpen }) {
  const [open, setIsOpen] = useState(isOpen);

  const toggleSidebar = () => {
    setIsOpen(!open); // Use 'open' instead of 'isOpen'
  };

  return (
    <div
      className={`${
        open
          ? "bg-black w-[280px] h-screen transition-all duration-500"
          : "bg-black w-[74px] h-screen transition-all duration-500"
      }`}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <div
            onClick={toggleSidebar}
            className="h-12 w-12 cursor-pointer m-2 flex items-center justify-center rounded-full"
          >
            <FiMenu className="text-neutral-200 text-3xl " />
          </div>

          <div className="flex items-center cursor-pointer rounded-full w-fit">
            <div className="h-12 mx-2 w-12  flex items-center justify-center rounded-full">
              <IoIosAddCircleOutline className=" text-4xl" />
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div
            className="h-12 w-12 cursor-pointer m-2 flex items-center justify-center rounded-full"
          >
            <IoSettingsOutline className="text-neutral-200 text-3xl " />
          </div>
          {
            open && (
              <p className="text-neutral-200 text-xs">Settings</p>
            )
          }
        </div>
      </div>
    </div>
  );
}
