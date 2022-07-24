import { TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types'
import Head from 'next/head'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import React from 'react'
// import ReactPinField from 'react-pin-field'
import { BeatLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { AuthLayout } from '../layouts'
import { useResendOtpMutation, useVerifyPhoneMutation, VerifyPhoneRequest } from '../services'
import dynamic from "next/dynamic";
const ReactPinField = dynamic(() => import("react-pin-field"), { ssr: false });

const VerifyPhonePage = () => {

    // states
    const [pin, setPin] = React.useState('')
    const [counter, setCounter] = React.useState(59);


    

    // hoots
    const { push, query } = useRouter()
    const [verify, {isLoading}] = useVerifyPhoneMutation()
    const [resendOtp, {isLoading: isResendOtpLoading}] = useResendOtpMutation()

    React.useEffect(() => {
        const timer = counter > 0 && global.setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer as TimeoutId);
    }, [counter]);

   

    const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data: VerifyPhoneRequest = {
            otp: Number(pin),
            phone: query.phone as string,
        }

        if(pin.length > 6){
            toast.error('Please enter a valid 6 digit pin')
            return
        }

        try {
            const res = await verify(data).unwrap();
            console.log(res);
            toast.success(res.message)
            push('/login')
        }
        catch (err:any) {
            console.log(err);
            if(err.data && Array.isArray(err.data.message)){
                err.data.message.forEach((msg:string) => toast.error(msg))
              }else{
                toast.error(err.data ? err.data.message : "We could not process your request")
              }
        }

    }

    const handleResendOtp = async () => {
        try {
            setCounter(59)
            const res = await resendOtp(query.phone as string).unwrap();
            console.log(res);
            toast.success('Otp resent successfully')
        }
        catch (err:any) {
            console.log(err);

            if(err.data && Array.isArray(err.data.message)){

                err.data.message.forEach((msg:string) => toast.error(msg))
                }else{
                    toast.error(err.data ? err.data.message : "We could not process your request")
                }
        }
    }
    return (
        <AuthLayout>
            <Head>
                <title>Verify Phone - The Good-life Nation</title>
            </Head>
            <div>
                <div className="flex items-center mt-8 mb-10">
                    <div className="flex-grow bg bg-gray-300 h-0.5"></div>
                    <div className="flex-grow-0 mx-5">Verify Phone Number</div>
                    <div className="flex-grow bg bg-gray-300 h-0.5"></div>
                </div>

                <form onSubmit={handleVerify} className='w-full mt-2'>
                    <div className='w-full mb-4'>
                        <label htmlFor="otp">Your OTP</label>
                        {/* <input id='otp' type="text" className="ring-0 w-full border border-slate-200 bg-slate-900 shadow-md form-input px-4 py-3 rounded-md" placeholder='Enter the OTP sent to your number' /> */}
                        <ReactPinField required onChange={(v) =>setPin(v) } length={6} className="pin-field" validate="0123456789" inputMode="numeric" />
                    </div>

                    <div className="flex items-baseline justify-between">
                        <button disabled={isLoading} type='submit' className="px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-secondary">{isLoading ? <BeatLoader color='white' size={8} /> : "Verify Phone" }</button>

                        <button type='button' disabled={isResendOtpLoading || counter > 1}  onClick={() => handleResendOtp()} className={`text-sm ${counter < 1 ? 'text-slate-200': 'text-red-500'}  cursor-pointer `}>{counter < 1 ? 'Resend OTP' : `Resend OTP in ${counter}`}</button>


                    </div>


                    {/* <button type="submit">Login</button> */}
                </form>
            </div>
        </AuthLayout>
    )
}

export default VerifyPhonePage