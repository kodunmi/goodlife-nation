import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { RiFacebookBoxLine, RiFacebookLine, RiGoogleLine } from 'react-icons/ri'
import { AuthLayout } from '../layouts'

const LoginPage = () => {
  return (
    <AuthLayout>
      <Head>
        <title>Login - The Goodlife Nation</title>
      </Head>
      <div>
        <div className='grid grid-cols-2 mt-4 w-full mb-8 gap-3'>
          <div className='shadow-lg flex items-start justify-center cursor-pointer hover:scale-105 duration-300 active:shadow-sm border rounded-lg py-2 text-center'>
            <RiGoogleLine size={20} />
          </div>
          <div className='shadow-lg flex items-start justify-center cursor-pointer hover:scale-105 duration-300 active:shadow-sm border rounded-lg py-2'>
            <RiFacebookLine size={20} />
          </div>
        </div>

        
          <div className="flex items-center">
            <div className="flex-grow bg bg-gray-300 h-0.5"></div>
            <div className="flex-grow-0 mx-5 ">login with form</div>
            <div className="flex-grow bg bg-gray-300 h-0.5"></div>
          </div>


       
        <form className='w-full mt-8'>
          <div className='w-full mb-4'>
            <label  htmlFor="email">Email</label>
            <input id='email' type="email" className="ring-0 w-full border border-slate-200  shadow-md form-input bg-slate-900 text-gray-300 px-4 py-3 rounded-md" placeholder='enter your email' />
          </div>
          <div className='w-full mb-4'>
            <label  htmlFor="password">Password</label>
            <input id='password' type="password" className="ring-0 w-full border border-slate-200 shadow-md form-input bg-slate-900 text-gray-300 px-4 py-3 rounded-md" placeholder='enter your password' />
          </div>
          <div className="flex items-baseline justify-between">
            <button className="px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-secondary">Login</button>
            <Link href="/forget-password">
              <div  className="text-sm text-slate-200 hover:underline">Forgot password?</div>
            </Link>
            
          </div>


          {/* <button type="submit">Login</button> */}
        </form>
      </div>
    </AuthLayout>
  )
}

export default LoginPage