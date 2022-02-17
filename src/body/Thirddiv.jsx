import React from 'react';
import Div from './Div';
import say from '../assets/say.png'

const Thirddiv = () => {
    return (
        <div className='xl:px-36'>
            <div className='mb-10 px-10 md:px-20'>
                <h1 className='font-semibold text-homefont'>Testimonials</h1>
                <Div />
            </div>
            <div className='lg:grid grid-cols-2 w-full'>
                <div className='lg:col-span-1 w-full flex lg:justify-center items-center gap-3 px-10 md:px-20 py-14 lg:py-20 relative'>
                    <div><img src={say} alt="say" className='w-8 -mt-8 sm:mr-16' /></div>
                    <div>
                        <h1 className='w-9/12 text-bold text-homefonttwo md:text-hmobile'>What our Clients say</h1>
                    </div>
                    <div className='absolute right-8'>
                        <div className='w-2 h-2 rounded-full bg-btnharsh mb-4' />
                        <div className='w-2 h-2 rounded-full bg-btnharsh mb-4' />
                        <div className='w-2 h-2 rounded-full bg-btncolor' />
                    </div>
                </div>
                <div className='lg:col-span-1 w-full bg-black mb-2 lg:mb-0'>
                    <div className='px-10 md:px-20 py-14 lg:py-20 text-white'>
                        <p className='text-btncolor text-homefonttwo'>“</p>
                        <p className='font-semibold text-homefont mb-3'>All of my expectations were not only met, but exceeded</p>
                        <p className='italic text-pmobile'>Michelle, Home owner</p>
                    </div>
                </div>

                <div className='lg:col-span-1 w-full bg-black'>
                    <div className='px-10 md:px-20 py-14 text-white'>
                        <p className='text-btncolor text-homefonttwo'>“</p>
                        <p className='font-semibold text-homefont mb-3'>All of my expectations were not only met, but exceeded</p>
                        <p className='italic text-pmobile'>Michelle, Home owner</p>
                    </div>
                </div>

                <div className='lg:col-span-1 w-full flex lg:justify-center items-center gap-3 px-10 md:px-20 py-14 lg:py-20 relative'>
                    <div className='mr-40 lg:mr-20'>
                        <div className='w-2 h-2 rounded-full bg-btnharsh mb-4' />
                        <div className='w-2 h-2 rounded-full bg-btnharsh mb-4' />
                        <div className='w-2 h-2 rounded-full bg-btncolor' />
                    </div>

                    <div className='flex items-center'>
                        <div><img src={say} alt="say" className='w-8 -mt-8 sm:mr-16' /></div>
                        <div>
                            <h1 className='w-9/12 text-bold text-homefonttwo md:text-hmobile'>What our Clients say</h1>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Thirddiv