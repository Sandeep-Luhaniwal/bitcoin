import React from 'react'
import reloder_img from '../assets/imges/png/Bitcoin.svg.png'

const Preloder = () => {
    return (
        <>
            <div className='min-vh-100 d-flex justify-content-center align-items-center bg_primary position-fixed w-100 top-0 z-3 start-0' id='preloader'>
                <img className='preloderImg' src={reloder_img} alt="logo" />
            </div >
        </>
    )
}

export default Preloder