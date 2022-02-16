import React, { useState } from 'react';
import './FeedNavBar';
import { MdMenu, MdClose } from 'react-icons/md';
import logo from '../../assets/logo2.png';
import profile from '../../assets/profile.png';
import notification from '../../assets/notification.png';
import chattrans from '../../assets/chattrans.png';
import { AiFillHome } from 'react-icons/ai';
import { BsChatLeftDotsFill } from 'react-icons/bs';
import GetStarted from '../getStarted/GetStarted';
import { Link } from 'react-router-dom';

const FeedNavBar = () => {

    const [toogleNav, setToogleNav] = useState("false");

    const openNav = () => {
        setToogleNav(!toogleNav);
    }

    const path = window.location.pathname;

    return (       
        <div>
            <div className='flex justify-between px-6 py-5 sm:px-16 lg:px-56 bg-black relative'>
                <div className='flex items-center justify-between'>
                    <MdMenu size={30} className='text-white mb-1 mr-3 lg:hidden' onClick={openNav} />
                    <Link to="/">
                        <img src={logo} alt="logo" className='w-24' />
                    </Link>
                    <div className='hidden lg:flex text-white items-center ml-32'>
                        <Link to="/feed/artisian" className={`mr-12 ${path === '/feed/artisian' && 'text-btncolor'}`}>Find Artisan</Link>
                        <Link to="/feed/job" className={`${path === '/feed/job' && 'text-btncolor'}`}>My Job</Link>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src={notification} alt="notification" className='w-4 h-4 mr-4' />
                    <img src={chattrans} alt="chattrans" className='w-4 h-4 mr-4' />
                    <img src={profile} alt="profile" className='w-4 h-4 mr-4' />
                </div>
                <div className={`absolute bg-white w-navitems md:w-64 top-0 md:top-3 z-50 md:h-navheight transition-all duration-500 ${toogleNav ? '-left-full' : 'left-0 md:left-16'} lg:hidden`}>
                    <div className='flex justify-end mt-4 mb-6'>
                        <MdClose size={20} className='mr-3' onClick={openNav} />
                    </div>

                    <div className='w-full'>
                        <div className='w-full pl-8 h-screen '>
                            <div className='w-fit mb-20'>
                                <div className='mb-4 font-medium text-btnmobile'>
                                    <Link to="/feed/artisian" className='flex items-center' onClick={openNav}>
                                        <AiFillHome className='text-btncolor mr-2' />
                                        Home
                                    </Link>
                                </div>
                                <div className='font-medium text-btnmobile'>
                                    <Link to="/feed/job" className='flex items-center' onClick={openNav}>
                                        <BsChatLeftDotsFill className='text-btncolor mr-2' />
                                        My Job
                                    </Link>
                                </div>
                            </div>

                            <div className='w-full mb-4'>
                                <div className='border border-spanBorder w-5/6' />
                            </div>

                            <div>
                                <GetStarted />
                            </div>

                            <div className='w-full mt-4'>
                                <div className='border border-spanBorder w-5/6' />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FeedNavBar