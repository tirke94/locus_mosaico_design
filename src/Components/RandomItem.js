import React, { useState } from 'react'
import './RandomItem.css'

const RandomItem = ({ data }) => {


    const [items, setItems] = useState(data)

    const randomItems = []
    for (let i = 0; i < 8; i++) {
        const r = items[Math.floor((Math.random() * items.length))];
        randomItems.push(r)
    }
    console.log(randomItems);


    const addToCart = () => {
        console.log('Added to cart');
    }

    return (
        <div className='section_items'>
            <h1>Preporuka</h1>
            <div className='show_items'>
                {randomItems.map(item => {
                    return (
                        <div className='card_item' key={item.id}>
                            <div className='div_img'>
                                <img className='item_img' src={require("../Assets/Komoda1.jpg")} alt="" />
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