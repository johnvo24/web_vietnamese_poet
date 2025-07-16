"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MdAccountCircle, MdLibraryBooks } from "react-icons/md"
import { FaHeart } from "react-icons/fa"
import { RiUserSettingsFill } from "react-icons/ri"
import { IoMdLogOut } from "react-icons/io"
import { Button } from "@/components/ui/button"
import { api } from "@/lib/utils"
import useAuth from "@/lib/hooks/useAuth"
import React, { useState, useEffect } from 'react'
import EditInformation from "@/app/profile/edit-information"

interface User {
  full_name: string
  username: string
  email: string
  phone: string
  location: string
  bio: string
  date_of_birth: string
}

const TabsAndEditForm = () => {
  const { user, loading } = useAuth()
  const [profile, setProfile] = useState<User|null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await api.get("/user/me", {
          headers: { Authorization: `Bearer ${token}`},
        })
        setProfile(response.data)
      } catch (error) {
        alert("Failed to load profile")
      }
    }
  
    if (user) {
      fetchProfile()
    }
  }, [user])

  return (
    <Tabs defaultValue="information" className="w-full flex">
      <TabsList className="flex">
        <TabsTrigger icon={<MdAccountCircle/>} value="information">Account Information</TabsTrigger>
        <TabsTrigger icon={<MdLibraryBooks/>} value="poem">My Poem</TabsTrigger>
        <TabsTrigger icon={<FaHeart/>} value="wishlist">WishList</TabsTrigger>
        <TabsTrigger icon={<RiUserSettingsFill/>} value="settings">Account Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="information">
        <EditInformation 
          full_name={profile?.full_name}
          email={profile?.email}
          phone={profile?.phone}
          location={profile?.location}
          bio={profile?.bio}
          date_of_birth={profile?.date_of_birth}
        />
      </TabsContent>
      <TabsContent value="poem">Change your password here.</TabsContent>
      <TabsContent value="wishlist">Change here.</TabsContent>
      <TabsContent value="settings">
        <div className="flex flex-col items-start">
          <div className="w-2/4 space-y-4"> 
            <div className="flex items-center">
              <label className="w-1/3 font-semibold">Username:</label>
              <input
                type="text"
                value={profile?.username}
                readOnly
                className="flex-1 bg-gray-100 p-2 rounded-md border border-gray-300 pointer-events-none select-none text-muted-foreground"
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 font-semibold">Password:</label>
              <input
                type="password"
                value="sontungmtp"
                readOnly
                className="flex-1 bg-gray-100 p-2 rounded-md border border-gray-300 pointer-events-none select-none text-muted-foreground"
              />
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default TabsAndEditForm