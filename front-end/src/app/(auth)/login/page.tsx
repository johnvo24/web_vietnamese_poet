import LoginForm from '@/app/(auth)/login/login-form'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen bg-backgroundAuth bg-cover flex justify-center items-center'>
      <div className='flex-col items-center p-8 bg-[#fff] rounded-lg border border-[#d9d9d9]'>
            <p className='text-4xl text-center font-bold mb-8'>VIPOE</p>
            <p className='text-md text-start font-semibold mb-2'>Login to use application</p>
            <LoginForm />
            <p className='mt-6 text-center'>
              Don't have an account? 
              <Link href='/register' className='ms-2 font-semibold hover:underline'>Create account</Link>
            </p>
          </div>
    </div>
  )
}

export default page