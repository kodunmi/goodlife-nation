import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import NumberFormat from 'react-number-format'
import { BeatLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { AuthLayout } from '../layouts'
import { useSendResetPasswordMutation } from '../services'

const ForgetPasswordPage = () => {
  const [phone, setPhone] = useState('')
  const [sendSms, { isLoading }] = useSendResetPasswordMutation()

  const { push } = useRouter()

  const handleSendPasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log(phone.replace(/[^A-Z0-9+]+/ig, "").slice(0, 4) +  phone.replace(/[^A-Z0-9+]+/ig, "").slice(5,  phone.replace(/[^A-Z0-9+]+/ig, "").length));
    // return

    try {
      const res = await sendSms(phone).unwrap();
      toast.success(res.message)

      // push('/reset-password')

      push({
        pathname: '/reset-password',
        query: {
          phone: phone
        }
      })

    } catch (err: any) {
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
        <title>Forget Password- The Goodlife Nation</title>
      </Head>
      <div>

        <div className="flex items-center mt-8 mb-10">
          <div className="flex-grow bg bg-gray-300 h-0.5"></div>
          <div className="flex-grow-0 mx-5 ">Forget Password</div>
          <div className="flex-grow bg bg-gray-300 h-0.5"></div>
        </div>

        <form onSubmit={handleSendPasswordReset} className='w-full mt-8'>
          <div className='w-full mb-4'>
            <label htmlFor="phone">Phone Number</label>
            {/* <input required onChange={(e) => setPhone(e.currentTarget.value)} id='phone' type="text" className="ring-0 w-full border border-slate-200 bg-slate-900  shadow-md form-input px-4 py-3 rounded-md" placeholder='enter your phone number' /> */}
            <NumberFormat
              className="ring-0 w-full border border-slate-200 bg-slate-900  shadow-md form-input px-4 py-3 rounded-md"
              format="+234 (###) ### ### ##"
              mask="_"
              onChange={(e: any) => setPhone(e.currentTarget.value)}
              id='phone'
              required
            />
          </div>
          <div className="flex items-baseline justify-between">
            <button disabled={isLoading} type='submit' className="px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-secondary">{isLoading ? <BeatLoader color='white' size={8} /> : 'Forget Password'} </button>
            <Link href="/login">
              <div className="text-sm text-slate-200 hover:underline">Login?</div>
            </Link>

          </div>


          {/* <button type="submit">Login</button> */}
        </form>
      </div>
    </AuthLayout>
  )
}

export default ForgetPasswordPage