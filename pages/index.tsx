import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { RiArrowRightCircleLine } from 'react-icons/ri'
import { Header, Messages, VMO } from '../components'
import { AppLayout } from '../layouts'
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
  useAnimation
} from "framer-motion";
import { useInView } from 'react-intersection-observer'

function Card(props: any) {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false
  });

  function handleDragEnd(event: any, info: any) {
    if (info.offset.x < -100) {
      props.setExitX(-250);
      props.setIndex(props.index + 1);
    }
    if (info.offset.x > 100) {
      props.setExitX(250);
      props.setIndex(props.index + 1);
    }
  }

  return (
    <motion.div
      style={{
        width: '100%',
        height: '100%',
        position: "absolute",
        top: 0,
        x: x,
        rotate: rotate,
        cursor: "grab"
      }}
      whileTap={{ cursor: "grabbing" }}
      drag={props.drag}
      dragConstraints={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }}
      onDragEnd={handleDragEnd}
      initial={props.initial}
      animate={props.animate}
      transition={props.transition}
      exit={{
        x: props.exitX,
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.2 }
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: "#fff",
          borderRadius: 30,
          scale: scale
        }}
      />
    </motion.div>
  );
}

function Example() {
  const [index, setIndex] = useState(0);
  const [exitX, setExitX] = useState("100%");

  return (
    <motion.div
      style={{
        width: '100%',
        height: '100%',
        position: "relative"
      }}
    >
      <AnimatePresence initial={false}>
        <Card
          key={index + 1}
          initial={{ scale: 0, y: 105, opacity: 0 }}
          animate={{ scale: 0.75, y: 30, opacity: 0.5 }}
          transition={{
            scale: { duration: 0.2 },
            opacity: { duration: 0.4 }
          }}
        />
        <Card
          key={index}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            opacity: { duration: 0.2 }
          }}
          exitX={exitX}
          setExitX={setExitX}
          index={index}
          setIndex={setIndex}
          drag="x"
        />
      </AnimatePresence>
    </motion.div>
  );
}

