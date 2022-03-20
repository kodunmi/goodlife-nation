import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Fragment, useState } from 'react'
import { RiFacebookLine, RiGoogleLine } from 'react-icons/ri'
import NumberFormat from 'react-number-format'
import { BeatLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../hooks'
import { AppLayout, AuthLayout } from '../layouts'
import { RegisterRequest, useRegisterMutation } from '../services'


export const rcList = [
  {
    id: 1,
    name: 'Royal Chapter Abuja',
    tens: [
      'sis Jane TEN',
      'bro Mike TEN',
      'Glory TEN',
      'Best TEN',
    ]
  },
  {
    id: 1,
    name: 'Royal Chapter Lagos',
    tens: [
      'bro Wale TEN',
      'sis Bibi TEN',
      'Honor TEN',
      'Yes TEN',
    ]
  },
]

function Register() {

  const [rc, setRc] = useState<{ id: string, name: string, tens: Array<string> }>()
  const [ten, setTen] = useState<string>()
  const [formState, setFormState] = React.useState<RegisterRequest>({
    phone: '',
    password: '',
    email: '',
    tenId: '',
    chapterId: '',
    fullName: '',
  })

  // hooks
  const { push } = useRouter();
  const dispatch = useAppDispatch()
  const [register, {isLoading}] = useRegisterMutation()



  // handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleRc = (value: { id: string, name: string, tens: Array<string> }) => {
    setRc(value)

    setFormState({
      ...formState,
      chapterId: value.id,
    })
  }

  const handleTen = (value: string) => {
    setTen(value)

    setFormState({
      ...formState,
      tenId: value,
    })
  }

  const handleReg = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!rc) {
      toast.error('Select your Royal Chapter')
      return
    }

    
    if (!ten) {
      toast.error('Select your TEN')
      return
    }

    try {
      const res = await register(formState).unwrap()
      
      toast.success('Registration Successful')
      push({
        pathname: '/verify-phone',
        query: {
          phone: formState.phone,
        }
      })
    }catch(err:any){
      if(err.data && Array.isArray(err.data.message)){
        err.data.message.forEach((msg:string) => toast.error(msg))
      }else{
        toast.error(err.data ? err.data.message : "We could not process your request")
      }
    }



    console.log(formState);
    
  }

  console.log(rc);

  return (
    <AuthLayout>
      <Head>
        <title>Register - The Goodlife Nation</title>
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
          <div className="flex-grow-0 mx-5 text">Register with form</div>
          <div className="flex-grow bg bg-gray-300 h-0.5"></div>
        </div>



        <form onSubmit={handleReg} className='w-full mt-8'>
          <div className='w-full mb-4'>
            <label htmlFor="name">Name</label>
            <input required id='text' type="text" name='fullName' onChange={handleChange} className="ring-0 w-full border border-slate-200 bg-slate-900 shadow-md form-input px-4 py-3 rounded-md" placeholder='enter your full name' />
          </div>
          <div className='w-full mb-4'>
            <label htmlFor="email">Email</label>
            <input required id='email' type="email" name='email' onChange={handleChange} className="ring-0 w-full border border-slate-200 bg-slate-900 shadow-md form-input px-4 py-3 rounded-md" placeholder='enter your email' />
          </div>
          <div className='w-full mb-4'>
            <label htmlFor="phone">Phone</label>
            <NumberFormat
            className="ring-0 w-full border border-slate-200 bg-slate-900  shadow-md form-input px-4 py-3 rounded-md"
              format="+234 (###) ### ### ##"
              mask="_"
              onChange={handleChange}
              id='phone'
              name='phone'
              required
          />
            {/* <input required id='phone' type="text" name='phone' onChange={handleChange} className="ring-0 w-full border border-slate-200 bg-slate-900 shadow-md form-input px-4 py-3 rounded-md" placeholder='enter your phone number' /> */}
          </div>
          <div className='w-full mb-4'>
            <label htmlFor="password">Password</label>
            <input required id='password' type="password" name='password' onChange={handleChange} className="ring-0 w-full border border-slate-200 bg-slate-900 shadow-md form-input px-4 py-3 rounded-md" placeholder='enter your password' />
          </div>
          <div className='w-full mb-4'>
            <label >Royal Chapter</label>
            <Listbox value={rc} onChange={handleRc}>
              <div className="relative">
                <Listbox.Button className="relative h-12 w-full py-2 pl-3 pr-10 text-left bg-slate-900 border border-slate-200  rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                  <span className="block truncate">{rc ? rc.name : "Select RC"}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-slate-900 border border-slate-200   rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {rcList.map((rc, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-amber-900 bg-primary' : 'text-slate-200'
                          }`
                        }
                        value={rc}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block text-slate-200 truncate ${selected ? 'font-medium' : 'font-normal'
                                }`}
                            >
                              {rc.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon className="w-5 h-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div className='w-full mb-4'>
            <label>TEN</label>
            <Listbox value={ten} onChange={handleTen}>
              <div className="relative">
                <Listbox.Button className="relative h-12 w-full py-2 pl-3 pr-10 text-left bg-slate-900 border-slate-200 border rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                  <span className="block truncate">{ten ?? 'Select TEN'}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-slate-900 border border-slate-200 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {rc?.tens.map((ten, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-amber-900 bg-primary' : 'text-slate-200'
                          }`
                        }
                        value={ten}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block text-slate-200 truncate ${selected ? 'font-medium' : 'font-normal'
                                }`}
                            >
                              {ten}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon className="w-5 h-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div className="flex items-baseline justify-between">
            <button className="px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-secondary">{isLoading?  <BeatLoader color='white' size={8}/> : 'Register'}</button>
            <Link href='/login'>
            <div className="text-sm text-slate-200 hover:underline">Already have an account ?</div>

            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Register