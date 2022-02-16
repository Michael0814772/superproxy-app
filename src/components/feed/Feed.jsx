import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Artisian } from '..'
import FeedNavBar from '../../container/feedNavbar/FeedNavBar'
import './feed.css'

const Feed = () => {
    return (
        <div>
            <FeedNavBar />
            <Routes>
                <Route path='/artisian' element={ <Artisian />} />
            </Routes>
        </div>
    )
}

export default Feed