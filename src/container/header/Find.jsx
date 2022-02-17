import React from 'react'
import { Link } from 'react-router-dom'

const Find = () => {

    const path = window.location.pathname;

    return (
        <div>
            <div>
                <ul className='mt-5 lg:mt-0 lg:flex lg:flex-row lg:gap-7 xl:gap-11 items-center'>
                    <li className={`mb-5 lg:mb-0 ${path === '/signup' && 'text-btncolor'}`}><Link to="/signup">Find Artisian</Link></li>
                    <li className='mb-5 lg:mb-0'><Link to="">Find Work</Link></li>
                    <li className='mb-5 lg:mb-0'><Link to="">About Us</Link></li>
                    <li className='mb-5 lg:mb-0'><Link to="">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Find