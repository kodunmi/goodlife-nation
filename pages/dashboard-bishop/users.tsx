import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';
import moment from 'moment';
import React, { useState } from 'react'
import { BeatLoader } from 'react-spinners';
import { useAuth } from '../../hooks';
import { ManagementLayout } from '../../layouts'
import { useGetUsersQuery } from '../../services';


const Users = () => {
  const [page, setPage] = useState(1)
  const { user } = useAuth()
  const { isLoading, data, isError, isFetching } = useGetUsersQuery({ chapterId: user.user?.chapter.id as string, page: page }, {
    refetchOnMountOrArgChange: true,

  })

  console.log(data);


  return (
    <ManagementLayout type='bishop'>
      <div>
        <div className='flex items-center justify-between mb-4 bg-primary text-slate-200 rounded-xl py-3 px-6'>

          <div className='mr-auto'>
            <h3 className='sm:text-2xl text-lg'> ALL MEMBERS </h3>
            <p className='text-gray-400 sm:text-lg text-sm' >all registered users in RC Abuja</p>
          </div>
          <img src="/images/general/illus5.png" className='w-16 ' alt="" />
        </div>
        <div className="bg-white  rounded-md w-full">
          <div>
            <div>
              {
                isError ? <div>error</div> : isFetching ? <div className='text-center'><BeatLoader size={30}/></div> : (
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
            {/* <Table columns={col} rows={row}
                    per_page={5} table_header="My Table Is Good"
                    bulk_select_options={["Save", "Delete", "Update"]}
                    // export_csv_file = "FuckThisShit"
                    on_bulk_action={tableBulkClick}
                    // should_export={true}
                    on_search={onSearch}
                    show_search={true}
                    // export_modify={exportModify}
                    striped={true}
                    bordered={true}
                    hovered={true}
                    styling={tableStyling}
                    row_render={rowcheck}
                // bulk_select_button_text="Apply"
                ></Table> */}

          </div>
        </div>
      </div>
    </ManagementLayout>
  )
}

export default Users