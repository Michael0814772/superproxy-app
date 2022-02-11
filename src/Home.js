import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/signup" className='lg:text-7xl md:text-4xl text-2xl font-extrabold text-red-800'>Click me to continue</Link>
        </div>
    )
}

export default Home