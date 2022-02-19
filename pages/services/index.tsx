import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiArrowRightCircleLine } from 'react-icons/ri'
import { AppLayout } from '../../layouts'


const serviceList = [
    {
        id: 1,
        title: 'New Creation Reality',
        image: '/images/rpn/1.jpg',
        time: 'Every Sunday at 10:00am',
    },
    {
        id: 1,
        title: 'Prayer And Empowerment',
        image: '/images/rpn/1.jpg',
        time: 'Every Wednesday at 10:00am',
    },
    {
        id: 2,
        title: 'The Goodlife Praise',
        image: '/images/rpn/2.jpg',
        time: 'Every First Sunday at 10:00am',
    },
    {
        id: 3,
        title: '7days of Accomplishment',
        image: '/images/rpn/3.jpg',
        time: 'First 7 days of a new quarter at 10:00am',
    }

]

/**
 * Random colored text
 * <rabbitfighter@cryptolab.net>
 */

// Converts integer to hex 
const colToHex = (c: number) => {
    // Hack so colors are bright enough
    let color = (c < 75) ? c + 75 : c
    let hex = color.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

// uses colToHex to concatenate
// a full 6 digit hex code
const rgbToHex = (r: number, g: number, b: number) => {
    return "#" + colToHex(r) + colToHex(g) + colToHex(b);
}

// Returns three random 0-255 integers
const getRandomColor = () => {
    return rgbToHex(
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255));
}

declare global {
    interface Array<T> {
        randomColor(): string;
    }
}

// This is the prototype function
// that changes the color of each
// letter by wrapping it in a span
// element.

Array.prototype.randomColor = function () {
    let html = '';
    this.map((letter) => {
        let color = getRandomColor();
        html +=
            "<span style=\"color:" + color + "\">"
            + letter +
            "</span>";
    })
    return html;
};

// Set the text
// document.querySelector('#txt').innerHTML = letters.randomColor();
// document.querySelector('#author').innerHTML = quote.randomColor();

const ServicesPage = () => {
    return (
        <AppLayout>
            <div className='bg-[url("/images/1.jpg")] h-[500px] bg-no-repeat bg-blend-overlay bg-primary bg-cover pt-44 sm:pl-8 text-center md:text-left'>
                <h1 className="text-6xl tracking-tight font-extrabold text-slate-200 sm:text-7xl md:text-8xl">
                    <span className="block  font-['Yellowtail']">Our Services</span>{' '}
                    <span className="block font-['Yellowtail'] text-white "></span>
                </h1>
                <ul className='flex mt-10 items-center justify-center md:justify-start'>
                    <Link href={'/'}>
                        <li className='cursor-pointer mb-4 text-slate-200 font-extrabold hover:text-slate-400 text-lg  sm:text-2xl flex items-center pr-8'>
                            <p className='mr-4 '>home</p>
                            <RiArrowRightCircleLine />
                        </li>
                    </Link>
                    <Link href={'/services'}>
                        <li className='cursor-pointer mb-4 text-slate-200 font-extrabold hover:text-slate-400  text-lg  sm:text-2xl flex items-center  pr-8'>
                            <p className='mr-4 '>our services</p>
                            <RiArrowRightCircleLine />
                        </li>
                    </Link>

                </ul>
            </div>
            <div className='mt-24 px-7 mb-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5  justify-center'>
                    {
                        serviceList.map(service => (
                            <div className="grid sm:grid-cols-2 grid-cols-1  gap-5 hover:-translate-y-2 transition duration-150 ease-in-out cursor-pointer">
                                <div className={`sm:h-full h-56 w-full p-5 shadow-xl rounded-md bg-[url("/images/1.jpg")]`}>
                                    <Image src={'/logo.png'} alt={service.title} width={30} height={30} />
                                </div>
                                <div className="bg-white dark:bg-slate-900 dark:border dark:border-slate-200 rounded-lg shadow-xl p-8">
                                    <h2 className="text-2xl font-bold text-slate-200 " dangerouslySetInnerHTML={{ __html: service.title.split('').randomColor() }} ></h2>
                                    <ul className='mt-4'>
                                        <li className='cursor-pointer mb-4 text-blue-700 transition duration-150 ease-in-out hover:text-primary hover:scale-105 dark:text-slate-200 text-sm flex items-center justify-between'>
                                            <p className='mr-8 '>View Messages</p>

                                            <RiArrowRightCircleLine className='self-end' />


                                        </li>
                                        <li className='cursor-pointer mb-4 text-blue-700 transition duration-150 ease-in-out hover:text-primary hover:scale-105 dark:text-slate-200 text-sm flex items-center justify-between'>
                                            <p className='mr-8 '>Add to calender</p>

                                            <RiArrowRightCircleLine />


                                        </li>
                                        <li className='cursor-pointer mb-4 text-blue-700 transition duration-150 ease-in-out hover:text-primary hover:scale-105 dark:text-slate-200 text-sm flex items-center justify-between'>
                                            <p className='mr-8 '>Share on socials</p>

                                            <RiArrowRightCircleLine />


                                        </li>
                                       

                                    </ul>
                                    <p className='font-extrabold'>{service.time}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </AppLayout>
    )
}

export default ServicesPage
