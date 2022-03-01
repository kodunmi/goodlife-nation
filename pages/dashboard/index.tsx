import React from 'react'
import { AppLayout } from '../../layouts'

const UserDashboardPage = () => {
  return (
    <AppLayout>
      <div className='bg-[url("/images/rpn/5.jpg")] bg-no-repeat h-80 bg-blend-overlay relative bg-primary bg-cover bg-top pt-44 sm:pl-8 text-center md:text-left'>
                <div className='border  rounded-full h-32 w-32 overflow-hidden absolute -bottom-16 left-1/2 -translate-x-1/2'>
                  <img src="/images/rpn/5.jpg" alt="" />
                </div>
               
            </div>
    </AppLayout>
  )
}

export default UserDashboardPage