import React from 'react'
import TabsAndEditForm from '@/app/profile/tabs-content'
import Header from '@/components/header'

const AccountManagement = () => {
  return (
    <div className="bg-transparent">
      <Header 
        className="fixed top-0 left-0"
      />
      <div className='w-3/5 mt-16 mb-4 h-auto mx-auto p-2 bg-white rounded-md drop-shadow-md'>
        <TabsAndEditForm />
      </div>
    </div>
  )
}

export default AccountManagement