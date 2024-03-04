import React from 'react'
import './HomeCategories.css'

const HomeCategories = ({ children }) => {
    return (
        <section className='categoriesSection'>
            {children}
        </section>
    )
}

export default HomeCategories