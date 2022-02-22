import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React, { Fragment, useEffect, useState } from 'react'
import { RiArrowRightCircleLine, RiVipCrown2Fill, RiVipCrown2Line } from 'react-icons/ri'
import { AppLayout } from '../../layouts'
import { Country, State, City }  from 'country-state-city';
import { ICountry, IState } from 'country-state-city/dist/lib/interface'
import { useRouter } from 'next/router'

const royalChapters = [
    {
        id: 1,
        title: 'Royal Chapter Abuja',
        location: 'London',
        address: '1, London Road, London, United Kingdom',
        constact: {
            name: 'John Doe',
            phone: '+234 809 809 809',
            email: 'lekan126@gmail.com'
        }
    },
    {
        id: 1,
        title: 'Royal Chapter Abuja',
        location: 'London',
        address: '1, London Road, London, United Kingdom',
        constact: {
            name: 'John Doe',
            phone: '+234 809 809 809',
            email: 'lekan126@gmail.com'
        }
    },
    {
        id: 1,
        title: 'Royal Chapter Abuja',
        location: 'London',
        address: '1, London Road, London, United Kingdom',
        constact: {
            name: 'John Doe',
            phone: '+234 809 809 809',
            email: 'lekan126@gmail.com'
        }
    },
    {
        id: 1,
        title: 'Royal Chapter Abuja',
        location: 'London',
        address: '1, London Road, London, United Kingdom',
        constact: {
            name: 'John Doe',
            phone: '+234 809 809 809',
            email: 'lekan126@gmail.com'
        }
    },
    {
        id: 1,
        title: 'Royal Chapter Abuja',
        location: 'London',
        address: '1, London Road, London, United Kingdom',
        constact: {
            name: 'John Doe',
            phone: '+234 809 809 809',
            email: 'lekan126@gmail.com'
        }
    },
    {
        id: 1,
        title: 'Royal Chapter Abuja',
        location: 'London',
        address: '1, London Road, London, United Kingdom',
        constact: {
            name: 'John Doe',
            phone: '+234 809 809 809',
            email: 'lekan126@gmail.com'
        }
    },
    {
        id: 1,
        title: 'Royal Chapter Abuja',
        location: 'London',
        address: '1, London Road, London, United Kingdom  London Road, London, United Kingdom  London Road, London, United Kingdom  London Road, London, United Kingdom',
        constact: {
            name: 'John Doe',
            phone: '+234 809 809 809',
            email: 'lekan126@gmail.com'
        }
    },
    {
        id: 1,
        title: 'Royal Chapter Abuja',
        location: 'London',
        address: '1, London Road, London, United Kingdom',
        constact: {
            name: 'John Doe',
            phone: '+234 809 809 809',
            email: 'lekan126@gmail.com'
        }
    },
    {
        id: 1,
        title: 'Royal Chapter Abuja',
        location: 'London',
        address: '1, London Road, London, United Kingdom',
        constact: {
            name: 'John Doe',
            phone: '+234 809 809 809',
            email: 'lekan126@gmail.com'
        }
    },
    {
        id: 1,
        title: 'Royal Chapter Abuja',
        location: 'London',
        address: '1, London Road, London, United Kingdom',
        constact: {
            name: 'John Doe',
            phone: '+234 809 809 809',
            email: 'lekan126@gmail.com'
        }
    },
    {
        id: 1,
        title: 'Royal Chapter Abuja',
        location: 'London',
        address: '1, London Road, London, United Kingdom',
        constact: {
            name: 'John Doe',
            phone: '+234 809 809 809',
            email: 'lekan126@gmail.com'
        }
    },
    {
        id: 1,
        title: 'Royal Chapter Abuja',
        location: 'London',
        address: '1, London Road, London, United Kingdom',
        constact: {
            name: 'John Doe',
            phone: '+234 809 809 809',
            email: 'lekan126@gmail.com'
        }
    },
    {
        id: 1,
        title: 'Royal Chapter Abuja',
        location: 'London',
        address: '1, London Road, London, United Kingdom',
        constact: {
            name: 'John Doe',
            phone: '+234 809 809 809',
            email: 'lekan126@gmail.com'
        }
    },
    {
        id: 1,
        title: 'Royal Chapter Abuja',
        location: 'London',
        address: '1, London Road, London, United Kingdom',
        constact: {
            name: 'John Doe',
            phone: '+234 809 809 809',
            email: 'lekan126@gmail.com'
        }
    },
    {
        id: 1,
        title: 'Royal Chapter Abuja',
        location: 'London',
        address: '1, London Road, London, United Kingdom',
        constact: {
            name: 'John Doe',
            phone: '+234 809 809 809',
            email: 'lekan126@gmail.com'
        }
    },
    {
        id: 1,
        title: 'Royal Chapter Abuja',
        location: 'London',
        address: '1, London Road, London, United Kingdom',
        constact: {
            name: 'John Doe',
            phone: '+234 809 809 809',
            email: 'lekan126@gmail.com'
        }
    },
    {
        id: 1,
        title: 'Royal Chapter Abuja',
        location: 'London',
        address: '1, London Road, London, United Kingdom',
        constact: {
            name: 'John Doe',
            phone: '+234 809 809 809',
            email: 'lekan126@gmail.com'
        }
    },
    {
        id: 1,
        title: 'Royal Chapter Abuja',
        location: 'London',
        address: '1, London Road, London, United Kingdom',
        constact: {
            name: 'John Doe',
            phone: '+234 809 809 809',
            email: 'lekan126@gmail.com'
        }
    },
    {
        id: 1,
        title: 'Royal Chapter Abuja',
        location: 'London',
        address: '1, London Road, London, United Kingdom',
        constact: {
            name: 'John Doe',
            phone: '+234 809 809 809',
            email: 'lekan126@gmail.com'
        }
    },
    {
        id: 1,
        title: 'Royal Chapter Abuja',
        location: 'London',
        address: '1, London Road, London, United Kingdom',
        constact: {
            name: 'John Doe',
            phone: '+234 809 809 809',
            email: 'lekan126@gmail.com'
        }
    },


]

