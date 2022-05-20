import React from 'react'

export const Header = () => {
    return (
        <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
            <div
                className="absolute top-1/3 left-4 md:left-20 z-20"
            >
                <h1 className="text-6xl tracking-tight font-extrabold text-white sm:text-7xl md:text-8xl">
                    <span className="block  font-['Yellowtail']">Welcome</span>{' '}
                    <span className="block font-['Yellowtail'] text-white ">to your rest</span>
                </h1>
                <div className='flex w-40 flex-col'>
                    <div className="cursor-pointer p-2 inline-block text-xl text-white mt-6 mb-3 bg-blue-900 bg-opacity-50 rounded-xl">
                        Prayer Request
                    </div>
                    <div className="cursor-pointer p-2 inline-block text-xl text-white mb-3 bg-blue-900 bg-opacity-50 rounded-xl">
                        Truth In Reality
                    </div>
                    <div className="cursor-pointer p-2 inline-block text-xl text-white mb-3 bg-blue-900 bg-opacity-50 rounded-xl">
                        Got Questions
                    </div>
                </div>
            </div>
            <video
                autoPlay
                loop
                muted
                className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            >
                <source
                    src="/videos/home.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </header>
    )
}
