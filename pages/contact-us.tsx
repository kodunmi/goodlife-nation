import Link from 'next/link'
import React from 'react'
import { RiArrowRightCircleLine } from 'react-icons/ri'
import { AppLayout } from '../layouts'

const ContactUsPage = () => {
    return (
        <AppLayout>
            <div className='bg-[url("/images/general/1.jpg")] h-[500px] bg-no-repeat bg-blend-overlay bg-primary bg-cover bg-top pt-44 sm:pl-8 text-center md:text-left'>
                <h1 className="text-6xl tracking-tight font-extrabold text-slate-200 sm:text-7xl md:text-8xl">
                    <span className="block  font-['Yellowtail']">Contact Us</span>{' '}
                    <span className="block font-['Yellowtail'] text-white "></span>
                </h1>
                <ul className='flex mt-10 items-center justify-center md:justify-start'>
                    <Link href={'/'}>
                        <li className='cursor-pointer mb-4 text-slate-200 font-extrabold hover:text-slate-400 text-lg  sm:text-2xl flex items-center pr-8'>
                            <p className='mr-4 '>home</p>
                            <RiArrowRightCircleLine />
                        </li>
                    </Link>
                    <Link href={'/contact-us'}>
                        <li className='cursor-pointer mb-4 text-slate-200 font-extrabold hover:text-slate-400  text-lg  sm:text-2xl flex items-center  pr-8'>
                            <p className='mr-4 '>contact us</p>
                            <RiArrowRightCircleLine />
                        </li>
                    </Link>

                </ul>
            </div>
            <div className='px-4 sm:px-8 mb-16'>
                <div
                className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  rounded-lg shadow-lg">
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-secondary dark:text-slate-200 leading-tight">Lets talk about everything!</h2>
                        <div className=" mt-8">
                           When to send us <span className="underline">email</span> instead ?.
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <img src="/images/contact.svg" alt="contact image" />
                    </div>
                </div>
                <div className="">
                    <div>
                        <span className="uppercase text-sm font-bold">Full Name</span>
                        <input className="w-full bg-slate-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder=""/>
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm font-bold">Email</span>
                        <input className="w-full bg-slate-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"/>
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm font-bold">Message</span>
                        <textarea
                            className="w-full h-32 bg-slate-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="mt-8">
                        <button
                            className="uppercase text-sm font-bold tracking-wide bg-secondary text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
            </div>
            
        </AppLayout>
    )
}


export default ContactUsPage
