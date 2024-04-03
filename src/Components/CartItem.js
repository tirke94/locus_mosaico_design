import React, { useState } from 'react'

const CartItem = ({ product, onRemoveFromCart }) => {
    const [numOfProduct, setNumOfProduct] = useState(1)

    const plusBtn = () => {
        setNumOfProduct(prev => {
            return prev + 1
        })

    }
    const minusBtn = () => {
        if (numOfProduct > 1) {
            setNumOfProduct(prevState => {
                return prevState - 1
            })
        }

    }

    return (
        <div className='divCartCardItem'>
            <img
                src={product.images[0]}
                alt="slika itema"
                className='divCartCardItem_img'
            />
            <h4 className='divCartCardItem_name'>{product.name}</h4>
            <h4 className='divCartCardItem_name'>{product.species}</h4>
            <h4 className='divCartCardItem_price'>{product.price}din</h4>
            <button className='btnremoveFromCart' onClick={() => onRemoveFromCart()}>X</button>
        </div>
    )
}

export default CartItem