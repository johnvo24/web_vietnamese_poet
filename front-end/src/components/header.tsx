'use client'
import React, { useState } from "react"
import * as Menubar from '@radix-ui/react-menubar';
import UserAvatar from "./ui/avatar";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLogout, MdOutlineSettings } from "react-icons/md";

export default function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownVisible(prev => !prev);
  }

  return (
    <div className="header flex w-full justify-between shadow-sm">
      <div className="logo_box w-24">
        <p className="logo-text h-full font-bold content-center text-lg text-center tracking-widest">LOGO</p>
      </div>
      <div className="menu_bar">
        <Menubar.Root className="flex p-1">
          <Menubar.Menu>
            <Menubar.Trigger className="px-4 py-2 hover:bg-gray-100">Wall</Menubar.Trigger>
            <Menubar.Trigger className="px-4 py-2 hover:bg-gray-100">Write</Menubar.Trigger>
            <Menubar.Trigger className="px-4 py-2 hover:bg-gray-100">Collection</Menubar.Trigger>
            <Menubar.Trigger className="px-4 py-2 hover:bg-gray-100">Support</Menubar.Trigger>
          </Menubar.Menu>
        </Menubar.Root>
      </div>
      <div className="user_box w-24 inline-flex items-center justify-end pr-4">
        <UserAvatar 
          className="w-9 h-9 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/2/21/Johnny_Depp_2020.jpg"
          alt={"Johnny Dark"}
          fallbackText={"JD"}
          onClick={toggleDropdown}
        />
        <Menubar.Root className="absolute top-[44px] border w-40 shadow-lg rounded-md p-2 bg-white">
          <Menubar.Menu>
            <Menubar.Trigger className="w-full inline-flex items-center text-start px-2 py-2 hover:bg-gray-100">
              <FaRegUser size={18} className="mr-4"/>
              Profile
            </Menubar.Trigger>
            <Menubar.Trigger className="w-full inline-flex items-center text-start px-2 py-2 hover:bg-gray-100">
              <MdOutlineSettings size={22} className="mr-3.5 -ml-0.5"/>
              Settings
            </Menubar.Trigger>
            <Menubar.Trigger className="w-full inline-flex items-center text-start px-2 py-2 hover:bg-gray-100">
              <MdOutlineLogout size={22} className="mr-3"/>
              Logout
            </Menubar.Trigger>
          </Menubar.Menu>
        </Menubar.Root>
      </div>
    </div>
  )
}