"use client"

import React, { useState, useEffect } from 'react'
import Link from "next/link"
import UserAvatar from "@/components/ui/avatar"
import { api } from '@/lib/utils'

const ShowWriters = () => {
  const [writers, setWriters] = useState<any[]>([])

  useEffect(() => {
    const fetchWriters = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await api.get("/user/show-writers", {
          headers: { Authorization: `Bearer ${token}`},
        })
        setWriters(response.data)
      } catch (error) {
        alert("Failed to load writers")
      }
    }

    fetchWriters()
  }, [])

  return (
    <>
      {writers.map((write) => 
                <Link 
                  key={write.user_id}
                  className="flex items-center py-1 px-2 mb-1 text-gray-700 hover:bg-gray-200 rounded-lg" 
                  href={"#"}
                >
                  <UserAvatar 
                    className={"w-9 h-9 mr-3"}
                    src={write.avatar}
                    alt={write.full_name}
                    fallbackText=""
                  />
                  <p>{write.full_name}</p>
                </Link>
              )}
    </>
  )
}

export default ShowWriters