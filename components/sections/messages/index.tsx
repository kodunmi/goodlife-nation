import { Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react'
import { RiLightbulbFlashLine } from 'react-icons/ri';

export const Messages = () => {
    const [openTab, setOpenTab] = useState(1);


    const tabList = [
        {
            id: 1,
            title: 'All Messages',
            icon: 'Prayer Request'
        },
        {
            id: 1,
            title: 'New Creation Reality',
            content: 'Prayer Request'
        },
        {
            id: 1,
            title: 'Prayer And Empowerment',
            content: 'Prayer Request'
        },
        {
            id: 2,
            title: 'The Goodlife Praise',
            content: 'Truth In Reality'
        },
        {
            id: 3,
            title: '7days of Accomplishment',
            content: 'Got Questions'
        }
    ];
    return (

        <div className='px-5 md:px-10'>

            <h2 className='mt-10 mb-4 text-4xl text-center italic tracking-tight font-extrabold text-primary dark:text-slate-200 sm:text-5xl md:text-6xl'>Life transforming <br /> messages</h2>
            <p className='text-primary text-center text-sm mb-3 dark:!text-slate-200'>From <b>Rev. P.M Utomi</b></p>

            <div className=" mt-8  ">
                <ul className="flex justify-center flex-wrap -mb-px">
                    {tabList.map((tab, index) => {

                        if (openTab === index + 1) {
                            return (
                                <li className="cursor-pointer mr-2 mb-3" onClick={() => setOpenTab(index + 1)}>
                                    <div className=" inline-flex py-3 px-4 text-sm font-medium text-center text-primary rounded-3xl border-2 border-blue-600  dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                                        <svg className="mr-2 w-5 h-5 text-primary dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>{tab.title}
                                    </div>
                                </li>


                            )
                        } else {
                            return (
                                <li className="cursor-pointer mr-2 mb-3" onClick={() => setOpenTab(index + 1)}>
                                    <div className=" inline-flex py-3 px-4 text-sm font-medium text-center text-gray-500 rounded-3xl border-2 border-gray-400   group" aria-current="page">
                                        {tab.title}
                                    </div>
                                </li>
                            )
                        }
                    }


                    )}
                </ul>
            </div>


            {
                tabList.map((tab, index) => {
                    return (
                        <Transition
                            show={openTab === index + 1}
                            as={Fragment}
                            enter="transform transition duration-[400ms]"
                            enterFrom="opacity-0  scale-50"
                            enterTo="opacity-100 scale-100"
                            leave="transform duration-200 transition ease-in-out"
                            leaveFrom="opacity-100 rotate-0 scale-100 "
                            leaveTo="opacity-0 scale-95 "
                        >
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-10  mb-4 rounded mx-auto">

                                <div className="w-full rounded overflow-hidden shadow-lg  relative flex flex-col">
                                    <img className="w-full" src="/images/rpn/1.jpg" alt="Sunset in the mountains" />
                                    <div className="px-6 py-4 h-full">
                                        <div className="font-bold text-xl mb-2">The true word</div>
                                        <p className="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </p>
                                    </div>
                                    <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                        <span>check it out</span>
                                    </button>
                                </div>

                                <div className="w-full rounded overflow-hidden shadow-lg ">
                                    <img className="w-full" src="/images/rpn/1.jpg" alt="Sunset in the mountains" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">Another message</div>
                                        <p className="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                    </div>
                                    <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                        <span>check it out</span>
                                    </button>
                                </div>

                                <div className="w-full rounded overflow-hidden shadow-lg ">
                                    <img className="w-full" src="/images/rpn/1.jpg" alt="Sunset in the mountains" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">RPN is awesome</div>
                                        <p className="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                    </div>
                                    <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                        <span>check it out</span>
                                    </button>
                                </div>

                            </div>

                        </Transition>
                    )
                }
                )
            }

            <div className='mb-16 mt-16   text-center'>
                <div className=' text-4xl inline-flex cursor-pointer hover:animate-bounce'>
                    <p className='mr-3 text-center'>checkout all</p> 
                    <RiLightbulbFlashLine/>
                </div>
                
            </div>

        </div>


    )
}
