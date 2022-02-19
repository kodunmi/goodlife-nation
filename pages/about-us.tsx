import Link from 'next/link'
import React from 'react'
import { RiArrowRightCircleLine } from 'react-icons/ri'
import { AppLayout } from '../layouts'

function AboutUsPage() {
    return (
        <AppLayout>
            <div className='bg-[url("/images/rpn/5.jpg")] h-[500px] bg-no-repeat bg-blend-overlay bg-primary bg-cover bg-top pt-44 sm:pl-8 text-center md:text-left'>
                <h1 className="text-6xl tracking-tight font-extrabold text-slate-200 sm:text-7xl md:text-8xl">
                    <span className="block  font-['Yellowtail']">About Us</span>{' '}
                    <span className="block font-['Yellowtail'] text-white "></span>
                </h1>
                <ul className='flex mt-10 items-center justify-center md:justify-start'>
                    <Link href={'/'}>
                        <li className='cursor-pointer mb-4 text-slate-200 font-extrabold hover:text-slate-400 text-lg  sm:text-2xl flex items-center pr-8'>
                            <p className='mr-4 '>home</p>
                            <RiArrowRightCircleLine />
                        </li>
                    </Link>
                    <Link href={'/services'}>
                        <li className='cursor-pointer mb-4 text-slate-200 font-extrabold hover:text-slate-400  text-lg  sm:text-2xl flex items-center  pr-8'>
                            <p className='mr-4 '>about us</p>
                            <RiArrowRightCircleLine />
                        </li>
                    </Link>

                </ul>
            </div>
            <div className='mt-32 mb-20 max-w-5xl mx-auto align-middle'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='bg-[url("/images/rpn/5.jpg")] min-h-[400px] rounded-lg bg-cover'>
                        <p>Reverend</p>
                        
                    </div>
                    <div className='bg-[url("/images/rpn/5.jpg")] rounded-lg bg-cover'>
                        <h1 className="text-2xl tracking-tight font-extrabold text-slate-200">
                            <span className="block  font-['Yellowtail']">Rev. Mrs P.M Utomi</span>{' '}
                            <span className="block font-['Yellowtail'] text-white ">Founder Goodlife Nation</span>
                        </h1>
                    </div>

                </div>
            </div>
        </AppLayout>
    )
}

export default AboutUsPage