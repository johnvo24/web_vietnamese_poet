"use client"

import { api } from '@/lib/utils'
import React, { useState, useEffect } from 'react'
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

  return (
    <>
      {poems.length === 0 ? (
          <p>No poems found.</p>
        ) : (
          poems.map(poem => (
            <PostCard 
              key={poem.id}
              className='mb-4'
              poemData={poem}
            />
          ))
        )}
    </>
  )
}

export default ShowPoem