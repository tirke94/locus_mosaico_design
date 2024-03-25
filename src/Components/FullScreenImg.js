import React from 'react'
import { useLockBodyScroll } from '@uidotdev/usehooks'
import './FullScreenImg.css'



const FullScreenImg = ({ value, onNullCurrentImg }) => {
    useLockBodyScroll()
    return (
        <div className='mainFullScreeContainer' /*style={{ zIndex: '80', position: 'fixed', top: '0', bottom: '0', left: '0', right: '0', padding: '100px 250px' }}*/>
            <button onClick={onNullCurrentImg} /*style={{ zIndex: 100, width: '50px', height: '50px', textAlign: 'center', position: 'fixed', top: '100px', right: '250px', backgroundColor: 'white' }}*/>
                X
            </button>

            <div className='darkBackground' onClick={onNullCurrentImg} /*style={{ position: 'absolute', top: '0', left: "0", right: '0', bottom: '0', backgroundColor: 'black', opacity: '0.8' }}*/>
            </div>
            <img
                className='fullScreenImg'
                /*style={{ position: 'relative', zIndex: 99, width: '100%', height: '100%' }}*/
                src={value}
                alt="slika"
            />
        </div>
    )
}

export default FullScreenImg