import React, { useState } from 'react'
import './styleScreen/Cart.css'
import { useNavigate, Link } from 'react-router-dom'


let allCartItems = []
if (JSON.parse(localStorage.getItem('cart')) != null) {
    allCartItems = [...JSON.parse(localStorage.getItem('cart'))]
}

const Cart = () => {
    const navigate = useNavigate();

    const [isEmpty, setIsEmpty] = useState(allCartItems.length)

    return (
        <div className='cart'>
            {
                isEmpty ?
                    (
                        <div className='cartEmptyContent'>
                            {console.log(allCartItems)}
                            <p>Lorem ipsum dolor sam!</p>
                        </div>
                    ) : (
                        <div className='cartEmptyContent'>
                            <h2>Vasa korpa je trenutno prazna</h2>
                            <Link to={navigate(-1)} className='btnBack'>
                                Nazad na prodavnicu
                            </Link>
                        </div>
                    )

            }
        </div>
    )
}

export default Cart