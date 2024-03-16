import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { data } from '../Utilis/Utilis.js'
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styleScreen/Item.css'


let arrFromLocalStorage = []
if (JSON.parse(localStorage.getItem('favorite')) !== null) {
    arrFromLocalStorage = JSON.parse(localStorage.getItem('favorite'))
}
console.log(arrFromLocalStorage)

const Item = () => {
    const params = useParams()
    const [product, setProduct] = useState(
        data.find((el) => +el.id === +params.id)
    )
    const [activeIndex, setActiveIndex] = useState(0)
    const [btnOpis, setBtnOpis] = useState(true)
    const [btnMoreInfo, setBtnMoreInfo] = useState(false)
    const [numItems, setNumItems] = useState(1)

    const sugestionArr = data.filter(el => el.species === product.species)
    const filtredSugestionArr = sugestionArr.filter(item => item.id !== product.id).splice(0, 4)
    ////////////////////////////////////
    // localStorage testing

    const [arr, setArr] = useState(arrFromLocalStorage)




    ///////////////////////////////////

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0
        } else if (newIndex >= product.images.length) {
            newIndex = product.images.length - 1
        }
        setActiveIndex(newIndex)
    }
    const numberOfProduct = (el) => {
        if (el.target.value < 1) {
            return numItems === 1
        }
        setNumItems(el.target.value)
    }
    const addToCart = () => {
        console.log('Added to cart');
    }


    return (
        <div className='product'>
            <div className='itemDetails'>
                <div className='carousel'>
                    <div className='inner'
                        style={{
                            transform: `translate(-${activeIndex * 100}%)`
                        }}
                    >
                        {product.images.map(item => {
                            return (
                                <div key={Math.random()} className='carousel-item'>
                                    <img className='carousel-img' src={item} alt="" />
                                </div>
                            )
                        })}
                    </div>

                    <button
                        className='button-arrow leftArr'
                        onClick={() => {
                            updateIndex(activeIndex - 1)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                    </button>
                    <div className='carousel-buttons'>
                        <div className='indicators'>
                            {product.images.map((item, index) => {
                                return (
                                    <button
                                        key={Math.random()}
                                        className='indicator-buttons'
                                        onClick={() => {
                                            updateIndex(index)
                                        }}
                                    >
                                        <img className={`indicator-images ${index === activeIndex ? "activeImg" : "inactiveImg"}`} src={item} alt="" />
                                        {/* <svg className={`${index === activeIndex ? "indicator-symbol-active" : "indicator-symbol"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg> */}
                                    </button>
                                )
                            })}

                        </div>
                    </div>
                    <button
                        className='button-arrow rightArr'
                        onClick={() => {
                            updateIndex(activeIndex + 1)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                    </button>

                </div>
                <div className='detailsSection'>
                    <p className='species'>{product.species}</p>
                    <h2>{product.name}</h2>
                    <p className='price'>{product.price} din.</p>
                    <div>
                        <input type="number" id='numItems' value={numItems} onChange={(el) => numberOfProduct(el)} />
                        <button className='addToCartBtn'>Dodaj u korpu</button>
                    </div>
                </div>
            </div>
            <div className='additional-information'>
                <div>
                    <button
                        onClick={() => {
                            setBtnOpis(!btnOpis)
                            setBtnMoreInfo(false)
                        }}
                        className={`additional-buttons ${btnOpis && 'showAdditionalInfo btnOpis'}`}>
                        Opis
                    </button>
                    <button
                        onClick={() => {
                            setBtnMoreInfo(!btnMoreInfo)
                            setBtnOpis(false)
                        }}
                        className={`additional-buttons ${btnMoreInfo && 'showAdditionalInfo btnMore'}`}>
                        Dodatne informacije
                    </button>
                </div>
                <hr />
                {
                    btnOpis &&
                    <div className='additional-div-opis'>
                        <p className='description'>
                            {product.description}
                        </p>
                        <p className='description'>*{product.additional_information}</p>
                    </div>
                }
                {
                    btnMoreInfo &&
                    <div className='additional-div-moreInfo'>
                        <div>
                            <p style={{ padding: '5px 0', paddingLeft: '2rem', borderTop: '1px dotted black', borderBottom: '1px dotted black', }}>
                                <span style={{ display: 'inline-block', width: '140px', fontSize: '1.3rem', fontWeight: 'bold', marginRight: '2rem' }}>Dimenzije</span>
                                {
                                    product.size.map(item => {
                                        return (
                                            <span style={{ margin: '5px', fontSize: '1.3rem' }}>{item.width} x {item.height} x {item.depth} cm,</span>
                                        )
                                    })
                                }
                            </p>
                        </div>
                        <div>
                            <p style={{ padding: '5px 0', paddingLeft: '2rem', borderBottom: '1px dotted black', }}>
                                <span style={{ display: 'inline-block', width: '140px', fontSize: '1.3rem', fontWeight: 'bold', marginRight: '2rem' }}>Materijal</span>
                                {
                                    product.materials.map(item => {
                                        return (
                                            <span style={{ margin: '5px', fontSize: '1.3rem' }}>{item}</span>
                                        )
                                    })
                                }
                            </p>
                        </div>
                        <div>
                            <p style={{ padding: '5px 0', paddingLeft: '2rem', borderBottom: '1px dotted black', }}>
                                <span style={{ display: 'inline-block', width: '140px', fontSize: '1.3rem', fontWeight: 'bold', marginRight: '2rem' }}>Colors</span>
                                {
                                    product.colors.map(item => {
                                        return (
                                            <span style={{ margin: '5px', fontSize: '1.3rem' }}>{item},</span>
                                        )
                                    })
                                }
                            </p>
                        </div>
                        <div>
                            <p style={{ padding: '5px 0', borderBottom: '1px dotted black' }}>
                                <span style={{ marginLeft: '2rem', display: 'inline-block', width: '140px', fontSize: '1.3rem', fontWeight: 'bold', marginRight: '2rem' }}>Rok isporuke</span>
                                <span style={{ margin: '5px', fontSize: '1.3rem' }}>60 dana</span>
                            </p>
                        </div>
                    </div>
                }
            </div>
            <div className='sugestionSection'>

                <h2>Mozda ce vam se svideti</h2>

                <div className='sugestionItems'>
                    {
                        filtredSugestionArr.map(item => {
                            return (
                                <div className='sugestionItems-card' key={item.id}>
                                    <button onClick={() => setProduct(item)}>
                                        <Link to={`/komadniNamestaj/${item.id}`} >
                                            <img
                                                src={item.images[0]}
                                                alt="slika namestaja"
                                                onMouseOver={e => e.currentTarget.src = `${item.images[1]}`}
                                                onMouseOut={e => e.currentTarget.src = `${item.images[0]}`}
                                            />
                                        </Link>
                                    </button>
                                    <p style={{ fontSize: '1.2rem' }}>{item.name}</p>
                                    <p style={{ fontSize: '1.3rem', fontWeight: '600', letterSpacing: '1px' }}>{item.price} din</p>
                                    <button onClick={addToCart} className='add_to_cart'>Dodaj u korpu</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div>
                <button onClick={() => {

                    setArr((prevState) => {
                        return [...prevState, { product }]
                    })
                    // arrFromLocalStorage.push(product)
                    console.log(product);
                    localStorage.setItem('favorite', JSON.stringify(arr))
                    console.log(arr);

                }}>Add to ls</button>
            </div>
        </div>
    )
}

export default Item