import React, { useState } from 'react'
import './styleScreen/Cart.css'
import { useNavigate, Link } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate();

    const [isEmpty, setIsEmpty] = useState(true)

    return (
        <div className='cart'>
            {
                isEmpty ?
                    <div className='cartEmptyContent'>
                        <h2>Vasa korpa je trenutno prazna</h2>
                        <Link to={navigate(-1)} className='btnBack'>
                            Nazad na prodavnicu
                        </Link>
                    </div>
                    :
                    <div>
                        <p>proizvod</p>
                    </div>
            }
        </div>
    )
}

export default Cart