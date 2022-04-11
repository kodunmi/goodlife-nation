import React, { useEffect, useState } from 'react'
import { RiMoneyDollarCircleLine, RiTeamLine, RiVipCrownLine } from 'react-icons/ri'
import { ManagementLayout } from '../../../layouts'
import Table, { Irow } from 'react-tailwind-table'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { useGetAllUsersQuery, useGetTenQuery } from '../../../services/bishop/ten'
import { IUser } from '../../../lib'
import { BeatLoader } from 'react-spinners'
import moment from 'moment'

enum TabEnum {
    leadership = 'leadership',
    finances = 'finances',
    users = 'users',
    converts = 'converts',
}

const Leadership = () => {
    const router = useRouter()
    const tenId = router.query.id
    const { data, isLoading, isError } = useGetTenQuery(tenId as string, {
        refetchOnMountOrArgChange: true
    })
    return (
        <div>
            {
                isError ? <p>Error fetching data</p> : isLoading ? <BeatLoader /> : (
                    <div className='grid grid-cols-6 gap-6'>
                        <div className='col-span-6 sm:col-span-6 md:col-span-2 flex flex-col justify-center items-center border p-4 rounded-xl border-purple-600'>
                            <img src="/images/general/leader.png" className='w-4/12' alt="" />
                            <h3 className='text-4xl mb-4 font-bold'>leader</h3>
                            <p className='text-3xl sm:text-xl lg:text-3xl'>{data?.data.leader!.fullName}</p>
                            <p>{data?.data.leader!.phone}</p>
                            <p>{data?.data.leader!.email}</p>
                            <button className='text-white bg-primary text-sm py-1 px-3 rounded-lg mt-4'>
                                Change Leader
                            </button>
                        </div>
                        <div className='col-span-6 sm:col-span-3 md:col-span-2 flex flex-col justify-center items-center border p-4 rounded-xl border-purple-600'>
                            <img src="/images/general/vp2.png" className='w-4/12' alt="" />
                            <h3 className='text-4xl mb-4 font-bold'>Vice</h3>
                            <p className='text-3xl sm:text-xl lg:text-3xl'>{data?.data.vp!.fullName}</p>
                            <p>{data?.data.vp!.phone}</p>
                            <p>{data?.data.vp!.email}</p>
                            <button className='text-white bg-primary text-sm py-1 px-3 rounded-lg mt-4'>
                                Change Vice
                            </button>
                        </div>
                        <div className='col-span-6 sm:col-span-3 md:col-span-2 flex flex-col justify-center items-center border p-4 rounded-xl border-purple-600'>
                            <img src="/images/general/vip.png" className='w-4/12' alt="" />
                            <h3 className='text-4xl mb-4 font-bold'>VIP</h3>
                            <p className='text-3xl sm:text-xl lg:text-3xl'>{data?.data.vip!.fullName}</p>
                            <p>{data?.data.vip!.phone}</p>
                            <p>{data?.data.vip!.email}</p>
                            <button className='text-white bg-primary text-sm py-2 px-4 rounded-md mt-4'>
                                Change VIP
                            </button>
                        </div>

                    </div>
                )
            }

        </div>

    )
}

const Fin = () => {
    return (
        <div>
            Coming Soon
        </div>
    )
}

