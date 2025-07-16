'use client'
import React, { useEffect, useRef, useState } from "react"
import * as Menubar from '@radix-ui/react-menubar';
import UserAvatar from "./ui/avatar";
import useAuth from "@/lib/hooks/useAuth";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLogout, MdOutlineSettings } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ( { className } ) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null) // Add ref attribute to HTML Element
  const router = useRouter()
  const { user, loading } = useAuth()

  const toggleDropdown = () => {
    setIsDropdownVisible(prev => !prev);
  }

  const handleClickOutSide = (event: MouseEvent) => {
    const avatarElement = document.getElementById('header-avatar')
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)
      && (avatarElement && !avatarElement.contains(event.target as Node))
    ) {
      setIsDropdownVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    router.push("/login")
  }

  return (
    <div className={`${className} header flex w-full justify-between bg-background shadow-md z-10`}>
      <div className="logo_box w-24">
        <p className="logo-text h-full font-bold content-center text-lg text-center tracking-widest">VIPOE</p>
      </div>
      <div className="menu_bar">
        <Menubar.Root className="flex p-1">
          <Menubar.Menu>
            <Menubar.Trigger 
              className="px-4 py-2 hover:bg-gray-200 hover:rounded-md"
              onClick={() => router.push('/')}
              >
                Wall
            </Menubar.Trigger>
            <Menubar.Trigger 
              className="px-4 py-2 hover:bg-gray-200 hover:rounded-md"
              onClick={() => router.push('/write')}
              >
                Write
            </Menubar.Trigger>
            <Menubar.Trigger 
              className="px-4 py-2 hover:bg-gray-200 hover:rounded-md"
              onClick={() => router.push('/edit')}
              >
                Edit
            </Menubar.Trigger>
            <Menubar.Trigger 
              className="px-4 py-2 hover:bg-gray-200 hover:rounded-md"
              onClick={() => router.push('/collection')}
              >
                Collection
            </Menubar.Trigger>
            <Menubar.Trigger 
              className="px-4 py-2 hover:bg-gray-200 hover:rounded-md"
              onClick={() => router.push('/support')}
              >
                Support
            </Menubar.Trigger>
          </Menubar.Menu>
        </Menubar.Root>
      </div>
      <div className="user_box w-24 inline-flex items-center justify-end pr-4">
        { loading ? (
          <div>
            <Skeleton className="w-9 h-9 rounded-full"/>
          </div>
        ): (
          <>
            { user ? (
            <>
              <UserAvatar 
                id={'header-avatar'}
                className="w-9 h-9 cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/2/21/Johnny_Depp_2020.jpg"
                alt={"Johnny Dark"}
                fallbackText={"JD"}
                onClick={toggleDropdown}
              />
              {
                isDropdownVisible && (
                  <Menubar.Root
                    ref={dropdownRef}
                    className="absolute top-[44px] border w-48 shadow-lg rounded-md p-2 bg-white"
                  >
                    <Menubar.Menu>
                      <Menubar.Trigger 
                        className="w-full inline-flex items-center text-start px-2 py-2 hover:bg-gray-200 hover:rounded-md"
                        onClick={() => router.push('/profile')}
                      >
                        <FaRegUser size={18} className="mr-4"/>
                        Profile
                      </Menubar.Trigger>
                      <Menubar.Trigger 
                        className="w-full inline-flex items-center text-start px-2 py-2 hover:bg-gray-200 hover:rounded-md"
                        onClick={() => router.push('/settings')}
                      >
                        <MdOutlineSettings size={22} className="mr-3.5 -ml-0.5"/>
                        Settings
                      </Menubar.Trigger>
                      <Menubar.Trigger 
                        className="w-full inline-flex items-center text-start px-2 py-2 hover:bg-gray-200 hover:rounded-md"
                        onClick={handleLogout}
                      >
                        <MdOutlineLogout size={22} className="mr-3"/>
                        Logout
                      </Menubar.Trigger>
                    </Menubar.Menu>
                  </Menubar.Root>
                )
              }
            </>
            ) : (
              <Button onClick={() => router.push('/login')}>Login</Button>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Header;