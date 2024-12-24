"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/utils'
import React, { useState, useEffect } from 'react'
import PostCard from "@/components/ui/post-card"
import useAuth from '@/lib/hooks/useAuth'

const MainContent = () => {
  const [poems, setPoems] = useState<any[]>([])
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = api.get("/collection/getById", {
          headers: { Authorization: `Bearer ${token}`},
        })
        setPoems((await response).data)
      } catch (error) {
        alert(error)
      }
    }
    if (user) {
      fetchData()
    }
  }, [user])

  if (loading) {
    return (
      <header className="flex justify-center p-4 shadow-md">
        <span>Loading...</span>
      </header>
    )
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">You need to login to write a poem</h1>
        <Button onClick={() => router.push("/login")} className="mt-4">
          Click here
        </Button>
      </div>
    )
  }
  
  return (
    <div className="content mx-auto w-8/12 min-w-[960px] py-4">
      {poems.length === 0 ? (
        <p>No poems found.</p>
        ) : (
        poems.map(poem => (
          <PostCard 
            key={poem.poem_id}
            className='mb-4'
            poemData={poem}
          />
        ))
      )}
    </div>
  )
}

export default MainContent