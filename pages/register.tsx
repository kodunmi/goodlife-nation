import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import React, { Fragment, useState } from 'react'
import { RiFacebookLine, RiGoogleLine } from 'react-icons/ri'
import { AppLayout, AuthLayout } from '../layouts'


const rcList = [
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

  const [rc, setRc] = useState<{ id: number, name: string, tens: Array<string> }>()
  const [ten, setTen] = useState<string>()

  console.log(rc);
  
  return (
    <AuthLayout>
      <Head>
        <title>Register - The Goodlife Nation</title>
      </Head>
      <div>
        <div className='grid grid-cols-2 mt-4 w-full mb-8 gap-3'>
          <div className='shadow-lg flex items-start justify-center text-primary cursor-pointer hover:bg-gray-200 duration-300 active:shadow-sm bg-gray-100 rounded-lg py-2 text-center'>
            <RiGoogleLine size={20} />
          </div>
          <div className='shadow-lg flex items-start justify-center text-primary cursor-pointer hover:bg-gray-200 duration-300 active:shadow-sm bg-gray-100 rounded-lg py-2'>
            <RiFacebookLine size={20} />
          </div>
        </div>


        <div className="flex items-center">
          <div className="flex-grow bg bg-gray-300 h-0.5"></div>
          <div className="flex-grow-0 mx-5 text text-gray-600">Register with form</div>
          <div className="flex-grow bg bg-gray-300 h-0.5"></div>
        </div>



        <form className='w-full mt-8'>
          <div className='w-full mb-4'>
            <label className='text-primary ' htmlFor="name">Name</label>
            <input id='text' type="name" className="ring-0 w-full border-0 bg-gray-100 shadow-md form-input px-4 py-3 rounded-md" placeholder='enter your full name' />
          </div>
          <div className='w-full mb-4'>
            <label className='text-primary ' htmlFor="email">Email</label>
            <input id='email' type="email" className="ring-0 w-full border-0 bg-gray-100 shadow-md form-input px-4 py-3 rounded-md" placeholder='enter your email' />
          </div>
          <div className='w-full mb-4'>
            <label className='text-primary' htmlFor="password">Password</label>
            <input id='password' type="password" className="ring-0 w-full border-0 bg-gray-100 shadow-md form-input px-4 py-3 rounded-md" placeholder='enter your password' />
          </div>
          <div className='w-full mb-4'>
            <label className='text-primary'>Royal Chapter</label>
            <Listbox value={rc} onChange={setRc}>
              <div className="relative">
                <Listbox.Button className="relative h-12 w-full py-2 pl-3 pr-10 text-left bg-gray-100  rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                  <span className="block truncate">{rc?.name}</span>
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
                  <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white   rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {rcList.map((rc, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                          }`
                        }
                        value={rc}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block text-gray-600 truncate ${selected ? 'font-medium' : 'font-normal'
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
            <label className='text-primary'>TEN</label>
            <Listbox value={ten} onChange={setTen}>
              <div className="relative">
                <Listbox.Button className="relative h-12 w-full py-2 pl-3 pr-10 text-left bg-gray-100  rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                  <span className="block truncate">{ten}</span>
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
                  <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white    rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {rc?.tens.map((ten, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                          }`
                        }
                        value={ten}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block text-gray-600 truncate ${selected ? 'font-medium' : 'font-normal'
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
            <button className="px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-secondary">Register</button>
            <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
          </div>


          {/* <button type="submit">Login</button> */}
        </form>
      </div>
    </AuthLayout>
  )
}

export default Register