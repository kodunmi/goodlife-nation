import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'
import { RiArrowRightCircleLine } from 'react-icons/ri'
import { AppLayout } from '../layouts'

const WordForTheMonth = () => {
    return (
        <AppLayout>
            <div className='bg-[url("/images/general/1.jpg")] h-[500px] bg-no-repeat bg-blend-overlay bg-primary bg-cover bg-top pt-44 sm:pl-8 text-center md:text-left'>
                <h1 className="text-6xl tracking-tight font-extrabold text-slate-200 sm:text-7xl md:text-8xl">
                    <span className="block  font-['Yellowtail']">Word For The Month</span>{' '}
                    <span className="block font-['Yellowtail'] text-white "></span>
                </h1>
                <ul className='flex mt-10 items-center justify-center md:justify-start'>
                    <Link href={'/'}>
                        <li className='cursor-pointer mb-4 text-slate-200 font-extrabold hover:text-slate-400 text-lg  sm:text-2xl flex items-center pr-8'>
                            <p className='mr-4 '>home</p>
                            <RiArrowRightCircleLine />
                        </li>
                    </Link>
                </ul>
            </div>
            <div className='px-4 sm:px-8 mb-16'>
                <div className="w-full px-4 pt-16">
                    {/* <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <div>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            <span>What is your refund policy?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            If you're unhappy with your purchase for any reason, email us
                                            within 90 days and we'll refund you in full, no questions asked.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                        <div>
                            <Disclosure as="div">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            <span>Do you offer technical support?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            No.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                        <div>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            <span>What is your refund policy?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            If you're unhappy with your purchase for any reason, email us
                                            within 90 days and we'll refund you in full, no questions asked.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                        <div>
                            <Disclosure as="div">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            <span>Do you offer technical support?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            No.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                        <div>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            <span>What is your refund policy?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            If you're unhappy with your purchase for any reason, email us
                                            within 90 days and we'll refund you in full, no questions asked.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                        <div>
                            <Disclosure as="div">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            <span>Do you offer technical support?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            No.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                        <div>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            <span>What is your refund policy?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            If you're unhappy with your purchase for any reason, email us
                                            within 90 days and we'll refund you in full, no questions asked.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                        <div>
                            <Disclosure as="div">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            <span>Do you offer technical support?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            No.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                        <div>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            <span>What is your refund policy?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            If you're unhappy with your purchase for any reason, email us
                                            within 90 days and we'll refund you in full, no questions asked.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                        <div>
                            <Disclosure as="div">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            <span>Do you offer technical support?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            No.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                        <div>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            <span>What is your refund policy?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            If you're unhappy with your purchase for any reason, email us
                                            within 90 days and we'll refund you in full, no questions asked.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                        <div>
                            <Disclosure as="div">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            <span>Do you offer technical support?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            No.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    </div> */}
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>

                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-3xl font-normal leading-none text-gray-400 dark:text-blue-400">2022 - Our Year Of Perfection</time>
                        </li>

                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 2021</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 2021</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2021</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2021</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2021</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2021</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2021</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2021</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2021</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>

                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2021</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2021</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2021</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>









                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-3xl font-normal leading-none text-gray-400 dark:text-blue-400">2021 - Our Year Of Divine Presence</time>
                        </li>



                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 2020</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 2020</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2020</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2020</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2020</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2020</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2020</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2020</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2020</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>

                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2020</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2020</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2020</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our month of double portion</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For this is my telling month - the manifestation of the mind of God for me</p>
                        </li>









                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-3xl font-normal leading-none text-gray-400 dark:text-blue-400">2020 - Our Year Of </time>
                        </li>

                    </ol>
                </div>
            </div>
        </AppLayout>
    )
}


export default WordForTheMonth
