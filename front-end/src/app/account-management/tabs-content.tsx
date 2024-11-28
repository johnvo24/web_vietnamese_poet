import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MdAccountCircle, MdLibraryBooks } from "react-icons/md"
import { FaHeart } from "react-icons/fa"
import { RiUserSettingsFill } from "react-icons/ri"
import { IoMdLogOut } from "react-icons/io"
import { Button } from "@/components/ui/button"
import React from 'react'
import EditInformation from "@/app/account-management/edit-information"

const TabsAndEditForm = () => {
  return (
    <Tabs defaultValue="information" className="w-full flex">
      <TabsList className="flex">
        <TabsTrigger icon={<MdAccountCircle/>} value="information">Account Information</TabsTrigger>
        <TabsTrigger icon={<MdLibraryBooks/>} value="poem">My Poem</TabsTrigger>
        <TabsTrigger icon={<FaHeart/>} value="wishlist">WishList</TabsTrigger>
        <TabsTrigger icon={<RiUserSettingsFill/>} value="settings">Account Settings</TabsTrigger>
        <TabsTrigger icon={<IoMdLogOut/>} value="logout">Logout</TabsTrigger>
      </TabsList>
      <TabsContent value="information">
        <EditInformation />
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
                value="sontungmtp"
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
      <TabsContent value="logout">
        <div className="flex h-full justify-center items-center">
          <Button size='lg' type="submit">Logout</Button>
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default TabsAndEditForm