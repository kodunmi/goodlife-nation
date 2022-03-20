import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import ReactPinField from 'react-pin-field'
import { BeatLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { AuthLayout } from '../layouts'
import { ResetPasswordRequest, useResetPasswordMutation } from '../services'

const ResetPasswordPage = () => {

    // states
    const [pin, setPin] = React.useState('')

    const [formState, setFormState] = React.useState<ResetPasswordRequest>({
        otp: Number(),
        password: '',
        confirmPassword: '',
        phone: '',
    })

    // hoots



    const { push, query } = useRouter()
    const [resetPassword, { isLoading }] = useResetPasswordMutation()

    // handlers

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formState.password !== formState.confirmPassword) {
            toast.error('Password and Confirm Password do not match')
            return
        }

        try {
            const res = await resetPassword({...formState, phone: query.phone as string}).unwrap();
            console.log(res);
            toast.success(res.message)
            push('/login')
        }
        catch (err: any) {
            console.log(err);

            if (err.data && Array.isArray(err.data.message)) {
                err.data.message.forEach((msg: string) => toast.error(msg))
            } else {
                toast.error(err.data ? err.data.message : "We could not process your request")
            }
        }
    }





    return (
        <AuthLayout>
            <Head>
                <title>Reset Password - The Goodlife Nation</title>
            </Head>
            <div>
                <div className="flex items-center mt-8 mb-10">
                    <div className="flex-grow bg bg-gray-300 h-0.5"></div>
                    <div className="flex-grow-0 mx-5">Reset Password</div>
                    <div className="flex-grow bg bg-gray-300 h-0.5"></div>
                </div>
                <form onSubmit={handleResetPassword} className='w-full mt-8'>
                    <div className='w-full mb-4'>
                        <label htmlFor="otp">Your OTP</label>
                        {/* <input id='otp' type="text" className="ring-0 w-full border border-slate-200 bg-slate-900 shadow-md form-input px-4 py-3 rounded-md" placeholder='Enter the OTP sent to your number' /> */}
                        <ReactPinField onChange={(e) => setFormState({...formState, otp: Number(e)})} required length={6} className="pin-field" validate="0123456789" inputMode="numeric" />
                    </div>
                    <div className='w-full mb-4'>
                        <label htmlFor="password">Password</label>
                        <input required onChange={handleChange} id='password' type="password" name='password' className="ring-0 w-full border border-slate-200 bg-slate-900 shadow-md form-input px-4 py-3 rounded-md" placeholder='enter new password' />
                    </div>
                    <div className='w-full mb-4'>
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input required onChange={handleChange} id='confirm_password' type="password" name='confirmPassword' className="ring-0 w-full border border-slate-200 bg-slate-900 shadow-md form-input px-4 py-3 rounded-md" placeholder='re-enter new password' />
                    </div>
                    <div className="flex items-baseline justify-between">
                        <button disabled={isLoading} type='submit' className="px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-secondary"> {isLoading ? <BeatLoader color="white" size={8} /> : "Reset Password"} </button>
                        <Link href="/login">
                            <div className="text-sm text-slate-200 hover:underline">Login</div>
                        </Link>

                    </div>


                    {/* <button type="submit">Login</button> */}
                </form>
            </div>
        </AuthLayout>
    )
}

export default ResetPasswordPage