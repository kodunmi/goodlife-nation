import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { RiVipCrown2Fill } from 'react-icons/ri'
import { AppLayout } from '../../layouts'
import { GoogleMap, Marker } from "react-google-maps"


const RoyalChapter = () => {
    const router = useRouter()
   const chapter = router.query
   console.log(chapter);
   
    return (
        <AppLayout>
           
            <section className="text-gray-600 mt-20 body-font relative">
                <div className="absolute inset-0 bg-gray-300">
                    <iframe width="100%" height="100%" frameBorder="0" marginHeight={0} marginWidth={0} title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{}}></iframe>
                </div>
                <div className="container px-5 h-[calc(100vh-80px)] py-24 mx-auto flex">
                    
                    <div className="lg:w-1/3 md:w-1/2 rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 ">
                    <div className=' border-lg py-10 bg-white rounded-md flex justify-center flex-col items-center text-center'>
                        <RiVipCrown2Fill size={24} className='text-primary' />
                        {chapter.title}
                        <p className='mt-4 text-sm'>{chapter.address}</p>
                        <div className='mt-4'>
                            <p>{chapter.name}</p>
                            <div className='text-sm'>
                                <p>Phone: {chapter.phone}</p>
                                <p>Email: {chapter.email}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </AppLayout>

    )
}

export default RoyalChapter