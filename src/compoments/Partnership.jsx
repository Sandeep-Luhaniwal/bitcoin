import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import bitcoin from '../assets/imges/png/bitcoin.png'
import litecoin from '../assets/imges/png/litcoin.png'
import tezos from '../assets/imges/png/tezos.png'
import ethereum from '../assets/imges/png/ethereum.png'
import chainLink from '../assets/imges/png/chainlink.png'
import ton from '../assets/imges/png/ton.png'



const Partnership = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 0,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        pouseonhover: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]

    };
    return (
        <>
            <Container className='py-30 py-sm-45 py-md-60 py-lg-80 position-relative overflow-hidden'>
                <h3 data-aos="zoom-out-down" data-aos-duration="2000" className='d-flex align-items-center justify-content-center ff_primary fs_xl fw_regular color_secondary'>Наши площадки</h3>
                <div className='d-flex align-items-center justify-content-center pt-3 pt-md-4' data-aos="zoom-out-right" data-aos-duration="2000">
                    <p className='ff_primary color_primary fw_regular mb-0 fs_3md text-center ltr_spacing'>Наш проект работает только с проверенными площадками для <span className='d-xl-block'>инвестиций, чтобы максимально снизить риски.</span></p>
                </div>
                <div className='py-30 py-sm-45 py-md-60 py-lg-80' data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="center-bottom">
                    <Slider {...settings} className='op-hover d-flex align-items-center'>
                        <div className='px-3 px-sm-4 d-flex justify-content-center'>
                            <img className='w-100 cursor-poiner ophover' src={bitcoin} alt="bitcoin" />
                        </div>
                        <div className='px-3 px-sm-4 d-flex justify-content-center'>
                            <img className='w-100 cursor-poiner ophover' src={litecoin} alt="bitcoin" />
                        </div>
                        <div className='px-3 px-sm-4 d-flex justify-content-center'>
                            <img className='w-100 cursor-poiner ophover' src={ton} alt="bitcoin" />
                        </div>
                        <div className='px-3 px-sm-4 d-flex justify-content-center'>
                            <img className='w-100 cursor-poiner ophover' src={ethereum} alt="bitcoin" />
                        </div>
                        <div className='px-3 px-sm-4 d-flex justify-content-center'>
                            <img className='w-100 cursor-poiner ophover' src={chainLink} alt="bitcoin" />
                        </div>
                        <div className='px-3 px-sm-4 d-flex justify-content-center'>
                            <img className='w-100 cursor-poiner ophover' src={tezos} alt="bitcoin" />
                        </div>
                        <div className='px-3 px-sm-4 d-flex justify-content-center'>
                            <img className='w-100 cursor-poiner ophover' src={ton} alt="bitcoin" />
                        </div>
                    </Slider>
                </div>
                <div className='timeline'></div>
            </Container>
        </>
    )
}


export default Partnership