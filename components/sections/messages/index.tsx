import { Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react'
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { BeatLoader } from 'react-spinners';
import { useGetAllMessageQuery } from '../../../services/message';

export const Messages = () => {
    const [openTab, setOpenTab] = useState(1);
    const router = useRouter();


    const tabList = [
        {
            id: 1,
            title: 'All Messages',
            icon: 'Prayer Request',
            tag: 'ALL',
        },
        {
            id: 2,
            title: 'New Creation Realities',
            content: 'Prayer Request',
            tag: 'NCR',
        },
        {
            id: 3,
            title: 'Prayer And Empowerment',
            content: 'Prayer Request',
            tag: 'PEM',
        },
        {
            id: 4,
            title: 'The Good life Praise',
            content: 'Truth In Reality',
            tag: 'TGP',
        },
        {
            id: 5,
            title: '7days of Accomplishment',
            content: 'Got Questions',
            tag: '7DOA',
        }
    ];

    const { data, isLoading, isFetching, isError } = useGetAllMessageQuery(
        {
            page: 1,
            search: '',
            tag: 'ALL'
        }, {
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
    })
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
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-10  mb-4 rounded mx-auto">
                {

                    isError ? <p>Error loading</p> : isLoading ? <BeatLoader /> :
                        data?.data.items.map((message, index) => {
                            if (tabList[openTab - 1].tag === message.tag) {
                                return (

                                    <Transition
                                        show={tabList[openTab - 1].tag === message.tag}
                                        as={Fragment}
                                        enter="transform transition duration-[400ms]"
                                        enterFrom="opacity-0  scale-50"
                                        enterTo="opacity-100 scale-100"
                                        leave="transform duration-200 transition ease-in-out"
                                        leaveFrom="opacity-100 rotate-0 scale-100 "
                                        leaveTo="opacity-0 scale-95 "
                                    >
                                        <div className="w-full rounded-t-3xl overflow-hidden shadow-lg  relative flex flex-col">
                                        <span className='bg-pink-400 py-[5px] px-2 top-3 left-3 rounded-lg text-[10px] text-white absolute' >{message.tag}</span>
                                            <img className="w-full h-60" src="/images/bg/3.png" alt="Sunset in the mountains" />
                                            <div className="px-6 py-4 h-full">
                                                <div className="font-bold text-xl mb-2">{message.title}</div>
                                                <p className="text-gray-700 text-base">
                                                    {message.description}
                                                </p>
                                            </div>
                                            <button onClick={() => router.push(`/message/${message.id}`)} className="w-full bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded inline-flex items-center">
                                                <span>View</span>
                                            </button>
                                        </div>


                                    </Transition>
                                )
                            }else if(tabList[openTab - 1].tag === 'ALL'){
                                return (
                                    <Transition
                                        show={true}
                                        as={Fragment}
                                        enter="transform transition duration-[400ms]"
                                        enterFrom="opacity-0  scale-50"
                                        enterTo="opacity-100 scale-100"
                                        leave="transform duration-200 transition ease-in-out"
                                        leaveFrom="opacity-100 rotate-0 scale-100 "
                                        leaveTo="opacity-0 scale-95 "
                                    >
                                        <div className="w-full rounded-t-3xl overflow-hidden shadow-lg  relative flex flex-col">
                                        <span className='bg-pink-400 py-[5px] px-2 top-3 left-3 rounded-lg text-[10px] text-white absolute' >{message.tag}</span>
                                            <img className="w-full h-60" src="/images/bg/3.png" alt="Sunset in the mountains" />
                                            <div className="px-6 py-4 h-full">
                                                <div className="font-bold text-xl mb-2">{message.title}</div>
                                                <p className="text-gray-700 text-base">
                                                    {message.description}
                                                </p>
                                            </div>
                                            <button  onClick={() => router.push(`/message/${message.id}`)} className="w-full bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded inline-flex items-center">
                                                <span>View</span>
                                            </button>
                                        </div>


                                    </Transition>
                                )
                            }

                                   

                        })
                }
            </div>

            <div className='mb-16 mt-16   text-center'>
                <div className=' text-4xl inline-flex cursor-pointer hover:animate-bounce'>
                    <p className='mr-3 text-center'>checkout all</p>
                    <RiLightbulbFlashLine />
                </div>

            </div>

        </div>


    )
}
