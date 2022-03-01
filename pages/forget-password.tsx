import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { AuthLayout } from '../layouts'

const ForgetPasswordPage = () => {
  return (
    <AuthLayout>
      <Head>
        <title>Forget Password- The Goodlife Nation</title>
      </Head>
      <div>
        

        
          <div className="flex items-center mt-8 mb-20">
            <div className="flex-grow bg bg-gray-300 h-0.5"></div>
            <div className="flex-grow-0 mx-5 ">Forget Password</div>
            <div className="flex-grow bg bg-gray-300 h-0.5"></div>
          </div>


       
        <form className='w-full mt-8'>
          <div className='w-full mb-4'>
            <label htmlFor="email">Email</label>
            <input id='email' type="email" className="ring-0 w-full border border-slate-200 bg-slate-900  shadow-md form-input px-4 py-3 rounded-md" placeholder='enter your email' />
          </div>
         
          <div className="flex items-baseline justify-between">
            <button className="px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-secondary">Forget Password</button>
            <Link href="/login">
            <div  className="text-sm text-slate-200 hover:underline">Login?</div>
            </Link>
            
          </div>


          {/* <button type="submit">Login</button> */}
        </form>
      </div>
    </AuthLayout>
  )
}

export default ForgetPasswordPage