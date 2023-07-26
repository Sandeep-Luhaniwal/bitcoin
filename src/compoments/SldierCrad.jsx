import React from 'react'
import { Container } from 'react-bootstrap'
import rating_card_img from '../assets/imges/png/rating-card-img.png'
import Slider from "react-slick";
import star_1 from '../assets/imges/png/star_1.png'
import star_2 from '../assets/imges/png/star_2.png'


const SldierCrad = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },]

    };
    return (
        <div className='py-3 pb-5 py-md-4 py-lg-5 overflow-hidden'>
            <Container className='py-3 py-md-4 py-lg-5'>
                <h1 data-aos="zoom-in-right" data-aos-duration="1500" className='d-flex align-items-center justify-content-center ff_primary fs_3lg fw_regular color_secondary'>Наши площадки</h1>
                <p data-aos="flip-right" data-aos-duration="1500" className='ff_primary color_primary fw_regular fs_3md text-center ltr_spacing'>Каждый отзыв по-особенному  ценный для нас. Ведь для этого было <span className='d-xl-block'>проделано большой совместный путь. Успех состоит из доверие,</span> готовности к развитию и перемен.</p>
                <Slider {...settings} className='py-3 py-md-4 py-lg-5'>
                    <div className='px-2 px-sm-3 px-md-4 d-flex justify-content-center hoverCard'>
                        <div className='card' data-aos="fade-down" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">
                            <div className='d-flex align-items-center justify-content-between px-3 pt-4'>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={rating_card_img} alt="" />
                                    <div className='ms-2'>
                                        <p className='mb-0 color_white ff_primary fw_bold fs_2sm'>Али</p>
                                        <p className='mb-0 color_white ff_primary fw_regular fs_xs'>Узбекистан</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-1 pt-4'>
                                    <img src={star_1} alt="star" />
                                    <img src={star_1} alt="star" />
                                    <img src={star_1} alt="star" />
                                    <img src={star_1} alt="star" />
                                    <img src={star_2} alt="star" />
                                </div>
                            </div>
                            <div className='pt-3 pb-4'>
                                <p className='px-2 px-sm-3 px-lg-4 mx-3 color_white ff_primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
                            </div>
                        </div>
                    </div>
                    <div className='px-2 px-sm-3 px-md-4 d-flex justify-content-center'>
                        <div className='card' data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="center-center">
                            <div className='d-flex align-items-center justify-content-between px-3 pt-4'>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={rating_card_img} alt="" />
                                    <div className='ms-2'>
                                        <p className='mb-0 color_white ff_primary fw_bold fs_2sm'>Али</p>
                                        <p className='mb-0 color_white ff_primary fw_regular fs_xs'>Узбекистан</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-1 pt-4'>
                                    <img src={star_1} alt="star" />
                                    <img src={star_1} alt="star" />
                                    <img src={star_1} alt="star" />
                                    <img src={star_1} alt="star" />
                                    <img src={star_2} alt="star" />
                                </div>
                            </div>
                            <div className='pt-3 pb-4'>
                                <p className='px-2 px-sm-3 px-lg-4 mx-3 color_white ff_primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
                            </div>
                        </div>
                    </div>
                    <div className='px-2 px-sm-3 px-md-4 d-flex justify-content-center'>
                        <div className='card' data-aos="fade-down" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">
                            <div className='d-flex align-items-center justify-content-between px-3 pt-4'>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={rating_card_img} alt="" />
                                    <div className='ms-2'>
                                        <p className='mb-0 color_white ff_primary fw_bold fs_2sm'>Али</p>
                                        <p className='mb-0 color_white ff_primary fw_regular fs_xs'>Узбекистан</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-1 pt-4'>
                                    <img src={star_1} alt="star" />
                                    <img src={star_1} alt="star" />
                                    <img src={star_1} alt="star" />
                                    <img src={star_1} alt="star" />
                                    <img src={star_2} alt="star" />
                                </div>
                            </div>
                            <div className='pt-3 pb-4'>
                                <p className='px-2 px-sm-3 px-lg-4 mx-3 color_white ff_primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
                            </div>
                        </div>
                    </div>
                    <div className='px-2 px-sm-3 px-md-4 d-flex justify-content-center'>
                        <div className='card'>
                            <div className='d-flex align-items-center justify-content-between px-3 pt-4'>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={rating_card_img} alt="" />
                                    <div className='ms-2'>
                                        <p className='mb-0 color_white ff_primary fw_bold fs_2sm'>Али</p>
                                        <p className='mb-0 color_white ff_primary fw_regular fs_xs'>Узбекистан</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-1 pt-4'>
                                    <img src={star_1} alt="star" />
                                    <img src={star_1} alt="star" />
                                    <img src={star_1} alt="star" />
                                    <img src={star_1} alt="star" />
                                    <img src={star_2} alt="star" />
                                </div>
                            </div>
                            <div className='pt-3 pb-4'>
                                <p className='px-2 px-sm-3 px-lg-4 mx-3 color_white ff_primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
                            </div>
                        </div>
                    </div>
                    <div className='px-2 px-sm-3 px-md-4 d-flex justify-content-center'>
                        <div className='card'>
                            <div className='d-flex align-items-center justify-content-between px-3 pt-4'>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={rating_card_img} alt="" />
                                    <div className='ms-2'>
                                        <p className='mb-0 color_white ff_primary fw_bold fs_2sm'>Али</p>
                                        <p className='mb-0 color_white ff_primary fw_regular fs_xs'>Узбекистан</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-1 pt-4'>
                                    <img src={star_1} alt="star" />
                                    <img src={star_1} alt="star" />
                                    <img src={star_1} alt="star" />
                                    <img src={star_1} alt="star" />
                                    <img src={star_2} alt="star" />
                                </div>
                            </div>
                            <div className='pt-3 pb-4'>
                                <p className='px-2 px-sm-3 px-lg-4 mx-3 color_white ff_primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </Container>
        </div>
    )
}


export default SldierCrad