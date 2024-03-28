import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Components/Nav'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { Toaster } from "react-hot-toast"
import './index.css'

const Root = () => {

    return (
        <>
            <Nav />
            <Outlet />
            <Contact />
            <Footer />
            <Toaster
                position="bottom-right"
                toastOptions={{
                    duration: 3000,
                    style: {
                        color: "#fff",
                        fontSize: "1.2rem",
                    },
                    success: {
                        style: {
                            background: "#9bff9b",
                            color: "#006e00",
                        },
                    },
                    error: {
                        style: {
                            background: "#fd9393",
                            color: "#f00",
                        },
                    },
                }}
            />
            {/* toast.success(`Successfully added product!`)
            toast.error(
                `Already added this product!\n Add product amount in the cart!`,
            )
            import toast, { Toaster } from "react-hot-toast" */}
        </>
    )
}

export default Root