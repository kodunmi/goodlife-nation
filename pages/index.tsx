import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { RiArrowRightCircleLine } from 'react-icons/ri'
import { Header, Messages, VMO } from '../components'
import { AppLayout } from '../layouts'


const Home: NextPage = () => {
  return (
    <AppLayout>
      <Head>
        <title>The Goodlife Nation</title>
      </Head>
      <Header />
      <div>
        <div className='px-5 md:px-10 mt-32 flex justify-center'>
          <div className='max-w-5xl md:grid-cols-2 grid grid-cols-1 gap-6'>
            <img src="/images/1.jpg" alt="" className='rounded-3xl ' />
            <div className='mt-4 mb-10 md:mb-0'>
              <p className='text-primary text-sm mb-3 dark:!text-slate-200'><b>TGN</b> - a people a coming</p>
              <h3 className='text-secondary font-bold text-3xl mb-3 dark:!text-slate-200' >The Goodlife Family Church</h3>
              <hr />
              <p className='text-secondary text-lg mb-10 mt-3 dark:!text-slate-200'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt numquam nam facere corporis! Temporibus ipsam quaerat natus vero delectus.
              </p>
              <a href="" className='px-10 py-3 text-sm bg-primary text-white rounded-lg hover:bg-secondary ease-in duration-300'>
                Contact Us
              </a>
            </div>

          </div>
        </div>
        <VMO />
        <Messages />
        <div>
          <div className="w-full text-center bg-cover bg-no-repeat bg-top" style={{ backgroundImage: "url('/images/rpn/3.jpg')" }}>
            <div className='py-32'>
              <h2 className='mt-10 mb-4 text-4xl text-center italic tracking-tight font-extrabold text-slate-200 sm:text-5xl md:text-6xl'>Rev. P.M Utomi</h2>
              <p className='text-center text-white inline-block align-middle text-lg max-w-md' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nesciunt at dolores laborum corporis dolore quae blanditiis incidunt, iure fugiat error minus .</p>
              <div className='mt-20'>
                <a className='inline-block  px-6 py-2 border-2 mr-3 border-white text-white font-medium text-xs leading-tight uppercase rounded-xl hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out' href=''>
                  RPN TODAY
                </a>

                <a className='inline-block px-6 py-2 border-2 border-white  text-white font-medium text-xs leading-tight uppercase rounded-xl hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out' href=''>
                  QUOTES
                </a>

              </div>

            </div>

          </div>
        </div>
        <div className='px-5 md:px-10 mt-32 flex justify-center'>
        <div className='mb-16 pb-8  max-w-5xl md:grid-cols-2 grid grid-cols-1 gap-6'>
          
          <div className='mt-4 mb-10 md:mb-0'>
            <p className='text-primary text-sm mb-3 dark:!text-slate-200'><b>TGN</b> - a people a coming</p>
            <h3 className='text-secondary font-bold text-3xl mb-3 dark:!text-slate-200 ' >Walk With Us And Work With Us</h3>
            <hr />
           <ul className='mt-4'>
             <li className='cursor-pointer mb-4 transition duration-150 ease-in-out hover:scale-105 text-blue-700 hover:text-primary dark:text-slate-200 text-2xl flex items-center justify-between pr-8'>
               <p className='mr-8 '>OUR SERVICES</p>
               
                <RiArrowRightCircleLine className='self-end' />


               </li>
               <li className='cursor-pointer mb-4  transition duration-150 ease-in-out hover:scale-105 text-blue-700 hover:text-primary dark:text-slate-200 text-2xl flex items-center justify-between pr-8'>
               <p className='mr-8 '>CAMPUS COMMUNITY</p>
               
                <RiArrowRightCircleLine/>


               </li>
               <li className='cursor-pointer mb-4  transition duration-150 ease-in-out hover:scale-105 text-blue-700 hover:text-primary dark:text-slate-200 text-2xl flex items-center justify-between pr-8'>
               <p className='mr-8 '>MERCY SEAT</p>
               
                <RiArrowRightCircleLine/>


               </li>
               <li className='cursor-pointer mb-4  transition duration-150 ease-in-out hover:scale-105 text-blue-700 hover:text-primary dark:text-slate-200 text-2xl flex items-center justify-between pr-8'>
               <p className='mr-8 '>BOWELS OF COMPASSION</p>
               
                <RiArrowRightCircleLine/>


               </li>
            
           </ul>
            
          </div>
          <div className="g-cover bg-no-repeat bg-top rounded-2xl md:h-full h-80 " style={{ backgroundImage: "url('/images/rpn/4.jpg')" }}>

          </div>
          {/* <img src="/images/rpn/1.jpg" alt="" className='rounded-3xl ' /> */}
         
        </div>
      </div>
      </div>


    </AppLayout>
  )
}

export default Home
