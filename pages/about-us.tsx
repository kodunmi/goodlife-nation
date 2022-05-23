import Link from 'next/link'
import React, { useEffect } from 'react'
import { RiArrowRightCircleLine } from 'react-icons/ri'
import { AppLayout } from '../layouts'
import {
    motion,
    useMotionValue,
    useTransform,
    AnimatePresence,
    useAnimation
} from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { VMO } from '../components';

function AboutUsPage() {
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

            <div className='pt-40 px-5 pb-20'>
                <h1 className='text-5xl text-center'>The <span className='text-primary'>Goodlife</span>  Nation</h1>
                <p className='text-center mb-20'>Extra ordinary people led by the spirit of God</p>
                <div className='max-w-5xl  mx-auto md:grid-cols-2 grid grid-cols-1 gap-6'>
                    <motion.div variants={ImageVariable} animate={controls} ref={ref} initial='initial' exit="hidden" className='bg-[url("/images/rpn/6.jpg")] bg-no-repeat bg-cover bg-top rounded-lg p-5 h-[300px] md:h-auto bg-blend-overlay'>
                        <img src="/logo.png" alt="" className='w-12' />
                    </motion.div>

                    <div className='mt-4 mb-10 md:mb-10'>
                        <p className='text-primary text-sm mb-3 dark:!text-slate-200'><b>TGN</b> - President founder</p>
                        <h3 className='text-secondary font-bold text-3xl mb-3 dark:!text-slate-200' >Rev. P.N. Utomi</h3>
                        <hr />
                        <p className='text-secondary text-lg mb-10 mt-3 dark:!text-slate-200'>
                            Awakening Generations To Their Inheritance In Christ; Teaching Them How To Live The Good Life; And Making Ready A People Led By The Spirit Prepared For The Lord.
                        </p>
                    </div>
                </div>
                <div className='mt-20 max-w-4xl mx-auto'>
                    <h2 className='text-xl text-center mb-5 text-cyan-300'>What is the vision of TGP ?</h2>
                    <ul className='list-disc'>
                        <li>
                            <p>wakening generations to their inheritance in Christ, teaching them how to live the good life, making ready extraordinary people led by the Spirit, prepared for the Lord.</p>
                        </li>
                        <li>
                            <p>Raising people with unique marks and identities; a people with enviable standards, having distinguished features with a defined way of life; a people with equitable character, having a sense of purpose, focus and direction in life.</p>
                        </li>
                        <li>
                            <p>A people whose trademark is excellence in profession for the benefit of the gospel, a people whose aim in life is soul-winning, soul-building, soul-training and soul-sending for the gospel, using our admirable professions as tools for achieving this highest goal in life which has eternal significance.</p>
                        </li>
                        <li>
                            <p>Raising the saints to full maturity/manhood where they can be measured by nothing but the fullness of Christ.</p>
                        </li>
                    </ul>

                    <h2 className='text-xl text-center mb-5 mt-10 text-cyan-300'>How are we going to achieve the above ?</h2>
                    <h3 className='text-3xl text-center'>Repositioning God in the consciousness and priority of man.</h3>

                    <h2 className='text-xl text-center mb-5 mt-10 text-cyan-300'>What do we hope to achieve with this ?</h2>
                    <h3 className='text-3xl text-center'>Establishing the Kingdom of God and its’ Culture in and amongst men.</h3>





                </div>

                <VMO />
            </div>


        </AppLayout>
    )
}

export default AboutUsPage