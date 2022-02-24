import Head from 'next/head'
import React, { ReactNode } from 'react'
import { socialIcons } from '../components'

interface AppLayoutProps {
    children: ReactNode
}

export const AuthLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className='flex h-screen w-screen'>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&family=Yellowtail&display=swap" rel="stylesheet"></link>

            </Head>
            <div className='w-full md:w-5/12 py-6 overflow-y-auto px-4'>
                <img src="/logo.png" alt="" className='w-16 h-16' />
                {children}
            </div>

            <div className='text-white hidden md:flex flex-col justify-center items-center w-7/12 bg-[url("/images/rpn/4.jpg")] bg-blend-overlay bg-primary bg-cover bg-no-repeat'>
                <h3 className="font-['Yellowtail'] text-6xl tracking-tight font-extrabold  sm:text-7xl md:text-8xl text-center"> The <br /> Goodlife <br /> Nation</h3>
                <p className='text-xl font-bold'>Extra-ordinary people led by the spirit of God</p>
                <div className='flex justify-around px-7 text-[#0d2a66]'>
                    {
                        socialIcons.map(({ name, href, icon }, index) => <a key={`wwwk${index}`} href={href} className="flex items-center py-4 px-2  text-slate-200 font-semibold hover:text-primary transition duration-300 text-3xl">{icon}</a>)
                    }
                </div>


            </div>
        </div>
    )
}
