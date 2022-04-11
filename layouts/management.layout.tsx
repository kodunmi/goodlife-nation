import { Dialog, Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FormEvent, Fragment, ReactNode, useEffect, useState } from 'react'
import { RiAddCircleFill, RiBubbleChartLine, RiGroup2Line, RiGroupLine, RiHome3Line, RiSettingsLine, RiTeamLine } from 'react-icons/ri'
import { useAuth } from '../hooks'
import { initials } from '../utils'
import jwt from 'jwt-decode'
import { AsyncPaginate } from "react-select-async-paginate";
import { useLazyGetUsersQuery } from '../services'
import { IUser } from '../lib'
import { ICreatTenBody, useCreateTenMutation } from '../services/bishop/ten'
import { BeatLoader } from 'react-spinners'
import { toast } from 'react-toastify'

interface AppLayoutProps {
    children: ReactNode
    type: 'bishop' | 'leader'
}

const bishopRoutes: Array<{
    path: string
    name: string
    icon: ReactNode
}> = [
        {
            path: '/',
            name: 'Dashboard',
            icon: <RiBubbleChartLine className='text-3xl lg:text-lg' />
        },
        {
            path: '/tens',
            name: 'Tens',
            icon: <RiHome3Line className='text-3xl lg:text-lg' />
        },
        {
            path: '/users',
            name: 'Users',
            icon: <RiTeamLine className='text-3xl lg:text-lg' />
        },
        {
            path: '/converts',
            name: 'Converts',
            icon: <RiGroupLine className='text-3xl lg:text-lg' />
        },
        {
            path: '/settings',
            name: 'Settings',
            icon: <RiSettingsLine className='text-3xl lg:text-lg' />
        }
    ]


const leaderRoutes: Array<{
    path: string
    name: string
    icon: ReactNode
}> = [
        {
            path: '/',
            name: 'Dashboard',
            icon: <RiBubbleChartLine className='text-3xl lg:text-lg' />
        },
        {
            path: '/users',
            name: 'Users',
            icon: <RiTeamLine className='text-3xl lg:text-lg' />
        },
        {
            path: '/converts',
            name: 'Converts',
            icon: <RiGroupLine className='text-3xl lg:text-lg' />
        }
    ]



