import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { RiBookMarkLine, RiBubbleChartLine, RiEye2Line } from 'react-icons/ri';

const variants = {
    visible: (custom: any) => ({
        opacity: [1, 0.5, 1],
       
        scale: [1, 0.9, 1],
        transition: {delay: custom}
    }),
    hidden: { opacity: 0  },
};

const vmoList = [
    {
        title: 'Vision',
        description: 'Awakening Generations To Their Inheritance In Christ; Teaching Them How To Live The Good Life; And Making Ready A People Led By The Spirit Prepared For The Lord',
        icon: <RiEye2Line size={50}/>,
        link: 'https://www.gstatic.com/images/branding/product/1x/keep_48dp.png'
    },
    {
        title: 'Mission',
        description: 'Repositioning God In The Conciousness And Priority Of Men',
        icon: <RiBubbleChartLine size={50}/>,
        link: 'https://www.gstatic.com/images/branding/product/1x/docs_48dp.png'
    },
    {
        title: 'Word For The Month',
        description: 'I/We now overflow with the Increase of God that fills all things in all things in Jesus Name.Amen!',
        icon: <RiBookMarkLine size={50}/>,
        link: 'https://www.gstatic.com/images/branding/product/1x/keep_48dp.png'
    }
]

export const VMO = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div className='px-5 md:px-10 p-3 md:p-20'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12 '>
                {
                    vmoList.map((vmo, index) => {
                        return (
                            <motion.div ref={ref} initial={{ 
                                opacity: 0,
                                scale: 0.5,
                             }} animate={controls} exit="hidden" custom={(index + 1) * 0.2} variants={variants} className="relative flex flex-col items-center justify-around p-4  h-80 rounded-2xl " style={{ transform: ' translate(0px, 0px)', opacity: 1 }}>
                                <div className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-secondary rounded-xl -rotate-2 " style={{ zIndex: -1 }}></div>
                                <div className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-primary rounded-xl rotate-2 " style={{ zIndex: -1 }}></div>
                                <div className="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-white dark:bg-slate-900 rounded-xl " style={{ zIndex: -1 }}></div>
                                <h3 className="z-10 p-2 text-2xl font-semibold text-blue-900 dark:!text-slate-200">{vmo.title}</h3>
                                <div className="z-10 p-2 text-blue-900 dark:text-blue-300">
                                   {vmo.icon}
                                </div>
                                <div className="z-10 p-2 text-center text-gray-500 dark:!text-slate-200 text-xl">
                                    {vmo.description}
                                </div>
                            </motion.div>

                        )
                    }
                    )
                }
            </div>

        </div >
    )
}
