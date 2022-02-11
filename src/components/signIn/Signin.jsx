import React from 'react';
import Terms from '../terms/Terms';
import './signin.css';
import logo from '../../assets/logo2.png';
import mobileLogo from '../../assets/Superproxy.png';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';

const Signin = () => {
    return (
        <div className='background'>
            <div className='w-screen relative'>
                <div className='lg:flex justify-evenly h-screen w-screen items-center p-10 px-4 sm:p-10 lg:p-20'>
                    <div className="flex justify-center mt-20">
                        <img src={logo} alt="logo" className="lg:block hidden lg:desktop" />
                        <img src={mobileLogo} alt="logo" className="lg:hidden" />
                    </div>
                    <div>
                        <form action="" className="bg-white pt-16 sm:p-22 md:p-28 lg:px-24 lg:py-16 text-center overflow-hidden lg:w-signinWidth" autoComplete='off'>

                            <div className="text-left mt-3 mb-3">
                                <h1 className='text-hmobile mb-5 font-bold'>Sign in</h1>
                                <p className='text-pmobile mb-2'>New User? <Link to="/signup" className='text-btncolor ml-2 font-medium'>Create an account</Link></p>
                            </div>

                            <div className="text-left mb-4">

                                <div className='mb-2'>
                                    <input type="text" placeholder="Email address" className='input w-full' />
                                    <p className='text-textred text-errormobile'>Email already exists</p>
                                </div>

                                <div className='relative'>
                                    <input type="password" placeholder="Password" className='input w-full' />

                                    <svg className="w-6 h-6 absolute top-3 right-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>

                                    <ol className='list-disc list-inside'>
                                        <li className='text-textred text-errormobile'><span className='-ml-2'>password should be at leaset 6 characters list</span></li>
                                        <li className='text-textred text-errormobile'><span className='-ml-2'>must include a number</span></li>
                                    </ol>
                                </div>

                            </div>

                            <div className='relative'>
                                <button className='text-btnmobile border border-btncolor py-2 px-6 rounded-3xl text-black font-medium bg-btncolor absolute right-0'>Continue</button>
                            </div>

                            <div className='mt-20 flex items-center'>
                                <div className='w-full border border-spanBorder h-0 mr-2' />
                                <p className='mr-2'>Or</p>
                                <div className='w-full border border-spanBorder h-0' />
                            </div>

                            <div className='flex flex-col mt-4'>
                                <button className='btn mb-4 border-2 border-spanBorder '><span className='mr-2'><FcGoogle className='text-white rounded-xl' size={22} /></span>Continue with Google</button>
                                <button className='btn bg-blue-800 text-white'><span className='mr-2'><AiFillFacebook className='text-white rounded-xl' size={22} /></span>Continue with Facebook</button>
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

export default Signin
