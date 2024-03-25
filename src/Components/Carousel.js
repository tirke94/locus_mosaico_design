import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Carousel.css'
import { NavLink } from 'react-router-dom'

const Carousel = () => {

    const images = [
        'https://mermeta.rs/wp-content/uploads/2019/12/mermeta-uredjenje-enterijera-beograd14.jpg',
        'https://mermeta.rs/wp-content/uploads/2019/12/mermeta-uredjenje-enterijera-beograd6.jpg',
        'https://bekostyle.com/wp-content/uploads/2021/10/5-1024x725.jpg',
        'https://www.enterijer.com/wp-content/uploads/2019/10/moderna-dnevna-soba.jpg',
        'https://www.dizajnenterijera.rs/wp-content/uploads/2019/03/beograd-na-vodi-enterijer-sonja-brstina-25.jpg',
        'https://moja4zida.rs/wp-content/uploads/2023/03/dnevna-novo1.png',
        'https://www.enterijer.com/wp-content/uploads/2019/10/enterijer-stana-dedinje.jpg',
        'https://www.lineamilanovic.com/wp-content/uploads/2021/12/beograd-na-vodi-stan-apartman-opremanje-izdavanje-lineamilanovic-900x600.jpg',
        'https://www.lineamilanovic.com/wp-content/uploads/2020/07/Dizajn-enterijera-vile-Beograd-900x600.jpg',
        'https://dizajn-enterijera.rs/wp-content/uploads/2021/02/Familily-home-living-room-design-2-750x499.jpg',
        'https://studioarhic.rs/images/projects/01_enterijer_butik_obuce_trznicentar_usce/projekat_enterijera_u_stilu_neoklasicizma_00.jpg'
    ]

    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
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
    )
}

export default Carousel