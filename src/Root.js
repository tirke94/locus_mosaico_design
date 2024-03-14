import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Components/Nav'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import './index.css'

const Root = () => {

    return (
        <>
            <div className='nav'>
                <Nav />
            </div>
            <Outlet />
            <Contact />
            <Footer />
        </>
    )
}

export default Root