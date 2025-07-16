import React from 'react'
import Header from '@/components/header'
import MainContent from '@/app/edit/main-content'

const page = () => {
  return (
    <div className="bg-transparent">
      <Header 
        className="fixed top-0 left-0"
      />
      <div className='main w-full'>
        <MainContent/>
      </div>
    </div>
  )
}

export default page