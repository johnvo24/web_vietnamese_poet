import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { IoCopy } from "react-icons/io5"
import { FaShare } from "react-icons/fa"
import React from 'react'

const page = () => {
  return (
    <div className='w-3/5 mt-10 h-auto mx-auto p-2 bg-white rounded-md drop-shadow-md'>
      <div className='flex flex-col items-center space-y-4'>
        <div className='w-2/5 flex items-center space-x-2'>
          <Input placeholder='Enter promt'/>
          <Button type='submit'>Submit</Button>
        </div>
        <div className='w-4/6 items-center'>
          <p className='text-xl opacity-70'>Result</p>
          <hr className="mt-1 mb-4 w-full border-dashed border-gray-300" />
          <div className='flex flex-col border border-gray-200 rounded-md'>
            <div className='flex items-center justify-end border-b border-gray-200'>
              <Button 
                type='submit' 
                variant='link' 
                size='sm' 
                className='text-gray-400 hover:text-black'
              >
                <FaShare/>
              </Button>
              <Button 
                type='submit' 
                variant='link' 
                size='sm' 
                className='text-gray-400 hover:text-black'
              >
                <IoCopy/>
              </Button>
            </div>
            <main className='flex flex-col items-center h-auto py-4'>
              <p>Nothing</p>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page