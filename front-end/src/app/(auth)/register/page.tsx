import RegisterForm from '@/app/(auth)/register/register-form'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-3/4 h-screen m-auto py-20'>
      <main className='w-full h-full flex bg-backgroundAuth2 bg-cover bg-center rounded-lg shadow-md'>
        <div className="w-3/5">
          <Image 
            src='/images/ca-dao.png'
            width={400}
            height={100}
            alt='VIPO logo'
            className=''
          />
        </div>
        <div className='w-2/5 my-auto pe-10'>
          <div className='flex-col items-center bg-white p-8 rounded-lg border border-[#d9d9d9]'>
            <p className='text-4xl text-center font-bold mb-8'>VIPOE</p>
            <p className='text-lg text-start font-semibold mb-2'>Create account</p>
            <RegisterForm />
            <p className='mt-6 text-center'>
              Already have an account? 
              <Link href='/login' className='ms-2 font-semibold'>Login</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page