const Members = () => {
    const [page, setPage] = useState(1)
    const router = useRouter()
    const tenId = router.query.id as string
    const { isLoading, data, isError, isFetching } = useGetAllUsersQuery({ tenId: tenId, page: page }, {
        refetchOnMountOrArgChange: true,
      })
   
    return (

        <div className="bg-white  rounded-md w-full">
        <div>
          <div>
            {
              isError ? <div>error</div> : isFetching ? <div className='text-center'><BeatLoader size={30}/></div> : data!.data!.items!.length < 1 ? <img src="/images/bg/1.png" alt="" /> :  (
                data?.data.items.map((el, index) =>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex mt-4 justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-500 bg-slate-100 shadow-lg rounded-lg hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75 items-center">
                          <div className='flex items-center'>
                            <div className=' shrink-0 mr-4 p-1 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-t-purple-400 border-l-purple-400 border-r-slate-200 border-b-white'>
                              <img src="https://picsum.photos/640/360" alt="" className='w-full h-full rounded-full' />
                            </div>
                            <div className=''>
                              <h3 className='md:text-lg text-md'>{el.fullName}</h3>
                              <div className='flex mt-2 flex-wrap'>
                                {el.isBishop && <span className='bg-sky-300 rounded-xl px-2 md:px-2 py-[2px] text-xs  text-black'>Bishop</span>}
                                {el.isBishop && <span className='bg-purple-400 rounded-xl px-2 py-[2px] ml-3 text-xs  text-black'>Member</span>}
                                {el.isLeader && <span className='bg-pink-400 rounded-xl px-2 py-[2px] ml-3 text-xs  text-black'>Leader</span>}
                                {el.isTenLeader && <span className='bg-orange-300 rounded-xl px-2 py-[2px] ml-3 sm:text-xs text-[8px] text-black'>TEN Head</span>}
                                {!el.isTenLeader && !el.isLeader && !el.isBishop && !el.isBishop && <span className='bg-red-400 rounded-xl px-2 py-[2px] ml-3 sm:text-xs text-[8px] text-black'>Member</span>}
                              </div>
                            </div>

                          </div>
                          <div className='hidden md:block'>
                            {el.state ?? 'No State'}
                          </div>
                          <div className='hidden md:block'>
                            {el.phone ?? 'No Phone'}
                          </div>
                          <div className='bg-primary hidden sm:block text-white rounded-lg shrink-0 p-2'>
                            {el.converts?.length ?? 0}
                          </div>
                          <ChevronUpIcon
                            className={`${open ? 'transform rotate-180' : ''
                              } w-5 h-5 text-purple-500`}
                          />
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel className="px-4 md:px-10 py-4 md:py-10 text-sm text-white bg-primary rounded-lg mt-3">
                            <ol className="list">
                              <li className="item">
                                <h2 className="headline">Full Name</h2><span>{el.fullName} </span>
                              </li>
                              <li className="item">
                                <h2 className="headline">Email</h2><span>{el.email}</span>
                              </li>
                              <li className="item">
                                <h2 className="headline">Phone</h2><span>{el.phone}</span>
                              </li>
                              <li className="item">
                                <h2 className="headline">Address</h2><span>{el.address}</span>
                              </li>
                              <li className="item">
                                <h2 className="headline">Royal Chapter</h2><span>{el.chapter?.name} </span>
                              </li>
                              <li className="item">
                                <h2 className="headline">TEN</h2><span>{el.ten?.name}</span>
                              </li>
                              <li className="item">
                                <h2 className="headline">Last Login</h2><span>{moment(el.lastLoginAt).format('MMMM DD YYYY')} </span>
                              </li>
                            </ol>
                          </Disclosure.Panel>
                        </Transition>

                      </>
                    )}
                  </Disclosure>
                )
              )
            }
            <nav aria-label="Page navigation">
              <ul className="inline-flex space-x-2 mt-8 w-full justify-center">

                {
                 data && data.data.meta.currentPage !== 1 &&
                  (
                    <li><button onClick={()  => setPage((prev) => prev - 1 )} className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
                    </li>
                  )
                }

                {
                  Array.from(Array(data?.data.meta.totalPages), (_, i) => i + 1).map(el =>
                    <li><button onClick={() => setPage(el)} className={`w-10 h-10  transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100 ${el === data?.data.meta.currentPage ? "bg-indigo-600 text-white" : "text-indigo-600"}`}>{el}</button></li>
                  )

                }

                {
                  data && data.data.meta.currentPage < data.data.meta.totalPages &&
                  (
                    <li><button onClick={()  => setPage((prev) => prev + 1 )} className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
                    </li>
                  )
                }

              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
}

const SingleTenPage = () => {
    const [tabState, setTab] = useState<TabEnum>(TabEnum.leadership)

    const tabs: {
        name: string
        icon: JSX.Element
        component: JSX.Element
        slug: TabEnum
    }[] = [
            {
                name: 'Leadership',
                slug: TabEnum.leadership,
                icon: <RiVipCrownLine className='mr-2' />,
                component: <Leadership />,
            },

            {
                name: 'Finances',
                slug: TabEnum.finances,
                icon: <RiMoneyDollarCircleLine className='mr-2' />,
                component: <Fin />,
            },

            {
                name: 'Members',
                slug: TabEnum.users,
                icon: <RiTeamLine className='mr-2' />,
                component: <Members />,
            },
        ]
    return (
        <ManagementLayout type='bishop' >
            <div>
                <div className='flex items-center justify-between mb-4 bg-primary text-slate-200 rounded-xl py-3 px-6'>

                    <div className='mr-auto'>
                        <h3 className='sm:text-2xl text-lg'> GLORY TEN </h3>
                        <p className='text-gray-400 sm:text-lg text-sm' >Manage Glory TEN</p>
                    </div>
                    <img src="/images/general/illus4.png" className='w-16 ' alt="" />
                </div>
                <div>
                    <ul className="flex flex-wrap -mb-px justify-center md:justify-start">
                        {
                            tabs.map(tab => (
                                <li className="mr-2" onClick={() => setTab(tab.slug)}>
                                    <a href="#" className={`inline-flex items-center py-4 px-4 text-sm font-medium text-center ${tab.slug === tabState ? 'text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500' : 'text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'} `}>{tab.icon} {tab.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='mt-10'>
                    {tabs.find(tab => tab.slug === tabState)?.component}
                </div>
            </div>
        </ManagementLayout>
    )
}

export default SingleTenPage