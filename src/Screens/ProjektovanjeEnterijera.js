import React, { useState, useEffect } from 'react'
import { dataEnterijer } from '../Utilis/DataEnterijer'
import { useLocation } from 'react-router-dom'
import './styleScreen/NamestajPoMeri.css'
import './styleScreen/Item.css'
import FullScreenImg from '../Components/FullScreenImg'


const ProjektovanjeEnterijera = () => {

    const { location } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])
    const [projektovanjeEnterijera, setProjektovanjeEnterijera] = useState(dataEnterijer)
    const [currentImg, setCurrentImg] = useState(null)

    const nullCurrentImg = () => {
        setCurrentImg(null)
    }

    return (
        <>
            <div className='section'>
                <div>
                    <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, est voluptatum. Dignissimos laborum accusantium quos ad quibusdam. Hic tempore accusamus fugit dolorem eum fuga consectetur, vitae repellendus doloribus porro voluptatibus laborum molestiae, animi repudiandae itaque quam neque. Corporis autem laboriosam, dignissimos asperiores eligendi ducimus, aspernatur reprehenderit doloribus vitae dolorum accusamus dolore. Consectetur nobis accusantium iste nam numquam tenetur unde laboriosam veniam id quam dolorum enim eius quis perferendis eum reprehenderit aperiam eos, a corrupti expedita placeat! Molestiae, libero! Quidem officia quia, dolore ea eligendi molestiae quo neque deleniti, amet iste debitis alias facere dignissimos aspernatur eum doloremque, voluptatum dolorum. Consequuntur, impedit enim. Saepe voluptatum aut consequatur quisquam tenetur quod, labore eius quibusdam commodi, corrupti, nostrum sequi aspernatur porro minima perferendis obcaecati sed repellendus neque harum tempore voluptates. Numquam illum incidunt nihil excepturi. Impedit, magni. Obcaecati excepturi expedita, consectetur delectus sapiente saepe enim labore rem mollitia molestias nostrum eius iste ut?</p>
                </div>
                {projektovanjeEnterijera.map(item => {
                    return (
                        <div className='card-item' key={item.id}>
                            <div onClick={() => {
                                setCurrentImg(item)

                            }} className='div-img'>
                                <div>
                                    <img className='item_img'
                                        src={item.images[0]}
                                        alt="slka namestaja" />
                                </div>
                            </div>
                            <div className='div-content'>
                                <p className='item-name'>{item.details}</p>
                            </div>
                        </div>

                    )
                })}
            </div>
            {currentImg &&
                <FullScreenImg value={currentImg.images[0]} onNullCurrentImg={nullCurrentImg} />
            }
        </>
    )
}

export default ProjektovanjeEnterijera