export const ManagementLayout = ({ children, type }: AppLayoutProps) => {


    const [value, onChange] = useState<{ value: string, label: string } | null>(null);

    const [formState, setFormState] = useState<ICreatTenBody>({
        leaderId: '',
        name: '',
        viceId: '',
        vipId: ''
    })

    const [createTen, { isLoading }] = useCreateTenMutation()

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const handleAddTen = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (formState.leaderId === '') {
            toast.error('Please select a leader')
            return
        }


        if (formState.viceId === '') {
            toast.error('Please select a vice')
            return
        }

        if (formState.vipId === '') {
            toast.error('Please select a VIP')
            return
        }


        try {
            const resp = await createTen(formState).unwrap()
            toast.success('Ten created successfully')
            closeModal()

        } catch (err: any) {
            console.log(err);

            if (err.data && Array.isArray(err.data.message)) {
                err.data.message.forEach((msg: string) => toast.error(msg))
            } else {
                toast.error(err.data ? err.data.message : "We could not process your request")
            }
        }

        console.log(formState);

    }


    const { user } = useAuth()
    const Router = useRouter();

    const [getUsers] = useLazyGetUsersQuery()

    const loadPageOptions = async (q: any, prevOptions: any, { page }: { page: any }) => {
        const { data, isError } = await getUsers({
            chapterId: user.user?.chapter.id as string,
            page: page,
        });

        let users = data?.data.items
        let hasMore = data!.data.meta.currentPage < data!.data.meta.totalPages

        const options = users!.map((user: IUser) => ({
            value: user.id,
            label: `${user.fullName}`,

        }))

        return {
            options,
            hasMore,
            additional: {
                page: page + 1
            }
        };
    };

    const defaultAdditional = {
        page: 1
    };

    useEffect(() => {
        if (typeof window !== "undefined") {


            // If there is no access token we redirect to "/" page.
            if (!user.user || !user.token) {
                localStorage.clear()
                Router.replace("/login");
            }

            // check if token is valid
            if (user && user.token) {
                const token = jwt(user.token) as any;
                if (token.exp < Date.now() / 1000) {
                    localStorage.clear()
                    Router.replace("/login");

                }
            }
        }
    }, [user])


    const { pathname, basePath } = useRouter()
    let basePathName = pathname.split('/')[2]
    basePathName = basePathName ? basePathName : ''

    return (
        <div>
            {
                user.user && (

                    <div className="">
                        <div className="transition-all duration-200 fixed top-0 left-0 bottom-0 h-full flex items-center bg-slate-900 flex-col lg:w-64 w-[70px]   lg:px-4 px-2 pb-8 pt-4 overflow-y-auto border-r">
                            <a href="/" >
                                <img src="/logo.png" alt="Logo" className="h-12 w-12 mr-2" />
                            </a>

                            <div className="flex flex-col justify-between mt-6 h-full w-full">
                                <aside className='h-full flex flex-col justify-between'>
                                    <ul>
                                        {
                                            type == 'bishop' &&
                                            (
                                                bishopRoutes.map((route, index) => (
                                                    <li className='mt-3'>
                                                        <Link href={`/dashboard-bishop/${route.path}`}>
                                                            <div className={`cursor-pointer flex items-center px-4 py-2 text-blue-200 ${`/${basePathName}` == route.path ? 'bg-primary/40' : 'hover:bg-primary/40'}  rounded-lg `}>
                                                                {route.icon}
                                                                <span className="hidden lg:block mx-4 font-medium">{route.name}</span>
                                                            </div>
                                                        </Link>

                                                    </li>
                                                ))
                                            )
                                        }
                                        {
                                            type == 'leader' &&
                                            (
                                                leaderRoutes.map((route, index) => (
                                                    <li className='mt-3'>
                                                        <Link href={`/dashboard-ten-leader/${route.path}`}>
                                                            <div className={`cursor-pointer flex items-center px-4 py-2 text-blue-200 ${`/${basePathName}` == route.path ? 'bg-primary/40' : 'hover:bg-primary/40'}  rounded-lg `}>
                                                                {route.icon}
                                                                <span className="hidden lg:block mx-4 font-medium">{route.name}</span>
                                                            </div>
                                                        </Link>

                                                    </li>
                                                ))
                                            )
                                        }
                                    </ul>

                                    <div className='text-center flex flex-col lg:items-start items-center w-full'>
                                        <hr />
                                        <Popover className="relative">
                                            <Popover.Button>
                                                <div className='flex  lg:items-start mt-4'>
                                                    <div className='bg-primary rounded-full h-9 w-9 cursor-pointer flex justify-center items-center text-blue-200 lg:mr-3'>
                                                        <p >{initials(user.user.fullName)}</p>
                                                    </div>
                                                    <p className='text-blue-200 text-center mt-2 hidden lg:block'>{user.user.fullName.split(' ')[0]}</p>
                                                </div>
                                            </Popover.Button>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel className="fixed z-50  px-4 sm:left-[72px] left-14 lg:left-4 lg:max-w-[220px] lg:bottom-32 bottom-4 sm:px-0">
                                                    <div className="overflow-hidden lg:text-gray-700/20 text-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                        <div className="relative grid gap-2 lg:gap-8 lg:bg-white bg-slate-900 p-7 lg:grid-cols-2">
                                                            <div className="grid lg:grid-cols-1 grid-cols-2 gap-3 w-full">
                                                                <a className='lg:text-gray-700 mt-3 text-white' href="/analytics">Notifications</a>
                                                                <a className='lg:text-gray-700 mt-3 text-white' href="/engagement">Message</a>
                                                                <Link href="/dashboard">
                                                                    <span className='lg:text-gray-700 mt-3 text-white cursor-pointer' >Dashboard</span>
                                                                </Link>

                                                                <a className='lg:text-gray-700 mt-3 text-white' href="/integrations">Integrations</a>
                                                            </div>
                                                        </div>
                                                        <div className="p-4 lg:bg-gray-50 bg-slate-900">
                                                            <a
                                                                href="##"
                                                                className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md lg:hover:bg-gray-100 hover:bg-primary lg:text-black  focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                            >
                                                                logout
                                                            </a>
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </Popover>

                                        <div onClick={() => openModal()} className='bg-primary cursor-pointer rounded-lg px-2 py-2 flex items-center justify-center mt-3 text-white w-full'>
                                            <RiAddCircleFill className="lg:mr-4 text-xl" />
                                            <span className='hidden lg:block'>
                                                Add New Ten
                                            </span>

                                        </div>


                                    </div>

                                </aside>

                            </div>
                        </div>
                        <div className="lg:w-[calc(100%-256px)] w-[calc(100%-70px)] float-right h-full overflow-y-auto">
                            <div className="p-2 sm:p-5">
                                {children}
                            </div>
                        </div>
                    </div>

                )
            }

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <form onSubmit={handleAddTen} className="inline-block w-full max-w-md p-6 my-8  text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Add New TEN
                                </Dialog.Title>
                                <div className="mt-2">
                                    <div className="mb-6">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">The TEN name</label>
                                        <input onChange={e => setFormState({ ...formState, name: e.target.value })} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="glory" required />
                                    </div>
                                    <div className='mt-6'>
                                        <label htmlFor="leader" className="block mb-2 text-sm font-medium text-gray-900">Select leader</label>
                                        {/* <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>France</option>
                                            <option>Germany</option>
                                        </select> */}
                                        <AsyncPaginate
                                            id='leader'
                                            additional={defaultAdditional}
                                            loadOptions={loadPageOptions}
                                            onChange={(e) => setFormState({ ...formState, leaderId: e.value })}
                                        />

                                    </div>
                                    <div className='grid grid-cols-2 gap-3 mt-6'>
                                        <div>
                                            <label htmlFor="vice" className="block mb-2 text-sm font-medium text-gray-900">Select vice</label>
                                            <AsyncPaginate
                                                id='vice'
                                                additional={defaultAdditional}
                                                loadOptions={loadPageOptions}
                                                onChange={(e) => setFormState({ ...formState, viceId: e.value })}
                                            />

                                        </div>
                                        <div>
                                            <label htmlFor="vip" className="block mb-2 text-sm font-medium text-gray-900">Select VIP</label>
                                            <AsyncPaginate
                                                id='vip'
                                                additional={defaultAdditional}
                                                loadOptions={loadPageOptions}
                                                onChange={(e) => setFormState({ ...formState, vipId: e.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    >
                                        {
                                            isLoading ? <BeatLoader /> : ' Ok! add TEN'
                                        }

                                    </button>
                                </div>
                            </form>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>

        </div>
    )
}