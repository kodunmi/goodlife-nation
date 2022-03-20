import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { RiFacebookBoxLine, RiFacebookLine, RiGoogleLine } from 'react-icons/ri'
import { useAppDispatch } from '../hooks'
import { AuthLayout } from '../layouts'
import { setCredentials } from '../redux'
import { LoginRequest, useLoginMutation } from '../services'
import { toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners'
import NumberFormat from 'react-number-format'

const LoginPage = () => {

  // states
  const [login, { isLoading }] = useLoginMutation();
  const [formState, setFormState] = React.useState<LoginRequest>({
    phone: '',
    password: '',
  })

  // hoots
  const { push } = useRouter();
  const dispatch = useAppDispatch()

  // handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
     const res = await login(formState).unwrap();
     dispatch(setCredentials({token: res.data.token, user: res.data.user}))
     toast.success('Login Successful')
      push('/dashboard')
    }catch(err:any){
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

        <form  onSubmit={handleLogin} className='w-full mt-8' >
          <div className='w-full mb-4'>
            <label htmlFor="phone">Phone</label>
            {/* <input onChange={handleChange} required id='phone' type="text" name='phone' className="ring-0 w-full border border-slate-200  shadow-md form-input bg-slate-900 text-gray-300 px-4 py-3 rounded-md" placeholder='enter your phone number' /> */}
            <NumberFormat
            className="ring-0 w-full border border-slate-200 bg-slate-900  shadow-md form-input px-4 py-3 rounded-md"
              format="+234 (###) ### ### ##"
              mask="_"
              onChange={handleChange}
              id='phone'
              name='phone'
              required
          />
          </div>
          <div className='w-full mb-4'>
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} required id='password' type="password" name='password' className="ring-0 w-full border border-slate-200 shadow-md form-input bg-slate-900 text-gray-300 px-4 py-3 rounded-md" placeholder='enter your password' />
          </div>
          <div className="flex items-baseline justify-between">
            <button className="px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-secondary" type='submit' >{isLoading?  <BeatLoader color='white' size={8}/> : 'Login'}</button>
            <Link href="/forget-password">
              <div className="text-sm text-slate-200 hover:underline">Forgot password?</div>
            </Link>

          </div>


          {/* <button type="submit">Login</button> */}
        </form>
      </div>
    </AuthLayout>
  )
}

export default LoginPage