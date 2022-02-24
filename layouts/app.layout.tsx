import Head from 'next/head'
import React, { Fragment, ReactNode, useState } from 'react'
import { Footer, NavBar, socialIcons } from '../components'
import { Dialog, Transition } from '@headlessui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { RiCloseCircleLine } from 'react-icons/ri';
import '../utils'

interface AppLayoutProps {
  children: ReactNode
}


export const AppLayout = ({ children }: AppLayoutProps) => {
  let [isOpen, setIsOpen] = useState(false)
  function MyDialog() {
    return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => { }}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="overflow-x-hidden overflow-y-scroll md:mt-24 inline-block w-full max-w-md py-6 my-8 text-left align-middle transition-all transform bg-white dark:bg-slate-900 dark:border dark:border-slate-600 shadow-xl max-h-[50%] rounded-lg">
                <div className='flex justify-end mb-7 mr-3 '>
                  <RiCloseCircleLine onClick={() => setIsOpen(false)} className='cursor-pointer dark:text-white text-primary' size={24} />
                </div>

                {/* <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div> */}
                <Swiper
                  slidesPerView={1}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <div>
                      <h3 className='text-center text-2xl font-bold mb-4' dangerouslySetInnerHTML={{ __html: "Scripture for the day".split('').randomColor() }}></h3>
                      <img src="/images/general/bible.jpeg" alt="" />
                      <div className='flex justify-center mt-5'>
                        {/* share icon */}
                        <div className='flex justify-center items-center mr-4'>
                          {
                            socialIcons.map(({ name, href, icon }, index) => <a key={`kwkw${index}`} href={href} className="flex items-center py-4 px-2 text-primary dark:text-slate-200 font-semibold hover:text-blue-300 transition duration-300">{icon}</a>)
                          }


                        </div>
                        <div>

                        </div>

                      </div>
                      <div className="w-full text-center m-auto text-primary dark:text-slate-200 font-semibold hover:text-blue-300 transition duration-300">
                        download
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div>
                      <h3 className='text-center text-2xl font-bold mb-4' dangerouslySetInnerHTML={{ __html: "Quote for the day".split('').randomColor() }}></h3>
                      <img src="/images/general/quote.jpg" alt="" />
                      <div className='flex justify-center mt-5'>
                        {/* share icon */}
                        <div className='flex justify-center items-center mr-4'>
                          {
                            socialIcons.map(({ name, href, icon }, index) => <a key={`kwkw${index}`} href={href} className="flex items-center py-4 px-2 text-primary dark:text-slate-200 font-semibold hover:text-blue-300 transition duration-300">{icon}</a>)
                          }


                        </div>
                        <div>

                        </div>

                      </div>
                      <div className="w-full text-center m-auto text-primary dark:text-slate-200 font-semibold hover:text-blue-300 transition duration-300">
                        download
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div>
                      <h3 className='text-center text-2xl font-bold mb-4' dangerouslySetInnerHTML={{ __html: "RPN Today".split('').randomColor() }}></h3>
                      <img src="/images/general/today.jpg" alt="" />
                      <div className='flex justify-center mt-5'>
                        {/* share icon */}
                        <div className='flex justify-center items-center mr-4'>
                          {
                            socialIcons.map(({ name, href, icon }, index) => <a key={`kwkw${index}`} href="" className="flex items-center py-4 px-2 text-primary dark:text-slate-200 font-semibold hover:text-blue-300 transition duration-300">{icon}</a>)
                          }


                        </div>
                        <div>

                        </div>

                      </div>
                      <div className="w-full text-center m-auto text-primary dark:text-slate-200 font-semibold hover:text-blue-300 transition duration-300">
                        download
                      </div>
                    </div>
                  </SwiperSlide>


                </Swiper>


              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    )
  }
  return (
    <div className=' dark:bg-slate-900 bg-white text-slate-900 dark:!text-slate-200'>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&family=Yellowtail&display=swap" rel="stylesheet"></link>
      </Head>
      <button onClick={() => setIsOpen(true)} className='fixed bottom-4 z-50 right-4 rounded-md py-2 px-4 bg-primary text-white text-sm'>
        TGN TODAY
      </button>
      <NavBar />
      {children}
      <Footer />
      {/* <MyDialog/> */}
      {MyDialog()}
    </div>
  )
}