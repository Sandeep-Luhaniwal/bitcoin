import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Cardcoin = () => {
    return (
        <>
            <section className='bg_secondary'>
                <Container className='py-lg-120 py-md-90 py-sm-60 py-30 overflow-hidden' id='about'>
                    <h2 data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='ff_primary fw_regular fs_xl color_white text-center'>Инвестиции</h2>
                    <p data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='fs_3md ff_primary fw_regular color_white text-center ltr_spacing'>Самые оптимальные варианты инвестиций.  Каждый найдет свой путь и <span className='d-xl-block'>начнет уверенно шагать по нему.</span></p>
                    <Row className='pt-5'>
                        <Col className='d-flex justify-content-center align-items-center min-h-690' data-aos="zoom-in-up" data-aos-duration="2000">
                            <div className='bg_white w-335 br_10 bg planCard' >
                                <div className='d-flex justify-content-between flex-column min-h-610 p-40' >
                                    <div>
                                        <h5 className='white ff_primary fw_blod fs_3sm color_secondary mb-0 text-center'>FREE</h5>
                                        <p className='white ff_primary color_primary fs_sm fw_regular text-center mb-0'>Organize across all <span className='d-block'>apps by hand</span></p>
                                        <div className='d-flex align-items-center justify-content-center mb-0'>
                                            <p className='white ff_primary fw_bold fs_3xl color_secondary mb-0 text-center'>0</p>
                                            <span className='white ps-2 ff_primary fw_bold color_secondary fs_3sm mb-0'>$<span className='white d-block ff_primary mb-0 color_primary fs_sm fw_regular'>Per Month</span></span>
                                        </div>
                                    </div>
                                    <ul className='mb-0 ps-0 py-2'>
                                        <li className='white ff_primary color_primary fs_3xs ltr_spacing fw_regular text-center mb-0'>Pricing Feature</li>
                                        <li className='white ff_primary color_primary fs_3xs ltr_spacing fw_regular text-center mb-0 pt-20'>Pricing Feature</li>
                                        <li className='white ff_primary color_primary fs_3xs ltr_spacing fw_regular text-center mb-0 pt-20'>Pricing Feature</li>
                                        <li className='white ff_primary color_primary fs_3xs ltr_spacing fw_regular text-center mb-0 pt-20'>Pricing Feature</li>
                                        <li className='white ff_primary color_primary fs_3xs ltr_spacing fw_regular text-center mb-0 pt-20'>Pricing Feature</li>
                                    </ul>
                                    <div className='text-center'>
                                        <button className='ff_primary border-0 w-255 plancoinbtn br_35 py-3 bg_dark color_white fs_2sm fw_regular ltr_spacing'>Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className='mt-5 mt-md-0 d-flex justify-content-center align-items-center min-h-690' data-aos="zoom-in-down" data-aos-duration="2000">
                            <div className='bg_white w-335 br_10 bg planCard'>
                                <div className='d-flex justify-content-between flex-column min-h-610  p-40'>
                                    <div>
                                        <h5 className='white ff_primary fw_blod fs_3sm color_secondary mb-0 text-center'>STANDARD</h5>
                                        <p className='white ff_primary color_primary fs_sm fw_regular text-center mb-0'>Organize across all <span className='d-block'>apps by hand</span></p>
                                        <div className='d-flex align-items-center justify-content-center mb-0'>
                                            <p className='white ff_primary fw_bold fs_3xl color_secondary mb-0 text-center'>10</p>
                                            <span className='ps-2 white ff_primary fw_bold color_secondary fs_3sm mb-0'>$<span className='white d-block ff_primary mb-0 color_primary fs_sm fw_regular'>Per Month</span></span>
                                        </div>
                                    </div>
                                    <ul className='mb-0 ps-0 py-2'>
                                        <li className='white ff_primary color_primary fs_3xs ltr_spacing fw_regular text-center mb-0'>Pricing Feature</li>
                                        <li className='white ff_primary color_primary fs_3xs ltr_spacing fw_regular text-center mb-0 pt-20'>Pricing Feature</li>
                                        <li className='white ff_primary color_primary fs_3xs ltr_spacing fw_regular text-center mb-0 pt-20'>Pricing Feature</li>
                                        <li className='white ff_primary color_primary fs_3xs ltr_spacing fw_regular text-center mb-0 pt-20'>Pricing Feature</li>
                                        <li className='white ff_primary color_primary fs_3xs ltr_spacing fw_regular text-center mb-0 pt-20'>Pricing Feature</li>
                                    </ul>
                                    <div className='text-center'>
                                        <button className='ff_primary plancoinbtn border-0 br_35 w-255 py-3 bg_dark color_white fs_2sm fw_regular ltr_spacing'>Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className='mt-5 mt-xl-0 d-flex justify-content-center align-items-center min-h-690' data-aos="zoom-in-up" data-aos-duration="2000">
                            <div className='bg_white w-335 br_10 bg planCard'>
                                <div className='d-flex justify-content-between flex-column min-h-610  p-40'>
                                    <div>
                                        <h5 className='white ff_primary fw_blod fs_3sm color_secondary mb-0 text-center'>BUSINESS</h5>
                                        <p className='white ff_primary color_primary fs_sm fw_regular text-center mb-0'>Organize across all <span className='d-block'>apps by hand</span></p>
                                        <div className='d-flex align-items-center justify-content-center mb-0'>
                                            <p className='white ff_primary fw_bold fs_3xl color_secondary mb-0 text-center'>99</p>
                                            <span className='white ps-2 ff_primary fw_bold color_secondary fs_3sm mb-0'>$<span className='white d-block ff_primary mb-0 color_primary fs_sm fw_regular'>Per Month</span></span>
                                        </div>
                                    </div>
                                    <ul className='mb-0 ps-0 py-2'>
                                        <li className='white ff_primary color_primary fs_3xs ltr_spacing fw_regular text-center mb-0'>Pricing Feature</li>
                                        <li className='white ff_primary color_primary fs_3xs ltr_spacing fw_regular text-center mb-0 pt-20'>Pricing Feature</li>
                                        <li className='white ff_primary color_primary fs_3xs ltr_spacing fw_regular text-center mb-0 pt-20'>Pricing Feature</li>
                                        <li className='white ff_primary color_primary fs_3xs ltr_spacing fw_regular text-center mb-0 pt-20'>Pricing Feature</li>
                                        <li className='white ff_primary color_primary fs_3xs ltr_spacing fw_regular text-center mb-0 pt-20'>Pricing Feature</li>
                                    </ul>
                                    <div className='text-center'>
                                        <button className='ff_primary plancoinbtn border-0 br_35 py-3 w-255 bg_dark color_white fs_2sm fw_regular ltr_spacing'>Order Now</button>
                                    </div>
                               </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Cardcoin