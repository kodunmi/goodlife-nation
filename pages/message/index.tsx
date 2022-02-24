import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, PlayIcon, SelectorIcon } from '@heroicons/react/outline'
import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FormEvent, Fragment, useState } from 'react'
import { RiArrowRightCircleLine, RiPlayFill, RiPlayLine } from 'react-icons/ri'
import { AppLayout } from '../../layouts'

const cats = [
    {
        id: 5,
        title: 'All ',
        tag: 'ALL',
    },
   
    {
        id: 1,
        title: 'New Creation Realty',
        tag: 'NCR',
    },
    {
        id: 2,
        title: '7 Days of Accomplishment',
        tag: '7DOA',
    },
    {
        id: 3,
        title: 'Prayer and Emperment Meeting',
        tag: 'PEM',
    },
    {
        id: 4,
        title: 'The Goodlife Praise',
        tag: 'TGP',
    },
    
]

const messages = [
    {
        id: 1,
        title: 'PRAYER AND EMPOWERMENT MEETING WITH REVEREND P.N UTOMI',
        date: '2021-12-23',
        type: 'PEM',
        image: '/images/1.jpg',
    },
    {
        id: 2,
        title: '8 Benefits Of Spiritual Growth with REV P.N Utomi',
        date: '2022-08-08',
        type: 'NCR',
        image: '/images/1.jpg',
    },
    {
        id: 3,
        title: 'UNDERSTANDING THE TIMES WITH REVEREND P.N UTOMI',
        date: '2020-01-01',
        type: 'TGP',
        image: '/images/1.jpg',
    },
]
const MessagesPage = () => {
    const [cat, setCat] = useState(cats[0])
    const [search, setSearch] = useState('')

    const handleSearch = (e:FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    const router = useRouter()

    return (
        <AppLayout>
            <div className='bg-[url("/images/general/1.jpg")] h-[500px] bg-no-repeat bg-blend-overlay bg-primary bg-cover bg-top pt-44 sm:pl-8 text-center md:text-left'>
                <h1 className="text-6xl tracking-tight font-extrabold text-slate-200 sm:text-7xl md:text-8xl">
                    <span className="block  font-['Yellowtail']">Our Messages</span>{' '}
                    <span className="block font-['Yellowtail'] text-white "></span>
                </h1>
                <ul className='flex mt-10 items-center justify-center md:justify-start'>
                    <Link href={'/'}>
                        <li className='cursor-pointer mb-4 text-slate-200 font-extrabold hover:text-slate-400 text-lg  sm:text-2xl flex items-center pr-8'>
                            <p className='mr-4 '>home</p>
                            <RiArrowRightCircleLine />
                        </li>
                    </Link>
                    <Link href={'/contact-us'}>
                        <li className='cursor-pointer mb-4 text-slate-200 font-extrabold hover:text-slate-400  text-lg  sm:text-2xl flex items-center  pr-8'>
                            <p className='mr-4 '>messages</p>
                            <RiArrowRightCircleLine />
                        </li>
                    </Link>

                </ul>
            </div>
            <div className='mt-10 d:px-9 sm:px-5 px-4 max-w-5xl mx-auto align-middle mb-8 md:grid-cols-3 grid-cols-1 grid gap-6'>
                <input onChange={handleSearch} value={search} className='col-span-3 md:col-span-2 rounded-lg py-2 px-2 text-sm p-0 h-10 shadow-md bg-white dark:bg-slate-900 dark:border dark:border-primary' placeholder='Search for message' type="search" name="" id="" />

                <div className='md:col-span-1 col-span-3'>
                    <Listbox value={cat} onChange={setCat}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white dark:bg-slate-900 dark:border dark:border-primary rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                <span className="block truncate">{cat.title}</span>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <SelectorIcon
                                        className="w-5 h-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white dark:bg-slate-900 dark:border   rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {cats.map((cat, personIdx) => (
                                        <Listbox.Option
                                            key={personIdx}
                                            className={({ active }) =>
                                                `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-amber-900 bg-amber-100 dark:bg-secondary' : 'text-gray-900'
                                                }`
                                            }
                                            value={cat}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block dark:text-slate-200 truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {cat.title}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                </div>

            </div >
            <div className='mt-10 mb-10 d:px-9 sm:px-5 px-4 max-w-5xl mx-auto align-middle'>
                <div className='grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    {
                        messages.filter((message) => {
                            if (cat.tag.toLocaleLowerCase() === 'all') {
                                return message
                            }
                               
                           return message.type.toLocaleLowerCase() == cat.tag.toLocaleLowerCase()
                        }).filter((message) => {
                            if (search.length === 0) {
                                return message
                            }
                            return message.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                        })

                        .map((message, idx) => (
                            <div className='bg-white p-4 dark:bg-slate-900 shadow-2xl dark:border border-primary rounded-lg  flex'>
                                <div className='bg-[url("/images/1.jpg")] w-4/12 min-h-[120px] bg-center relative bg-cover rounded-lg p-3 mr-3'>
                                    <span className='bg-pink-400 py-[5px] px-2 rounded-lg text-[10px] text-white' >{message.type}</span>
                                    <div className='absolute -right-5 top-2/4'>
                                        <div className='p-2 cursor-pointer hover:bg-secondary transition-all duration-300 rounded-full bg-primary -translate-y-2/4'>
                                            <RiPlayLine color='white' size={30} />
                                        </div>

                                    </div>
                                </div>


                                <div className='flex flex-col w-8/12'>
                                    <p>{message.title}</p>
                                    <div className='flex mt-auto w-full justify-between items-center'>
                                        <p className='text-gray-400 text-sm'>{moment(message.date).format('Do MMM YY')}</p>
                                        <button onClick={() => router.push(`${router.pathname}/${message.id}`)}  className='py-[5px] px-3 rounded-lg text-[14px] bg-primary text-white'  >
                                            view
                                        </button>
                                    </div>
                                </div>


                            </div>
                        ))
                    }


                </div>
            </div>
        </AppLayout>
    )
}

export default MessagesPage