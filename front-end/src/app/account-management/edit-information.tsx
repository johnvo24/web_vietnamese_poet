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
import React from 'react'
import Image from "next/image"

const EditInformation = () => {
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
        <h1 className="text-xl font-bold">Nguyễn Thanh Tùng</h1>
        <p className="text-gray-500">Boy chung tình</p>
      </div>
      <hr className="my-8 w-3/4 border-dashed border-gray-300" />

      <div className="w-3/4 space-y-4 mb-6">
        <div className="flex items-center">
          <label className="w-1/3 font-semibold">Fullname:</label>
          <input
            type="text"
            value="Nguyễn Thanh Tùng"
            readOnly
            className="flex-1 bg-gray-100 p-2 rounded-md border border-gray-300 pointer-events-none select-none text-muted-foreground"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/3 font-semibold">Email:</label>
          <input
            type="email"
            value="sontungmtp@gmail.com"
            readOnly
            className="flex-1 bg-gray-100 p-2 rounded-md border border-gray-300 pointer-events-none select-none text-muted-foreground"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/3 font-semibold">Date of birth:</label>
          <input
            type="date"
            value="2003-08-18"
            readOnly
            className="flex-1 bg-gray-100 p-2 rounded-md border border-gray-300 pointer-events-none select-none text-muted-foreground"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/3 font-semibold">Bio:</label>
          <input
            type="text"
            value="Boy chung tình"
            readOnly
            className="flex-1 bg-gray-100 p-2 rounded-md border border-gray-300 pointer-events-none select-none text-muted-foreground"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/3 font-semibold">Phone:</label>
          <input
            type="text"
            value="0364857745"
            readOnly
            className="flex-1 bg-gray-100 p-2 rounded-md border border-gray-300 pointer-events-none select-none text-muted-foreground"
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/3 font-semibold">Location:</label>
          <input
            type="text"
            value="Thai Binh, Viet Nam"
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
              <Input id="fullname" name="fullname" value="Pedro Duarte" className="flex-1"/>
            </div>
            <div className="flex w-5/6 items-center">
              <Label htmlFor="fullname" className="w-1/3">
                Email
              </Label>
              <Input id="email" name="email" value="@peduarte" type="email" className="flex-1"/>
            </div>
            <div className="flex w-5/6 items-center">
              <Label htmlFor="fullname" className="w-1/3">
                Dob
              </Label>
              <Input id="email" name="email" value="@peduarte" type="email" className="flex-1"/>
            </div>
            <div className="flex w-5/6 items-center">
              <Label htmlFor="fullname" className="w-1/3">
                Bio
              </Label>
              <Input id="email" name="email" value="@peduarte" type="email" className="flex-1"/>
            </div>
            <div className="flex w-5/6 items-center">
              <Label htmlFor="fullname" className="w-1/3">
                Phone
              </Label>
              <Input id="email" name="email" value="@peduarte" type="email" className="flex-1"/>
            </div>
            <div className="flex w-5/6 items-center">
              <Label htmlFor="fullname" className="w-1/3">
                Location
              </Label>
              <Input id="email" name="email" value="@peduarte" type="email" className="flex-1"/>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default EditInformation