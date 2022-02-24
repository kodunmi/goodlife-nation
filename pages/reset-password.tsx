import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { AuthLayout } from '../layouts'

const ResetPasswordPage = () => {
    return (
        <AuthLayout>
            <Head>
                <title>Reset Password - The Goodlife Nation</title>
            </Head>
            <div>



                <div className="flex items-center mt-8 mb-20">
                    <div className="flex-grow bg bg-gray-300 h-0.5"></div>
                    <div className="flex-grow-0 mx-5 text-gray-600">Reset Password</div>
                    <div className="flex-grow bg bg-gray-300 h-0.5"></div>
                </div>



                <form className='w-full mt-8'>
                    <div className='w-full mb-4'>
                        <label className='text-primary ' htmlFor="password">Password</label>
                        <input id='password' type="password" className="ring-0 w-full border-0 bg-gray-100 shadow-md form-input px-4 py-3 rounded-md" placeholder='enter new password' />
                    </div>
                    <div className='w-full mb-4'>
                        <label className='text-primary' htmlFor="confirm_password">Confirm Password</label>
                        <input id='confirm_password' type="password" className="ring-0 w-full border-0 bg-gray-100 shadow-md form-input px-4 py-3 rounded-md" placeholder='re-enter new password' />
                    </div>
                    <div className="flex items-baseline justify-between">
                        <button className="px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-secondary">Reset Password</button>
                        <Link href="/login">
                            <div className="text-sm text-primary hover:underline">Login</div>
                        </Link>

                    </div>


                    {/* <button type="submit">Login</button> */}
                </form>
            </div>
        </AuthLayout>
    )
}

export default ResetPasswordPage