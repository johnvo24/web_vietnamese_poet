import React from 'react'
import Header from '@/components/header'
import MainContent from "@/app/collection/main-content"

const page = () => {
  return (
    <div className="bg-transparent">
      <Header 
        className="fixed top-0 left-0"
      />
      <MainContent />
    </div>
  )
}

export default page