import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import maskImg_1 from '../assets/imges/png/Mask-group-1.png'
import maskImg_2 from '../assets/imges/png/Mask-group-2.png'
import businessman from '../assets/imges/png/businessman-man.png'
import { PlayIcon } from './Icon'
import ReactPlayer from 'react-player'
import video from '../assets/Video/video_20220722_005838.mp4'

const Bussinessman = () => {
    const [play, setPaused] = useState(false);
    return (
        <>
            <Container className='my-3 my-md-4 my-lg-5 overflow-hidden'>
                <Row>
                    <Col xl={7} className='d-md-flex mt-5'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <img className='h-551 w_100' src={businessman} alt="businessman" />
                        </div>
                        <div className='gap-5 d-flex justify-content-center py-4 py-md-0'>
                            <div className='position-relative d-flex justify-content-center h-473 w-235' data-aos='zoom-out-up' data-aos-duration='2000'>
                                {play ? <ReactPlayer className='w-100' url={video} controls={true} height={'459px'} width={'100%'} /> : <img className='w-100 mb-xl-5 mb-xxl-0 br_35' src={maskImg_1} alt="mask" />}
                                <div onClick={() => setPaused(!play)} className='position-absolute position cursor-poiner boxBtn d-flex justify-content-center align-items-center'>
                                    <PlayIcon />
                                </div>

                            </div>
                            <div className='position-relative d-flex justify-content-center d-none d-sm-block mt-md-78 h-473 w-235' data-aos='zoom-in' data-aos-duration='2000'>
                                <img className='w-100  br_35' src={maskImg_2} alt="mask" />
                                <div className='position-absolute position cursor-poiner boxBtn d-flex justify-content-center align-items-center'>
                                    <PlayIcon />
                                </div>
                            </div>
                        </div>
                        <div className='d-sm-none d-flex justify-content-center pb-4 '>
                            <div className='position-relative h-473 w-235 mt-md-5' data-aos='zoom-out-up' data-aos-duration='2000'>
                                <img className='w-100 br_35' src={maskImg_2} alt="mask" />
                                <div className='position-absolute position cursor-poiner boxBtn d-flex justify-content-center align-items-center'>
                                    <PlayIcon />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={5} className='d-flex flex-column justify-content-end ps-xl-4 pt-3 pt-md-4 pt-lg-0'>
                        <p className='ff_primary fs_3sm fw_bold color_secondary ltr_spacing'>Обучение?</p>
                        <h3 data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='ff_primary color_secondary fw_regular fs_lg ltr_spacing py-xl-2 py-xxl-3'><span className='fs_2lg d-block'>Конечно!</span> Индивидуальные уроки <span className='d-xl-block'>тем кто хочет научиться</span> инвестировать.</h3>
                        <p className='ff_primary fw_bold fs_3sm color_secondary pt-3'>Подробнее посмотрите на видео
                            <span className='ff_primary fw_regular fs_2sm color_secondary d-block'>Или напишите менеджеру</span></p>
                        <div className='mt-xl-3 mb-xl-4' data-aos="fade-down" data-aos-easing="ease" data-aos-duration="2000">
                            <button className='ff_primary coinbtn border-0 br_35 btn-p bg_dark color_white fs_2sm fw_regular ltr_spacing my-xl-2'>Написать</button>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Bussinessman