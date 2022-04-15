import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import React, { Fragment, ReactNode } from 'react'
import { RiAddCircleFill, RiGroupLine, RiPulseLine, RiTeamLine } from 'react-icons/ri'
import { BeatLoader } from 'react-spinners'
import { useAuth } from '../../hooks'
import { ManagementLayout } from '../../layouts'
import { useGetRcStatQuery } from '../../services'
import { Greeting, initials } from '../../utils'


const BishopDashboard = () => {
    const { user: { user } } = useAuth()

    if (!user?.chapter) return <div>You do not have permission to view this page</div>
    const { isError, isLoading, data, error } = useGetRcStatQuery(user.chapter.id,{
        refetchOnMountOrArgChange: true,
       refetchOnReconnect: true,
    })

    console.log(error);
    
    return (

        <ManagementLayout type='bishop'>
            <div className='flex items-center justify-between bg-primary text-slate-200 rounded-xl p-3'>
                <div className=' shrink-0 mr-4 p-1 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-t-purple-400 border-l-purple-400 border-r-slate-200 border-b-white'>
                    <img src="https://picsum.photos/640/360" alt="" className='w-full h-full rounded-full' />
                </div>
                <div className='mr-auto'>
                    <h3 className='sm:text-2xl text-lg'>Good {Greeting()}, Bishop <b>{user?.fullName.split(' ')[1]}</b> </h3>
                    <p className='text-gray-400 sm:text-lg text-sm' >Here is an over view of your royal chapter</p>
                </div>
                <img src="/images/general/illustration.png" className='w-28 sm:block hidden' alt="" />
            </div>
            {
                isError ? <p>error processing</p> : isLoading ? <BeatLoader /> : (
                    <div className='grid grid-cols-3 mt-6 gap-2 lg:gap-8'>
                        <div className='flex cursor-pointer hover:bg-primary hover:text-white text-primary justify-between items-center py-3 px-4 border-primary border-2 col-span-3 md:col-auto rounded-lg'>
                            <RiTeamLine className='mr-3 text-3xl  shrink-0' />
                            <div className='flex flex-col items-center'>

                                <h3 className='md:text-3xl'>
                                   {data?.data.users}
                                </h3>
                                <p className='font-bold md:text-lg'>
                                    Members
                                </p>
                            </div>
                            <RiPulseLine className='ml text-xl ' />

                        </div>
                        <div className='flex justify-between items-center py-3 px-4  bg-primary  text-white col-span-3 md:col-auto rounded-lg'>
                            <RiTeamLine className='mr-3 text-3xl shrink-0' />
                            <div className='flex flex-col items-center'>

                                <h3 className='md:text-3xl'>
                                   {data?.data.converts}
                                </h3>
                                <p className='font-bold md:text-lg'>
                                    Converts
                                </p>
                            </div>
                            <RiPulseLine className='ml-3 text-xl ' />

                        </div>
                        <div className='cursor-pointer flex justify-between items-center py-3 px-4 hover:bg-primary hover:text-white text-primary border-primary border-2 col-span-3 md:col-auto rounded-lg'>
                            <RiTeamLine className='mr-3 text-3xl' />
                            <div className='flex flex-col items-center'>

                                <h3 className='md:text-3xl'>
                                    {data?.data.tens}
                                </h3>
                                <p className='font-bold md:text-lg'>
                                    Tens
                                </p>
                            </div>
                            <RiPulseLine className='text-xl ml-3 ' />

                        </div>
                    </div>

                )
            }



        </ManagementLayout>


    )
}

export default BishopDashboard
