import React, { useEffect, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom';
import toast from "react-hot-toast"
import { data } from '../Utilis/Utilis.js'
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styleScreen/Item.css'


const Item = () => {
    const { location } = useLocation()


    const params = useParams()
    const [product, setProduct] = useState(
        data.find((el) => +el.id === +params.id)
    )
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location, product])
    const [activeIndex, setActiveIndex] = useState(0)
    const [btnOpis, setBtnOpis] = useState(true)
    const [btnMoreInfo, setBtnMoreInfo] = useState(false)
    const [numItems, setNumItems] = useState(1)

    const sugestionArr = data.filter(el => el.species === product.species)
    const filtredSugestionArr = sugestionArr.filter(item => item.id !== product.id).splice(0, 4)
    ////////////////////////////////////
    // localStorage testing

    const [arr, setArr] = useState([])
    const [cartArr, setCartArr] = useState([])
    const [includeFavorite, setIncludeFavorite] = useState(false)


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

    //favoriteItems
    const addToFavorite = () => {
        let tmp = []
        if (JSON.parse(localStorage.getItem('favorite')) != null) {
            tmp = [...JSON.parse(localStorage.getItem('favorite'))]
        }
        if (tmp.findIndex(el => el.id == product.id) == -1) {
            tmp.push(product)
            localStorage.setItem('favorite', JSON.stringify(tmp))
        }
        setArr(tmp)
        toast.success(`Successfully added product!`)
    }

    const removeFromFavorite = () => {
        let tmp = []
        let removedArr = []
        if (JSON.parse(localStorage.getItem('favorite')) != null) {
            tmp = [...JSON.parse(localStorage.getItem('favorite'))]
        }
        removedArr = tmp.filter(el => el.id !== product.id)


        localStorage.setItem('favorite', JSON.stringify(removedArr))

        setArr(tmp)
        toast.error(`Successfully removed product!`,)
    }
    let showStar = () => {
        let tmp = []
        if (JSON.parse(localStorage.getItem('favorite')) != null) {
            tmp = [...JSON.parse(localStorage.getItem('favorite'))]
        }
        if (tmp.find(el => el.id === product.id)) {
            console.log(true);
            setIncludeFavorite(true)
        } else {
            console.log(false);
            setIncludeFavorite(false)
        }
    }
    useEffect(() => {
        showStar()
    }, [arr, product])

    //add to cart
    const addToCart = () => {
        let tmpCart = []
        if (JSON.parse(localStorage.getItem('cart')) != null) {
            tmpCart = [...JSON.parse(localStorage.getItem('cart'))]
            if (tmpCart.find(el => el.id === product.id)) {
                toast.error(
                    `Allready added product!`,
                )
                return
            }
        }
        if (tmpCart.findIndex(el => el.id == product.id) == -1) {
            tmpCart.push(product)
            localStorage.setItem('cart', JSON.stringify(tmpCart))
        }
        setCartArr(tmpCart)
        toast.success(`Successfully added product!`)
        setTimeout(() => {
            window.location.reload()
        }, 3000);
        // window.location.reload()
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
                    {
                        includeFavorite ?
                            <div className='iconStar' onClick={removeFromFavorite}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill='#ffbf00' d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                            </div>
                            :
                            <div className='iconStar' onClick={addToFavorite}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill='#ffbf00' d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                            </div>
                    }
                    <p className='species'>{product.species}</p>
                    <h2>{product.name}</h2>
                    <p className='price'>{product.price} din.</p>
                    <div>
                        <input type="number" id='numItems' value={numItems} onChange={(el) => numberOfProduct(el)} />
                        <button onClick={addToCart} className='addToCartBtn'>Dodaj u korpu</button>
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
                            <p className='aditional-pMain'>
                                <span className='additionalHeader'>Dimenzije</span>
                                {
                                    product.size.map(item => {
                                        return (
                                            <span className='aditionalText'>{item.width} x {item.height} x {item.depth} cm,</span>
                                        )
                                    })
                                }
                            </p>
                        </div>
                        <div>
                            <p className='aditional-pMain' style={{ borderTop: 'none' }}>
                                <span className='additionalHeader'>Materijal</span>
                                {
                                    product.materials.map(item => {
                                        return (
                                            <span className='aditionalText'>{item}</span>
                                        )
                                    })
                                }
                            </p>
                        </div>
                        <div>
                            <p className='aditional-pMain' style={{ borderTop: 'none' }}>
                                <span className='additionalHeader'>Colors</span>
                                {
                                    product.colors.map(item => {
                                        return (
                                            <span className='aditionalText'>{item},</span>
                                        )
                                    })
                                }
                            </p>
                        </div>
                        <div>
                            <p className='aditional-pMain' style={{ borderTop: 'none' }}>
                                <span className='additionalHeader'>Rok isporuke</span>
                                <span className='aditionalText'>60 dana</span>
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
                                        <Link className='l' to={`/komadniNamestaj/${item.id}`} >
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
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Item