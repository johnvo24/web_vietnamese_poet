"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import React, { useState } from 'react'
import Image from "next/image"
import { api } from "@/lib/utils"

const EditInformation = (props: any) => {
  const [full_name, setFullName] = useState("")
  const [bio, setBio] = useState("")
  const [dob, setDob] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState("")

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token")
      if (token) {
        const response = api.put("/user/profile", { full_name, bio, dob, phone, location }, {
          headers: { Authorization: `Bearer ${token}` },
        })
        alert("Edited Successful")
      }
    } catch (error) {
      alert("Edited Failed")
    }
  }

  return (
    <div className="flex flex-col items-center bg-white rounded-md overflow-hidden">
      <div className="w-full h-36 bg-cover" style={{ backgroundImage: "url('/images/bg-stmpt.jpg')" }}></div>
      <div className="-mt-16 w-32 h-32 rounded-full border-4 border-white overflow-hidden">
        <Image 
          src='/images/st-mtp.jpg'
          width={150}
          height={150}
          alt="Avatar"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="mt-2 text-center">
        <h1 className="text-xl font-bold">{props.full_name}</h1>
        <p className="text-gray-500">{ props.bio == null ? "None" : props.bio }</p>
      </div>
      <hr className="my-8 w-3/4 border-dashed border-gray-300" />

      <div className="w-3/4 space-y-4 mb-6">
        <div className="flex items-center">
          <label className="w-1/3 font-semibold">Fullname:</label>
          <input
            type="text"
            value={ props.full_name == null ? "None" : props.full_name }
            readOnly
            className="flex-1 bg-gray-100 p-2 rounded-md border border-gray-300 pointer-events-none select-none text-muted-foreground"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/3 font-semibold">Email:</label>
          <input
            type="email"
            value={ props.email == null ? "None" : props.email }
            readOnly
            className="flex-1 bg-gray-100 p-2 rounded-md border border-gray-300 pointer-events-none select-none text-muted-foreground"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/3 font-semibold">Date of birth:</label>
          <input
            type="date"
            value={ props.date_of_birth == null ? "dd/mm/yyyy" : props.date_of_birth }
            readOnly
            className="flex-1 bg-gray-100 p-2 rounded-md border border-gray-300 pointer-events-none select-none text-muted-foreground"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/3 font-semibold">Bio:</label>
          <input
            type="text"
            value={ props.bio == null ? "None" : props.bio }
            readOnly
            className="flex-1 bg-gray-100 p-2 rounded-md border border-gray-300 pointer-events-none select-none text-muted-foreground"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/3 font-semibold">Phone:</label>
          <input
            type="text"
            value={ props.phone == null ? "None" : props.phone }
            readOnly
            className="flex-1 bg-gray-100 p-2 rounded-md border border-gray-300 pointer-events-none select-none text-muted-foreground"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/3 font-semibold">Location:</label>
          <input
            type="text"
            value={ props.location == null ? "None" : props.location }
            readOnly
            className="flex-1 bg-gray-100 p-2 rounded-md border border-gray-300 pointer-events-none select-none text-muted-foreground"
          />
        </div>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex w-5/6 items-center">
              <Label htmlFor="fullname" className="w-1/3">
                Fullname
              </Label>
              <Input 
                id="full_name" 
                name="full_name" 
                value={full_name} 
                type="text"
                className="flex-1"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="flex w-5/6 items-center">
              <Label htmlFor="fullname" className="w-1/3">
                Dob
              </Label>
              <Input 
                id="dob" 
                name="dob" 
                value={dob} 
                type="date" 
                className="flex-1"
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className="flex w-5/6 items-center">
              <Label htmlFor="fullname" className="w-1/3">
                Bio
              </Label>
              <Input 
                id="bio" 
                name="bio" 
                value={bio} 
                type="text" 
                className="flex-1"
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
            <div className="flex w-5/6 items-center">
              <Label htmlFor="fullname" className="w-1/3">
                Phone
              </Label>
              <Input 
                id="phone" 
                name="phone" 
                value={phone} 
                type="text" 
                className="flex-1"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex w-5/6 items-center">
              <Label htmlFor="fullname" className="w-1/3">
                Location
              </Label>
              <Input 
                id="location" 
                name="location" 
                value={location} 
                type="text" 
                className="flex-1"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSubmit}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default EditInformation