const RoyalChaptersPage = () => {
    const [country, setCountry] = useState<ICountry>({
        "isoCode": "NG",
        "name": "Nigeria",
        "phonecode": "234",
        "flag": "🇳🇬",
        "currency": "NGN",
        "latitude": "10.00000000",
        "longitude": "8.00000000",
        "timezones": [
            {
                "zoneName": "Africa/Lagos",
                "gmtOffset": 3600,
                "gmtOffsetName": "UTC+01:00",
                "abbreviation": "WAT",
                "tzName": "West Africa Time"
            }
        ]
    })
    const [state, setState] = useState<IState>()
    const [states, setStates] = useState<IState[]>([])
    const countries = Country.getAllCountries()
    const router = useRouter()
    

    useEffect(() => {
        setStates(State.getStatesOfCountry('NG'))
        setState(State.getStateByCodeAndCountry('ED', 'NG'))

    }, [])

    useEffect(() => {
        if (country) {

            setStates(State.getStatesOfCountry(country.isoCode))
             

            console.log(country);
            
        }
    }, [country])
    
    
    return (
        <AppLayout>
            <div className='bg-[url("/images/general/1.jpg")] h-[500px] bg-no-repeat bg-blend-overlay bg-primary bg-cover bg-top pt-44 sm:pl-8 text-center md:text-left'>
                <h1 className="text-6xl tracking-tight font-extrabold text-slate-200 sm:text-7xl md:text-8xl">
                    <span className="block  font-['Yellowtail']">Our Royal Chapter</span>{' '}
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
                            <p className='mr-4 '>royal chapters</p>
                            <RiArrowRightCircleLine />
                        </li>
                    </Link>

                </ul>
            </div>
            <div className='py-24'>
                <div className='d:px-9 sm:px-5 px-4 max-w-5xl mx-auto align-middle mb-8 md:grid-cols-4 grid-cols-4 grid gap-6'>
                    <input className='col-span-4 md:col-span-2 rounded-lg py-2 px-2 text-sm p-0 h-10 shadow-md bg-white dark:bg-slate-900 dark:border dark:border-primary' placeholder='Search Chapter'  type="search" name="" id="" />
                    <div className='md:col-span-1 col-span-2'>
                        <Listbox value={country} onChange={setCountry}>
                        <div className="relative mt-1">
                        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white dark:bg-slate-900 dark:border dark:border-primary rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                <span className="block truncate">{country?.name}</span>
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
                                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white dark:bg-slate-900 dark:border   rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {countries.map((country, personIdx) => (
                                        <Listbox.Option
                                            key={personIdx}
                                            className={({ active }) =>
                                            `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-amber-900 bg-amber-100 dark:bg-secondary' : 'text-gray-900'
                                            }`
                                        }
                                            value={country}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block dark:text-slate-200 truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {country.name}
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
                    <div className='md:col-span-1 col-span-2'>
                        <Listbox value={state} onChange={setState}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white dark:bg-slate-900 dark:border dark:border-primary rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                <span className="block truncate">{state?.name}</span>
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
                                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white dark:bg-slate-900 dark:border   rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {states.map((state, personIdx) => (
                                        <Listbox.Option
                                            key={personIdx}
                                            className={({ active }) =>
                                                `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-amber-900 bg-amber-100 dark:bg-secondary' : 'text-gray-900'
                                                }`
                                            }
                                            value={state}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block dark:text-slate-200 truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {state.name}
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
                    
                </div>
                <div className='max-w-5xl mx-auto align-middle md:px-9 sm:px-5 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {
                        royalChapters.map(chapter => (
                            <div className='border py-10 border-primary border-dashed rounded-md flex justify-center flex-col items-center text-center'>
                                <RiVipCrown2Fill size={24} className='text-primary' />
                                {chapter.title}
                                <p className='mt-4 text-sm'>{chapter.address}</p>
                                <div className='mt-4'>
                                    <p>{chapter.constact.name}</p>
                                    <div className='text-sm'>
                                        <p>Phone: {chapter.constact.phone}</p>
                                        <p>Email: {chapter.constact.email}</p>
                                    </div>
                                </div>
                                <button onClick={() => router.push(`royal-chapters/${chapter.id}`)} className='rounded-lg bg-primary text-white text-sm px-5 py-1 mt-4'>
                                    View Map
                                </button>
                            </div>
                        ))

                    }
                </div>
            </div>
        </AppLayout>
    )
}

export default RoyalChaptersPage