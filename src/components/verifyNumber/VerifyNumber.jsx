import React from 'react'
import './verifynumber.css';
import logo from '../../assets/logo2.png';
import mobileLogo from '../../assets/Superproxy.png';
import { Terms } from '..';
import { Link } from 'react-router-dom';

const VerifyNumber = () => {
    return (
        <div className='background'>
            <div className='w-screen relative'>
                <div className='lg:flex justify-evenly h-screen w-screen items-center p-10 px-4 sm:p-10 lg:p-20'>
                    <div className="flex justify-center mt-20">
                        <img src={logo} alt="logo" className="lg:block hidden lg:desktop" />
                        <img src={mobileLogo} alt="logo" className="lg:hidden" />
                    </div>
                    <div>
                        <form action="" className="bg-white pt-16 sm:p-22 md:p-28 lg:px-24 lg:py-16 text-center overflow-hidden lg:w-signinWidth h-verifyheight relative" autoComplete='off'>

                            <div className="text-left mt-3 mb-3">
                                <h1 className='text-hmobile mb-5 font-bold'>Verify phone number</h1>
                            </div>

                            <div className="text-left mb-16">

                                <div className='mb-2 flex'>
                                    <select className='mr-6 font-thin border-b border-spanBorder rounded-md focus:border-btncolor focus:outline-none'>
                                        <option value="">Singapore</option>
                                    </select>

                                    <input type="tel" placeholder="Phone number" className='input w-full' />
                                </div>

                            </div>

                            <div>
                                <button className='text-btnmobile border border-btncolor py-2 px-6 rounded-3xl text-black font-medium bg-btncolor'><Link to="/verifytwo">Continue</Link></button>
                            </div>

                        </form>
                    </div>
                </div>
                <div className='absolute bottom-8 left-24 hidden lg:block'>
                    <Terms />
                </div>
            </div>
        </div>
    )
}

export default VerifyNumber
