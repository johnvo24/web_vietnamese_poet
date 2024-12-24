"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import PostCard from "@/components/ui/post-card"
import useAuth from '@/lib/hooks/useAuth'

const MainContent = () => {
  const { user, loading } = useAuth()
  const router = useRouter()

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
    <div className='main pt-12 w-full'>
      <div className="content mx-auto w-8/12 min-w-[960px] py-4">
        <PostCard className='mb-4'/>
        <PostCard className='mb-4'/>
        <PostCard className='mb-4'/>
      </div>
    </div>
  )
}

export default MainContent