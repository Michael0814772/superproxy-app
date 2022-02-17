import React, { useState } from 'react';
import './navbar.css';
import { MdMenu, MdClose } from 'react-icons/md';
import superproxy from '../../assets/Superproxy.png';
import Find from '../../container/header/Find';
import Login from '../../container/header/Login';
import { Link } from 'react-router-dom';
import { IoMdCall } from 'react-icons/io';

const Navbar = () => {

    const [toogleNav, setToogleNav] = useState("false");

    const openNav = () => {
        setToogleNav(!toogleNav);
    }

    // const path = window.location.pathname;

    return (
        <div>
            <div className="relative">
                <div className='flex justify-around py-4 items-center lg:px-10 xl:px-20 font-semibold text-homefont'>
                    <div className='flex gap-4'>
                        <MdMenu size={30} className='text-black mb-1 mr-3 lg:hidden' onClick={openNav} />
                        <img src={superproxy} alt="logo" />
                    </div>
                    <div className='lg:hidden md:mr-8'>
                        <Link to=''>Home</Link>
                    </div>
                    <div className='hidden lg:block'>
                        <Find />
                    </div>
                    <div className='hidden md:block'>
                        <Login />
                    </div>
                </div>

                <div className={`absolute bg-white w-navitems md:w-64 top-0 md:top-3 z-50 md:h-navi transition-all duration-500 ${toogleNav ? '-left-full' : 'left-0 md:left-8'} lg:hidden`}>
                    <div className='flex justify-end mt-4 mb-6'>
                        <MdClose size={20} className='mr-3' onClick={openNav} />
                    </div>

                    <div className='w-full'>
                        <div className='w-full pl-8 h-screen'>
                            <div className='w-full mb-20 mt-20'>
                                <div className='mb-4 font-medium text-btnmobile'>
                                    <Find />
                                </div>
                                <div className='md:hidden items-center w-full'>
                                    <ul className='md:flex md:items-center gap-9 lg:gap-5 xl:gap-9'>
                                        <li className='bg-btncolor py-2 px-4 rounded-lg w-fit mb-5'><Link to="/signin">Login</Link></li>
                                        <li className='bg-black text-white py-2 px-4 rounded-full w-fit'><Link to="" className='flex items-center'><span className='mr-2'><IoMdCall /></span> 800 456 889</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