const Home: NextPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      console.log("inView");

      controls.start('visible');

    }


  }, [controls, inView]);





  const ImageVariable = {
    visible: (custom: any) => ({
      // opacity: [1, 0.5, 1],

      scale: [1, 0.9, 1],
      transition: { duration: 1, ease: "easeInOut" }
    }),
    hidden: { opacity: 0 },
  }

  return (
    <AppLayout>
      <Head>
        <title>The Goodlife Nation</title>
      </Head>
      <Header />
      <div>
        <div className='px-5 md:px-10 mt-32 flex justify-center'>
          <div className='max-w-5xl md:grid-cols-2 grid grid-cols-1 gap-6'>
            <motion.div variants={ImageVariable} animate={controls} ref={ref} initial='initial' exit="hidden" className='bg-[url("/images/1.jpg")] bg-no-repeat bg-cover bg-top rounded-lg p-5 h-[300px] md:h-auto bg-blend-overlay'>
              <img src="/logo.png" alt="" className='w-12' />
            </motion.div>
            {/* <motion.img ref={ref} animate={controls}  initial='initial' exit="hidden" src="/images/1.jpg" alt="" className='rounded-3xl bg-blend-overlay bg-primary' /> */}
            {/* <Example /> */}
            <div className='mt-4 mb-10 md:mb-10'>
              <p className='text-primary text-sm mb-3 dark:!text-slate-200'><b>TGN</b> - a people a coming</p>
              <h3 className='text-secondary font-bold text-3xl mb-3 dark:!text-slate-200' >The Goodlife Family Church</h3>
              <hr />
              <p className='text-secondary text-lg mb-10 mt-3 dark:!text-slate-200'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt numquam nam facere corporis! Temporibus ipsam quaerat natus vero delectus.
              </p>
              <a href="" className='px-10 py-3 text-sm bg-primary text-white rounded-lg hover:bg-secondary ease-in duration-300'>
                Contact Us
              </a>
            </div>

          </div>
        </div>
        <div className='px-5 md:px-10 mt-32 flex justify-center w-full'>
          <div className='max-w-5xl md:grid-cols-2 grid grid-cols-1 gap-6'>
            <div className='mt-4 mb-10 md:mb-10'>
              <p className='text-primary text-sm mb-3 dark:!text-slate-200'><b>TGN</b> - Word for the year</p>
              <h3 className='text-secondary font-bold text-3xl mb-3 dark:!text-slate-200' >Our Year Of Perfection</h3>
              <hr />
              <h3 className='text-secondary text-4xl mb-2 mt-3 dark:!text-slate-200'>
                The Month Of Double Portion
              </h3>
              <p className='mb-10'>
                <b>For this is my telling month</b> The manifestation of the month of God for me
              </p>
              <a href="/word-for-the-month" className='px-10 py-3 text-sm bg-primary text-white rounded-lg hover:bg-secondary ease-in duration-300'>
                Check Others
              </a>
            </div>
            <motion.div variants={ImageVariable} animate={controls} ref={ref} initial='initial' exit="hidden" className='bg-[url("/images/general/1.jpg")] bg-no-repeat bg-cover bg-top rounded-lg p-5 h-[300px] md:h-auto bg-blend-overlay'>
              <img src="/logo.png" alt="" className='w-12' />
            </motion.div>
            {/* <motion.img ref={ref} animate={controls}  initial='initial' exit="hidden" src="/images/1.jpg" alt="" className='rounded-3xl bg-blend-overlay bg-primary' /> */}
            {/* <Example /> */}
          </div>
        </div>
        <div>

        </div>
        {/* flip card */}
        {/* <div>
          <Example />
        </div> */}
        {/* end of flip  */}
        <VMO />
        <Messages />
        <div>
          <div className="w-full text-center bg-cover bg-no-repeat bg-top" style={{ backgroundImage: "url('/images/rpn/3.jpg')" }}>
            <div className='py-32'>
              <h2 className='mt-10 mb-4 text-4xl text-center italic tracking-tight font-extrabold text-slate-200 sm:text-5xl md:text-6xl'>Rev. P.M Utomi</h2>
              <p className='text-center text-white inline-block align-middle text-lg max-w-md' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nesciunt at dolores laborum corporis dolore quae blanditiis incidunt, iure fugiat error minus .</p>
              <div className='mt-20'>
                <a className='inline-block  px-6 py-2 border-2 mr-3 border-white text-white font-medium text-xs leading-tight uppercase rounded-xl hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out' href='/rpn-today'>
                  RPN TODAY
                </a>

                <a className='inline-block px-6 py-2 border-2 border-white  text-white font-medium text-xs leading-tight uppercase rounded-xl hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out' href='/qoutes'>
                  QUOTES
                </a>

              </div>

            </div>

          </div>
        </div>
        <div className='px-5 md:px-10 mt-32 flex justify-center'>
          <div className='mb-16 pb-8  max-w-5xl md:grid-cols-2 grid grid-cols-1 gap-6'>

            <div className='mt-4 mb-10 md:mb-0'>
              <p className='text-primary text-sm mb-3 dark:!text-slate-200'><b>TGN</b> - a people a coming</p>
              <h3 className='text-secondary font-bold text-3xl mb-3 dark:!text-slate-200 ' >Walk With Us And Work With Us</h3>
              <hr />
              <ul className='mt-4'>
                <li className='cursor-pointer mb-4 transition duration-150 ease-in-out hover:scale-105 text-blue-700 hover:text-primary dark:text-slate-200 text-2xl flex items-center justify-between pr-8'>
                  <p className='mr-8 '>OUR SERVICES</p>

                  <RiArrowRightCircleLine className='self-end' />


                </li>
                <li className='cursor-pointer mb-4  transition duration-150 ease-in-out hover:scale-105 text-blue-700 hover:text-primary dark:text-slate-200 text-2xl flex items-center justify-between pr-8'>
                  <p className='mr-8 '>CAMPUS COMMUNITY</p>

                  <RiArrowRightCircleLine />


                </li>
                <li className='cursor-pointer mb-4  transition duration-150 ease-in-out hover:scale-105 text-blue-700 hover:text-primary dark:text-slate-200 text-2xl flex items-center justify-between pr-8'>
                  <p className='mr-8 '>MERCY SEAT</p>

                  <RiArrowRightCircleLine />


                </li>
                <li className='cursor-pointer mb-4  transition duration-150 ease-in-out hover:scale-105 text-blue-700 hover:text-primary dark:text-slate-200 text-2xl flex items-center justify-between pr-8'>
                  <p className='mr-8 '>BOWELS OF COMPASSION</p>

                  <RiArrowRightCircleLine />


                </li>

              </ul>

            </div>
            <div className="g-cover bg-no-repeat bg-top rounded-2xl md:h-full h-80 " style={{ backgroundImage: "url('/images/rpn/4.jpg')" }}>

            </div>
            {/* <img src="/images/rpn/1.jpg" alt="" className='rounded-3xl ' /> */}

          </div>
        </div>
      </div>


    </AppLayout>
  )
}

export default Home
