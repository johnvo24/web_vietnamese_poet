import { FaGoogle } from "react-icons/fa"
import LoginForm from '@/app/(auth)/login/login-form'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-3/4 h-screen m-auto py-20'>
      <main className='w-full h-full bg-backgroundAuth bg-cover bg-center flex rounded-lg shadow-lg'>
        <div className="w-3/5">
          <Image 
            src='/images/ca-dao.png'
            width={400}
            height={100}
            alt='VIPO logo'
            className=''
          />
        </div>
        <div className="w-2/5 my-auto pe-10">
          <div className='flex-col items-center p-8 bg-[#fff] rounded-lg border border-[#d9d9d9]'>
            <p className='text-4xl text-center font-bold mb-8'>VIPOE</p>
            <p className='text-lg text-start font-semibold mb-2'>Login to use application</p>
            <LoginForm />
            <div className='w-1/4 border border-[#e4e4e7] flex justify-center items-center rounded-md mx-auto mt-8 p-2'>
              <span className='flex items-center text-[#969696]'><FaGoogle className="me-2"/> Google</span>
            </div>
            <p className='mt-10 text-center'>
              Don't have an account? 
              <Link href='/register' className='ms-2 font-semibold hover:underline'>Create account</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page