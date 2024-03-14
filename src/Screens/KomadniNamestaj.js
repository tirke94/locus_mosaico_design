import React, { useState } from 'react'
import './styleScreen/komadniNamestaj.css'
import { data } from '../Utilis/Utilis.js'
import { Link } from 'react-router-dom'

const KomadniNamestaj = () => {

    const [allFurnitures, setAllFurnitures] = useState(true)
    const [komadniNamestaj, setKomadniNamestaj] = useState(data)
    const [nizZaIspis, setNizZaIspis] = useState([])

    const [cenaOd, setCenaOd] = useState('')
    const [cenaDo, setCenaDo] = useState('')

    const stolice = []
    const plakari = []
    const police = []
    const trpezarijskiSto = []
    const dnevnaSobaSto = []
    const nocniSto = []
    const radniSto = []
    const komode = []
    const cipelarnici = []

    const addToCart = () => {
        console.log('Added to cart');
    }

    data.forEach(el => {
        if (el.species === 'stolica') {
            stolice.push(el)
        }
        if (el.species === 'plakar') {
            plakari.push(el)
        }
        if (el.species === 'polica') {
            police.push(el)
        }
        if (el.species === 'trpezarijski_sto') {
            trpezarijskiSto.push(el)
        }
        if (el.species === 'dnevna_soba_sto') {
            dnevnaSobaSto.push(el)
        }
        if (el.species === 'nocni_sto') {
            nocniSto.push(el)
        }
        if (el.species === 'radni_sto') {
            radniSto.push(el)
        }
        if (el.species === 'komode') {
            komode.push(el)
        }
        if (el.species === 'cipelarnik') {
            cipelarnici.push(el)
        }
    })


    const onKomadniNamestaj = () => {
        setAllFurnitures(true)
    }
    const onStolice = () => {
        setNizZaIspis(stolice)
        setAllFurnitures(false)
    }
    const onPlakari = () => {
        setNizZaIspis(plakari)
        setAllFurnitures(false)
    }
    const onPolice = () => {
        setNizZaIspis(police)
        setAllFurnitures(false)
    }
    const onTrpezarijskiStolovi = () => {
        setNizZaIspis(trpezarijskiSto)
        setAllFurnitures(false)
    }
    const onDnevnaSobaStolovi = () => {
        setNizZaIspis(dnevnaSobaSto)
        setAllFurnitures(false)
    }
    const onNocniStolovi = () => {
        setNizZaIspis(nocniSto)
        setAllFurnitures(false)
    }
    const onRadniStolovi = () => {
        setNizZaIspis(radniSto)
        setAllFurnitures(false)
    }
    const onKomode = () => {
        setNizZaIspis(komode)
        setAllFurnitures(false)
    }
    const onCipelarnici = () => {
        setNizZaIspis(cipelarnici)
        setAllFurnitures(false)
    }

    const onCenaOd = (e) => {
        setCenaOd(e.target.value)
    }
    const onCenaDo = (e) => {
        setCenaDo(e.target.value)
    }
    const filterPrice = () => {
        if (+cenaOd === 0 && +cenaDo === 0) {
            setAllFurnitures(true)
            return
        }
        if (+cenaOd > 0) {
            if (+cenaOd > +cenaDo) {
                console.log("Err, drugo polje mora da sadrzi cenu vece nego prvo polje");
                return
            }
            if (+cenaDo >= +cenaOd) {
                setNizZaIspis(komadniNamestaj.filter(el => el.price >= cenaOd && el.price <= cenaDo))
                console.log(komadniNamestaj.filter(el => el.price >= cenaOd && el.price <= cenaDo));
                setAllFurnitures(false)
                return
            }

            setNizZaIspis(komadniNamestaj.filter(el => el.price >= cenaOd))
            setAllFurnitures(false)
        }
        if (+cenaOd === 0 && +cenaDo > 0) {
            setNizZaIspis(komadniNamestaj.filter(el => el.price <= cenaDo))
            console.log(komadniNamestaj.filter(el => el.price <= cenaDo));
            setAllFurnitures(false)
        }
    }

    return (
        <div className='section_komadni_namestaj'>
            <h1>KomadniNamestaj</h1>
            <div className='divFlex'>
                <div className='filters'>
                    <h2>Kategorije</h2>
                    <div onClick={onKomadniNamestaj}>
                        <p>Svi komadni namestaji</p>
                        <span>({komadniNamestaj.length})</span>
                    </div>
                    <div onClick={onStolice}>
                        <p>Stolice</p>
                        <span>({stolice.length})</span>
                    </div>
                    <div onClick={onPlakari}>
                        <p>Plakari</p>
                        <span>({plakari.length})</span>
                    </div>
                    <div onClick={onPolice}>
                        <p>Police</p>
                        <span>({police.length})</span>
                    </div>
                    <div onClick={onTrpezarijskiStolovi}>
                        <p>Trpezarijski stolovi</p>
                        <span>({trpezarijskiSto.length})</span>
                    </div>
                    <div onClick={onDnevnaSobaStolovi}>
                        <p>Stolovi za dnevnu sobu</p>
                        <span>({dnevnaSobaSto.length})</span>
                    </div>
                    <div onClick={onNocniStolovi}>
                        <p>Nocni stolovi</p>
                        <span>({nocniSto.length})</span>
                    </div>
                    <div onClick={onRadniStolovi}>
                        <p>Radni stolovi</p>
                        <span>({radniSto.length})</span>
                    </div>
                    <div onClick={onKomode}>
                        <p>Komode</p>
                        <span>({komode.length})</span>
                    </div>
                    <div onClick={onCipelarnici}>
                        <p>Cipelarnici</p>
                        <span>({cipelarnici.length})</span>
                    </div>
                    <h2>Filtriraj po ceni</h2>
                    <section className='cena_filter'>
                        <fieldset>
                            <legend>Od (RSD)</legend>
                            <input type="number" className='inputPrice' value={cenaOd} onChange={onCenaOd} />
                        </fieldset>
                        <fieldset>
                            <legend>Do (RSD)</legend>
                            <input type="number" className='inputPrice' value={cenaDo} onChange={onCenaDo} />
                        </fieldset>
                        <button onClick={filterPrice}>Filter</button>
                    </section>
                </div>
                <div className='content'>
                    <div className='show_items'>
                        {allFurnitures ? komadniNamestaj.map(item => {

                            return (

                                <div className='card_item' key={item.id}>
                                    <div className='div_img'>
                                        <Link to={`/komadniNamestaj/${item.id}`}>
                                            <img className='item_img'
                                                src={item.images[0]}
                                                alt="slka namestaja"
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
                        })
                            : nizZaIspis.map(item => {
                                return (
                                    <div className='card_item' key={item.id}>
                                        <div className='div_img'>
                                            <img className='item_img'
                                                src={item.images[0]}
                                                alt="slika namestaja"
                                                onMouseOver={e => e.currentTarget.src = `${item.images[1]}`}
                                                onMouseOut={e => e.currentTarget.src = `${item.images[0]}`} />
                                        </div>
                                        <div className='div_content'>
                                            <p className='item_name'>{item.name}</p>
                                            <p className='item_price'>{item.price} din</p>
                                            <button onClick={addToCart} className='add_to_cart'>Dodaj u korpu</button>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KomadniNamestaj