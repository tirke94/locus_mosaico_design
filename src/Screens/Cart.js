import React, { useEffect, useState } from 'react'
import CartItem from '../Components/CartItem'
import toast from "react-hot-toast"
import './styleScreen/Cart.css'
import { useNavigate, Link, useLocation } from 'react-router-dom'


let allCartItems = []
if (JSON.parse(localStorage.getItem('cart')) != null) {
    allCartItems = [...JSON.parse(localStorage.getItem('cart'))]
}

const Cart = () => {
    const navigate = useNavigate();

    const { location } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    const [isEmpty, setIsEmpty] = useState(allCartItems.length)
    const [adress, setAdress] = useState('')
    const [adressNumber, setAdressNumber] = useState()
    const [town, setTown] = useState('')
    const [township, setTownship] = useState('')
    const [phoneNumber, setPhoneNumber] = useState()
    const [napomena, setNapomena] = useState('')
    const [selectedOption, setSelectedOption] = useState("pouzecem")
    const [order, setOrder] = useState({})
    const [bought, setBought] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [showForm, setShowForm] = useState(true)

    const [total, setTotal] = useState(0)
    const calculateTotalAmount = () => {
        let total = 0
        allCartItems.forEach((el) => {
            total += +el.price
        })
        setTotal(total)
        return total
    }

    useEffect(() => {
        calculateTotalAmount()
    }, [])

    const removeFromCart = (product) => {
        let tmp = []
        let removedArr = []
        if (JSON.parse(localStorage.getItem('cart')) != null) {
            tmp = [...JSON.parse(localStorage.getItem('cart'))]
        }
        removedArr = tmp.filter(el => el.id !== product.id)
        localStorage.setItem('cart', JSON.stringify(removedArr))
        window.location.reload()
    }
    const deleteCartAfterBuying = () => {
        localStorage.removeItem('cart')
        allCartItems = []
    }
    const onValueChange = (event) => {
        setSelectedOption(event.target.value)
    }
    const formSubmit = (event) => {
        event.preventDefault();

        setOrder(() => {
            return {
                nacinPlacanja: selectedOption,
                adresa: adress,
                brojAdrese: adressNumber,
                gard: town,
                opstina: township,
                brojTelefona: phoneNumber,
                napomena: napomena
            }
        })
        setOpenModal(false)
        setShowForm(true)
        setBought(true)
        toast.success(`Porudzbina poslata!`)
        setTimeout(() => {
            setBought(false)
            deleteCartAfterBuying()
            window.location.reload()
        }, 5000)
        // console.log(order);
    }
    const Modal = () => {
        if (adress === '') {
            alert('Morate uneti adresu')
            return
        }
        if (adressNumber === undefined) {
            alert('Morate uneti broj adrese')
            return
        }
        if (town === '') {
            alert('Morate uneti grad')
            return
        }
        if (phoneNumber === '') {
            alert('Morate uneti broj telefona')
            return
        }
        setShowForm(false)
        setOpenModal(true)
    }
    const CloseModal = () => {
        setShowForm(true)
        setOpenModal(false)
    }

    return (
        <div className='cart'>
            {
                isEmpty ?
                    (
                        <>
                            <div className='divCartItems'>
                                <h2>Vasa korpa</h2>
                                {allCartItems.map(el => {
                                    return (
                                        <CartItem key={el.id} product={el} onRemoveFromCart={() => removeFromCart(el)} />
                                    )
                                })}
                            </div>
                            <div className='divCartTotal'>
                                {showForm &&
                                    <>
                                        <h3>Ukupno: {total}din.</h3>
                                        <p>Nacin placanja: </p>
                                        <div className='nacinPlacanja'>
                                            <input
                                                type="radio"
                                                className='radioBtn'
                                                name='nacinPlacanja'
                                                value="pouzecem"
                                                checked={selectedOption === "pouzecem"}
                                                onChange={onValueChange} />
                                            <label htmlFor="pouzecem" className='nacinPlacanjaLabel'>Pouzecem: </label>
                                        </div>
                                        <div className='nacinPlacanja'>
                                            <input
                                                type="radio"
                                                className='radioBtn'
                                                name='nacinPlacanja'
                                                value='online'
                                                checked={selectedOption === "online"}
                                                onChange={onValueChange}
                                            />
                                            <label htmlFor="online" className='nacinPlacanjaLabel'>Online: </label>
                                        </div>
                                        <div className='divInputsContent'>
                                            <div style={{ textAlign: 'left' }}>
                                                <p>Adresa isporuke:</p>
                                                <input type="text" placeholder='street...' className='adress' value={adress} onChange={(e) => setAdress(e.target.value)} />
                                                <input type="number" placeholder='num' className='adressNumber' value={adressNumber} onChange={(e) => setAdressNumber(e.target.value)} />
                                            </div>
                                            <div style={{ textAlign: 'left' }}>
                                                <p>Grad:</p>
                                                <input type="text" placeholder='Beograd' className='townInput' value={town} onChange={(e) => setTown(e.target.value)} />
                                            </div>
                                            <div style={{ textAlign: 'left' }}>
                                                <p>Opstina:</p>
                                                <input type="text" placeholder='Vozdovac' className='township' value={township} onChange={(e) => setTownship(e.target.value)} />
                                            </div>
                                            <div style={{ textAlign: 'left' }}>
                                                <p>Broj telefona:</p>
                                                <input type="number" placeholder='064 1234 567' className='phoneNumberInput' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                            </div>
                                            <div style={{ textAlign: 'left' }}>
                                                <p>Napomena</p>
                                                <input type="text" maxLength='100' className='napomena' value={napomena} onChange={(e) => setNapomena(e.target.value)} />
                                            </div>

                                        </div>
                                        <div
                                            className="cartBtn"
                                            onClick={Modal}
                                        >
                                            Nastavi
                                        </div>
                                    </>
                                }
                                {
                                    openModal &&
                                    <div className='divModal'>
                                        <p style={{ textAlign: 'left', marginBottom: '1rem' }}>Da li ste sigurni da zelite da nastavite sa kupovinom?</p>
                                        <p>Cena: {total} dinara</p>
                                        <p>Nacin placanja: {selectedOption}</p>
                                        <p>Adresa: {adress} {adressNumber}</p>
                                        <p>Grad: {town}, {township}</p>
                                        <p>Telefon: {phoneNumber}</p>
                                        <p>Napomena: {napomena}</p>
                                        <div>
                                            <button
                                                className="cartBtn"
                                                onClick={CloseModal}
                                            >
                                                Nazad
                                            </button>
                                            <button
                                                className="cartBtn submit"
                                                onClick={formSubmit}
                                            >
                                                Kupi
                                            </button>
                                        </div>
                                    </div>
                                }

                                {bought &&
                                    <p className='bought'>Hvala Vam na porudzbini! <br /> Vasa porudzbina bice na Vasoj adresi najkasnije za 60 dana</p>}
                            </div>
                        </>
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