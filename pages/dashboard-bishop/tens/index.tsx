import { useRouter } from 'next/router'
import React from 'react'
import { BeatLoader } from 'react-spinners'
import { useAuth } from '../../../hooks'
import { ManagementLayout } from '../../../layouts'
import { useGetTensQuery } from '../../../services/bishop/ten'


const Tens = () => {
    const { push } = useRouter()
    const { user } = useAuth()
    const { data, isError, isLoading } = useGetTensQuery(user.user?.chapter.id as string,{
        refetchOnMountOrArgChange: true,
    })
    return (
        <ManagementLayout type='bishop'>
            <div>
                <div className='flex items-center justify-between mb-4 bg-primary text-slate-200 rounded-xl p-3'>
                    <div className=' shrink-0 mr-4 p-1 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-t-purple-400 border-l-purple-400 border-r-slate-200 border-b-white'>
                        <img src="https://picsum.photos/640/360" alt="" className='w-full h-full rounded-full' />
                    </div>
                    <div className='mr-auto'>
                        <h3 className='sm:text-2xl text-lg'> TEN MANAGEMENT </h3>
                        <p className='text-gray-400 sm:text-lg text-sm' >Manage all TEN in your RC</p>
                    </div>
                    <img src="/images/general/illus5.png" className='w-20 sm:block hidden' alt="" />
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                    {
                        isError ? <p>Error fetching data</p> : isLoading ? <BeatLoader /> : data!.data.length > 0 ? (
                            data?.data.map((ten, index) => (
                                <div className='shadow-lg p-4 hover:shadow-xl hover:scale-[1.005] transition-all duration-150 rounded-xl flex justify-between items-center pl-3'>
                                    <div>
                                        <h2 className='text-3xl text-black font-bold'>{ten.name}</h2>
                                        <div>
                                            <h2>{ten.users.length} Members</h2>
                                        </div>

                                        <h2> <span className='text-primary'>leader:</span>{ten.leader?.fullName}</h2>
                                        <button onClick={() => push(`/dashboard-bishop/tens/${ten.id}`)} className='mt-4 bg-primary rounded-2xl text-xs text-white py-2 px-3 hover:scale-[1.05] hover:bg-secondary'>View TEN</button>
                                    </div>

                                    <img src="/images/general/illus.png" className='hidden sm:block w-40' alt="" />
                                </div>
                            ))): (
                                <div className='flex justify-center items-center py-3 px-4 bg-primary text-white col-span-2 md:col-auto rounded-lg'>
                                    <p className='text-center text-lg'>
                                        No TEN found
                                    </p>
                                </div>
                            )

                    }
                   
                </div>

            </div>

        </ManagementLayout>
    )
}

export default Tens