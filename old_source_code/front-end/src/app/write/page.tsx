import { IoCopy } from "react-icons/io5"
import { FaShare } from "react-icons/fa"
import React from 'react'
import Header from '@/components/header'
import MainContent from "@/app/write/main-content"

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