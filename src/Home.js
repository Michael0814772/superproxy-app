import React from 'react'
import Seconddiv from './body/Seconddiv';
import Thirddiv from './body/Thirddiv';
import Navbar from './container/navbar/Navbar';


const Home = () => {

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className='homepage text-white lg:flex lg:justify-center lg:items-center px-5 pt-20 sm:px-12 xl:px-40 2xl:px-56 4x1:px-80'>
                <div className='mb-16 lg:-mt-24 xl:pr-24 2xl:pr-48 3xl:pr-56 4x1:pr-96'>
                    <p className='font-semibold text-homefont mb-5'>Get a trusted Artisan right away!</p>
                    <p className='text-homefonttwo font-bold sm:text-cardfont lg:text-homefonttwodesk'>Connect to over 200k plus
                        Artisans & Businesses
                        across the Philipines
                    </p>
                </div>
                <div>
                    <div className='card bg-btncolor mb-5 xl:mb-0'>
                        <h1 className='cardheader'>Find Artisan</h1>
                        <p className='cardpara'>We make your job easier – that means finding you the best Artisan within reach.</p>
                        <button className='bg-white cardbtn'>Hire now</button>
                    </div>
                    <div className='card bg-white xl:-ml-24'>
                        <h1 className='cardheader'>Find Work</h1>
                        <p className='cardpara'>We make your job easier – that means finding you the best Artisan within reach.</p>
                        <button className='bg-btncolor cardbtn'>Find work</button>
                    </div>
                </div>
            </div>

            <div className='mb-14'>
                <Seconddiv />
            </div>

            <div>
                <Thirddiv />
            </div>


        </div>
    )
}

export default Home