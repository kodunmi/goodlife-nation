import React, { ReactNode } from 'react'
import {Footer, NavBar} from '../components'


interface AppLayoutProps {
    children: ReactNode
  }

export const AppLayout = ({children}:AppLayoutProps) => {
  return (
    <div className=' dark:bg-slate-900 bg-white text-slate-900 dark:!text-slate-200'>
        <NavBar/>
        {children}
        <Footer/>
    </div>
  )
}