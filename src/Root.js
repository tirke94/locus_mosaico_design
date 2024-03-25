import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Components/Nav'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import './index.css'

const Root = () => {

    return (
        <>
            <Nav />
            <Outlet />
            <Contact />
            <Footer />
        </>
    )
}

export default Root