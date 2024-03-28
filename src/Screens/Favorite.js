import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import toast from "react-hot-toast"
import './styleScreen/Favorite.css'

const Favorite = () => {
    const { location } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    const [favoriteItems, setFavoriteItems] = useState()

    let showItems = () => {
        let tmp = []
        if (JSON.parse(localStorage.getItem('favorite')) != null) {
            tmp = [...JSON.parse(localStorage.getItem('favorite'))]
        }
        // console.log(tmp);
        setFavoriteItems(tmp)
    }
    useEffect(() => {
        showItems()
    }, [favoriteItems])

    const removeFromFavorite = (p) => {
        let tmp = []
        let removedArr = []
        if (JSON.parse(localStorage.getItem('favorite')) != null) {
            tmp = [...JSON.parse(localStorage.getItem('favorite'))]
        }
        removedArr = tmp.filter(el => el.id !== p.id)


        localStorage.setItem('favorite', JSON.stringify(removedArr))

        setFavoriteItems(tmp)
        toast.error(
            `Successfully removed product!`,
        )
    }
    // console.log(favoriteItems);

    return (
        <div className='favorite'>
            {
                favoriteItems !== undefined ?
                    favoriteItems.map(el => {
                        return (
                            <div key={el.id} className='card'>
                                <Link to={`/komadniNamestaj/${el.id}`}>
                                    <div className='div_img'>
                                        <img src={el.images[0]} alt="slika" />
                                    </div>
                                    <div className='cardContent'>
                                        <p className='border'>{el.name}</p>
                                        <p>{el.price} din</p>
                                    </div>
                                </Link>
                                <div onClick={() => removeFromFavorite(el)} className='trash'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                                </div>
                            </div>
                        )
                    })
                    :
                    <p>Prazno</p>
            }
        </div>
    )
}

export default Favorite