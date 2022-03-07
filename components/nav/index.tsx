import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { RiTwitterFill, RiFacebookFill, RiInstagramFill, RiYoutubeFill } from 'react-icons/ri'
import { useDarkMode } from '../../hooks'
import { NavLink } from '..'
import { useRouter } from 'next/router'

export const navigation = [
    { name: 'Home', href: '/', active: true },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
]

export const socialIcons = [
    { name: 'Facebook', href: '#', icon: <RiFacebookFill /> },
    { name: 'Twitter', href: '#', icon: <RiTwitterFill /> },
    { name: 'Instagram', href: '#', icon: <RiInstagramFill /> },
    { name: 'Youtube', href: '#', icon: <RiYoutubeFill /> },
]

export const NavBar = () => {

    const [colorTheme, setTheme] = useDarkMode();

  let   setTheme2 = setTheme as React.Dispatch<any>;

  const router = useRouter()

    return (

        <Popover>
            <nav className="bg-black/20 fixed top-0 w-full backdrop-blur-sm dark:bg-slate-900/80 shadow-lg z-30">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div>
                                {/* Website Logo  */}
                                <a href="/" className="flex items-center py-4 px-2">
                                    <img src="/logo.png" alt="Logo" className="h-12 w-12 mr-2" />
                                </a>
                            </div>
                            {/* Primary Navbar items */}
                            <div className="hidden md:flex items-center space-x-1">
                                {
                                    navigation.map(({ name, href, active }, index) =>

                                    <NavLink href={href}>
                                         <a key={`snsn-${index}`} className={`px-2 text-white font-semibold hover:text-primary transition duration-300`}>{name}</a>
                                    </NavLink>
                                    
                                    )

                                }
                            </div>
                        </div>
                        {/* Secondary Navbar items  */}
                        <div className="hidden md:flex items-center space-x-3 ">
                            {
                                socialIcons.map(({ name, href, icon }, index) => <a key={`kwkw${index}`} href={href} className="flex items-center py-4 px-2 text-white font-semibold hover:text-[#0d2a66] transition duration-300">{icon}</a>)
                            }
                            <div onClick={() => router.push('/login')}  className="py-2 px-3 cursor-pointer font-medium text-white rounded-xl hover:bg-[#0d2a66] hover:text-white transition duration-300">Log In</div>
                            <div onClick={() => router.push('/register')}   className="py-2 px-3 cursor-pointer font-medium text-white bg-[#0d2a66] rounded-xl hover:bg-[#0d2a66] transition duration-300">Register</div>
                            {colorTheme === "light" ? (
                                <svg
                                    onClick={() => setTheme2("light")}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    onClick={() => setTheme2("dark")}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                            )}
                        </div>
                        {/* Mobile menu button  */}
                        <div className="md:hidden flex items-center">
                            <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-[#0d2a66] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0d2a66]">
                                <span className="sr-only">Open main menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                    </div>
                </div>
            </nav>
            <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="fixed z-40 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                    <div className="rounded-lg shadow-md bg-white dark:bg-slate-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <div>
                                <img
                                    className="h-8 w-auto"
                                    src="/logo.png"
                                    alt=""
                                />
                            </div>
                            <div className="-mr-2">
                                <Popover.Button className="bg-white dark:bg-slate-900 rounded-md p-2 inline-flex items-center justify-center text-slate-500 dark:text-slate-200 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close main menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-slate-200 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className='flex justify-around px-7 text-[#0d2a66]'>
                            {
                                socialIcons.map(({ name, href, icon }, index) => <a key={`wwwk${index}`} href={href} className="flex items-center py-4 px-2 text-[#0d2a66] dark:text-slate-200 font-semibold hover:text-[#0d2a66] transition duration-300">{icon}</a>)
                            }
                        </div>

                        <div>
                        <div className='flex'>
                                <div
                                   onClick={()=> router.push('/login')}
                                    className="block w-full px-5 py-3 text-center font-medium text-secondary dark:text-slate-200  dark:bg-slate-900 bg-gray-50 hover:bg-gray-100"
                                >
                                    Login


                                </div>
                                <div
                                    onClick={()=> router.push('/register')}
                                    className="block w-full px-5 py-3 text-center font-medium text-secondary dark:text-slate-200  dark:bg-slate-900 bg-gray-50 hover:bg-gray-100"
                                >
                                    Register


                                </div>
                            </div>
                        <div className='text-center mb-4 mt-4 flex justify-center'>
                            {colorTheme === "light" ? (
                                <svg
                                    onClick={() => setTheme2("light")}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    onClick={() => setTheme2("dark")}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                            )}
                        </div>
                        
                        </div>
                        
                        

                        

                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>


    )
}