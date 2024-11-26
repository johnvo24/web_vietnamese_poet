import { FaGoogle } from "react-icons/fa"
import LoginForm from '@/app/(auth)/login/login-form'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-3/4 h-screen m-auto py-20'>
      <main className='w-full h-full flex bg-backgroundRegister bg-cover bg-bottom rounded-lg shadow-md'>
        <div className="w-3/5 flex justify-start items-end">
          <Image 
            src='/images/ca-dao-2.png'
            width={400}
            height={100}
            alt='VIPO logo'
            className='mt-8 me-8'
          />
        </div>
        <div className='w-2/5 bg-white rounded-lg border border-[#d9d9d9] px-10 pt-14'>
          <p className='text-3xl text-center font-semibold mb-8'>Login</p>
          <LoginForm />
          <div className='w-1/4 border border-[#e4e4e7] flex justify-center items-center rounded-md mx-auto mt-8 p-2'>
            <span className='flex items-center text-[#969696]'><FaGoogle className="me-2"/> Google</span>
          </div>
          <p className='mt-10 text-center'>
            Don't have an account? 
            <Link href='/register' className='ms-2 font-semibold'>Create account</Link>
          </p>
        </div>
      </main>
    </div>
  )
}

export default page