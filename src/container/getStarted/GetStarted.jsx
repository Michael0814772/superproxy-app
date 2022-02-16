import React from 'react';
import { MdClose } from 'react-icons/md';
import { FcCheckmark } from 'react-icons/fc';

const GetStarted = () => {
    return (
        <div>

            <div>
                <h1 className='font-medium text-btnmobile mb-2'>Get Started</h1>
                <p className='flex items-center text-pmobile mb-1'><span><FcCheckmark size={17} className='mr-3 text-green-700' /></span>Verify email address</p>
                <p className='flex items-center text-pmobile mb-1 text-navtext font-bold'><span><MdClose size={18} className='mr-3 text-red-700' /></span>Verify Identity</p>
                <p className='flex items-center text-pmobile mb-1 text-navtext font-bold'><span><MdClose size={18} className='mr-3 text-red-700' /></span>Add payment method</p>
            </div>

        </div>
    )
}

export default GetStarted