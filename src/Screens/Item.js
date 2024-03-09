import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../Utilis/Utilis.js'

const Item = () => {
    const params = useParams()
    const [product, setProduct] = useState(
        data.find((el) => el.id === params.id),
    )
    console.log(params);
    console.log(product);
    console.log('Hello from: ', window.location.href());
    return (
        <div>Item</div>
    )
}

export default Item