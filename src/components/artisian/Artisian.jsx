import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { ArtisianFeed } from '..';
import Footer from '../../container/feedNavbar/Footer';
import GetStarted from '../../container/getStarted/GetStarted';

const Artisian = () => {
    return (
        <div className='relative'>
            <div className='bg-black text-white'>
                <div className='w-4/5 mx-auto pb-7 lg:px-44'>
                    <div className='mb-3'>
                        <h1 className='font-bold text-hmobile mb-1 sm:text-center'>Find an Artisan</h1>
                        <p className='font-normal text-pmobile sm:text-center'>Get artisans ready for work close to you</p>
                    </div>

                    <div className='md:flex items-center'>
                        <div className='mb-3 md:mb-0 md:w-full md:mr-3'>
                            <input type="text" placeholder='What service are you looking for ?' className='focus:outline-none rounded-lg w-full py-2 pl-2 text-pmobile' />
                        </div>

                        <div className='flex justify-between w-full'>
                            <div className='w-3/5'>
                                <input type="text" placeholder='Enter your location' className='focus:outline-none rounded-lg py-2 pl-2 w-full pr-2 text-pmobile' />
                            </div>
                            <div className='w-4/12 justify-end flex'>
                                <button className='bg-btncolor py-1 text-black font-medium text-btnmobile rounded-lg px-3'>Search</button>
                            </div>
                        </div>
                    </div>

                    <div className='text-center my-1 lg:hidden'>
                        <p>Or</p>
                    </div>

                    <div className='text-center lg:hidden'>
                        <button className='bg-btncolor py-2 w-full rounded-lg text-black font-medium text-btnmobile'>Post a job</button>
                    </div>

                </div>
            </div>

            <div className='md:mt-14 md:grid md:grid-cols-3 lg:px-40 xl:px-56 xl:grid-cols-4 md:gap-1 lg:gap-3 px-6'>
                <div className='md:col-span-1'>
                    <div className='my-5 md:hidden'>
                        <p className='border-b border-spanBorder w-fit text-pmobile pb-2'>Show filter <span></span></p>
                    </div>
                    <div className='md:border border-spanBorder rounded-lg pb-12'>
                        <h1 className='hidden md:flex font-medium text-btnmobile mb-6 pl-3 pt-2'>Categories</h1>
                        <div className='mb-2 md:text-center'>
                            <div className='flex md:pl-5'>
                                <input type="checkbox" className='mr-1 hidden md:flex' />
                                <h1 className='font-semibold text-pmobile mb-1'>Building maintenance</h1>
                            </div>
                            <div className='flex md:block md:pl-8 pl-2'>
                                <div className='flex items-center mr-3'>
                                    <input type="checkbox" className='mr-1' />
                                    <p>Carpentry</p>
                                </div>

                                <div className='flex items-center mr-3'>
                                    <input type="checkbox" className='mr-1' />
                                    <p>Painting</p>
                                </div>

                                <div className='flex items-center mr-3'>
                                    <input type="checkbox" className='mr-1' />
                                    <p>Plumbering</p>
                                </div>
                            </div>
                        </div>

                        <div className='mb-2'>
                            <div className='flex md:pl-5'>
                                <input type="checkbox" className='mr-1 hidden md:flex' />
                                <h1 className='font-semibold text-pmobile mb-1'>Outdoor Services</h1>
                            </div>
                            <div className='flex md:block md:pl-8 pl-2'>
                                <div className='flex items-center mr-3'>
                                    <input type="checkbox" className='mr-1' />
                                    <p>Gardening</p>
                                </div>

                                <div className='flex items-center mr-3'>
                                    <input type="checkbox" className='mr-1' />
                                    <p>Massonry</p>
                                </div>

                                <div className='flex items-center mr-3'>
                                    <input type="checkbox" className='mr-1' />
                                    <p>Surveying</p>
                                </div>
                            </div>
                        </div>

                        <div className='mb-2 md:text-center'>
                            <div className='flex md:pl-5'>
                                <input type="checkbox" className='mr-1 hidden md:flex' />
                                <h1 className='font-semibold text-pmobile mb-1'>Experience level</h1>
                            </div>
                            <div className='flex md:block md:pl-8 pl-2'>
                                <div className='flex items-center mr-3'>
                                    <input type="checkbox" className='mr-1' />
                                    <p>Beginner</p>
                                </div>

                                <div className='flex items-center mr-3'>
                                    <input type="checkbox" className='mr-1' />
                                    <p>Intermediate</p>
                                </div>

                                <div className='flex items-center mr-3'>
                                    <input type="checkbox" className='mr-1' />
                                    <p>Expert</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 md:border border-spanBorder rounded-lg">
                    <ArtisianFeed />
                </div>

                <div className='hidden lg:col-span-1 xl:block lg:border border-spanBorder rounded-lg h-fit w-fit'>
                    <div>
                        <h1 className='font-medium text-btnmobile mb-2 mt-2 border-b border-spanBorder pl-3 pb-2 pr-7'>Get Started</h1>
                        <div className='pl-3 pr-9 pb-6'>
                            <p className='flex items-center text-pmobile mb-1'><span><FcCheckmark size={17} className='mr-3 text-green-700' /></span>Verify email address</p>
                            <p className='flex items-center text-pmobile mb-1 text-navtext font-bold'><span><MdClose size={18} className='mr-3 text-red-700' /></span>Verify Identity</p>
                            <p className='flex items-center text-pmobile mb-1 text-navtext font-bold'><span><MdClose size={18} className='mr-3 text-red-700' /></span>Add payment method</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='mt-12'>
                <Footer />
            </div>
        </div>
    )
}

export default Artisian