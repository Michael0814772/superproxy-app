import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='w-full h-32 lg:h-52 xl:h-60 flex flex-col justify-center items-center bg-btncolor'>
                <p className='text-pmobile mb-1'>© 2021 SuperProxy</p>
                <p className='text-pmobile'>Terms of Service | Privacy Policy | Accesibility</p>
            </div>
        </div>
    )
}

export default Footer