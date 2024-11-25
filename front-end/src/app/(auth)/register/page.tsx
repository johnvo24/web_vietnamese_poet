import RegisterForm from '@/app/(auth)/register/register-form'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-3/4 h-screen m-auto py-20'>
      <main className='w-full h-full flex bg-backgroundRegister bg-cover bg-bottom rounded-lg shadow-md'>
        <div className='w-2/5 bg-white rounded-lg border border-[#d9d9d9] px-10 pt-14'>
          <p className='text-3xl font-semibold mb-8'>Create account</p>
          <RegisterForm />
          <p className='mt-10 text-center'>
            Already have an account? 
            <Link href='/login' className='ms-2 font-semibold'>Login</Link>
          </p>
        </div>
        <div className="w-3/5 flex justify-start items-end">
          <Image 
            src='/images/ca-dao-2.png'
            width={400}
            height={100}
            alt='VIPO logo'
            className='mt-8 me-8'
          />
        </div>
      </main>
    </div>
  )
}

export default page