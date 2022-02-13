import React, { useState } from 'react';
import './FeedNavBar';
import { MdMenu, MdClose } from 'react-icons/md';
import logo from '../../assets/logo2.png';
import profile from '../../assets/profile.png';
import notification from '../../assets/notification.png';
import chattrans from '../../assets/chattrans.png';
import { AiFillHome } from 'react-icons/ai';
import { BsChatLeftDotsFill } from 'react-icons/bs';
import { FcCheckmark } from 'react-icons/fc';

const FeedNavBar = () => {

    const [toogleNav, setToogleNav] = useState("false");

    const openNav = () => {
        setToogleNav(!toogleNav);
    }

    return (
        <div>
            <div className='flex justify-between px-6 py-2 sm:px-16 lg:px-28 bg-black relative'>
                <div className='flex items-center'>
                    <MdMenu size={30} className='text-white mb-1 mr-3' onClick={openNav} />
                    <img src={logo} alt="logo" className='w-24' />
                </div>
                <div className='flex items-center'>
                    <img src={notification} alt="notification" className='w-4 h-4 mr-4' />
                    <img src={chattrans} alt="chattrans" className='w-4 h-4 mr-4' />
                    <img src={profile} alt="profile" className='w-4 h-4 mr-4' />
                </div>
                <div className={`absolute bg-white w-navitems top-0 ${toogleNav ? '-left-96' : 'left-0'} navtransition`}>
                    <div className='flex justify-end mt-4 mb-6'>
                        <MdClose size={20} className='mr-3' onClick={openNav} />
                    </div>

                    <div className='w-full'>
                        <div className='w-full pl-8 h-screen'>
                            <div className='w-fit mb-20'>
                                <div className='mb-4 font-medium text-btnmobile'>
                                    <a href="#" className='flex items-center '>
                                        <AiFillHome className='text-btncolor mr-2' />
                                        <p>Home</p>
                                    </a>
                                </div>
                                <div className='font-medium text-btnmobile'>
                                    <a href="#" className='flex items-center'>
                                        <BsChatLeftDotsFill className='text-btncolor mr-2' />
                                        <p>My Jobs</p>
                                    </a>
                                </div>
                            </div>

                            <div className='w-full mb-4'>
                                <div className='border border-spanBorder w-5/6' />
                            </div>

                            <div>
                                <h1 className='font-medium text-btnmobile mb-2'>Get Started</h1>
                                <p className='flex items-center text-pmobile mb-1'><span><FcCheckmark size={17} className='mr-3 text-green-700' /></span>Verify email address</p>
                                <p className='flex items-center text-pmobile mb-1 text-navtext font-bold'><span><MdClose size={18} className='mr-3 text-red-700' /></span>Verify Identity</p>
                                <p className='flex items-center text-pmobile mb-1 text-navtext font-bold'><span><MdClose size={18} className='mr-3 text-red-700' /></span>Add payment method</p>
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