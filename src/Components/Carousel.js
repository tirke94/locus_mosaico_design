import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Carousel.css'
import { NavLink } from 'react-router-dom'

const Carousel = () => {

    const images = [
        'https://images.pexels.com/photos/339567/pexels-photo-339567.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://cdn.fstoppers.com/media/2020/12/21/nando-vertical-horizontal-04.jpg',
        'https://images.unsplash.com/photo-1695848548758-3ee40e6cd9ed?w=420&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NzI0MDk2ODl8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1661041521544-48c4140b8af6?w=420&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODYzOTg4OHx8ZW58MHx8fHx8',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjBqltNGYEAoNuAqITHFgFLFigzfvNuQ9EVOV-7t0UWqSzJ_Whb_EACkgLFXLQ1WfHjE&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRss1hT4MBc6eY8hoK-pc_M9d5hCD5CkAlWju60nrF94xxII8aPKXzc9RvCknazo9UwxmA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qQACGM-ZVHbcPxi9ay5Oy6JyT9HEyBKO9fLUJ-arR0Y7Hx1Ssz_qujRI-VFF-aVrMA0&usqp=CAU',
        'https://wallpaperaccess.com/full/1212006.jpg',
        'https://st2.depositphotos.com/1002489/5568/i/450/depositphotos_55681849-stock-photo-new-york-city-amazing-sunset.jpg',
        'https://i.pinimg.com/564x/7e/12/ea/7e12ead71623c63286ffb2fe26f99156.jpg',
        'https://media.istockphoto.com/id/1071576354/photo/aerial-view-of-george-washington-bridge.jpg?s=612x612&w=0&k=20&c=PtrzCMTcZwV7pzLT-0CHjjs5aiXC8-mLR5jisUsd6JI='
    ]

    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        // <section>
        <>
            <div className='carousel_ambijent'>
                <h2 className='carousel_h2'>Locus Mosaico ambijenti</h2>

                <NavLink to='#' className='carousel_link'>

                    <span className='carousel_text'>Svi ambijenti</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='#000' d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </NavLink>

            </div>
            <motion.div ref={carousel} className='carousel-track' whileTap={{ cursor: "grabing" }}>
                <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                    {images.map(image => {
                        return (
                            <motion.div className='item' key={image}>
                                <img className='carousel_images' src={image} alt="" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </>
        // </section>
    )
}

export default Carousel