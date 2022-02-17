import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdCall } from 'react-icons/io';

const Login = () => {
    return (
        <div>
            <div>
                <ul className='md:flex md:items-center gap-9 lg:gap-5 xl:gap-9'>
                    <li className='bg-btncolor py-2 px-4 rounded-lg '><Link to="/signin">Login</Link></li>
                    <li className='bg-black text-white py-2 px-4 rounded-full'><Link to="" className='flex items-center'><span className='mr-2'><IoMdCall /></span> 800 456 889</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Login