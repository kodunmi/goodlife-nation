import { Dialog, Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/outline'
import React, { Fragment, useState } from 'react'
import { RiAddCircleFill, RiBriefcase3Fill, RiCurrencyLine, RiLockPasswordLine, RiLockUnlockLine, RiPulseFill, RiSurveyLine, RiUser4Line, RiUserLine } from 'react-icons/ri'
import { toast } from 'react-toastify'
import { AppLayout } from '../../layouts'
import { AddConvertRequest, UpdateProfileRequest, useAddConvertMutation, useGetConvertsQuery, useLazyGetConvertsQuery, useUpdatePasswordMutation, useUpdateProfileMutation } from '../../services'
import { rcList } from '../register'
import ModalImage from "react-modal-image";
import { BeatLoader } from 'react-spinners'
import { useTypedSelector } from '../../hooks'
import { selectCurrentUser } from '../../redux'
import { WithAuth } from '../../HOC'
import NumberFormat from 'react-number-format'
import { useRouter } from 'next/router'


enum TabEnum {
  profile = 'profile',
  destiny = 'destiny',
  help = 'help',
  job = 'job',
}

const Profile = () => {
  const [rc, setRc] = useState<{ id: number, name: string, tens: Array<string> }>()
  const [ten, setTen] = useState<string>()


  // get user profile from state 
  const { user } = useTypedSelector(selectCurrentUser)

  const [formState, setFormState] = React.useState<UpdateProfileRequest>({
    fullName: user?.fullName,
    email: user?.email,
    chapterId: user?.chapter?.id,
    tenId: user?.ten?.id,
  })

  // old password
  const [oldPassword, setOldPassword] = useState<string>('')
  // new password
  const [newPassword, setNewPassword] = useState<string>('')

  // hooks
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation()
  const [updateProfile, { isLoading: isLoadingProfile }] = useUpdateProfileMutation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: value
    })
  }



  const handleUpdatePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await updatePassword({ oldPassword, newPassword }).unwrap()
      toast.success('Password updated successfully')
    } catch (err: any) {
      if (err.data && Array.isArray(err.data.message)) {
        err.data.message.forEach((msg: string) => toast.error(msg))
      } else {
        toast.error(err.data ? err.data.message : "We could not process your request")
      }
    }
  }

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await updateProfile(formState).unwrap()
      toast.success('Profile updated successfully')
    } catch (err: any) {
      if (err.data && Array.isArray(err.data.message)) {
        err.data.message.forEach((msg: string) => toast.error(msg))
      } else {
        toast.error(err.data ? err.data.message : "We could not process your request")
      }
    }
  }


  return (
    <div>

      <form onSubmit={handleUpdateProfile} className='w-full mt-8 md:grid md:grid-cols-3 gap-10'>
        <div className='md:col-span-1 mx-auto mt-10'>

          <img className='rounded-xl overflow-hidden h-40' src='https://picsum.photos/id/237/200/200' alt='profile' />

          <p className='underline mt-6 mb-16'>
            change profile picture
          </p>

        </div>
        <div className='col-span-2'>
          <div className='w-full mb-4'>
            <label htmlFor="name">Name</label>
            <input onChange={handleChange} value={formState.fullName} name="fullName" id='text' type="name" className="ring-0 w-full dark:border border-slate-200 dark:bg-slate-900 shadow-md form-input px-4 py-3 rounded-md" placeholder='enter your full name' />
          </div>
          <div className='w-full mb-4'>
            <label htmlFor="email">Email</label>
            <input onChange={handleChange} value={formState.email} id='email' name='email' type="email" className="ring-0 w-full dark:border border-slate-200 dark:bg-slate-900 shadow-md form-input px-4 py-3 rounded-md" placeholder='enter your email' />
          </div>
          {/* <div className='w-full mb-4'>
            <label htmlFor="password">Password</label>
            <input id='password' type="password" className="ring-0 w-full dark:border border-slate-200 dark:bg-slate-900 shadow-md form-input px-4 py-3 rounded-md" placeholder='enter your password' />
          </div> */}
          <div className='w-full mb-4'>
            <label >Royal Chapter</label>
            <Listbox value={rc} onChange={setRc}>
              <div className="relative">
                <Listbox.Button className="relative h-12 w-full py-2 pl-3 pr-10 text-left dark:bg-slate-900 border border-slate-200  rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                  <span className="block truncate">{rc?.name}</span>
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
                  <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base dark:bg-slate-900 bg-white border border-slate-200   rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {rcList.map((rc, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-amber-900 bg-primary' : 'text-slate-200'
                          }`
                        }
                        value={rc}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block text-slate-200 truncate ${selected ? 'font-medium text-slate-200' : 'font-normal text-black dark:text-slate-200'
                                }`}
                            >
                              {rc.name}
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
          <div className='w-full mb-4'>
            <label>TEN</label>
            <Listbox value={ten} onChange={setTen}>
              <div className="relative">
                <Listbox.Button className="relative h-12 w-full py-2 pl-3 pr-10 text-left dark:bg-slate-900 border-slate-200 border rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                  <span className="block truncate">{ten}</span>
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
                  <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base dark:bg-slate-900 bg-white border border-slate-200 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {rc?.tens.map((ten, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-amber-900 bg-primary' : 'text-slate-200'
                          }`
                        }
                        value={ten}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block  truncate ${selected ? 'font-medium text-slate-200' : 'font-normal text-black dark:text-slate-200'
                                }`}
                            >
                              {ten}
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
          <div className="flex items-baseline justify-between">
            <button disabled={isLoadingProfile} className="px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-secondary">{isLoadingProfile ? <BeatLoader /> : 'Update Profile'} </button>
          </div>
        </div>

      </form>
      <div className='md:grid md:grid-cols-3 gap-10 mt-10 '>
        <div className='md:col-span-1 hidden md:block'>
          <ModalImage
            small={'/images/today/1.jpg'}
            large={'/images/today/1.jpg'}
            alt='image'
            hideDownload
            showRotate
            className={`bg-cover bg-center bg-no-repeat`}
          />
        </div>
        <form onSubmit={handleUpdatePassword} className='col-span-2 mt-10 md:mt-0'>
          <h2 className='text-xl mb-10'>Update Password <RiLockPasswordLine size={20} className='inline-block ml-4' /></h2>

          <div className='w-full mb-4'>
            <label htmlFor="password-old">Old Password</label>
            <input required onChange={(e) => setOldPassword(e.currentTarget.value)} id='password-old' type="password" className="ring-0 w-full dark:border border-slate-200 dark:bg-slate-900 shadow-md form-input px-4 py-3 rounded-md" placeholder='enter your password' />
          </div>

          <div className='w-full mb-4'>
            <label htmlFor="password-new">New Password</label>
            <input required onChange={(e) => setNewPassword(e.currentTarget.value)} id='password-new' type="password" className="ring-0 w-full dark:border border-slate-200 dark:bg-slate-900 shadow-md form-input px-4 py-3 rounded-md" placeholder='enter your password' />
          </div>

          <div className="flex items-baseline justify-between">
            <button disabled={isLoading} className="px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-secondary">{isLoading ? <BeatLoader /> : "Update Password"} </button>
          </div>

        </form>
      </div>

    </div>
  )
}

const Destiny = ({ openModal }: { openModal: () => void }) => {

  const { data, isLoading, isFetching, isError, refetch } = useGetConvertsQuery('', {
    refetchOnMountOrArgChange: true
  })

  return (
    <div>
      <div className='flex justify-between items-center mb-8'>
        <button onClick={openModal} className='bg-purple-500 inline-flex items-center rounded-lg px-4 py-1 text-white sm:text-lg text-sm'>

          Add convert
          <RiAddCircleFill size={20} className="ml-4" />
        </button>
        <h3>
          {!isError && !isLoading && data?.data.length}
        </h3>
      </div>

      <div className="flex flex-col w-full">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle dark:bg-gray-800">
            <div className="p-4">
              <label htmlFor="table-search" className="sr-only">Search</label>
              <div className="relative mt-1">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
              </div>
            </div>
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                {/* <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                      First Name
                    </th>
                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                      Last Name
                    </th>
                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                      Sex
                    </th>
                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                      location
                    </th>
                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                      occupation
                    </th>
                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                      phone
                    </th>
                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                      Date of birth
                    </th>
                    <th scope="col" className="p-4">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead> */}
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {
                    isError ? <p>Error</p> : isLoading ? <p>Loading</p> :
                      data?.data.map((convert, idx) => (
                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{convert.firstName}</td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{convert.lastName}</td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{convert.gender}</td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{convert.location}</td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{convert.occupation}</td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{convert.phone}</td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{convert.dob}</td>
                          <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                            <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                          </td>
                        </tr>
                      ))
                  }


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

const Help = () => {
  return (
    <div>
      <h1>Coming Soon</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        doloremque, quidem, quisquam quisquam dolorum quisquam quisquam
        exercitationem quisquam.
      </p>
    </div>
  )
}

const Jobs = () => {
  return (
    <div>
      <h1>Coming Soom</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        doloremque, quidem, quisquam quisquam dolorum quisquam quisquam
        exercitationem quisquam.
      </p>
    </div>
  )
}


const UserDashboardPage = () => {
  // tabs enum
  const [tabState, setTab] = useState<TabEnum>(TabEnum.profile)
  const { user } = useTypedSelector(selectCurrentUser)
  let [isOpen, setIsOpen] = useState(false)

  const { data, isLoading: loading, isFetching, isError, refetch } = useGetConvertsQuery('', {
    refetchOnMountOrArgChange: true
  })

  const router = useRouter()


  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const [formState, setFormState] = React.useState<AddConvertRequest>({
    phone: '',
    firstName: '',
    lastName: '',
    gender: 'male',
    location: '',
    occupation: '',
    userId: user!.id
  })

  const [addConvert, { isLoading }] = useAddConvertMutation()

  const handleAddConvert = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const resp = await addConvert(formState).unwrap()

      toast.success('Convert created successfully')

      refetch()

      setIsOpen(false)


    } catch (err: any) {
      if (err.data && Array.isArray(err.data.message)) {
        err.data.message.forEach((msg: string) => toast.error(msg))
      } else {
        toast.error(err.data ? err.data.message : "We could not process your request")
      }
    }

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }




  const tabs: {
    name: string
    icon: JSX.Element
    component: JSX.Element
    slug: TabEnum
  }[] = [
      {
        name: 'Profile',
        slug: TabEnum.profile,
        icon: <RiUserLine className='mr-2' />,
        component: <Profile />,
      },

      {
        name: 'Destiny In God',
        slug: TabEnum.destiny,
        icon: <RiSurveyLine className='mr-2' />,
        component: <Destiny openModal={openModal} />,
      },

      {
        name: 'Helping hand',
        slug: TabEnum.help,
        icon: <RiCurrencyLine className='mr-2' />,
        component: <Help />,
      },
      {
        name: 'Jobs',
        slug: TabEnum.job,
        icon: <RiBriefcase3Fill className='mr-2' />,
        component: <Jobs />,
      },

    ]
  return (
    <AppLayout>
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-slate-900 shadow-xl rounded-2xl dark:text-slate-200 text-black">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 "
                >
                  Add New Convert
                </Dialog.Title>
                <form onSubmit={handleAddConvert}>
                  <div className="mt-2">
                    <div className='w-full mb-4'>
                      <label htmlFor="firstname">First Name</label>
                      <input onChange={handleChange} id='firstname' type="text" name='firstName' className="ring-0 w-full border border-slate-200 dark:bg-slate-900 shadow-md form-input px-4 py-3 rounded-md" placeholder='enter convert first name' />
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className='w-full mb-4'>
                      <label htmlFor="lastname">Last Name</label>
                      <input required onChange={handleChange} id='lastname' type="text" name='lastName' className="ring-0 w-full border border-slate-200 dark:bg-slate-900 shadow-md form-input px-4 py-3 rounded-md" placeholder='enter convert last name' />
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className='w-full mb-4'>
                      <label htmlFor="gender">Gender</label>
                      <select onChange={handleChange} required id='gender' name='gender' className="ring-0 w-full border border-slate-200 dark:bg-slate-900 shadow-md form-input px-4 py-3 rounded-md" placeholder='enter convert last name' >
                        <option>Select</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className='w-full mb-4'>
                      <label htmlFor="location">Location</label>
                      <textarea onChange={handleChange} required id='location' cols={4} name='location' className="ring-0 w-full border border-slate-200 dark:bg-slate-900 shadow-md form-input px-4 py-3 rounded-md" placeholder='enter convert location name' >

                      </textarea>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className='w-full mb-4'>
                      <label htmlFor="occupation">Occupation</label>
                      <input onChange={handleChange} id='occupation' type="text" name='occupation' className="ring-0 w-full border border-slate-200 dark:bg-slate-900 shadow-md form-input px-4 py-3 rounded-md" placeholder='enter convert last name' />
                    </div>
                  </div>
                  <div className='w-full mb-4'>
                    <label htmlFor="phone">Phone</label>
                    <NumberFormat
                      className="ring-0 w-full border border-slate-200 bg-slate-900  shadow-md form-input px-4 py-3 rounded-md"
                      format="+234 (###) ### ### ##"
                      mask="_"
                      onChange={handleChange}
                      id='phone'
                      name='phone'
                      required
                    />
                    {/* <input required id='phone' type="text" name='phone' onChange={handleChange} className="ring-0 w-full border border-slate-200 bg-slate-900 shadow-md form-input px-4 py-3 rounded-md" placeholder='enter your phone number' /> */}
                  </div>
                  <div className="mt-2">
                    <div className='w-full mb-4'>
                      <label htmlFor="dob">date of birth</label>
                      <input onChange={handleChange} id='dob' type="date" name='dob' className="ring-0 w-full border border-slate-200 dark:bg-slate-900 shadow-md form-input px-4 py-3 rounded-md" />
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    >
                      {
                        isLoading ? <BeatLoader /> :
                          'Add Convert'
                      }
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </form>

              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <div className='bg-primary min-h-[300px] w-full pt-28'>
        <div className='max-w-6xl m-auto flex justify-between items-center px-4'>
          <div>
            <div className='flex items-center text-white'>
              <RiUserLine size={30} />
              <h4 className='mr-8 sm:text-2xl text-lg '>
                {/* get first name from fullname */}
                {user?.fullName.split(" ")[1]}
              </h4>
            </div>
            <div className='flex mt-2'>
              {user?.isBishop && <span className='bg-sky-300 rounded-xl px-2 text-sm text-black'>Bishop</span>}
              {user?.isLeader && <span className='bg-pink-400 rounded-xl px-2 ml-3 text-sm text-black'>Leader</span>}
              {user?.isTenLeader && <span className='bg-sky-300 rounded-xl px-2 ml-3 text-sm text-black'>TEN Leader</span>}
            </div>
          </div>


          {
            user?.isBishop && (
              <div onClick={() => router.push('/dashboard-bishop')} className='whitespace-nowrap cursor-pointer rounded-lg py-1 px-4 text-white inline-flex justify-center items-center bg-purple-500 text-xs sm:text-lg'>
                Manage RC
                <RiPulseFill className='ml-3' />
              </div>
            )
          }
          {
            user?.isTenLeader && (
              <div onClick={() => router.push('/dashboard-ten-leader')} className='whitespace-nowrap cursor-pointer rounded-lg py-1 px-4 text-white inline-flex justify-center items-center bg-purple-500 text-xs sm:text-lg'>
                Manage TEN
                <RiPulseFill className='ml-3' />
              </div>
            )
          }


        </div>


      </div>
      <div className='bg-white dark:bg-slate-900 shadow-2xl mb-36 rounded-xl max-w-6xl -mt-[100px] m-auto  top-[200px] sm:p-8 p-2'>
        <ul className="flex flex-wrap -mb-px justify-center md:justify-start">
          {
            tabs.map(tab => (
              <li className="mr-2" onClick={() => setTab(tab.slug)}>
                <a href="#" className={`inline-flex items-center py-4 px-4 text-sm font-medium text-center ${tab.slug === tabState ? 'text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500' : 'text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'} `}>{tab.icon} {tab.name}</a>
              </li>
            ))
          }
        </ul>
        <div className='mt-10'>
          {tabs.find(tab => tab.slug === tabState)?.component}
        </div>
      </div>
    </AppLayout>
  )
}

export default WithAuth(UserDashboardPage) 