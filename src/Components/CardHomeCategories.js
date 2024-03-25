import React from 'react'
import { NavLink } from 'react-router-dom'
import './HomeCategories.css'

const CardHomeCategories = ({ type, background }) => {
    return (
        <>
            <div className='categoriesCard' style={{ backgroundImage: "url(" + background + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <NavLink to='/komadniNamestaj' className='more_link'>
                    <h3>{type}</h3>
                    <div>
                        <p>
                            Vise
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='#fff' d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                        </p>
                    </div>
                </NavLink>
            </div>
            <div className='categoriesCard' style={{ backgroundImage: 'url(https://www.stildekor.design/wp-content/uploads/2018/09/kuhinje-po-meri-novi-sad-2-2.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <NavLink to='/namestajPoMeri' className='more_link'>
                    <h3>Namestaj po meri</h3>
                    <div>
                        <p>
                            Vise
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='#fff' d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                        </p>
                    </div>
                </NavLink>
            </div>
            <div className='categoriesCard' style={{ backgroundImage: 'url(https://moja4zida.rs/wp-content/uploads/2023/03/dnevna-novo1.png)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <NavLink to='/projektovanjeEnterijera' className='more_link'>
                    <h3>Projektovanje Enterijera</h3>
                    <div>
                        <p>
                            Vise
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='#fff' d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                        </p>
                    </div>
                </NavLink>
            </div>
        </>
    )
}

export default CardHomeCategories