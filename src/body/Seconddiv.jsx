import React from 'react'
import { Link } from 'react-router-dom'
import Div from './Div'

const Seconddiv = () => {
    return (
        <div className='xl:flex xl:px-36'>
            <div className='pt-20 pl-10 md:pl-20 xl:mr-7'>
                <p className='font-semibold text-homefont pb-1 xl:w-1/2'>What is SuperProxy ?</p>
                <Div />
                <h1 className='font-bold text-cardfont md:text-homefonttwodesk mt-4'>Your Trusted Artisans</h1>
            </div>
            <div className='md:w-11/12 xl:w-3/5 pl-10 md:pl-20 xl:pl-0 pr-10 lg:pr-0 -mt-16 md:mt-0'>
                <p className='text-btnmobile md:text-homefont pt-32 mb-5 lg:w-11/12'>SuperProxy is a community of expert Artisans providing your needed services around the home and office.  We guarantee comfort and peace of mind with our sole commitment to pairing every client – individual, home, or office with the best of Artisans in your local area to ensure you get top talent service in time and at the best price available.
                </p>
                <Link to='' className='text-btncolor font-medium text-homefont'>More About Us</Link>
            </div>
        </div>
    )
}

export default Seconddiv