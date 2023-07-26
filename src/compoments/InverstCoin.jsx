import React, { useState } from 'react'
import { Container, } from 'react-bootstrap'
import CoinImage1 from '../assets/imges/png/Inverst-Coin_1.png'
import CoinImage2 from '../assets/imges/png/Inverst-Coin_2.png'
import CoinImage3 from '../assets/imges/png/Inverst-Coin_3.png'
import SlideImage1 from '../assets/imges/png/Slide_img_1.png'
import SlideImage2 from '../assets/imges/png/Slide_img_2.png'
import SlideImage3 from '../assets/imges/png/Slide_img_3.png'
import Slider from 'react-slick'
import { PlayIcon } from './Icon'
import ReactPlayer from 'react-player'
import video from '../assets/Video/video_20220722_005838.mp4'

const InverstCoin = () => {
    var settingse = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 700,
        slidesToShow: 2.3,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2.2,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },]
    };
    const [play, setPaused] = useState(false);
    return (
        <div className='overflow-hidden'>
            <Container className=''>
                <h2 data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='text-center ff_primary fs_xl color_secondary fw_regular pt-40 pt-sm-60 pt-md-90 pt-lg-130 ltr_spacing'>Как “Invest Coin” работает? </h2>
                <p data-aos="flip-right" data-aos-easing="linear" data-aos-duration="1500" className='text-center ff_primary fs_3md color_secondary fw_regular pb-4 mb-0 mb-md-2 pt-3 pt-md-4 ltr_spacing'>Invest Coin - это команда оптыных инвесторов, аналитиков и программистов. <span className='d-xl-block'>Мы работаем на площадках криптовалют (и не только) уже более 4 года и</span> имеем конкурентоспособное портфолио. Все встречи, общения и <span className='d-xl-block'>договоренности с нашими партнерами (клиентами) проходят в прозрачной</span> форме.</p>
                <div className='justify-content-center d-sm-flex gap-lg-50 gap-sm-20 pt-3 pt-sm-4 py-md-5'>
                    <div className='d-flex justify-content-center'>
                        <div className='max-w-245 cursor-poiner cardHover' data-aos="fade-up" data-aos-duration="1500">
                            <div className='d-flex justify-content-center'><img src={CoinImage1} alt="Coin_1" /></div>
                            <h3 className='text-center ff_primary fw_bold color_secondary fs_3sm'>Надежность</h3>
                            <p className='text-center ff_primary color_primary fs_2sm fw_regular ltr_spacing'>Slate helps you see how
                                many more days you need
                                to work to reach your
                                financial goal.</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center pt-3 pt-sm-0'>
                        <div className='max-w-245 cursor-poiner cardHover' data-aos="fade-down" data-aos-duration="1000">
                            <div className='d-flex justify-content-center'><img src={CoinImage2} alt="Coin_1" /></div>
                            <h3 className='text-center ff_primary fw_bold color_secondary fs_3sm'>Опыт</h3>
                            <p className='text-center ff_primary color_primary fs_2sm fw_regular ltr_spacing'>Slate helps you see how
                                many more days you need
                                to work to reach your
                                financial goal.</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center d-none d-md-block'>
                        <div className='max-w-245 cursor-poiner cardHover' data-aos="fade-up" data-aos-duration="1500">
                            <div className='pb-3'>
                                <div className='d-flex justify-content-center'><img src={CoinImage3} alt="Coin_3" /></div>
                                <h3 className='text-center ff_primary fw_bold color_secondary fs_3sm'>Прозрачность</h3>
                                <p className='text-center ff_primary color_primary fs_2sm fw_regular ltr_spacing'>Slate helps you see how
                                    many more days you need
                                    to work to reach your
                                    financial goal.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center py-3 py-sm-4 pb-md-0 d-md-none'>
                    <div className='max-w-245  cardHover cursor-poiner' data-aos="fade-up" data-aos-duration="1500">
                        <div className='d-flex justify-content-center'><img src={CoinImage3} alt="Coin_1" /></div>
                        <h3 className='text-center ff_primary fw_bold color_secondary fs_3sm'>Надежность</h3>
                        <p className='text-center ff_primary color_primary fs_2sm fw_regular ltr_spacing '>Slate helps you see how
                            many more days you need
                            to work to reach your
                            financial goal.</p>
                    </div>
                </div>
            </Container>
            <Slider {...settingse} className='py-4 py-md-5'>
                <div className='p-xl-5 p-md-4 px-2 position-relative'>
                    <img className='w-100 br_35' src={SlideImage1} alt="" />
                    <div className='position-absolute position cursor-poiner boxBtn d-flex justify-content-center align-items-center'>
                        <PlayIcon />
                    </div>
                </div>
                <div className='p-xl-5 p-md-4 px-2 position-relative br_35'>
                    {play ? <ReactPlayer autoplay={true} muted={true} className={'p-md-4 px-2 br_35'} url={video} controls={true} height={'250px'} width={'100%'} /> : <img className='w-100 br_35' src={SlideImage2} alt="" /> }
                    <div onClick={() => setPaused(!play)} className='position-absolute position cursor-poiner boxBtn d-flex justify-content-center align-items-center'>
                        <PlayIcon />
                    </div>
                </div>
                <div className='p-xl-5 p-md-4 px-2 position-relative'>
                    <img className='w-100 br_35' src={SlideImage3} alt="" />
                    <div className='position-absolute position cursor-poiner boxBtn d-flex justify-content-center align-items-center'>
                        <PlayIcon />
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default InverstCoin