"use client"

import { api } from '@/lib/utils'
import React, { useState, useEffect } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import useAuth from '@/lib/hooks/useAuth'
import PostCard from '@/components/ui/post-card'

const ShowPoem = () => {
  const [poems, setPoems] = useState<any[]>([])
  const { user, loading } = useAuth()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = api.get("/collection/get-all", {
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
      <div className='flex flex-col space-y-4'>
        <Skeleton className='w-full h-60'/>
        <Skeleton className='w-full h-10'/>
      </div>
    )
  }

  return (
    <>
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
    </>
  )
}

export default ShowPoem