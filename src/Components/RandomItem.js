import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './RandomItem.css'

const RandomItem = ({ data }) => {


    const [items, setItems] = useState(data)

    const randomItems = []
    let uniqueArr = []

    for (let i = 0; i < items.length; i++) {
        const r = items[Math.floor((Math.random() * items.length))];

        randomItems.push(r)
        let testarr = Array.from(new Set(randomItems))
        uniqueArr = testarr.splice(0, 8)

    }

    const addToCart = () => {
        console.log('Added to cart');
    }

    return (
        <div className='section_items'>
            <h1>Preporuka</h1>
            <div className='show_items'>
                {uniqueArr.map(item => {
                    return (
                        <div className='card_item' key={item.id}>
                            <div className='div_img'>
                                <Link to={`/komadniNamestaj/${item.id}`}>
                                    <img className='item_img'
                                        src={item.images[0]}
                                        alt="sliaka namestaja"
                                        onMouseOver={e => e.currentTarget.src = `${item.images[1]}`}
                                        onMouseOut={e => e.currentTarget.src = `${item.images[0]}`} />
                                </Link>
                            </div>
                            <div className='div_content'>
                                <p className='item_name'>{item.name}</p>
                                <p className='item_price'>{item.price} din</p>
                                <button onClick={addToCart} className='add_to_cart'>Dodaj u korpu</button>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RandomItem