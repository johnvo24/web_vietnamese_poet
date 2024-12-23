import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { IoCopy } from "react-icons/io5"
import { FaShare } from "react-icons/fa"
import React from 'react'
import Header from '@/components/header'
import { RiAiGenerate } from 'react-icons/ri'
import PostCard from '@/components/ui/post-card'

const page = () => {
  return (
    <div className="bg-transparent">
      <Header 
        className="fixed top-0 left-0"
      />
      <div className="main pt-12 w-full">
        <div className='content mx-auto flex flex-col items-center w-8/12 min-w-[960px] my-4 p-4 rounded-lg bg-white'>
          <div className='w-3/4 flex flex-col items-center'>
            <p className='w-full text-start text-lg mb-1 italic text-gray-700'>Prompt:</p>
            <Input placeholder='Enter promt'/>
            <Button className='mt-4' type='submit'>
              <RiAiGenerate/>Generate Poem
            </Button>
          </div>
          <div className='w-3/4 items-center'>
            <p className='w-full text-start text-lg mb-1 italic text-gray-700'>Preview:</p>
            <hr className="mt-1 mb-4 w-full border-dashed border-gray-300" />
            <div className="preview bg-gray-400 p-12">
              <PostCard className={''} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page