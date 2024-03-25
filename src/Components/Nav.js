import React, { useState } from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const [openNavigation, setOpenNavigation] = useState(false)

    const navOnSmallDevice = () => {
        return (
            <div className='nav-small-device'>
                <div className='nav-small-device-content'>
                    <div className='closeDiv' onClick={closeNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill='#fff' d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>
                    </div>
                    <div className='divNav'>
                        <NavLink to='/komadniNamestaj' onClick={closeNav} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "activeLink" : ""
                        }>
                            Komadni Namestaj
                        </NavLink>
                    </div>
                    <div className='divNav'>
                        <NavLink to='/namestajPoMeri' onClick={closeNav} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "activeLink" : ""
                        }>
                            Namestaj po meri
                        </NavLink>
                    </div>
                    <div className='divNav'>
                        <NavLink to='/projektovanjeEnterijera' onClick={closeNav} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "activeLink" : ""
                        }>
                            Projektovanje enterijera
                        </NavLink>
                    </div>
                    <div className='divNav'>
                        <NavLink to='/favorite' onClick={closeNav} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "activeLink" : ""
                        }>
                            Omiljeno
                        </NavLink>
                    </div>
                    <div className='divNav'>
                        <NavLink to='/oNama' onClick={closeNav} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "activeLink" : ""
                        }>
                            O nama
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
    const openNav = () => {
        setOpenNavigation(true)
    }
    const closeNav = () => {
        setOpenNavigation(false)
    }

    return (
        <div className='nav'>
            {
                openNavigation && navOnSmallDevice()
            }
            <div className='burger-meny' onClick={openNav}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </div>
            <img src={require("../Assets/logo.png")} alt="logo" />
            <NavLink to='/cart' id='cart-small-device' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "activeLink" : ""
            }>
                <svg className='cart_icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                <div className='cart_div_items'>
                    <span className='cart_num_items'>0</span>
                </div>
            </NavLink>
            <div className='nav_content'>
                <NavLink to='/komadniNamestaj' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "activeLink" : ""
                }>
                    Komadni Namestaj
                </NavLink>
                <NavLink to='/namestajPoMeri' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "activeLink" : ""
                }>
                    Namestaj po meri
                </NavLink>

                <NavLink to='/projektovanjeEnterijera' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "activeLink" : ""
                }>
                    Projektovanje enterijera
                </NavLink>
                <NavLink to='/favorite' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "activeLink" : ""
                }>
                    Omiljeno
                </NavLink>

                <NavLink to='/oNama' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "activeLink" : ""
                }>
                    O nama
                </NavLink>

                <NavLink to='/cart' id='cart' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "activeLink" : ""
                }>
                    <svg className='cart_icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                    <div className='cart_div_items'>
                        <span className='cart_num_items'>0</span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Nav