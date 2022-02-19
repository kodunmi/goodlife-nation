import Head from 'next/head'
import React, { ReactNode } from 'react'
import {Footer, NavBar} from '../components'


interface AppLayoutProps {
    children: ReactNode
  }

export const AppLayout = ({children}:AppLayoutProps) => {
  return (
    <div className=' dark:bg-slate-900 bg-white text-slate-900 dark:!text-slate-200'>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&family=Yellowtail&display=swap" rel="stylesheet"></link>
      </Head>
        <NavBar/>
        {children}
        <Footer/>
    </div>
  )
}